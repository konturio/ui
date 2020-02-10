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

 - `@k2-apps`, customs apps to consume shared packages;
 - `@k2-packages`, versioned application modules;

Respectively k2-apps and k2-packages folders.

### Development with Docker

Build and start dev environment
```sh
$ docker-compose up
```


Stop dev environment
```sh
$ docker-compose down
```

Your application available at http://localhost:9000/

### Getting Started

Install toolset.
```sh
$ npm install yarn -g
$ npm install lerna -g
$ npm install typescript -g
```

Install dependencies and links any cross-dependencies.
```sh
$ yarn run bootstrap
```

To add dependency to all packages.
```sh
lerna add @k2-packages/module3
```

To add module3 as dependency to module2.
```sh
lerna add @k2-packages/module3 --scope=@k2-packages/module2
```

To create package.
```sh
lerna create module_name
```

To run tests over packages.
```sh
lerna run test --stream
```

### Version release

To build automation on top of lerna and packages version management we have to follow `Conventional commits` specification.

Commit message format:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Type
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

### TODO:
 - Commit message validation at local development (Husky)?
 - CI add git hook for commit lint.
 - `lerna version` should be fully automated at gitlab ci.
