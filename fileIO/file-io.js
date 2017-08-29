#!/usr/bin/env node

const fs = require('fs');

console.log(fs.readFileSync('file.io.json').toString());