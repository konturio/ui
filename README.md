## Packages version management with Lerna.js

### 📖 Docs

- [Lerna.js](https://github.com/lerna/lerna)
- [Monorepo](https://en.wikipedia.org/wiki/Monorepo)
- [Workspaces](https://legacy.yarnpkg.com/lang/en/docs/workspaces/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

Settled to use `independent mode` to projects to increment package versions independently.
Lerna allows target versions of local dependent packages to be written as a `git remote url`, this allows packages to be distributed via git repositories

Version track starts from v1.0.0 at `main` branch.

## Setup

### Package management

To add dependency to all packages.

```sh
$ lerna add @konturio/module3
```

To add module3 as dependency to module2.

```sh
$ lerna add @konturio/module3 --scope=@konturio/module2
```

### Git branch naming

For every feature you must create new branch in format

```
{fibery-task-id}-{tas-title}
```

Currently correct branch name generated in fibery

### Commit naming

To build automation on top of lerna and packages version management we have to follow `Conventional commits` specification.

Commit message format:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: webpack, babel, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: .env, Docker, Ansible, configs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### Version release

After you have finished working with the branch:

1. Push and publish it into the git:
   `git push --set-upstream origin <branch_name>`

2. Open Merge Request (MR) into dev

- Select `Delete source branch`
- Select `Squash commits`
- Write changelog in description of MR (it will be added in change log of all modules that depend on your MR)

3. Make sure that all CI pipelines passed successfully and reviewer was assigned

4. Make sure that all issues identified in the review process closed,
   and request have at least one :like: (not yours). If CI/CD pipeline without errors - accept MR.

If you need release modules in NPM nexus repo, you need some extra steps:

5. Clone fresh `main` branch with merged request
6. `npm run release`
   6.1 for Windows OS: powershell terminal may not let you log in and push new versions. Try using git bash terminal
7. Wait until pipeline task 'release' was success
8. Rebuild the app where you want to use the new modules

> is something wrong in CI as workaround you can run `npm run publish` manually

### Export icons from Figma

Before export icons, you will need to generate a Personal Access Token in Figma.

1. Go to the File Browser.
2. Click your name at the top left and go to the Settings tab.
3. Under Personal Access Tokens, click Create a new personal access token.
4. Copy this token. This is your Figma API key.

Copy the token. Now you can start export!

`export FIGMA_TOKEN=<personalAccessToken>`
`npm run figma:export`
