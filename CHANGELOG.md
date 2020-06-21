# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0-alpha.0](https://github.com/anikethsaha/style-perfectionist/compare/v0.0.1...v1.0.0-alpha.0) (2020-06-21)


### Bug Fixes

* added tests to check comments comma separation (fixes [#3](https://github.com/anikethsaha/style-perfectionist/issues/3)) ([363366a](https://github.com/anikethsaha/style-perfectionist/commit/363366a))
* fixed inconsistency in config loading ([5883405](https://github.com/anikethsaha/style-perfectionist/commit/5883405))
* fixed removal of 0.0 (fixes [#2](https://github.com/anikethsaha/style-perfectionist/issues/2)) ([fcbef36](https://github.com/anikethsaha/style-perfectionist/commit/fcbef36))


### Features

* added standalone build for browser (fixes [#6](https://github.com/anikethsaha/style-perfectionist/issues/6)) ([a38e0a3](https://github.com/anikethsaha/style-perfectionist/commit/a38e0a3))
* config file (fixes [#1](https://github.com/anikethsaha/style-perfectionist/issues/1)) ([18f0790](https://github.com/anikethsaha/style-perfectionist/commit/18f0790))
* playground initial ([b1787f1](https://github.com/anikethsaha/style-perfectionist/commit/b1787f1))



### 0.0.1 (2020-06-15)


### Build System

* fixed typo for prepublish script ([f1a1f40](https://github.com/anikethsaha/style-perfectionist/commit/f1a1f40))



# 2.4.0

* Adds support for tab indentation (thanks to @solidflows).

# 2.3.1

* Better handling of trailing/leading zeroes & hex colour case transformations
  (thanks to @vansosnin).
* Now parses values rather than applying regular expressions to values, using
  postcss-value-parser.
* Resolves an issue where fractions were being incorrectly transformed.
* Resolves an issue where parentheses inside string literals were being
  erroneously transformed.
* Resolves an issue where base64 content was being incorrectly transformed
  to lower case.

# 2.3.0

* Add options to handle zeroes - trim leading/trailing zeroes, and removing
  units from zero lengths (thanks to @vansosnin).

# 2.2.0

* Add options to format hex colours (thanks to @vansosnin).

# 2.1.4

* Replaced internal vendor prefixes list with the vendors module.
* Uses Babel's object assign.
* Ensures that the expanded format is used when the option is set to undefined.

# 2.1.3

* Fixes an issue where extra space was being added to commas inside strings,
  mangling base64 URLs (thanks to @Mottie, @silverwind, @denji).

# 2.1.2

* Fixes an integration issue with PostCSS 5.0.6.

# 2.1.1

* Fixes a plugin integration issue where `undefined` was appearing in
  the output.

# 2.1.0

* Adds scss syntax support.
* Better formatting of functions; `rgb(0,0,0)` becomes `rgba(0, 0, 0)`
  (thanks to @yisibl).

# 2.0.0

* Upgrade to PostCSS 5.x.

# 1.4.1

* Fixed an issue where perfectionist would add an extra space in between
  at rules with no child nodes (for example, `@import`).

# 1.4.0

* Added an option to disable the visual cascade of properties.
* Fixed an issue where at-rules were not getting an appropriate amount of
  newlines following the rule.
* Fixed an issue where comments in values were being removed.
* Where possible, perfectionist will condense multi-line selectors into
  a single line.

# 1.3.1

* perfectionist will now not remove comments within selector strings.

# 1.3.0

* Better formatting of comments inside rules.
* Better formatting of selectors inside at-rules.
* Added an option to configure the indent size.

# 1.2.2

* Fixes a crash when a comment ended the file.

# 1.2.1

* Fixes an issue where comments were being removed from inside nodes.

# 1.2.0

* Adds support for configurable wrapping of property values over multiple lines.
* Adds support for configurable wrapping of at-rule parameters.

# 1.1.0

* Adds support for newlines around block comments in both `expanded` and
  `compact` formats.

# 1.0.2

* Fixes a crash on comments inside rules.

# 1.0.1

* Fixes a behaviour where the module was trying to add negative space to a
  property when re-aligning.

# 1.0.0

* Initial release.
