<!-- Plugins for compatibility with the use of `import()`
https://babeljs.io/docs/en/next/babel-plugin-syntax-dynamic-import.html

Plugins for performance
https://babeljs.io/docs/en/next/babel-plugin-transform-runtime.html

Plugins for writing 
`export default "someModule"`
https://www.npmjs.com/package/babel-plugin-add-module-exports

Plugins for removing propTypes as it benefits bandwidth
https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types -->
# Thing Discovered Step by Step:
- in package.json the field `files` let you specify what files/folder to publish [stackoverflow](https://stackoverflow.com/questions/40795836/how-do-you-use-the-files-and-directories-properties-in-package-json)
- in package.json the field `main` let you specify where your file with all the exports is. Default to `index.js` at root level [offical doc](https://docs.npmjs.com/files/package.json#main)
 

# Dev Dependency

## Building
- [@babel/cli](https://babeljs.io/docs/en/babel-cli)
- [@babel/core](https://babeljs.io/docs/en/next/babel-core.html)
- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react)
<!-- - [@babel/plugin-proposal-export-namespace-from](https://www.npmjs.com/package/@babel/plugin-proposal-export-namespace-from): Let you write `export * as someIdentifier from "someModule";`
- [@babel/plugin-proposal-export-default-from](https://www.npmjs.com/package/@babel/plugin-proposal-export-default-from): Let you write `export someIdentifier from "someModule";`
`export someIdentifier, { namedIdentifier } from "someModule";` -->
<!-- 
- [@react-bootstrap/babel-preset](https://www.npmjs.com/package/@react-bootstrap/babel-preset): a preset configuration of babel. Go into this project node_modules/@react-bootstrap/babel-preset/index.js to see what babel plugin it use -->
<!-- - [cherry-pick](https://www.npmjs.com/package/cherry-pick): build tool for generate proxy directories with package.json -->
<!-- - [execa](https://www.npmjs.com/package/execa): utility for better interaction with shell commands -->
<!-- - [fs-extra](https://www.npmjs.com/package/fs-extra): utility for better interaction with filesystem -->
<!-- - [webpack](https://webpack.js.org/): to bundle minified version of the library, browser distributable -->