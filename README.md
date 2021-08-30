# AxleJS

![MIT LICENSE](https://img.shields.io/github/license/ksplatdev/AxleJS)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/ksplatdev/AxleJS)
![GitHub last commit](https://img.shields.io/github/last-commit/ksplatdev/AxleJS)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ksplatdev/AxleJS/CodeQL)

Fetch, supercharged.

## About

The [Fetch Web API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) is great, but it could be better.

AxleJS supercharges fetch, with better error handling, easier to use options, can automatically follow redirects, an easier way to manage and view headers and search queries, custom response and request classes and methods, and a lot more.

## [Documentation](https://github.com/ksplatdev/AxleJS/wiki/Documenation)

## Features

1. Functions for all HTTP Restful Methods.
2. Use built-in middleware or make custom middleware.
3. Very small, ~10KB Minified and ~17KB Unminified.
4. Fast and easy to use.
5. [Documentation](https://github.com/ksplatdev/AxleJS/wiki/Documenation).
6. Makes fetch easier to use.
7. Better Error handling.
8. Adds cancellation to fetch api.
9. Custom and Extended Response and Request classes.
10. Written in TypeScript.
11. Built-in TypeDefs.

## How to Download

### GitHub

1. Download the [latest release](https://github.com/ksplatdev/AxleJS/releases/latest) from GitHub.
2. Unzip and move contents into your project.
3. Import AxleJS with the [ES6 Import Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).
4. Read the [documentation](https://github.com/ksplatdev/AxleJS/wiki/Documenation).

### NPM

1. Run `npm i axlejs`.
2. Import AxleJS with the [ES6 Import Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).
3. Read the [documentation](https://github.com/ksplatdev/AxleJS/wiki/Documenation).

### CDN

1. Import from <https://cdn.jsdelivr.net/npm/axlejs@1.1.0/dist/index.js> or for minified version <https://cdn.jsdelivr.net/npm/axlejs@1.1.0/dist/index.min.js>.
2. Read the [documentation](https://github.com/ksplatdev/AxleJS/wiki/Documenation).

## Quick Start

In order to use AxleJS, you will need to download it first. [Choose a way to download it.](#how-to-download) \
After you have downloaded it import AxleJS into your project.

```js
// NPM
import Axle from 'axlejs';

// GitHub
import Axle from 'pathToAxle/index.js';

// CDN
import Axle from 'cdnLinkHere';

// ------------

// For minified versions

// NPM
import Axle from 'axlejs/dist/index.min.js';

// GitHub
import Axle from 'pathToAxle/index.min.js';

// CDN
import Axle from 'minifiedCdnLinkHere';


```

To access AxleTypes for typescript, import like the following.

```js
import Axle, { AxleTypes } from 'pathToAxle';

```

Making a request.

To make a request, you call Axle.\<method\>().

```js
import Axle from 'pathToAxle';

// post
Axle.post('https://someApi.com/api/test',
    // Data to post to server
    {
        someDataHere: 'AxleJS'
    },
    // AxleOptions which is fetch api options but extended and slightly modified (check docs), this is optional and the default value for Axle.post
    {
        mode: 'cors',
        cache: 'default',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
    }
);

// get
Axle.get('https://someApi.com/home', 
    // AxleOptions which is fetch api options but extended and slightly modified (check docs), this is optional and the default value for Axle.get
    {
        mode: 'cors',
        cache: 'default',
    }
)

// Any other http restful methods are available. Check https://www.restapitutorial.com/lessons/httpmethods.html for all HTTP Methods for Restful services

```

Cancelling a request is just as easy with AxleJS.

```js
import Axle from 'pathToAxle';

const cancelMark = new Axle.cancelMark();
const cancelSignal = cancelMark.signal;

Axle.post('https://someApi.com/api/test',
    // Data to post to server
    {
        someDataHere: 'AxleJS'
    },
    // AxleOptions which is fetch api options but extended and slightly modified (check docs), this is optional and the default value for Axle.post
    {
        mode: 'cors',
        cache: 'default',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // insert cancelSignal here
        // this is native to the fetch api by using an AbortController and an AbortSignal
        signal: cancelSignal
    }
);

// Cancel request with an optional error message
cancelMark.cancel('Canceled AxleRequest.');

```

For more info, read the documentation.

## Contributor's Guide

### Requirements

1. Must know TypeScript, Git, NPM, and how the Fetch API works and how to use it.
2. Must read and agree to the [Code of Conduct](CODE_OF_CONDUCT.md) and [Contributing Guidelines](CONTRIBUTING.md).

### How to Contribute

1. Fork the repository on GitHub.
2. Create a new branch on GitHub named after what you are doing, such as a bugfix, feature, or patch. EX: patch-update-readme
3. Clone your forked repository to your local machine.
4. CD into your cloned repository and run `npm install` to install all the devDependencies.
5. Run `npm build` or press CTRL + SHIFT + B on vscode to compile, bundles, and minify the files.
6. Create a new local branch with the same name as your new remote branch.
7. Make your changes.
8. Build your changes with `npm build` or press CTRL + SHIFT + B on vscode.
9. Test your changes on codesandbox or any other platform.
10. Stage, Commit, and Push your changes on your branch.
11. Create a pull request to merge onto the staging branch.
12. State all changes as a changelog in the pull request.
13. Wait for your pull request to be reviewed and possibly merged.
14. Thanks for contributing!

### File Structure

1. Src directory - All the source code is in here
2. Lib directory - TypeScript files are compiled into JavaScript into here.
3. Dist directory - The Bundled and Minified files are here as well as the TypeScript declaration files. This is the final build.
4. Scripts directory - Shell scripts such as the build script which compiles, bundles, and minifies the files is located here.

### Developer Scripts

1. `npm run test` - Opens the test codesandbox in your default browser.
2. `npm run build` - Compiles, Bundles, and Minifies the file to create the final product in the dist directory.
3. `npm run bundle` - Bundles everything in the lib directory with webpack and outputs to dist.
4. `npm run format` - Uses prettier to format all files in the src directory.
5. `npm run format:watch` - Listens for changes on files and formats those files on change.
6. `npm run lint` - Uses eslint to lint all files in the src directory.
7. `npm run lint:watch` - Listens for changes on files and lints those files on change.
8. `npm run lint:fix` - Uses eslint to lint and fix all files in the src directory.
9. `npm run minify` - Uses uglifyjs to minify the bundled file in the dist directory and outputs in the dist directory.

## License

[MIT LICENSE](LICENSE)

## Author

Bleart Emini - ksplatdev
