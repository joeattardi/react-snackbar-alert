# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2019-06-09
### Added
- Support for themes

## [2.0.1] - 2019-06-07
### Changed
- The library is now bundled in UMD format, with its dependencies

## [2.0.0] - 2019-06-07
### Changed
- All-new implementation that uses the React Context API instead of refs

## [1.9.0] - 2019-06-03
### Added
- Support for Internet Explorer 11

## [1.8.0] - 2019-06-01
### Added
- Support for changing the position of the snackbars on screen

## [1.7.1] - 2019-06-01
### Changed
- Fixed progress bar having the wrong duration when using a custom timeout

## [1.7.0] - 2019-06-01
### Changed
- All styling now done via `styled-components` - no longer need to import CSS. To prevent broken imports, the CSS file will 
  remain in place for now, but will be removed at a later date.

## [1.6.0] - 2019-05-31
### Added
- Support for pause on hover - a snackbar's timeout can be paused by hovering over it (disabled by default)

## [1.5.0] - 2019-05-29
### Added
- Optional animated progress bar indicating the time before a snackbar is removed
- Support for sticky snackbars - no automatic removal

### Changed
- Custom snackbar components now will have the show and hide animations applied.

## [1.4.1] - 2019-05-29
### Changed
- Don't include test files when publishing to npm

## [1.4.0] - 2019-05-29
### Added
- Support for dismissable snackbar notifications

## [1.3.0] - 2019-05-26
### Added
- Support for custom arbitrary data for a snackbar

## [1.2.0] - 2019-05-26
### Added
- Ability to use a custom snackbar component

## [1.1.0] - 2019-05-25
### Added
- Configurable show and hide animations

## [1.0.0] - 2019-05-23
Initial release.
