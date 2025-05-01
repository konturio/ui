# ADR 0002: Detailed Build System Workflow Implementation

**Status:** Proposed

## Context

1. Detailed analysis of current system workflows
2. Comprehensive implementation plan for PNPM-based replacements
3. Specific focus on package versioning and release management

Our monorepo requires robust workflows for development, building, testing, and publishing. The migration to PNPM must preserve all existing capabilities while reducing complexity.

## Current System Workflows

### 1. Dependency Management

- **Bootstrap Process**: `lerna bootstrap` installs dependencies and creates symbolic links
- **Custom References**: `setup-references.mjs` script generates TypeScript project references
- **Hoisting**: Package deduplication happens via Lerna's hoisting mechanism

### 2. Build Orchestration

- **Parallel/Sequential Execution**: Uses `run-p`/`run-s` from npm-run-all
- **Typical Build Flow**:
  ```bash
  run-s ts:clean auto:ts:references auto:lerna:pre-build auto:ts:build auto:lerna:build
  ```
- **TypeScript Build Order**: Managed through project references + custom scripts

### 3. Testing Framework

- **Test Execution**: `jest` at root level executing tests across packages
- **Watch Mode**: Supports package-specific test watching

### 4. Package Versioning & Publishing

- **Version Management**: `lerna version` bumps package versions based on changes
- **Changelog Generation**: Automated via Lerna
- **Publishing**: `lerna publish` pushes packages to registry

### 5. CI/CD Pipeline

- **GitHub Actions**: Uses `lerna/setup-lerna` action
- **Verification Steps**: Bootstrap → Build → Test
- **Release Process**: Triggered on tag push

## Decision

Implement a comprehensive PNPM-based workflow system that:

1. Replaces all Lerna functionality with PNPM Workspaces
2. Uses Changesets for versioning and publishing
3. Simplifies script orchestration via native PNPM features
4. Maintains all existing capabilities without additional tooling

## Implementation Plan

### 1. Dependency Management

#### pnpm-workspace.yaml

```yaml
packages:
  - 'packages/*'
  - 'apps/*'
```

#### Root package.json (workspace config)

```json
{
  "private": true,
  "engines": {
    "node": ">=16.x",
    "pnpm": ">=7.x"
  },
  "pnpm": {
    "overrides": {
      // Any legacy resolutions from Lerna
    }
  }
}
```

### 2. Build Orchestration

#### Replace run-s/run-p with PNPM Filter & Execution Order

```diff
-"build": "run-s ts:clean auto:ts:references auto:lerna:pre-build auto:ts:build auto:lerna:build",
+"build": "pnpm run ts:clean && pnpm -r --filter='./packages/*' build",
+"ts:clean": "rimraf \"packages/*/dist\"",
```

#### TypeScript Project References

Create a root `tsconfig.references.json`:

```json
{
  "files": [],
  "references": [
    { "path": "packages/core" },
    { "path": "packages/ui" }
    // Add all packages with proper dependency order
  ]
}
```

Update package-specific tsconfig.json files:

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "references": [{ "path": "../dependency-package" }]
}
```

### 3. Testing Framework

```diff
-"test": "jest",
+"test": "pnpm -r test --stream",
```

Package-specific test command:

```json
{
  "scripts": {
    "test": "vitest run"
  }
}
```

### 4. Package Versioning & Publishing

#### Changesets Configuration

```json
// .changeset/config.json
{
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "linked": [],
  "access": "public",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": []
}
```

#### Versioning Workflow Scripts

```json
{
  "scripts": {
    "changeset": "changeset",
    "version": "changeset version",
    "publish": "pnpm build && changeset publish"
  }
}
```

### 5. CI/CD Pipeline

#### GitHub Actions Workflow

```yaml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: pnpm/action-setup@v2
        with:
          version: 7
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm run build
      - run: pnpm run test

  release:
    if: github.ref == 'refs/heads/main' && !contains(github.event.head_commit.message, 'ci skip')
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: pnpm/action-setup@v2
        with:
          version: 7
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: 'pnpm'
          registry-url: 'https://registry.npmjs.org'
      - run: pnpm install --frozen-lockfile
      - name: Create Release Pull Request or Publish
        id: changesets
        uses: changesets/action@v1
        with:
          publish: pnpm run publish
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Migration Strategy

1. **Preparation Phase**:

   - Add `.changeset` directory and config
   - Create `pnpm-workspace.yaml`
   - Update root `package.json` with new scripts

2. **Transition Phase**:

   - Migrate one package as proof of concept
   - Test build, test, and versioning workflows
   - Document any edge cases

3. **Full Migration**:

   - Remove Lerna and npm-run-all
   - Update all package.json files
   - Configure TypeScript references properly
   - Update GitHub Actions workflows

4. **Verification**:
   - Run full build/test cycle
   - Simulate version bump and publish workflow

## Benefits

1. **Simpler Mental Model**: Direct usage of PNPM commands without Lerna abstraction
2. **Performance**: Faster installations and builds with PNPM's efficient linking
3. **Modern Workflow**: Changesets provides PR-based versioning with better changelogs
4. **Reduced Dependencies**: Fewer dev tools to maintain and troubleshoot
5. **Better Monorepo Scalability**: Native PNPM features scale better with repo growth

## Risks & Mitigations

| Risk                    | Mitigation                                                        |
| ----------------------- | ----------------------------------------------------------------- |
| Build order issues      | Ensure proper TS project references and package.json dependencies |
| CI/CD pipeline failures | Test workflow in a branch before merging                          |
| Publishing errors       | Dry-run publish process in local environment first                |
| Learning curve          | Document new workflows thoroughly for team adoption               |

## References

- [PNPM Workspaces Documentation](https://pnpm.io/workspaces)
- [Changesets Documentation](https://github.com/changesets/changesets)
- [TypeScript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
