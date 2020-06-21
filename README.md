![logo](https://github.com/anikethsaha/style-perfectionist/blob/master/style-perfectionist-logo.JPG)

# style-perfectionist [![Build Status](https://travis-ci.org/anikethsaha/style-perfectionist.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/style-perfectionist.svg)][npm]

> Beautify CSS files.

This is an active development fork of [perfectionist](https://github.com/ben-eb/perfectionist) as that is deprecated.

## Install

With [npm](https://npmjs.org/package/style-perfectionist) do:

```
npm install style-perfectionist --save
```

## For browser

add the following script

```html
<script src="https://cdn.jsdelivr.net/npm/style-perfectionist/dist/standalone.js"></script>
```

And to use it,

```html
<script>
    console.log(window.stylePerfectionist.process("h1{}", {}).toString());
    /*
        output:
            h1{
            }
    */
</script>
```

## Example

### Input

```css
h1 {
    color: red;
}
```

### Expanded output

```css
h1 {
    color: red;
}
```

### Compact output

```css
h1 {
    color: red;
}
```

### Compressed output

```css
h1 {
    color: red;
}
```

## API

### stylePerfectionist.process(css, [options])

#### css

Type: `string`
_Required option._

Pass a CSS string to beautify it.

#### options

##### cascade

Type: `boolean`
Default: `true`

Set this to `false` to disable visual cascading of vendor prefixed properties.
Note that this transform only applies to the `expanded` format.

```css
/* true */
/* true */
h1 {
    -webkit-border-radius: 12px;
    border-radius: 12px;
}

/* false */
h1 {
    -webkit-border-radius: 12px;
    border-radius: 12px;
}
```

##### colorCase

Type: `string`
Default: `lower`

Set either `lower` or `upper` to transform hexadecimal colors to the according case.

```css
/* upper */
p {
    color: #c8c8c8;
}

/* lower */
p {
    color: #c8c8c8;
}
```

##### colorShorthand

Type: `boolean`
Default: `true`

Set this to `true` to shorten hexadecimal colors.

```css
/* true */
p {
    color: #fff;
}

/* false */
p {
    color: #ffffff;
}
```

##### format

Type: `string`
Default: `expanded`

Pass either `expanded`, `compact` or `compressed`. Note that the `compressed`
format only facilitates simple whitespace compression around selectors &
declarations. For more powerful compression, see [cssnano].

##### indentChar

Type: `string`
Default: `` (space)

Specify `\t` here instead if you would like to use tabs for indentation.

##### indentSize

Type: `number`
Default: `4`

This number will be used as a basis for all indent levels, using the `expanded`
format.

##### trimLeadingZero

Type: `boolean`
Default: `true`

Set this to `true` to trim leading zero for fractional numbers less than 1.

```css
/* true */
p {
    line-height: 0.8;
}

/* false */
p {
    line-height: 0.8;
}
```

##### trimTrailingZeros

Type: `boolean`
Default: `true`

Set this to `true` to traim trailing zeros in numbers.

```css
/* true */
div {
    top: 50px;
}

/* false */
div {
    top: 50px;
}
```

##### maxAtRuleLength

Type: `boolean|number`
Default: `80`

If set to a positive integer, set a maximum width for at-rule parameters; if
they exceed this, they will be split up over multiple lines. If false, this
behaviour will not be performed. Note that this transform only applies to
the `expanded` format.

##### maxSelectorLength

Type: `boolean|number`
Default: `80`

If set to a positive integer, set a maximum width for a selector string; if
it exceeds this, it will be split up over multiple lines. If false, this
behaviour will not be performed. Note that this transform is excluded from the
`compressed` format.

##### maxValueLength

Type: `boolean|number`
Default: `80`

If set to a positive integer, set a maximum width for a property value; if
it exceeds this, it will be split up over multiple lines. If false, this
behaviour will not be performed. Note that this transform only applies to
the `expanded` format.

##### sourcemap

Type: `boolean`
Default: `false`

Generate a sourcemap with the transformed CSS.

##### syntax

Type: `string`

Specify `scss` if you would like to also format SCSS-style single line comments.
This loads the [postcss-scss](https://github.com/postcss/postcss-scss) plugin.

##### zeroLengthNoUnit

Type: `boolean`
Default: `true`

Set this to `true` to trim units after zero length.

```css
/* true */
div {
    padding: 0;
}

/* false */
div {
    padding: 0px;
}
```

### `postcss([ stylePerfectionist(opts) ])`

style-perfectionist can also be consumed as a PostCSS plugin. See the
[documentation](https://github.com/postcss/postcss#usage) for examples for
your environment.

### CLI

style-perfectionist also ships with a CLI app. To see the available options, just run:

```sh
$ style-perfectionist --help
```

#### config file.

We support loading using config file.

The recommended config file name should be `.style-perfectionistrc` or `.style-perfectionistrc.js` or `.style-perfectionist.yml`.
For supportting extension and name format, refer [this](https://github.com/davidtheclark/cosmiconfig#explorersearch).

Examples

```shell
$ style-perfectionist -c .
$ style-perfectionist -c .style-perfectionistrc
$ style-perfectionist -c ../style-perfectionist.config.js
```

## Usage

See the [PostCSS documentation](https://github.com/postcss/postcss#usage) for
examples for your environment.

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.

[ci]: https://travis-ci.org/anikethsaha/style-perfectionist
[cssnano]: https://github.com/anikethsaha/cssnano
[deps]: https://gemnasium.com/anikethsaha/style-perfectionist
[npm]: http://badge.fury.io/js/style-perfectionist
[postcss]: https://github.com/postcss/postcss
