# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [0.1.0] - 2019-08-13

### Summary

- Released the module! 🎉

### Added

- The component library.

### Changed

### Removed

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

## [0.2.1] - 2019-08-20

### Summary

- Factory methods' debug mode fixed.
- Fixed breaking imports.
- Fixed a typo on README

### Added

### Changed

- Fixed factory methods' debug mode removing the spaces instead of highlighting them.
- The unused library files in /lib was breaking imports.
- Fixed a typo on README.

### Removed

- Unused library files.
