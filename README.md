# My GAS Script

[![TypeScript version][ts-badge]][typescript-4-8]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]

## Tools 
- [TypeScript][typescript] [4.8][typescript-4-8]
- [ESM][esm]
- [ESLint][eslint] with some initial rules recommendation
- [Jest][jest] for fast unit testing and code coverage
- Type definitions for Node.js and Jest
- [Prettier][prettier] to enforce consistent code style
- NPM [scripts](#available-scripts) for common operations
- [EditorConfig][editorconfig] for consistent coding style
- Reproducible environments thanks to [Volta][volta]
- [WebPack] for module bundler
- [clasp] for local development of Google Apps Script
- [@slack/web-api] for read messages slack

## Available Scripts

- `clean` - remove coverage data, Jest cache and transpiled files,
- `prebuild` - lint source files and tests before building,
- `build` - bundle by using webpack,
- `push` - build and push to GAS using clasp
- `lint` - lint source files and tests,
- `prettier` - reformat files,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests
- `clasp:login` - login GAS by clasp

## License

Licensed under the APLv2. See the [LICENSE][LICENSE] file for details.

This project use [this][node-typescript-boilerplate] template, thank you!



[ts-badge]: https://img.shields.io/badge/TypeScript-4.8-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2016.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[typescript]: https://www.typescriptlang.org/
[typescript-4-8]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-8/
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[prettier]: https://prettier.io
[volta]: https://volta.sh
[volta-getting-started]: https://docs.volta.sh/guide/getting-started
[volta-tomdale]: https://twitter.com/tomdale/status/1162017336699838467?s=20
[repo-template-action]: https://github.com/jsynowiec/node-typescript-boilerplate/generate
[esm]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[sindresorhus-esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[nodejs-esm]: https://nodejs.org/docs/latest-v16.x/api/esm.html
[ts47-esm]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-8/#esm-nodejs
[editorconfig]: https://editorconfig.org
[node-typescript-boilerplate]: https://github.com/jsynowiec/node-typescript-boilerplate
[LICENSE]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE
