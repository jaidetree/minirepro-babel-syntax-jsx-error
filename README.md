<!-- Related issue: https://phabricator.babeljs.io/T6976 -->

```sh
$ git clone https://github.com/jayzawrotny/minirepro-babel-syntax-jsx-error.git
$ cd minirepro-babel-syntax-jsx-error
$ npm i
$ npm run repro
```

# Expected result
That babel is able to parse the JSX but only transforms the import statements into require statements.

# Actual result
Babel stops in the middle of parsing and prints an error:

```
$ npm run repro

> @ repro /Users/jay/Projects/repos/babel
> node repro

/Users/jay/Projects/repos/babel/node_modules/babel-core/lib/transformation/file/index.js:548
      throw err;
      ^

TypeError: /Users/jay/Projects/repos/babel/src/input.jsx: Property name of JSXOpeningElement expected node to be of a type ["JSXIdentifier","JSXMemberExpression"] but instead got "MemberExpression"
    at Object.validate (/Users/jay/Projects/repos/babel/node_modules/babel-types/lib/definitions/index.js:101:13)
    at Object.validate (/Users/jay/Projects/repos/babel/node_modules/babel-types/lib/index.js:268:9)
    at NodePath._replaceWith (/Users/jay/Projects/repos/babel/node_modules/babel-traverse/lib/path/replacement.js:201:7)
    at NodePath.replaceWith (/Users/jay/Projects/repos/babel/node_modules/babel-traverse/lib/path/replacement.js:179:8)
    at Object.ReferencedIdentifier (/Users/jay/Projects/repos/babel/node_modules/babel-plugin-transform-es2015-modules-commonjs/lib/index.js:56:14)
    at Object.newFn (/Users/jay/Projects/repos/babel/node_modules/babel-traverse/lib/visitors.js:309:17)
    at NodePath._call (/Users/jay/Projects/repos/babel/node_modules/babel-traverse/lib/path/context.js:74:18)
    at NodePath.call (/Users/jay/Projects/repos/babel/node_modules/babel-traverse/lib/path/context.js:46:17)
    at NodePath.visit (/Users/jay/Projects/repos/babel/node_modules/babel-traverse/lib/path/context.js:104:12)
    at TraversalContext.visitQueue (/Users/jay/Projects/repos/babel/node_modules/babel-traverse/lib/context.js:153:16)

npm ERR! Darwin 15.2.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "run" "repro"
npm ERR! node v5.3.0
npm ERR! npm  v3.3.12
npm ERR! code ELIFECYCLE
npm ERR! @ repro: `node repro`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the @ repro script 'node repro'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the  package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     node repro
npm ERR! You can get their info via:
npm ERR!     npm owner ls
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/jay/Projects/repos/babel/npm-debug.log

```
