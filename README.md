# Demo of a very specific bug with `rollup-plugin-node-globals`

this plugin will produce a syntax error on the optional chain operator (`?.`) when the word global is in a comment.

Please follow the steps below to reproduce the issue.

## Steps to reproduce

1. Clone this repo
2. Run `npm install`

## Test Cases:

### Case1: Produce a failure with a comment containing the word global

run `npm run build:fails`

#### Observe

Error in the terminal:

```shell
 Unexpected token (25:50) rollup-plugin-node-globals-error/src/scripts/main-with-global-comment.js
src/scripts/main-with-global-comment.js (25:50)
```

### Case 2: Produce a failure regardless of where the comment is

1. edit `src/scripts/main-with-global-comment.js` and move the comment to line 22
2. Save it
3. run `npm run build:fails`

#### Observe

Error in the terminal:

```shell
 Unexpected token (26:50) rollup-plugin-node-globals-error/src/scripts/main-with-global-comment.js
src/scripts/main-with-global-comment.js (25:50)
```

### Case 3: Produce a failure regardless of the word standing alone or in a string

1. edit `src/scripts/main-with-global-comment.js` and write `globalfoo` in the comment
2. Save it
3. run `npm run build:fails`

#### Observe

Error in the terminal:

```shell
 Unexpected token (25:50) rollup-plugin-node-globals-error/src/scripts/main-with-global-comment.js
src/scripts/main-with-global-comment.js (25:50)
```

#### Expected

It should not put a syntax error on line 25, column 50. which is the optional chain operator.

### Case 4:  Produce a success by not using the plugin

run `npm run build:succeeds:noplugin`

#### Observe

It builds

### Case 5:  Produce a success by removing the comment

run `npm run build:succeeds:nocomment`

#### Observe

It builds

