#!/usr/bin/env node

const fs = require('fs');

let file = fs.readFile('08.json', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
});

file;