# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.1.12](https://github.com/konturio/ui/compare/@konturio/ui-kit@5.1.11...@konturio/ui-kit@5.1.12) (2024-03-13)

### Bug Fixes

- **17879:** Fix the lack of scroll in Select and MultiselectChipWithSearch components ([#88](https://github.com/konturio/ui/issues/88)) ([1422adc](https://github.com/konturio/ui/commit/1422adc04372f75ba40b8c88678133e0b9538f0e))

## [5.1.11](https://github.com/konturio/ui/compare/@konturio/ui-kit@5.1.10...@konturio/ui-kit@5.1.11) (2024-02-07)

**Note:** Version bump only for package @konturio/ui-kit

## [5.1.10](https://github.com/konturio/ui/compare/@konturio/ui-kit@5.1.9...@konturio/ui-kit@5.1.10) (2024-01-30)

**Note:** Version bump only for package @konturio/ui-kit

## [5.1.9](https://github.com/konturio/ui/compare/@konturio/ui-kit@5.1.8...@konturio/ui-kit@5.1.9) (2024-01-30)

**Note:** Version bump only for package @konturio/ui-kit

## [5.1.8](https://github.com/konturio/ui/compare/@konturio/ui-kit@5.1.7...@konturio/ui-kit@5.1.8) (2024-01-29)

### Bug Fixes

- **buttons:** css fixes and better fixture ([0534f12](https://github.com/konturio/ui/commit/0534f12e70491f6a666281ff08b7fa1905c91abd))

## [5.1.7](https://github.com/konturio/ui/compare/@konturio/ui-kit@5.1.6...@konturio/ui-kit@5.1.7) (2024-01-26)

### Bug Fixes

- modal styles on mobile devices ([9005e25](https://github.com/konturio/ui/commit/9005e25bc241c9fa4620ae19eb67cb9cf44d5241))

## [5.1.6](https://github.com/konturio/ui/compare/@konturio/ui-kit@5.1.5...@konturio/ui-kit@5.1.6) (2024-01-24)

**Note:** Version bump only for package @konturio/ui-kit

## [5.1.5](https://github.com/konturio/ui/compare/@konturio/ui-kit@5.1.4...@konturio/ui-kit@5.1.5) (2024-01-22)

**Note:** Version bump only for package @konturio/ui-kit

## [5.1.4](https://github.com/konturio/ui/compare/@konturio/ui-kit@5.1.3...@konturio/ui-kit@5.1.4) (2024-01-19)

**Note:** Version bump only for package @konturio/ui-kit

## [5.1.3](https://github.com/konturio/ui/compare/@konturio/ui-kit@5.1.2...@konturio/ui-kit@5.1.3) (2023-11-30)

### Bug Fixes

- **panel:** pull custom controls to right ([b8f8665](https://github.com/konturio/ui/commit/b8f866566f2b694d05866798b95d6fc87404a35a))

## [5.1.2](https://github.com/konturio/ui/compare/@konturio/ui-kit@5.1.1...@konturio/ui-kit@5.1.2) (2023-11-30)

### Bug Fixes

- **button:** update large button to center content ([3128d2f](https://github.com/konturio/ui/commit/3128d2f50d4747a2360c21b625e7ca5d05b6261d))
- **panel:** remove unnecessary div in panel ([5d6e805](https://github.com/konturio/ui/commit/5d6e80593197db16809d9b236cfc169558db4d21))

## [5.1.1](https://github.com/konturio/ui/compare/@konturio/ui-kit@5.1.0...@konturio/ui-kit@5.1.1) (2023-10-27)

### Bug Fixes

- **panel:** add space fitter ([#83](https://github.com/konturio/ui/issues/83)) ([1d32053](https://github.com/konturio/ui/commit/1d3205338fea566f176ba1b79facfab509b1b326))

# [5.1.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@5.0.0...@konturio/ui-kit@5.1.0) (2023-10-23)

### Features

- **button:** remove custom wrap rules ([#82](https://github.com/konturio/ui/issues/82)) ([ec5e9ce](https://github.com/konturio/ui/commit/ec5e9ce9705a5ddf651ae1b35308c90cc9f9f0bb))

# [5.0.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.19.0...@konturio/ui-kit@5.0.0) (2023-10-11)

### Code Refactoring

- **ui-kit:** move context helper to floating pkg ([#79](https://github.com/konturio/ui/issues/79)) ([a92e765](https://github.com/konturio/ui/commit/a92e7656b0ef4bd9b1cf1e47d82aae59eed98ffa))

- 13316 update button component in the fe library (#81) ([70043a4](https://github.com/konturio/ui/commit/70043a442245a4d04131dd1c3a6e1984d7dc1ec8)), closes [#81](https://github.com/konturio/ui/issues/81)

### BREAKING CHANGES

- `small-xs` size replaced with `tiny`
  remove `transparent` prop
  remove `radio` variant

- fix: set lerna version to 4

- fix: return bach the userdeps

- fix: add color to icon for invert variant

- feat: set wrap rules in large button

wrap text in the large buttons with icon no more than 2 lines or elipsis

- **ui-kit:** move context helper to floating package and refactor usage

# [4.0.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.19.0...@konturio/ui-kit@4.0.0) (2023-05-31)

### Code Refactoring

- **ui-kit:** move context helper to floating pkg ([#79](https://github.com/konturio/ui/issues/79)) ([a92e765](https://github.com/konturio/ui/commit/a92e7656b0ef4bd9b1cf1e47d82aae59eed98ffa))

### BREAKING CHANGES

- **ui-kit:** move context helper to floating package and refactor usage

# [3.19.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.18.0...@konturio/ui-kit@3.19.0) (2023-05-29)

### Features

- **tooltip_service:** add tooltip service ([#77](https://github.com/konturio/ui/issues/77)) ([da52e9c](https://github.com/konturio/ui/commit/da52e9c518c9195d5884c6037ef45ec6ba03b4ba))
- **tooltip:** create a new tooltip component ([#76](https://github.com/konturio/ui/issues/76)) ([4e11762](https://github.com/konturio/ui/commit/4e117628c18e640107172dd47326dda7b80ae24b))

# [3.18.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.17.0...@konturio/ui-kit@3.18.0) (2023-02-15)

### Bug Fixes

- **timeline:** allow to omit classname ([0d176d2](https://github.com/konturio/ui/commit/0d176d2da06c84c8e7df2fa5c77b01f42aea9a77))

### Features

- **timeline:** add default border around point marker ([fe31f38](https://github.com/konturio/ui/commit/fe31f388935ba8a03086ea9a76111347e96bfe33))

# [3.17.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.16.0...@konturio/ui-kit@3.17.0) (2023-02-15)

### Features

- **timeline:** support for few classes in getEntryClassName ([44577f4](https://github.com/konturio/ui/commit/44577f49094e50cfa9e501f62836893a97601f53))

# [3.16.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.15.0...@konturio/ui-kit@3.16.0) (2023-02-15)

### Features

- **timeline:** use css clip mask for markers ([7509357](https://github.com/konturio/ui/commit/7509357a470002035af2b4e533b10666896f9b8c))

# [3.15.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.14.2...@konturio/ui-kit@3.15.0) (2023-02-14)

### Features

- **timeline:** better customization ([87e9ef9](https://github.com/konturio/ui/commit/87e9ef9225faa18ec9ca984b1f9ac4c8436c8125))

## [3.14.2](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.14.1...@konturio/ui-kit@3.14.2) (2023-02-13)

### Bug Fixes

- dataset loose additional properties ([0e94550](https://github.com/konturio/ui/commit/0e945502f7b9d6c8d135e168c2a4d16c081c9cf3))

## [3.14.1](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.14.0...@konturio/ui-kit@3.14.1) (2023-02-13)

### Bug Fixes

- missing deps ([2644f91](https://github.com/konturio/ui/commit/2644f9105b9c49b70f0c84320995479c5a29065f))

# [3.14.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.13.0...@konturio/ui-kit@3.14.0) (2023-02-13)

### Features

- **timeline:** data driven timeline className ([3396a05](https://github.com/konturio/ui/commit/3396a052b978c3c300ed4fab23e55613914f4045))

# [3.13.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.12.2...@konturio/ui-kit@3.13.0) (2023-02-10)

**Note:** Version bump only for package @konturio/ui-kit

## [3.12.2](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.12.1...@konturio/ui-kit@3.12.2) (2023-02-09)

### Reverts

- Revert "feat(tooltip): calculate position with floating-ui (#66)" ([4a20e7f](https://github.com/konturio/ui/commit/4a20e7fdaf4d459226094a8e04fb32e399ac7085)), closes [#66](https://github.com/konturio/ui/issues/66)

## [3.12.1](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.12.0...@konturio/ui-kit@3.12.1) (2023-02-09)

**Note:** Version bump only for package @konturio/ui-kit

# [3.12.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.11.1...@konturio/ui-kit@3.12.0) (2023-02-09)

### Bug Fixes

- timeline selection stack in ref ([f7bfdba](https://github.com/konturio/ui/commit/f7bfdba9dfb44d4412b5979040785e8a6de950e7))

### Features

- **tooltip:** calculate position with floating-ui ([#66](https://github.com/konturio/ui/issues/66)) ([bf6fc45](https://github.com/konturio/ui/commit/bf6fc4540f66975403a043982af5c51bf36bb881))

## [3.11.1](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.11.0...@konturio/ui-kit@3.11.1) (2023-02-01)

### Bug Fixes

- **select:** 14471 ([cd0f684](https://github.com/konturio/ui/commit/cd0f684dde5ce4b1fcd24370be02b9745db5ce50))

# [3.11.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.10.3...@konturio/ui-kit@3.11.0) (2023-01-30)

### Features

- **ui-kit:button:** focus from keyboard only ([#64](https://github.com/konturio/ui/issues/64)) ([69a6cd6](https://github.com/konturio/ui/commit/69a6cd6cdd8b33da7e8d897ad5762e4a435d4c0a))

## [3.10.3](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.10.2...@konturio/ui-kit@3.10.3) (2023-01-27)

**Note:** Version bump only for package @konturio/ui-kit

## [3.10.2](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.10.1...@konturio/ui-kit@3.10.2) (2023-01-27)

### Bug Fixes

- 13281 - placeholder overflow select container ([b837bfb](https://github.com/konturio/ui/commit/b837bfbe47216ba5bdcd42517c4d258c099456ae))

## [3.10.1](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.10.0...@konturio/ui-kit@3.10.1) (2023-01-27)

**Note:** Version bump only for package @konturio/ui-kit

# [3.10.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.9.2...@konturio/ui-kit@3.10.0) (2023-01-27)

### Features

- **ui-kit:timeline:** add tooltip-component prop ([#58](https://github.com/konturio/ui/issues/58)) ([76adb90](https://github.com/konturio/ui/commit/76adb90d65272efbd7bae3131375340cc2b05038))

## [3.9.2](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.9.1...@konturio/ui-kit@3.9.2) (2023-01-18)

### Bug Fixes

- **ui-kit:-timeline:** fix custom timeline entry rendering ([#54](https://github.com/konturio/ui/issues/54)) ([3b56066](https://github.com/konturio/ui/commit/3b56066364b82acf1e373afcafb69956e4c7f491))

## [3.9.1](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.9.0...@konturio/ui-kit@3.9.1) (2023-01-17)

**Note:** Version bump only for package @konturio/ui-kit

# [3.9.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.8.0...@konturio/ui-kit@3.9.0) (2023-01-12)

### Features

- **ui-kit:** replace content prop with children prop ([1c61e40](https://github.com/konturio/ui/commit/1c61e40c13dd6ee79d84335c28c2bbf180579d57))

# [3.8.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.7.0...@konturio/ui-kit@3.8.0) (2023-01-12)

### Bug Fixes

- **ui-kit:** tooltip - types fix ([b0ad7fa](https://github.com/konturio/ui/commit/b0ad7fa0e7f494b5853b73840fccbb9d2a5b6288))

### Features

- **ui-kit:** tooltip component added ([3ee9266](https://github.com/konturio/ui/commit/3ee9266ba83884d08ea80486f2ea667c6b298cb4))

# [3.7.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.6.2...@konturio/ui-kit@3.7.0) (2023-01-03)

### Features

- **ui-kit:-timeline:** 13937-add-configuration-for-timline-paddings ([#51](https://github.com/konturio/ui/issues/51)) ([01f4964](https://github.com/konturio/ui/commit/01f49641416ade565347f5d521b77538f55326ee))

## [3.6.2](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.6.1...@konturio/ui-kit@3.6.2) (2022-12-19)

**Note:** Version bump only for package @konturio/ui-kit

## [3.6.1](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.6.0...@konturio/ui-kit@3.6.1) (2022-12-15)

### Bug Fixes

- reexports ([8b21633](https://github.com/konturio/ui/commit/8b21633847ee1ab50c67dd4d23bbd7133a6bf379))

# [3.6.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.5.3...@konturio/ui-kit@3.6.0) (2022-12-14)

### Features

- add Heading and Animation components ([166cb89](https://github.com/konturio/ui/commit/166cb892f7e6bc4bdfbd7f8ca3b48d58800ea6c8))

## [3.5.3](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.5.2...@konturio/ui-kit@3.5.3) (2022-12-02)

### Bug Fixes

- **ui-kit: panel:** fix styles for mobile ([#44](https://github.com/konturio/ui/issues/44)) ([16f196e](https://github.com/konturio/ui/commit/16f196ee85a954fe663607ba719aae29a70a717c))

## [3.5.2](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.5.1...@konturio/ui-kit@3.5.2) (2022-12-01)

**Note:** Version bump only for package @konturio/ui-kit

## [3.5.1](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.5.0...@konturio/ui-kit@3.5.1) (2022-11-29)

**Note:** Version bump only for package @konturio/ui-kit

# [3.5.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.4.2...@konturio/ui-kit@3.5.0) (2022-11-22)

### Features

- **ui-kit: panel:** 12482 - implement panel short content and its controls ([#41](https://github.com/konturio/ui/issues/41)) ([1927ddd](https://github.com/konturio/ui/commit/1927ddde052abeae9ccea04e8d3c9e6860d98acb))

## [3.4.2](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.4.1...@konturio/ui-kit@3.4.2) (2022-11-16)

**Note:** Version bump only for package @konturio/ui-kit

## [3.4.1](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.4.0...@konturio/ui-kit@3.4.1) (2022-11-15)

**Note:** Version bump only for package @konturio/ui-kit

# [3.4.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.3.0...@konturio/ui-kit@3.4.0) (2022-11-14)

### Bug Fixes

- **timeline:** cluster change color after selection ([665a699](https://github.com/konturio/ui/commit/665a6998dc39ca753b434fe930f1896a525fa597))

### Features

- **build:** 12977 - separate ts config to tsconfig.build.json and tsconfig.json ([7cda350](https://github.com/konturio/ui/commit/7cda350777e9024e6ac07d2879d0970321fb80e4))

# [3.3.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.2.1...@konturio/ui-kit@3.3.0) (2022-10-31)

### Features

- add kontur styling ([10a60cf](https://github.com/konturio/ui/commit/10a60cf0282578c9a4c55df4c232b117deadbe76))
- add templates support to timeline ([ae4eff2](https://github.com/konturio/ui/commit/ae4eff2b223167803fdeff7122a36b2d13a72d84))

## [3.2.1](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.2.0...@konturio/ui-kit@3.2.1) (2022-10-20)

**Note:** Version bump only for package @konturio/ui-kit

# [3.2.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.1.3...@konturio/ui-kit@3.2.0) (2022-10-20)

### Features

- **textarea:** 9250 - add Textarea component ([#35](https://github.com/konturio/ui/issues/35)) ([eb04d19](https://github.com/konturio/ui/commit/eb04d19943acb249b3a2dbe7aadb02cda982a221))

## [3.1.3](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.1.2...@konturio/ui-kit@3.1.3) (2022-09-30)

**Note:** Version bump only for package @konturio/ui-kit

## [3.1.2](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.1.1...@konturio/ui-kit@3.1.2) (2022-09-29)

### Bug Fixes

- **app-header:** remove irrelevant chat props ([1f7fd4e](https://github.com/konturio/ui/commit/1f7fd4e74f645e6e857a724278b29dce19b28a64))

## [3.1.1](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.1.0...@konturio/ui-kit@3.1.1) (2022-09-28)

**Note:** Version bump only for package @konturio/ui-kit

# [3.1.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.4...@konturio/ui-kit@3.1.0) (2022-09-26)

### Features

- **core:** vite, react, typescript versions up ([bb613ef](https://github.com/konturio/ui/commit/bb613eff936845646652a21ccd734e92f5ec298c))

## [3.0.4](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.3...@konturio/ui-kit@3.0.4) (2022-09-19)

**Note:** Version bump only for package @konturio/ui-kit

## [3.0.3](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.2...@konturio/ui-kit@3.0.3) (2022-09-16)

### Bug Fixes

- **ui-kit Panel:** 12405 - new panel design - folding panel ([#29](https://github.com/konturio/ui/issues/29)) ([eb99e37](https://github.com/konturio/ui/commit/eb99e37e6f2f72295ae59d98b4a8c0bb8c44b2e3))

## [3.0.2](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.1...@konturio/ui-kit@3.0.2) (2022-09-13)

**Note:** Version bump only for package @konturio/ui-kit

## [3.0.1](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0...@konturio/ui-kit@3.0.1) (2022-09-13)

**Note:** Version bump only for package @konturio/ui-kit

# [3.0.0](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.74...@konturio/ui-kit@3.0.0) (2022-09-13)

**Note:** Version bump only for package @konturio/ui-kit

# [3.0.0-alpha.74](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.73...@konturio/ui-kit@3.0.0-alpha.74) (2022-09-06)

### Bug Fixes

- **ui-kit:** add ability to control menu button from outside ([33d2f19](https://github.com/konturio/ui/commit/33d2f1970aae2e482cd227c04ed883b2819d8cb4))

### Features

- **ui-kit:** add ability to show MenuButton at arbitrary position ([39b78e2](https://github.com/konturio/ui/commit/39b78e2a809bb2dc92bc4f47ef294c9fd140d871))

# [3.0.0-alpha.73](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.72...@konturio/ui-kit@3.0.0-alpha.73) (2022-08-31)

### Bug Fixes

- **ui-kit:** fix default state for Checkbox ([c249620](https://github.com/konturio/ui/commit/c24962046655ed26f2e12cc8398b066d8d0f7e33))

# [3.0.0-alpha.72](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.71...@konturio/ui-kit@3.0.0-alpha.72) (2022-08-31)

### Bug Fixes

- **ui-kit:** small updates for radiobutton ([fc38ffe](https://github.com/konturio/ui/commit/fc38ffe60e81f8c749e34e9d81681bddc4920476))

# [3.0.0-alpha.71](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.70...@konturio/ui-kit@3.0.0-alpha.71) (2022-08-31)

### Bug Fixes

- **default-icons:** fix icons name ([cb90a18](https://github.com/konturio/ui/commit/cb90a1892c7f42192c05357babaab36fc445b462))

# [3.0.0-alpha.70](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.69...@konturio/ui-kit@3.0.0-alpha.70) (2022-08-30)

**Note:** Version bump only for package @konturio/ui-kit

# [3.0.0-alpha.69](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.68...@konturio/ui-kit@3.0.0-alpha.69) (2022-08-30)

### Bug Fixes

- **ui-kit:** build fix ([447ecc1](https://github.com/konturio/ui/commit/447ecc15b9e303e9bab384667fb1795712e8a1d5))
- **ui-kit:** build fix ([90d2365](https://github.com/konturio/ui/commit/90d2365a8ae807bad260ede73e33489f34690dda))

# [3.0.0-alpha.68](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.67...@konturio/ui-kit@3.0.0-alpha.68) (2022-08-30)

### Bug Fixes

- **ui-kit:** autocomplete reset behaviour fix ([ebfd122](https://github.com/konturio/ui/commit/ebfd122491415e77ff37fa01c7e70938a1b237c1))

# [3.0.0-alpha.67](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.66...@konturio/ui-kit@3.0.0-alpha.67) (2022-08-30)

### Bug Fixes

- **ui-kit:** update Autocomplete uncontrolles state behavior ([2ef511f](https://github.com/konturio/ui/commit/2ef511f5d4be282b7e603711f6359cfb82b64593))

# [3.0.0-alpha.66](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.65...@konturio/ui-kit@3.0.0-alpha.66) (2022-08-26)

### Bug Fixes

- **ui-kit:** add some small Autocomplete fixes ([c10863f](https://github.com/konturio/ui/commit/c10863f50e06a12dc1b47820987dedc09f867ce9))

# [3.0.0-alpha.65](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.64...@konturio/ui-kit@3.0.0-alpha.65) (2022-08-26)

### Bug Fixes

- **ui-kit:** fix className for autocomplete component ([d19d0ea](https://github.com/konturio/ui/commit/d19d0ea14555f821c49995ef9d99ef61ea435291))

# [3.0.0-alpha.64](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.63...@konturio/ui-kit@3.0.0-alpha.64) (2022-08-25)

### Bug Fixes

- **ui-kit:** add OnReset handler to Select component ([9e5625e](https://github.com/konturio/ui/commit/9e5625e2ea40960b794715caeb944fb1e44c33ad))

# [3.0.0-alpha.63](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.62...@konturio/ui-kit@3.0.0-alpha.63) (2022-08-25)

### Bug Fixes

- **ui-kit:** add additional classes to MultiselectChip ([2e5e0fd](https://github.com/konturio/ui/commit/2e5e0fde005c7f6645cb284ea49b692ba5b6f101))

# [3.0.0-alpha.62](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.61...@konturio/ui-kit@3.0.0-alpha.62) (2022-08-25)

**Note:** Version bump only for package @konturio/ui-kit

# [3.0.0-alpha.61](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.60...@konturio/ui-kit@3.0.0-alpha.61) (2022-08-25)

### Bug Fixes

- **ui-kit:** add onClose handler to Select component ([3fe3ae1](https://github.com/konturio/ui/commit/3fe3ae1bca094d1d149e10a21ff040610c7319e7))

# [3.0.0-alpha.60](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.59...@konturio/ui-kit@3.0.0-alpha.60) (2022-08-25)

### Bug Fixes

- **ui-kit:** fix Select text container alignment ([5d4fa33](https://github.com/konturio/ui/commit/5d4fa33b75bb761fe27d3fdc4bb21fa485005f9c))

# [3.0.0-alpha.59](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.58...@konturio/ui-kit@3.0.0-alpha.59) (2022-08-25)

### Bug Fixes

- **ui-kit:** add noValue styling in Select component ([283a9e6](https://github.com/konturio/ui/commit/283a9e6077cd37b27f4c12a7126ae2fbeaf2df5a))

# [3.0.0-alpha.58](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.57...@konturio/ui-kit@3.0.0-alpha.58) (2022-08-25)

### Bug Fixes

- **ui-kit:** fix className in Select ([1090361](https://github.com/konturio/ui/commit/109036190bd731744b614c5b8e639b12a50d8748))

# [3.0.0-alpha.57](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.56...@konturio/ui-kit@3.0.0-alpha.57) (2022-08-25)

### Bug Fixes

- **ui-kit:** remove height jitter in Select component ([652af38](https://github.com/konturio/ui/commit/652af38845aca358a4ada8498aab8dce045aa3d6))

# [3.0.0-alpha.56](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.55...@konturio/ui-kit@3.0.0-alpha.56) (2022-08-24)

### Bug Fixes

- **ui-kit:** add ability to pass selected class to tab ([9a3950e](https://github.com/konturio/ui/commit/9a3950ea954cd20a184d50c13690658737dad2bc))
- **ui-kit:** add ability to pass selected class to tab ([2e19391](https://github.com/konturio/ui/commit/2e19391d515b70fe0abaac1ccf6eda7ea1448a16))

# [3.0.0-alpha.55](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.54...@konturio/ui-kit@3.0.0-alpha.55) (2022-08-23)

### Bug Fixes

- **ui-kit:** add default export to for tabs component ([83ae1a5](https://github.com/konturio/ui/commit/83ae1a595a2bbbcb9d06e1e58a69ae335bc891b0))

# [3.0.0-alpha.54](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.53...@konturio/ui-kit@3.0.0-alpha.54) (2022-08-18)

### Bug Fixes

- **ui-kit:** small fixes for tab components ([#23](https://github.com/konturio/ui/issues/23)) ([740c441](https://github.com/konturio/ui/commit/740c441c7579dd558a998d88df70084ee17a8457))

# [3.0.0-alpha.53](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.52...@konturio/ui-kit@3.0.0-alpha.53) (2022-08-18)

**Note:** Version bump only for package @konturio/ui-kit

# [3.0.0-alpha.52](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.51...@konturio/ui-kit@3.0.0-alpha.52) (2022-08-18)

### Bug Fixes

- **ui-kit:** fix text-overflow behavior for select ([#21](https://github.com/konturio/ui/issues/21)) ([0750c45](https://github.com/konturio/ui/commit/0750c45a4d9a2cb79cc749cb54cc0278bfe71b42))

# [3.0.0-alpha.51](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.50...@konturio/ui-kit@3.0.0-alpha.51) (2022-08-11)

### Bug Fixes

- **ui-kit:** fixes for multiselect component ([#19](https://github.com/konturio/ui/issues/19)) ([a3547de](https://github.com/konturio/ui/commit/a3547dec75fe7e7b59a0e09c632937f0269ff562))

# [3.0.0-alpha.50](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.49...@konturio/ui-kit@3.0.0-alpha.50) (2022-08-11)

**Note:** Version bump only for package @konturio/ui-kit

# [3.0.0-alpha.49](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.48...@konturio/ui-kit@3.0.0-alpha.49) (2022-08-08)

### Features

- **select:** 10840 - add ability for select to reset value by cross icon, fix placeholder styles ([d3d0b87](https://github.com/konturio/ui/commit/d3d0b875af0c36843cedb76be5bfd35c7cab35a3))

# [3.0.0-alpha.48](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.47...@konturio/ui-kit@3.0.0-alpha.48) (2022-08-04)

### Features

- **Select:** 10839 - add possibility to handle changes in select component ([#14](https://github.com/konturio/ui/issues/14)) ([4ce47af](https://github.com/konturio/ui/commit/4ce47afa225e0c6684cd6b0e86e88a784e03b124))

# [3.0.0-alpha.47](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.46...@konturio/ui-kit@3.0.0-alpha.47) (2022-08-02)

### Features

- **AppHeader:** return box-shadow instead of drop-shadow to unblock logout button ([1a29ef7](https://github.com/konturio/ui/commit/1a29ef7c0e47c4570e8ac592d72257e182245f53))

# [3.0.0-alpha.46](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.45...@konturio/ui-kit@3.0.0-alpha.46) (2022-07-28)

### Features

- **Legend:** 10841 - add possibility to hide labels/arrows/steps for Legend and custom render method of axis labels ([#13](https://github.com/konturio/ui/issues/13)) ([04d1b51](https://github.com/konturio/ui/commit/04d1b514f67d29e702a5744538e929adb1e0c256))

# [3.0.0-alpha.45](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.44...@konturio/ui-kit@3.0.0-alpha.45) (2022-07-25)

### Bug Fixes

- **ui-kit:** fix menupopover style path ([91c3276](https://github.com/konturio/ui/commit/91c3276d1cd5a7d6b0f44fc89921388905c88015))
- **ui-kit:** uikit menu color fixes ([967d9e2](https://github.com/konturio/ui/commit/967d9e2a485dd2d24d9810abcacd0af48bc29f25))

### Features

- **Select:** 10865 - Update dropdown component implementation ([33b4c95](https://github.com/konturio/ui/commit/33b4c95d0f5fe3be146a92ffc936479766512660))
- **ui-kit:** update select implementation ([#11](https://github.com/konturio/ui/issues/11)) ([f8902d8](https://github.com/konturio/ui/commit/f8902d801116f9b8b8f3da574858016b0459276e))

# [3.0.0-alpha.44](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.43...@konturio/ui-kit@3.0.0-alpha.44) (2022-07-15)

**Note:** Version bump only for package @konturio/ui-kit

# [3.0.0-alpha.43](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.42...@konturio/ui-kit@3.0.0-alpha.43) (2022-06-28)

**Note:** Version bump only for package @konturio/ui-kit

# [3.0.0-alpha.42](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.41...@konturio/ui-kit@3.0.0-alpha.42) (2022-06-21)

**Note:** Version bump only for package @konturio/ui-kit

# [3.0.0-alpha.41](https://github.com/konturio/ui/compare/@konturio/ui-kit@3.0.0-alpha.40...@konturio/ui-kit@3.0.0-alpha.41) (2022-06-16)

**Note:** Version bump only for package @konturio/ui-kit

# 3.0.0-alpha.40 (2022-06-15)

**Note:** Version bump only for package @konturio/ui-kit

# [3.0.0-alpha.39](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.38...@k2-packages/ui-kit@3.0.0-alpha.39) (2022-05-29)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.38](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.36...@k2-packages/ui-kit@3.0.0-alpha.38) (2022-05-27)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.37](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.36...@k2-packages/ui-kit@3.0.0-alpha.37) (2022-05-27)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.36](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.35...@k2-packages/ui-kit@3.0.0-alpha.36) (2022-05-26)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.35](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.34...@k2-packages/ui-kit@3.0.0-alpha.35) (2022-05-23)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.34](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.32...@k2-packages/ui-kit@3.0.0-alpha.34) (2022-05-20)

### Bug Fixes

- **bivariate-matrix:** add react-cosmos mock for AxisControl ([d791da7](https://gitlab.com/kontur-private/k2/k2-front-end/commit/d791da75c270a044c336e0fdea7a8ac3de82a163))
- **bivariate-matrix:** reduce bivariate matrix renders count ([de2755c](https://gitlab.com/kontur-private/k2/k2-front-end/commit/de2755c061750256c5f15f1d19237662faa72a93))
- **bivariate-matrix:** refactor bivariate matrix cell component ([0112d69](https://gitlab.com/kontur-private/k2/k2-front-end/commit/0112d692c190d5b1d48a101d749600344220cddd))

# [3.0.0-alpha.33](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.32...@k2-packages/ui-kit@3.0.0-alpha.33) (2022-05-19)

### Bug Fixes

- **bivariate-matrix:** add react-cosmos mock for AxisControl ([d791da7](https://gitlab.com/kontur-private/k2/k2-front-end/commit/d791da75c270a044c336e0fdea7a8ac3de82a163))
- **bivariate-matrix:** reduce bivariate matrix renders count ([de2755c](https://gitlab.com/kontur-private/k2/k2-front-end/commit/de2755c061750256c5f15f1d19237662faa72a93))
- **bivariate-matrix:** refactor bivariate matrix cell component ([0112d69](https://gitlab.com/kontur-private/k2/k2-front-end/commit/0112d692c190d5b1d48a101d749600344220cddd))

# [3.0.0-alpha.32](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.31...@k2-packages/ui-kit@3.0.0-alpha.32) (2022-05-17)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.31](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.30...@k2-packages/ui-kit@3.0.0-alpha.31) (2022-05-11)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.30](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.29...@k2-packages/ui-kit@3.0.0-alpha.30) (2022-05-10)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.29](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.28...@k2-packages/ui-kit@3.0.0-alpha.29) (2022-05-04)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.28](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.27...@k2-packages/ui-kit@3.0.0-alpha.28) (2022-04-27)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.27](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.24...@k2-packages/ui-kit@3.0.0-alpha.27) (2022-04-20)

### Bug Fixes

- **bivariate-legend:** Fix bivariate legend axes label style ([deb3ff1](https://gitlab.com/kontur-private/k2/k2-front-end/commit/deb3ff10f4cf1ecd62bfb55f7920b1999b2325c4))
- **bivariate-matrix:** Update biv matrix to add ability to select empty cells ([4a5223d](https://gitlab.com/kontur-private/k2/k2-front-end/commit/4a5223d44830b56a8be9c31c90aa40260ed517e6))

# [3.0.0-alpha.26](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.25...@k2-packages/ui-kit@3.0.0-alpha.26) (2022-04-07)

### Bug Fixes

- **bivariate-legend:** Fix bivariate legend axes label style ([deb3ff1](https://gitlab.com/kontur-private/k2/k2-front-end/commit/deb3ff10f4cf1ecd62bfb55f7920b1999b2325c4))

# [3.0.0-alpha.25](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.24...@k2-packages/ui-kit@3.0.0-alpha.25) (2022-03-25)

### Bug Fixes

- **bivariate-matrix:** Update biv matrix to add ability to select empty cells ([4a5223d](https://gitlab.com/kontur-private/k2/k2-front-end/commit/4a5223d44830b56a8be9c31c90aa40260ed517e6))

# [3.0.0-alpha.24](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.20...@k2-packages/ui-kit@3.0.0-alpha.24) (2022-03-21)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.23](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.20...@k2-packages/ui-kit@3.0.0-alpha.23) (2022-03-17)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.20](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.19...@k2-packages/ui-kit@3.0.0-alpha.20) (2022-02-17)

### Bug Fixes

- **dropdown:** Add dropdown fixture ([6f836b8](https://gitlab.com/kontur-private/k2/k2-front-end/commit/6f836b84f854f211846485d83e6bc21d408d5b88))

# [3.0.0-alpha.19](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.18...@k2-packages/ui-kit@3.0.0-alpha.19) (2022-02-01)

### Features

- **ui-kit-input:** Add password mode to Input field ([ac8c0ef](https://gitlab.com/kontur-private/k2/k2-front-end/commit/ac8c0ef8bf6ab0a407bf76048240485a1fb689c4))

# [3.0.0-alpha.18](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.15...@k2-packages/ui-kit@3.0.0-alpha.18) (2022-01-17)

### Bug Fixes

- **legend:** Stylefix for legend cells ([075a693](https://gitlab.com/kontur-private/k2/k2-front-end/commit/075a69318415f971053cfce76400cba075464555))

### Features

- **new-components:** Add modal component ([3c996e3](https://gitlab.com/kontur-private/k2/k2-front-end/commit/3c996e318e8d02f140131e9038ed8cd4dd322426))

# [3.0.0-alpha.17](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.16...@k2-packages/ui-kit@3.0.0-alpha.17) (2022-01-12)

### Bug Fixes

- **legend:** Stylefix for legend cells ([075a693](https://gitlab.com/kontur-private/k2/k2-front-end/commit/075a69318415f971053cfce76400cba075464555))

# [3.0.0-alpha.16](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.15...@k2-packages/ui-kit@3.0.0-alpha.16) (2022-01-12)

### Features

- **new-components:** Add modal component ([3c996e3](https://gitlab.com/kontur-private/k2/k2-front-end/commit/3c996e318e8d02f140131e9038ed8cd4dd322426))

# [3.0.0-alpha.15](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.12...@k2-packages/ui-kit@3.0.0-alpha.15) (2021-12-23)

### Bug Fixes

- add missing export ([df1d38f](https://gitlab.com/kontur-private/k2/k2-front-end/commit/df1d38f32f62d07b0cb2fb85e8c4830eb71ff95f))

### Features

- add line item ([508bf73](https://gitlab.com/kontur-private/k2/k2-front-end/commit/508bf73bf12c38ddefd7cc6b54bba1a5be446d68))

# [3.0.0-alpha.14](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.13...@k2-packages/ui-kit@3.0.0-alpha.14) (2021-12-23)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.13](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.12...@k2-packages/ui-kit@3.0.0-alpha.13) (2021-12-22)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.12](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.11...@k2-packages/ui-kit@3.0.0-alpha.12) (2021-11-26)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.11](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.9...@k2-packages/ui-kit@3.0.0-alpha.11) (2021-11-25)

### Features

- allow overwrite logotype ([f413ed1](https://gitlab.com/kontur-private/k2/k2-front-end/commit/f413ed1df8ec540ead45f35af64d4ab6780f998b))
- **ui-kit:** Add button group ([8bcc17b](https://gitlab.com/kontur-private/k2/k2-front-end/commit/8bcc17b9f07d70e4e6f0cdca3270f0c8b4bedeb1))
- **ui:** Add new icons and button bar ([d400220](https://gitlab.com/kontur-private/k2/k2-front-end/commit/d4002206790b6f5a42e0d21aba1e972e25508bc1))

# [3.0.0-alpha.10](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.9...@k2-packages/ui-kit@3.0.0-alpha.10) (2021-11-25)

### Features

- **ui-kit:** Add button group ([8bcc17b](https://gitlab.com/kontur-private/k2/k2-front-end/commit/8bcc17b9f07d70e4e6f0cdca3270f0c8b4bedeb1))
- **ui:** Add new icons and button bar ([d400220](https://gitlab.com/kontur-private/k2/k2-front-end/commit/d4002206790b6f5a42e0d21aba1e972e25508bc1))

# [3.0.0-alpha.9](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.8...@k2-packages/ui-kit@3.0.0-alpha.9) (2021-11-17)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.8](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.6...@k2-packages/ui-kit@3.0.0-alpha.8) (2021-11-17)

### Bug Fixes

- **analytics-pane:** Fixes for anaylitics panel ([6ae2c80](https://gitlab.com/kontur-private/k2/k2-front-end/commit/6ae2c808c1d4f36b4ca8b8c0e2e0ef18249d93d2))
- shrinked controls ([d92baa5](https://gitlab.com/kontur-private/k2/k2-front-end/commit/d92baa5a2ddf7887b92801a6c73290f1ea4e083f))
- Tabs ui komponent: ([48c165d](https://gitlab.com/kontur-private/k2/k2-front-end/commit/48c165d4e4a9cd5b4da5d2718612da85c1a44eaa))

# [3.0.0-alpha.7](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.6...@k2-packages/ui-kit@3.0.0-alpha.7) (2021-11-16)

### Bug Fixes

- **analytics-pane:** Fixes for anaylitics panel ([6ae2c80](https://gitlab.com/kontur-private/k2/k2-front-end/commit/6ae2c808c1d4f36b4ca8b8c0e2e0ef18249d93d2))
- Tabs ui komponent: ([48c165d](https://gitlab.com/kontur-private/k2/k2-front-end/commit/48c165d4e4a9cd5b4da5d2718612da85c1a44eaa))

# [3.0.0-alpha.6](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.5...@k2-packages/ui-kit@3.0.0-alpha.6) (2021-11-10)

### Bug Fixes

- **ui-kit-tabs:** Fix styling ([173d5ba](https://gitlab.com/kontur-private/k2/k2-front-end/commit/173d5babba76c05251a3d57787d9d614c1b5e90a))

# [3.0.0-alpha.5](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.4...@k2-packages/ui-kit@3.0.0-alpha.5) (2021-11-10)

### Bug Fixes

- **ui-kit-panel:** Panel lint fix ([0ab385b](https://gitlab.com/kontur-private/k2/k2-front-end/commit/0ab385b72c23095a62c32e6a57a4841b4833662d))

### Features

- **ui-components:** Add ability to provide additional styling for tabs and panel ([9f0ace7](https://gitlab.com/kontur-private/k2/k2-front-end/commit/9f0ace719b32f352d9cdb5047221340f01f232d8))

# [3.0.0-alpha.4](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.3...@k2-packages/ui-kit@3.0.0-alpha.4) (2021-10-27)

**Note:** Version bump only for package @k2-packages/ui-kit

# [3.0.0-alpha.3](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.2...@k2-packages/ui-kit@3.0.0-alpha.3) (2021-10-26)

### Features

- block layout option for radio and checkbox ([b45005e](https://gitlab.com/kontur-private/k2/k2-front-end/commit/b45005ec10b477dc0d15c83eea702aa009bacd72))

# [3.0.0-alpha.2](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.1...@k2-packages/ui-kit@3.0.0-alpha.2) (2021-09-14)

### Bug Fixes

- mark pakagens as es6 module, ([04ddf96](https://gitlab.com/kontur-private/k2/k2-front-end/commit/04ddf96cca47f098ce7f92fa561fd5063bcc1270))

# [3.0.0-alpha.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@3.0.0-alpha.0...@k2-packages/ui-kit@3.0.0-alpha.1) (2021-09-10)

### Features

- add css copy ([3707591](https://gitlab.com/kontur-private/k2/k2-front-end/commit/3707591c1e14729803d3b93252acecee1d941740))

# [3.0.0-alpha.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.17.4-alpha.0...@k2-packages/ui-kit@3.0.0-alpha.0) (2021-09-10)

### Features

- add only builded files in packages ([1d174f9](https://gitlab.com/kontur-private/k2/k2-front-end/commit/1d174f9d6898f549fb257d92e17e10fb781cfc71))

## [2.17.4-alpha.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.17.3...@k2-packages/ui-kit@2.17.4-alpha.0) (2021-09-10)

**Note:** Version bump only for package @k2-packages/ui-kit

## [2.17.3](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.17.2...@k2-packages/ui-kit@2.17.3) (2021-08-31)

**Note:** Version bump only for package @k2-packages/ui-kit

## [2.17.2](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.17.1...@k2-packages/ui-kit@2.17.2) (2021-08-19)

### Bug Fixes

- uikit / roll back change matrix labels width ([a53e2cd](https://gitlab.com/kontur-private/k2/k2-front-end/commit/a53e2cd6f3196733f3a4bdd2b52fac05f5517223))

## [2.17.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.17.0...@k2-packages/ui-kit@2.17.1) (2021-08-18)

### Bug Fixes

- axis control ladder ([8bbdbf2](https://gitlab.com/kontur-private/k2/k2-front-end/commit/8bbdbf2d3c7f952df7c4b3a3c5a485fd18e6294b))

# [2.17.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.16.0...@k2-packages/ui-kit@2.17.0) (2021-08-13)

**Note:** Version bump only for package @k2-packages/ui-kit

# [2.16.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.15.2...@k2-packages/ui-kit@2.16.0) (2021-08-13)

### Bug Fixes

- add missing exports ([6d4eb1a](https://gitlab.com/kontur-private/k2/k2-front-end/commit/6d4eb1ad21c255b1c074c91751160cb8477c2e64))

### Features

- add active state for button ([ef83d58](https://gitlab.com/kontur-private/k2/k2-front-end/commit/ef83d58102b4751f905802ab4dc71edda55babdc))
- use new color system ([2cc3947](https://gitlab.com/kontur-private/k2/k2-front-end/commit/2cc39471022b664bbcf21d245893ecc7bf67e22d))

## [2.15.2](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.15.1...@k2-packages/ui-kit@2.15.2) (2021-08-11)

### Bug Fixes

- main file name ([a404a34](https://gitlab.com/kontur-private/k2/k2-front-end/commit/a404a34031088a4386ccd94d348bd6d02e73d3a1))

## [2.15.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.15.0...@k2-packages/ui-kit@2.15.1) (2021-08-11)

### Bug Fixes

- add exports and auto check for feature ([fbca0aa](https://gitlab.com/kontur-private/k2/k2-front-end/commit/fbca0aa1ab50ee9d6d67fb5307eca6884f794816))

# [2.15.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.14.3...@k2-packages/ui-kit@2.15.0) (2021-08-09)

### Bug Fixes

- autofix eslint rules ([4d2e7d0](https://gitlab.com/kontur-private/k2/k2-front-end/commit/4d2e7d09186fb5dc9c1236623de359737df2b70f))
- color in input ([967336d](https://gitlab.com/kontur-private/k2/k2-front-end/commit/967336d1526eb3e1ec9e30042c275edfead7e528))
- legend now support different sizes ([cdcd55b](https://gitlab.com/kontur-private/k2/k2-front-end/commit/cdcd55bca96bfad8ddbe4b1eef583f9df686138c))
- manual fixes of linting ([2a62d46](https://gitlab.com/kontur-private/k2/k2-front-end/commit/2a62d46d7fa8bea26c8f7185f43f9fa444b6ff84))
- radio in checkbox broken layout in chrome ([37f50f3](https://gitlab.com/kontur-private/k2/k2-front-end/commit/37f50f31ac894de6ef1bee9c547ffc4f11d20d8f))
- test failing sinse react 17 not supported ([6691b64](https://gitlab.com/kontur-private/k2/k2-front-end/commit/6691b643d8ed34e622b836965809cb5c795b1cd9))

### Features

- add cosmos decorator ([6732d8f](https://gitlab.com/kontur-private/k2/k2-front-end/commit/6732d8fcca65a835e1547028473363495bfe481e))
- add new checkboxes ([220de3c](https://gitlab.com/kontur-private/k2/k2-front-end/commit/220de3c0bb4b9265f2f24fca19e503ef465abfa9))
- add sizes ([e79125e](https://gitlab.com/kontur-private/k2/k2-front-end/commit/e79125ebe86436e41b90935e462d48cf2df3f448))
- app header ([f0da602](https://gitlab.com/kontur-private/k2/k2-front-end/commit/f0da6023b0e24a46666a3321227b675c7aa840fc))
- Details ([bcb3f0b](https://gitlab.com/kontur-private/k2/k2-front-end/commit/bcb3f0b911b91801a8c64957cabd9314126b3b78))
- fixature for slider ([c08f48e](https://gitlab.com/kontur-private/k2/k2-front-end/commit/c08f48ead1a66ed4c92eab35302e3da425694a9f))
- improve perfomance of legend ([769307f](https://gitlab.com/kontur-private/k2/k2-front-end/commit/769307f2c52603ea67addae1edbbd21514a6b594))
- map button ([5932357](https://gitlab.com/kontur-private/k2/k2-front-end/commit/593235721b1b810adf44738951469ebe9837e119))
- Pannel and Card ([e34dfb8](https://gitlab.com/kontur-private/k2/k2-front-end/commit/e34dfb896500953507146aba3157514b752be4ef))
- redesign selector ([4bf9aa0](https://gitlab.com/kontur-private/k2/k2-front-end/commit/4bf9aa01f6ffc881551c23c5f1ddd0d3d96b04df))
- Tabs ([755778b](https://gitlab.com/kontur-private/k2/k2-front-end/commit/755778b629e4bf35e7c6be385661f764bd6c4ed3))
- Toogler ([124aeb5](https://gitlab.com/kontur-private/k2/k2-front-end/commit/124aeb57143cb9d7868864184f7ed7a1e2827cac))
- update deps to latest versions ([6ff940e](https://gitlab.com/kontur-private/k2/k2-front-end/commit/6ff940e12884bca89684a27397e467abf24404c3))

## [2.14.3](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.14.2...@k2-packages/ui-kit@2.14.3) (2021-08-02)

### Bug Fixes

- enable tree shaking for kit ([e94b136](https://gitlab.com/kontur-private/k2/k2-front-end/commit/e94b1360ccbc07eea438bd818e21352c4a001b1b))

## [2.14.2](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.14.0...@k2-packages/ui-kit@2.14.2) (2021-05-21)

### Bug Fixes

- **bivariate-style:** Remove hardcoded opacity in layer and legend rendering ([b1027d3](https://gitlab.com/kontur-private/k2/k2-front-end/commit/b1027d32fa81e735ee1f74c4d810a97c3a93931b))
- **file-manager:** Add ability to handle emty selection and cancel btn click ([d9d1088](https://gitlab.com/kontur-private/k2/k2-front-end/commit/d9d108853d14c516c809d795c96c4d9b180805fc))

## [2.14.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.14.0...@k2-packages/ui-kit@2.14.1) (2021-05-06)

### Bug Fixes

- **bivariate-style:** Remove hardcoded opacity in layer and legend rendering ([b1027d3](https://gitlab.com/kontur-private/k2/k2-front-end/commit/b1027d32fa81e735ee1f74c4d810a97c3a93931b))

# [2.14.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.13.3...@k2-packages/ui-kit@2.14.0) (2021-03-05)

### Features

- **bivariate-panel:** Add auto-size feaature to bivariate panel ([2d21695](https://gitlab.com/kontur-private/k2/k2-front-end/commit/2d21695e84de5fa90ebf55e5404f05794f26665b))
- **bivariate-tools:** Add autoresize for bivariate matrix ([0b4ec27](https://gitlab.com/kontur-private/k2/k2-front-end/commit/0b4ec273eb3f8ac67149cd0eb0bf0377db6398e4))

## [2.13.3](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.13.2...@k2-packages/ui-kit@2.13.3) (2021-03-01)

### Bug Fixes

- **bivariate-tool:** Update bivariate layout ([dccca54](https://gitlab.com/kontur-private/k2/k2-front-end/commit/dccca5401d68643ae51090daa783abdcefd211e6))

## [2.13.2](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.13.1...@k2-packages/ui-kit@2.13.2) (2021-03-01)

### Bug Fixes

- **axis-control:** Remove legend from AxisControl ([70fa625](https://gitlab.com/kontur-private/k2/k2-front-end/commit/70fa62567d44355867acb5bcac6ac6adac6622d0))

## [2.13.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.13.0...@k2-packages/ui-kit@2.13.1) (2021-02-25)

**Note:** Version bump only for package @k2-packages/ui-kit

# [2.13.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.12.0...@k2-packages/ui-kit@2.13.0) (2021-02-25)

### Features

- **bivariate-legend-v04:** Add axis hover effect ([d5c63c7](https://gitlab.com/kontur-private/k2/k2-front-end/commit/d5c63c7fec954c493744bc331ce4567441390dbf))
- **denominators-selectors:** Change selectors behaviour ([9917a06](https://gitlab.com/kontur-private/k2/k2-front-end/commit/9917a062b73585074920f3d9ca142a80951c5bdc))

# [2.12.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.11.0...@k2-packages/ui-kit@2.12.0) (2021-02-22)

### Features

- **bivariate-v04:** Refactor bivatiate components ([cabc0c4](https://gitlab.com/kontur-private/k2/k2-front-end/commit/cabc0c43834160462dd48b1c13e60b37f5dd874a))

# [2.11.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.10.2...@k2-packages/ui-kit@2.11.0) (2021-02-17)

### Bug Fixes

- **bivariate-v04:** Fix linter ([5ec24ee](https://gitlab.com/kontur-private/k2/k2-front-end/commit/5ec24ee051ae1791dc84583d34dd83c97cf202da))

### Features

- **bivariate-layout:** Change bivariate layout to v0.4 ([088c71b](https://gitlab.com/kontur-private/k2/k2-front-end/commit/088c71b8f2729f9ebe9567ccf377ffc4a0533050))
- **bivariate-v04:** Process visual and data changes ([0f72abb](https://gitlab.com/kontur-private/k2/k2-front-end/commit/0f72abbc7212a6284f21eb51013dd70335846da3))

## [2.10.2](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.10.1...@k2-packages/ui-kit@2.10.2) (2020-12-29)

### Bug Fixes

- Fix build process ([61b61b1](https://gitlab.com/kontur-private/k2/k2-front-end/commit/61b61b132fd950fd5530ddee0223c9ddb230c31a))
- **ui-kit/Rotator:** there is a scroll on maximised view and axis labels are not fully displayed ([0eef2ef](https://gitlab.com/kontur-private/k2/k2-front-end/commit/0eef2ef37717c03a65e21cdaed8728588d25bcdb)), closes [#4587](https://gitlab.com/kontur-private/k2/k2-front-end/issues/4587)

## [2.10.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.10.0...@k2-packages/ui-kit@2.10.1) (2020-12-24)

**Note:** Version bump only for package @k2-packages/ui-kit

# [2.10.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.9.5...@k2-packages/ui-kit@2.10.0) (2020-12-23)

### Bug Fixes

- fix build process ([2cacc97](https://gitlab.com/kontur-private/k2/k2-front-end/commit/2cacc971761e7d6e954502f9d3fa1ffbde507f78))
- Fix tests after code refactoring ([8163ba4](https://gitlab.com/kontur-private/k2/k2-front-end/commit/8163ba448078f88ca395d9782194994a50b6ad8e))
- Table Header styles fix ([280a31a](https://gitlab.com/kontur-private/k2/k2-front-end/commit/280a31a35f921f870970a850af5668dcf513f2fc))
- **bivariate-layer-manager:** Remove (0,0) values from display ([fefa1eb](https://gitlab.com/kontur-private/k2/k2-front-end/commit/fefa1ebc96376e2c1485fe8b214d59ba6b1f185d)), closes [#3796](https://gitlab.com/kontur-private/k2/k2-front-end/issues/3796)
- **denominator-selector:** Add description on the bottom list of normalizations ([7bd9e06](https://gitlab.com/kontur-private/k2/k2-front-end/commit/7bd9e06ac001e40c55aa3901c975d4ccd890a295)), closes [#3785](https://gitlab.com/kontur-private/k2/k2-front-end/issues/3785)

### Features

- **bivariate-selector:** Add ability to show axis quality in denominator ([97bc929](https://gitlab.com/kontur-private/k2/k2-front-end/commit/97bc9290425e8168abd27d409774ebaf59b72286))
- **bivariate-tools:** Show "quality" param for axises ([4524957](https://gitlab.com/kontur-private/k2/k2-front-end/commit/4524957a66c25062c1a7a91d206da394a2611315)), closes [#4279](https://gitlab.com/kontur-private/k2/k2-front-end/issues/4279)
- **bivariate-viewver:** Change the labels on the axes to be fully spelled English words ([c6b572a](https://gitlab.com/kontur-private/k2/k2-front-end/commit/c6b572a8fd7e6c71ce625bfc45e2b41bc7d1b06e)), closes [#3784](https://gitlab.com/kontur-private/k2/k2-front-end/issues/3784)

## [2.9.5](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.9.4...@k2-packages/ui-kit@2.9.5) (2020-12-14)

### Bug Fixes

- **denominator-selector:** Add description on the bottom list of normalizations ([4157596](https://gitlab.com/kontur-private/k2/k2-front-end/commit/4157596c370fdf8d89628f5c66a557c1b190f8aa)), closes [#3785](https://gitlab.com/kontur-private/k2/k2-front-end/issues/3785)

## [2.9.4](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.9.3...@k2-packages/ui-kit@2.9.4) (2020-12-09)

### Bug Fixes

- **denominator-selector:** Add description on the bottom list of normalizations ([085dedf](https://gitlab.com/kontur-private/k2/k2-front-end/commit/085dedf3a011d4dd98e77fcb3f59a19b4e698568)), closes [#3785](https://gitlab.com/kontur-private/k2/k2-front-end/issues/3785)
- **denominator-selector:** Add description on the bottom list of normalizations ([a443365](https://gitlab.com/kontur-private/k2/k2-front-end/commit/a44336556bcbc8e830478774c189f35a657c5fd1)), closes [#3785](https://gitlab.com/kontur-private/k2/k2-front-end/issues/3785)

## [2.9.3](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.9.2...@k2-packages/ui-kit@2.9.3) (2020-12-08)

### Bug Fixes

- **denominator-selector:** Add description on the bottom list of normalizations ([f30c819](https://gitlab.com/kontur-private/k2/k2-front-end/commit/f30c8193436a53c1eca7bd9e89134a2110481411)), closes [#3785](https://gitlab.com/kontur-private/k2/k2-front-end/issues/3785)

## [2.9.2](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.9.1...@k2-packages/ui-kit@2.9.2) (2020-12-04)

### Bug Fixes

- **denominator-selector:** Add description on the bottom list of normalizations ([fd7db66](https://gitlab.com/kontur-private/k2/k2-front-end/commit/fd7db66feda39e1223c41b5d69713cc6271f97a9)), closes [#3785](https://gitlab.com/kontur-private/k2/k2-front-end/issues/3785)

## [2.9.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.9.0...@k2-packages/ui-kit@2.9.1) (2020-12-03)

### Bug Fixes

- **bivariate-tools:** Remove (0,0) values from display ([c193609](https://gitlab.com/kontur-private/k2/k2-front-end/commit/c19360953d9b3f4305abf62867745b469b71d40e)), closes [#3796](https://gitlab.com/kontur-private/k2/k2-front-end/issues/3796)

# [2.9.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.8.1...@k2-packages/ui-kit@2.9.0) (2020-12-02)

### Bug Fixes

- **acxis-control:** Remove unused variable in BivariateMatrixCell.tsx that breaks CI build ([4048c70](https://gitlab.com/kontur-private/k2/k2-front-end/commit/4048c704a86866674e411604ea7df583b8a303f1))
- **axis-control:** Resolve issue with React.FC react/prop-types warning ([886012c](https://gitlab.com/kontur-private/k2/k2-front-end/commit/886012c41b80ae8e6b5b7e52d0b5befb907c3a60))

### Features

- **axis-control:** Add hover on the selected axes ([7da63c8](https://gitlab.com/kontur-private/k2/k2-front-end/commit/7da63c8654e646f94f19186e6834526c3680a7de)), closes [bivariate-layer-manager#3795](https://gitlab.com/bivariate-layer-manager/issues/3795)

## [2.8.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.8.0...@k2-packages/ui-kit@2.8.1) (2020-11-20)

### Bug Fixes

- timing function must be optional ([05e8b5f](https://gitlab.com/kontur-private/k2/k2-front-end/commit/05e8b5f18b117f4d93f3b967be45787863f02bf3))

# [2.8.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.7.1...@k2-packages/ui-kit@2.8.0) (2020-11-20)

### Bug Fixes

- legend legend values overlaps ([9abab5c](https://gitlab.com/kontur-private/k2/k2-front-end/commit/9abab5c0192e633b4eff9968aef88deedcf28286))

### Features

- animation for rotator ([d46c7e1](https://gitlab.com/kontur-private/k2/k2-front-end/commit/d46c7e1831ecbfafe87ea94670e01cf7f741022e))

## [2.7.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.7.0...@k2-packages/ui-kit@2.7.1) (2020-09-07)

**Note:** Version bump only for package @k2-packages/ui-kit

# [2.7.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.6.1...@k2-packages/ui-kit@2.7.0) (2020-09-07)

### Features

- **kit:** add prop for costumize cell size ([0d90234](https://gitlab.com/kontur-private/k2/k2-front-end/commit/0d9023451a58914bd4976d34a61d9ef277557659))

## [2.6.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.6.0...@k2-packages/ui-kit@2.6.1) (2020-09-04)

**Note:** Version bump only for package @k2-packages/ui-kit

# [2.6.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.5.0...@k2-packages/ui-kit@2.6.0) (2020-09-03)

### Bug Fixes

- **kit:** integration issues with legend component ([ce9e404](https://gitlab.com/kontur-private/k2/k2-front-end/commit/ce9e404a269f433621c5a44b7ab39f1327980f84))

### Features

- **kit:** legend component ([3bfc5cc](https://gitlab.com/kontur-private/k2/k2-front-end/commit/3bfc5ccf5d75b1cd7b796d937ff62707428145fd))
- **ui-kit:** optional watch prop for Rtoation component ([4fa3f09](https://gitlab.com/kontur-private/k2/k2-front-end/commit/4fa3f09a5ffe8c52ee92416de208e7e4e515c1f3))

# [2.5.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.4.0...@k2-packages/ui-kit@2.5.0) (2020-09-01)

### Bug Fixes

- bounce after cells selected ([9097461](https://gitlab.com/kontur-private/k2/k2-front-end/commit/9097461994c39a004e9658283cc6c619a749d0c6))

### Features

- add recalc after change ability ([ec34b2e](https://gitlab.com/kontur-private/k2/k2-front-end/commit/ec34b2e07159059ce1d120726c9c1c83c857d02c))

# [2.4.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.3.1...@k2-packages/ui-kit@2.4.0) (2020-09-01)

### Features

- add placeholders cells ([4f46923](https://gitlab.com/kontur-private/k2/k2-front-end/commit/4f46923698dfe73b5e8ec673148b2dacf5781df1))

## [2.3.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.3.0...@k2-packages/ui-kit@2.3.1) (2020-08-31)

### Bug Fixes

- build process ([4df3fcc](https://gitlab.com/kontur-private/k2/k2-front-end/commit/4df3fcc95a5c5e01014856bcbe7b739025f8c046))

# [2.3.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.2.3...@k2-packages/ui-kit@2.3.0) (2020-08-31)

### Features

- add rotation ([0ebded6](https://gitlab.com/kontur-private/k2/k2-front-end/commit/0ebded64370609b2839eded01cc4375c2dd0e524))

## [2.2.3](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.2.2...@k2-packages/ui-kit@2.2.3) (2020-08-28)

**Note:** Version bump only for package @k2-packages/ui-kit

## [2.2.2](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.2.1...@k2-packages/ui-kit@2.2.2) (2020-08-28)

**Note:** Version bump only for package @k2-packages/ui-kit

## [2.2.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.2.0...@k2-packages/ui-kit@2.2.1) (2020-08-26)

### Bug Fixes

- axis control style ([323ef29](https://gitlab.com/kontur-private/k2/k2-front-end/commit/323ef2944cdbf5f31edfdeaed78960c3b957fcee))

# [2.2.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.1.0...@k2-packages/ui-kit@2.2.0) (2020-08-21)

### Features

- useCorrect exports for ui kit ([499d8c1](https://gitlab.com/kontur-private/k2/k2-front-end/commit/499d8c11ca0858700405a04d6e0c06c0d1746c68))

# [2.1.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@2.0.0...@k2-packages/ui-kit@2.1.0) (2020-08-21)

### Features

- upgrade kit ([836b686](https://gitlab.com/kontur-private/k2/k2-front-end/commit/836b686d4ba22b05e894e6b761fffd6921bb3f37))

# [2.0.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.13.0...@k2-packages/ui-kit@2.0.0) (2020-08-20)

### Features

- **kit:** from stylus to css ([b523a17](https://gitlab.com/kontur-private/k2/k2-front-end/commit/b523a17d6f8d87e966b316ca892eaa8ee04e1566))

### BREAKING CHANGES

- **kit:** it's now not work with stylus

# [1.13.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.12.7...@k2-packages/ui-kit@1.13.0) (2020-08-19)

### Bug Fixes

- bugs, added event handlers ([9a38c7e](https://gitlab.com/kontur-private/k2/k2-front-end/commit/9a38c7e976781af91dbc141f5b353af6042a204b))

### Features

- add highlights ([190d9f3](https://gitlab.com/kontur-private/k2/k2-front-end/commit/190d9f36f04fb1b0f7600b3ef5c5b769b5324ea9))
- ui controller ([d7c5b63](https://gitlab.com/kontur-private/k2/k2-front-end/commit/d7c5b631b06ecab2e7e08dc646f77752194282ba))

## [1.12.7](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.12.6...@k2-packages/ui-kit@1.12.7) (2020-07-23)

**Note:** Version bump only for package @k2-packages/ui-kit

## [1.12.6](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.12.5...@k2-packages/ui-kit@1.12.6) (2020-07-23)

**Note:** Version bump only for package @k2-packages/ui-kit

## [1.12.5](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.12.4...@k2-packages/ui-kit@1.12.5) (2020-07-16)

### Bug Fixes

- make option onHover optional ([7240f4b](https://gitlab.com/kontur-private/k2/k2-front-end/commit/7240f4bb48861ed9f8a3ef8857e793399b7d78dd))

## [1.12.4](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.12.2...@k2-packages/ui-kit@1.12.4) (2020-07-06)

**Note:** Version bump only for package @k2-packages/ui-kit

## [1.12.3](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.12.1...@k2-packages/ui-kit@1.12.3) (2020-07-02)

**Note:** Version bump only for package @k2-packages/ui-kit

## [1.12.2](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.12.1...@k2-packages/ui-kit@1.12.2) (2020-07-01)

**Note:** Version bump only for package @k2-packages/ui-kit

## [1.12.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.12.0...@k2-packages/ui-kit@1.12.1) (2020-06-08)

### Bug Fixes

- another ([7a0736e](https://gitlab.com/kontur-private/k2/k2-front-end/commit/7a0736e285ec0aa446efbd9c8f19bd1d36f07003))
- mistake on handlers ([3d80788](https://gitlab.com/kontur-private/k2/k2-front-end/commit/3d8078823eff0a86d0e8410dc45426dfb42d8714))
- selection on focus in safary ([6efb0a4](https://gitlab.com/kontur-private/k2/k2-front-end/commit/6efb0a4764b4d299413a860e226d852b6e6bef9b))

# [1.12.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.11.5...@k2-packages/ui-kit@1.12.0) (2020-06-05)

### Features

- **kit:** add slider ([bdcc1b2](https://gitlab.com/kontur-private/k2/k2-front-end/commit/bdcc1b2b44e0b37d7ccb8bc5dc26da6e42c35ad7))

## [1.11.5](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.11.4...@k2-packages/ui-kit@1.11.5) (2020-06-03)

### Bug Fixes

- extra margin for unvisible element ([f5dde3e](https://gitlab.com/kontur-private/k2/k2-front-end/commit/f5dde3e5fd7de5d5fb48b91dbf4dee0b17efec36))

## [1.11.4](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.11.3...@k2-packages/ui-kit@1.11.4) (2020-06-03)

### Bug Fixes

- **kit:** incorrect disable state in selector ([ef67869](https://gitlab.com/kontur-private/k2/k2-front-end/commit/ef678698f5b8f11a0c1c1f4d34cd47c67964e62c))

## [1.11.3](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.11.2...@k2-packages/ui-kit@1.11.3) (2020-05-28)

**Note:** Version bump only for package @k2-packages/ui-kit

## [1.11.2](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.11.1...@k2-packages/ui-kit@1.11.2) (2020-05-27)

**Note:** Version bump only for package @k2-packages/ui-kit

## [1.11.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.11.0...@k2-packages/ui-kit@1.11.1) (2020-05-25)

### Bug Fixes

- try to fix 2478 ([2f7ffbf](https://gitlab.com/kontur-private/k2/k2-front-end/commit/2f7ffbff862ce0c29f57846c1709fb4ca4c16203))

# [1.11.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.10.2...@k2-packages/ui-kit@1.11.0) (2020-05-22)

### Features

- add reset by esc ability ([a1c2623](https://gitlab.com/kontur-private/k2/k2-front-end/commit/a1c2623e5f11d0eb253e1ae6b341dd7de3735f58))

## [1.10.2](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.10.1...@k2-packages/ui-kit@1.10.2) (2020-05-20)

### Bug Fixes

- 2373 ([ccab3ef](https://gitlab.com/kontur-private/k2/k2-front-end/commit/ccab3efb794db9469ddcaa13722b6b9d27a0c608))

## [1.10.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.9.1...@k2-packages/ui-kit@1.10.1) (2020-05-13)

**Note:** Version bump only for package @k2-packages/ui-kit

# [1.10.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.7.0...@k2-packages/ui-kit@1.10.0) (2020-05-12)

### Bug Fixes

- bug with wrong value on focues event ([aad2451](https://gitlab.com/kontur-private/k2/k2-front-end/commit/aad245159852e3d0da66a16d09dbf97572a43db6))
- scroll position on tab ([3816420](https://gitlab.com/kontur-private/k2/k2-front-end/commit/3816420ce8612895a4e8dd48addcfa73cd936ab4))
- tslint to eslint ([2f551c3](https://gitlab.com/kontur-private/k2/k2-front-end/commit/2f551c33e6e273744bcd312c100b7296e6abfde8))

### Features

- focus on select feature ([5ce3ac4](https://gitlab.com/kontur-private/k2/k2-front-end/commit/5ce3ac4f30240198b1641be0e7b81c4f5d5cc44c))
- onFocus event support ([10e015d](https://gitlab.com/kontur-private/k2/k2-front-end/commit/10e015d60bfcb860c78b2bfc941ed9963d9de86e))
- scroll to selected ([5b70a3c](https://gitlab.com/kontur-private/k2/k2-front-end/commit/5b70a3c18e5823b6ffd93d46f235cac69f7407d7))

## [1.9.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.9.0...@k2-packages/ui-kit@1.9.1) (2020-05-07)

### Bug Fixes

- tslint to eslint ([2f551c3](https://gitlab.com/kontur-private/k2/k2-front-end/commit/2f551c33e6e273744bcd312c100b7296e6abfde8))

# [1.9.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.8.2...@k2-packages/ui-kit@1.9.0) (2020-04-22)

### Bug Fixes

- scroll position on tab ([3816420](https://gitlab.com/kontur-private/k2/k2-front-end/commit/3816420ce8612895a4e8dd48addcfa73cd936ab4))

### Features

- scroll to selected ([5b70a3c](https://gitlab.com/kontur-private/k2/k2-front-end/commit/5b70a3c18e5823b6ffd93d46f235cac69f7407d7))

## [1.8.2](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.8.1...@k2-packages/ui-kit@1.8.2) (2020-04-21)

**Note:** Version bump only for package @k2-packages/ui-kit

## [1.8.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.8.0...@k2-packages/ui-kit@1.8.1) (2020-04-21)

**Note:** Version bump only for package @k2-packages/ui-kit

# [1.8.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.6.1...@k2-packages/ui-kit@1.8.0) (2020-04-21)

### Bug Fixes

- bug with wrong value on focues event ([aad2451](https://gitlab.com/kontur-private/k2/k2-front-end/commit/aad245159852e3d0da66a16d09dbf97572a43db6))

### Features

- focus on select feature ([5ce3ac4](https://gitlab.com/kontur-private/k2/k2-front-end/commit/5ce3ac4f30240198b1641be0e7b81c4f5d5cc44c))
- onFocus event support ([10e015d](https://gitlab.com/kontur-private/k2/k2-front-end/commit/10e015d60bfcb860c78b2bfc941ed9963d9de86e))
- **geocoder:** improve focus logick ([1d53b68](https://gitlab.com/kontur-private/k2/k2-front-end/commit/1d53b68fe00b7a88e435dc7c2e074be3a386c8de))

# [1.7.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.6.1...@k2-packages/ui-kit@1.7.0) (2020-04-16)

### Features

- **geocoder:** improve focus logick ([1d53b68](https://gitlab.com/kontur-private/k2/k2-front-end/commit/1d53b68fe00b7a88e435dc7c2e074be3a386c8de))

## [1.6.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.6.0...@k2-packages/ui-kit@1.6.1) (2020-04-15)

**Note:** Version bump only for package @k2-packages/ui-kit

# [1.6.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.5.0...@k2-packages/ui-kit@1.6.0) (2020-04-15)

### Bug Fixes

- disable widh ([fd70322](https://gitlab.com/kontur-private/k2/k2-front-end/commit/fd70322d74ac452c7d722635d0ea6ae99b517b87))

### Features

- add styling features ([2cbbc9a](https://gitlab.com/kontur-private/k2/k2-front-end/commit/2cbbc9ae51d02d0a5c8585cf042ba9e6c6673d28))

# [1.5.0](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.4.0...@k2-packages/ui-kit@1.5.0) (2020-04-13)

### Bug Fixes

- **dependencies:** unify for dependecies ([4fd5b9f](https://gitlab.com/kontur-private/k2/k2-front-end/commit/4fd5b9fae0e550d2aa30af4334f9e3dbe892e476))
- component crush ([8750b5b](https://gitlab.com/kontur-private/k2/k2-front-end/commit/8750b5b3c8748be4a34bff551afce32fda6e83a9))

### Features

- add support mapbox layers spec ([bf36c2e](https://gitlab.com/kontur-private/k2/k2-front-end/commit/bf36c2e65e1258b07528a8fa055068a507787a03))

# 1.4.0 (2020-04-01)

### Bug Fixes

- add export interface ([52789c8](https://gitlab.com/kontur-private/k2/k2-front-end/commit/52789c897b6ef46e7a289058d855baa69ac428b5))
- ide syntax highlight ([847a045](https://gitlab.com/kontur-private/k2/k2-front-end/commit/847a0450123ea0307ba36af55ac2806ae75054a9))
- revert version ([0d9231c](https://gitlab.com/kontur-private/k2/k2-front-end/commit/0d9231ca15dd34209055c93454edb0fdc2f16c29))
- small style fixes ([4b0dab1](https://gitlab.com/kontur-private/k2/k2-front-end/commit/4b0dab17c5088d5ec1e4ba7899c2adff9a15c314))
- stylus migration ([bc3ad2c](https://gitlab.com/kontur-private/k2/k2-front-end/commit/bc3ad2cdc8e1cda1a55094b18e1053f2028b27ce))

### Features

- add 'nothing-found' state ([ea23799](https://gitlab.com/kontur-private/k2/k2-front-end/commit/ea237997fa0d8fbd172405f1ceea1e75972ef71a))
- add dropdown as part of ui kit ([12c259b](https://gitlab.com/kontur-private/k2/k2-front-end/commit/12c259b02ce307b754841a4ae98ef33ea5a4df2c))
- add isFocused prop in input ([da62b7e](https://gitlab.com/kontur-private/k2/k2-front-end/commit/da62b7ece5f15f11118b48e76697d3e457d6822c))
- add ref forwarding ([121b6eb](https://gitlab.com/kontur-private/k2/k2-front-end/commit/121b6eb3dcd27a8c62585337cc2ee4ec22d9e851))
- fire stations list ([1af661f](https://gitlab.com/kontur-private/k2/k2-front-end/commit/1af661f87832a04829cc511186c6b16643f96013))
- forebridge mvp ([d226d81](https://gitlab.com/kontur-private/k2/k2-front-end/commit/d226d81c527a6df9e6622df26e48c0e6321933de))
- move input to lib ([56e6bf5](https://gitlab.com/kontur-private/k2/k2-front-end/commit/56e6bf5bf0789765e4ee18c59ed4c203262a2baf))

## [1.3.1](https://gitlab.com/kontur-private/k2/k2-front-end/compare/@k2-packages/ui-kit@1.3.0...@k2-packages/ui-kit@1.3.1) (2020-04-01)

**Note:** Version bump only for package @k2-packages/ui-kit

# 1.3.0 (2020-04-01)

### Bug Fixes

- add export interface ([52789c8](https://gitlab.com/kontur-private/k2/k2-front-end/commit/52789c897b6ef46e7a289058d855baa69ac428b5))
- ide syntax highlight ([847a045](https://gitlab.com/kontur-private/k2/k2-front-end/commit/847a0450123ea0307ba36af55ac2806ae75054a9))
- revert version ([0d9231c](https://gitlab.com/kontur-private/k2/k2-front-end/commit/0d9231ca15dd34209055c93454edb0fdc2f16c29))
- small style fixes ([4b0dab1](https://gitlab.com/kontur-private/k2/k2-front-end/commit/4b0dab17c5088d5ec1e4ba7899c2adff9a15c314))
- stylus migration ([bc3ad2c](https://gitlab.com/kontur-private/k2/k2-front-end/commit/bc3ad2cdc8e1cda1a55094b18e1053f2028b27ce))

### Features

- add 'nothing-found' state ([ea23799](https://gitlab.com/kontur-private/k2/k2-front-end/commit/ea237997fa0d8fbd172405f1ceea1e75972ef71a))
- add dropdown as part of ui kit ([12c259b](https://gitlab.com/kontur-private/k2/k2-front-end/commit/12c259b02ce307b754841a4ae98ef33ea5a4df2c))
- add isFocused prop in input ([da62b7e](https://gitlab.com/kontur-private/k2/k2-front-end/commit/da62b7ece5f15f11118b48e76697d3e457d6822c))
- add ref forwarding ([121b6eb](https://gitlab.com/kontur-private/k2/k2-front-end/commit/121b6eb3dcd27a8c62585337cc2ee4ec22d9e851))
- fire stations list ([1af661f](https://gitlab.com/kontur-private/k2/k2-front-end/commit/1af661f87832a04829cc511186c6b16643f96013))
- forebridge mvp ([d226d81](https://gitlab.com/kontur-private/k2/k2-front-end/commit/d226d81c527a6df9e6622df26e48c0e6321933de))
- move input to lib ([56e6bf5](https://gitlab.com/kontur-private/k2/k2-front-end/commit/56e6bf5bf0789765e4ee18c59ed4c203262a2baf))

# 1.2.0 (2020-03-26)

### Bug Fixes

- add export interface ([52789c8](https://gitlab.com/kontur-private/k2/k2-front-end/commit/52789c897b6ef46e7a289058d855baa69ac428b5))
- ide syntax highlight ([847a045](https://gitlab.com/kontur-private/k2/k2-front-end/commit/847a0450123ea0307ba36af55ac2806ae75054a9))
- revert version ([0d9231c](https://gitlab.com/kontur-private/k2/k2-front-end/commit/0d9231ca15dd34209055c93454edb0fdc2f16c29))
- small style fixes ([4b0dab1](https://gitlab.com/kontur-private/k2/k2-front-end/commit/4b0dab17c5088d5ec1e4ba7899c2adff9a15c314))
- stylus migration ([bc3ad2c](https://gitlab.com/kontur-private/k2/k2-front-end/commit/bc3ad2cdc8e1cda1a55094b18e1053f2028b27ce))

### Features

- add ref forwarding ([121b6eb](https://gitlab.com/kontur-private/k2/k2-front-end/commit/121b6eb3dcd27a8c62585337cc2ee4ec22d9e851))
- fire stations list ([1af661f](https://gitlab.com/kontur-private/k2/k2-front-end/commit/1af661f87832a04829cc511186c6b16643f96013))
- forebridge mvp ([d226d81](https://gitlab.com/kontur-private/k2/k2-front-end/commit/d226d81c527a6df9e6622df26e48c0e6321933de))
- move input to lib ([56e6bf5](https://gitlab.com/kontur-private/k2/k2-front-end/commit/56e6bf5bf0789765e4ee18c59ed4c203262a2baf))

# 1.1.0 (2020-03-25)

### Bug Fixes

- add export interface ([52789c8](https://gitlab.com/kontur-private/k2/k2-front-end/commit/52789c897b6ef46e7a289058d855baa69ac428b5))
- ide syntax highlight ([847a045](https://gitlab.com/kontur-private/k2/k2-front-end/commit/847a0450123ea0307ba36af55ac2806ae75054a9))
- revert version ([0d9231c](https://gitlab.com/kontur-private/k2/k2-front-end/commit/0d9231ca15dd34209055c93454edb0fdc2f16c29))
- small style fixes ([4b0dab1](https://gitlab.com/kontur-private/k2/k2-front-end/commit/4b0dab17c5088d5ec1e4ba7899c2adff9a15c314))
- stylus migration ([bc3ad2c](https://gitlab.com/kontur-private/k2/k2-front-end/commit/bc3ad2cdc8e1cda1a55094b18e1053f2028b27ce))

### Features

- add ref forwarding ([121b6eb](https://gitlab.com/kontur-private/k2/k2-front-end/commit/121b6eb3dcd27a8c62585337cc2ee4ec22d9e851))
- fire stations list ([1af661f](https://gitlab.com/kontur-private/k2/k2-front-end/commit/1af661f87832a04829cc511186c6b16643f96013))
- forebridge mvp ([d226d81](https://gitlab.com/kontur-private/k2/k2-front-end/commit/d226d81c527a6df9e6622df26e48c0e6321933de))
- move input to lib ([56e6bf5](https://gitlab.com/kontur-private/k2/k2-front-end/commit/56e6bf5bf0789765e4ee18c59ed4c203262a2baf))
