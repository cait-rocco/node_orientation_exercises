#!/usr/bin/env node

const {createReadStream, writeFile} = require('fs');
const {Transform, Writable} = require('stream');
const toUpper = Transform();
const writeStream = Writable();

toUpper._transform = (buffer, _, cb) => {
    cb(null, buffer.toString().toUpperCase());
};

writeStream._write = (buffer, _, cb) => {
    writeFile(process.argv[2], buffer);
    cb();
};

createReadStream("languages.json").pipe(toUpper).pipe(writeStream);