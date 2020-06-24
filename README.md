## Packages version management with Lerna.js

### 📖 Docs

- [Lerna.js](https://github.com/lerna/lerna)
- [Monorepo](https://en.wikipedia.org/wiki/Monorepo)
- [Workspaces](https://legacy.yarnpkg.com/lang/en/docs/workspaces/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

Settled to use `independent mode` to projects to increment package versions independently.
Lerna allows target versions of local dependent packages to be written as a `git remote url`, this allows packages to be distributed via git repositories

Version track starts from v1.0.0 at `dev` branch.

Current approach rely on two workspaces:

 - `@k2-dev`, customs apps to consume shared packages;
 - `@k2-packages`, versioned application modules;

Respectively k2-dev and k2-packages folders.

## Setup

### Nexus repository access

Create .npmrc in a project directory.

```
//nexus.kontur.io/repository/npm-a/:_authToken=your_token_here
//nexus.kontur.io/repository/npm-snapshots-a/:_authToken=your_token_here
registry=https://nexus.kontur.io/repository/npm-a/
always-auth=true

```

### Development with Docker

Build and start dev environment
```sh
$ docker-compose up
```


Stop dev environment
```sh
$ docker-compose down
```

Your application available at http://localhost:9000

Connect to docker container
```sh
$ docker exec -it <container_name> bash
```

### Package management
To add dependency to all packages.
```sh
$ lerna add @k2-packages/module3
```
or
```
$ docker exec -t <container_name> bash lerna add @k2-packages/module3
```

To add module3 as dependency to module2.
```sh
$ lerna add @k2-packages/module3 --scope=@k2-packages/module2
```
or
```
$ docker exec -t <container_name> bash lerna add @k2-packages/module3 --scope=@k2-packages/module2
```

To link packages use:
```sh
$ docker exec -t <container_name> bash lerna link
```

### Plop

You can use plop scripts wizards as:

```
yarn plop:<script-name>
```

Currently available new scripts:

- ref - update references in tsconfig.json. Highly recommended run this task after other plop tasks
 ```
 yarn plop:ref

 > Sure?
 Y

 Done!
 ```

 - new - generate new modules boilerplate
 ```
 yarn plop:new

 > module name
 ExampleModule

 > add as dependency to another module? (Y/N)
 N

 Done!
 ```
 - add - add dependency to module
  Examples:
  ```bash
  # add `lodash` to my-module
  yarn plop:add

  > Type module name:
  lodash

  > Select module:
  my-module

  Done!

  # or you can use short version without dialogue
  yarn plop:add lodash my-module
  ```
 - route - adding route for module in base app
 Examples:
 ```bash
 yarn plop:route

 > route name:
 foo

 > select module:
 myModule

 Done!

 # short version
 yarn plop:route foo myModule
 ```

### Git branch naming

For every feature you must create new branch in format
```
{fibery-task-id}-{tas-title}
```
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
* **build**: Changes that affect the build system or external dependencies (example scopes: webpack, babel, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: .env, Docker, Ansible, configs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests

###  Version release
After you have finished working with the branch:
1. Push and publish it into the git:
`git push --set-upstream origin <branch_name>`

2. Open Merge Request (MR) into dev
 - Select `Delete source branch`
 - Select `Squash commits`
 - Write changelog in description of MR (it will be added in change log of all modules that depend on your MR)

3. Make sure that all CI stages were successful and choice reviewer

4. Make sure that all issues identified in the review process closed,
and request have at least one :like: (not yours). If CI/CD pipeline without errors - accept MR.

If you need release modules in NPM nexus repo, you need some extra steps:

5. Clone fresh `dev` branch with merged request
6. `lerna version --no-push`
7. Commit changes
```
git add .
git commit  -m 'build: modules version bump'
git push origin --tags
```
8. Wait until pipeline task 'release' was success
9. Rebuild the app where you want to use the new modules


### Localization
Localization done with a complete solution of i18next.
Each product build on top of k2 platform:

- Initialize i18nex object [Example](https://gitlab.com/kontur-private/kcloud/kcfirebrigade-fe/-/blob/master/src/i18n/index.ts)
- Define localization files location [Example](https://gitlab.com/kontur-private/kcloud/kcfirebrigade-fe/-/tree/master/src/locales)
- Add language selector [Example](https://gitlab.com/kontur-private/kcloud/kcfirebrigade-fe/-/blob/master/src/components/HomePage/index.tsx#L205)

To extract translation keys:

Declare the plugin like any other plugin in your .babelrc and you're good to go:
```
{
  "plugins": [
    "i18next-extract",
    ...
  ]
}
```

Once the plugin is setup, you can build your app normally or run Babel through Babel CLI:

`yarn run babel -f .babelrc 'src/**/*.{js,jsx,ts,tsx}'`

Extracted translations land in the extractedTranslations/ directory by default.

### TODO:
 - Commit message validation at local development (Husky)?
 - CI add git hook for commit lint.
 - `lerna version` should be fully automated at gitlab ci.
