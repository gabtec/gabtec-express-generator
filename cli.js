#!/usr/bin/env node
const gegen = require("./lib/index.js").init;

const [, , ...args] = process.argv;

const exitCode = gegen(args);

process.exit(exitCode);
