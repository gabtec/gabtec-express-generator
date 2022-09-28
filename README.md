# Gabtec Express Generator
[![Tests CI](https://github.com/gabtec/gabtec-express-generator/actions/workflows/tests.yml/badge.svg)](https://github.com/gabtec/gabtec-express-generator/actions/workflows/tests.yml)

This is a cli tool to auto generate nodejs code for express REST API's.

## Current Features:
- can generate a new route controller and route file.
- can update api main file to import the new route, or show you the code to do it
- can generate a banner file, to be used as MOTD (Message of the Day)


## Instalation
```sh
$ npm i -g @gabtec/express-generator

// note: you will also need colors package
$ npm i colors@1.4.0
```

## Dependencies
This project depends on:
- NodeJs (tested with v16.17.0)
- Figlet

## CLI Usage

```js 

Package: @gabtec/express-generator
Usage: gegen <module> <args...>
  Modules:
    -b | --banner <Text> [color]  Generates a new MOTD banner
    -r | --route <Name>   Generates a new REST endpoint
  Options:
    -h | --help         Packahe Usage
    -v | --version      Package version
```
Watch the video: https://youtu.be/MBQ1traB_lM

## Default Configs

By default this tool uses the following configs:

```js
module.exports= {
	srcFolder: "src/",
	bannerFolder: "assets/",
	apiFolder: "api/",
	bannerFile: "banner.js",
	fileRequiringRoutes: "api.js",
	fileRequiringBanner: "server.js",
	apiPrefix: "/api/v1/",
	bannerColor: "magenta",
};
```

To change, some, or all of them, you must create a ".gegen.config.js" file on project root folder

## Tests

This project is tested using Jest.

```js
$ pnpm run test

// with code coverage
$ pnpm run test:cov

```
## Author
Gabriel Martins _aka Gabtec_

## License
MIT
