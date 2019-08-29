# Changelog

All notable changes to this project will be documented in this file.

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
