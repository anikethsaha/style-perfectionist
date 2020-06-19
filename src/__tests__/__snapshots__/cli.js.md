# Snapshot report for `src/__tests__/cli.js`

The actual snapshot is saved in `cli.js.snap`.

Generated by [AVA](https://avajs.dev).

## cli: config : empty

> should transform the css as default config

    `h1 {␊
        color: red;␊
    ␊
        & h2 {␊
            color: yellow;␊
    ␊
            & h3 {␊
                color: green;␊
            }␊
        }␊
    }`

## cli: config : compact

> should transform the css as compact format

    `h1 {␊
     color: red;␊
     & h2 {␊
      color: yellow;␊
      & h3 { color: green; }␊
     }␊
    }`

## cli: config : compressed

> should transform the css as compact format

    'h1{color:red;& h2{color:yellow;& h3{color:green}}}'

## cli: defaults

> Snapshot 1

    `h1 {␊
        color: red;␊
    ␊
        & h2 {␊
            color: yellow;␊
    ␊
            & h3 {␊
                color: green;␊
            }␊
        }␊
    }`