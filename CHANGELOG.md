# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2021-01-23

### Summary

- Added the option to disallow `layout` prop.
- Added and improved documentation.
- Fixed some type issues.
- Removed depreciated APIs

### Added

- Added a way to disallow `layout` prop for `Inset`, `insetFactory` and `spacingFactory`.
- Added documentation on `layoutStyle`, `typeExport` and release instructions.
- Package now exports more detailed types that composes spacing components.
- Added `onLayout` prop for `Inset`.

### Changed

- Fixed some type issues with `Flow` and `TS`.
- Fixed conditional spread issue for `TS`.
- Disallow scenarios where no padding is provided to `Inset`.
- Changed the main documentation.

### Removed

- Removed `debug`, `debugOptions` and `flex` props.
- Removed `CHANGELOG.md` from library package.

## [1.2.0] - 2020-10-02

### Summary

- Added `spacingFactory` so that all spacing component can be created with one call.

### Added

- Added `layout` prop for `Inset` that allows the control of the component's `LayoutStyles`.
- Added `_debug` and `_debugOptions` which functions the sane way as `debug` and `debugOptions`

### Changed

- Changed `react-native` and `react` to be a peer dependency.
- Changed typing packages for `react-native` and `react` to be a dev dependency.
- Readying the depreciation of `debug`, `debugOptions`, and `flex` props in v2.0.0.
- Debug-mode will only be enabled in `__DEV__` environment.
- Updated the TS and Flow examples to use the new API.
- Updated docs.

### Removed

- N/A

## [1.1.0] - 2020-05-13

### Summary

- Added `spacingFactory` so that all spacing component can be created with one call.

### Added

- `spacingFactory` function and Flow typing support

### Changed

- Edited the README.md a bit.

### Removed

- N/A

## [1.0.0] - 2020-04-12

### Summary

- The library has been used enough to be deemed as stable so v1 is being released.
- Fixed a type error and updated packages.

### Added

- N/A

### Changed

- Fixed a type error and updated packages.

### Removed

- N/A

## [0.4.3] - 2019-10-23

### Summary

- Fixed a bug in insetFactory that was giving errors during debugging.

### Added

- N/A

### Changed

- Fixed a bug in insetFactory that was giving errors during debugging.

### Removed

- N/A

## [0.4.2] - 2019-10-16 (UNSTABLE)

### Summary

- Fixed a dependency issue.

### Added

- N/A

### Changed

- Fixed a dependency issue.

### Removed

- N/A

## [0.4.1] - 2019-10-09 (UNSTABLE)

### Summary

- Fixed a bug that was breaking builds.
- Updated examples

### Added

- N/A

### Changed

- Updated examples so that it can showcase the border option for dubug mode.

### Removed

- Peer-dependencies.

## [0.4.0] - 2019-09-05 (UNSTABLE)

### Summary

- Debug context provider has more features.
- Fixed some bugs.

### Added

- Debug, debug color, border and border color control for each spacing component in context.

### Changed

- Fixed horizontal `Inset` bug.
- Fixed a bug for debug border.

### Removed

- N/A

## [0.3.1] - 2019-08-29

### Summary

- Fixed react-native dependency issue
- Changed license

### Added

- Issue Template
- Feedback Template

### Changed

- GNU lisence to MIT

### Removed

- React-native as dependency

## [0.3.0] - 2019-08-23 (UNSTABLE)

### Summary

- Added Flow typing support

### Added

- Added Flow declarations for:
  - `Inset`
  - `insetFactory`
  - `Queue`
  - `queueFactory`
  - `Stack`
  - `stackFactory`
- Now exports following flow types:
  - `nsetDebugOptions`
  - `InsetProps`
  - `PaddingPossibilities`
  - `QueueDebugOptions`
  - `QueueProps`
  - `StackDebugOptions`
  - `StackProps`
- Added a babel build script in `package.json`.
- Added a react-native project using **flow**.

### Changed

- Updated `README.md` about flow and intro blurb.

### Removed

- N/A

## [0.2.1] - 2019-08-20

### Summary

- Factory methods' debug mode fixed.
- Fixed breaking imports.
- Fixed a typo on `README.md`.

### Added

- N/A

### Changed

- Fixed factory methods' debug mode removing the spaces instead of highlighting them.
- The unused library files in /lib was breaking imports.
- Fixed a typo on README.

### Removed

- Unused library files

## [0.2.0] - 2019-08-20 (UNSTABLE)

### Summary

- Factory methods for `Stack`, `Queue` and `Inset` are not available.
- Fixed typings for `Inset`'s padding combinations.
- Included link to Medium article on `README.md`.

### Added

- `stackFactory` that creates `Stack` given a map of spacing.
- `queueFactory` that creates `Queue` given a map of spacing.
- `insetFactory` that creates `Inset` given a map of spacing.

### Changed

- A link to the blog post explaining the sentiment behind this library was added to `README.md`.
- Examples now use factory methods to obtain `Stack`, `Queue` and `Inset`.
- Moved the flow example project to another repository. [HERE](https://github.com/hirokazutei/react-native-spacing-system-flow-example)

### Removed

- Examples that turned the spacing components that accepts numerical value into one that accepts keys.

## [0.1.1] - 2019-08-15

### Summary

- Updating Documentation
- Improved Examples

### Added

- Added `README.md`, `CHANGELOG.md`, and `LICENSE`
- Gif of `Stack`, `Queue` and `Inset` examples.

### Changed

- Example app's debug mode to be contained within the relevant area.

### Removed

- Sample images for `Stack`, `Queue` and `Inset`.

## [0.1.0] - 2019-08-13

### Summary

- Released the module! 🎉

### Added

- The component library.

### Changed

- N/A

### Removed

- N/A

## [Unreleased]
