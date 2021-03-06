'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('loot.sqlite', (err) => console.log('Connected'));
const { argv: [,, ...args] } = process

db.run('CREATE TABLE IF NOT EXISTS loot (firstName TEXT, toy TEXT, status TEXT)');

// const ifExists = (args) => {
//     db.all(`SELECT "${args[1]}" FROM loot WHERE toy = "${arg[2]}`)
// }

const addLoot = (args) => {
    db.run(`INSERT INTO loot VALUES(
        "${args[1]}",
        "${args[2]}",
        "null")`)
    // setTimeout(function() { 
    //     db.all(`SELECT "${args[1]}" FROM loot WHERE toy = "${args[2]}"`, (err, results) => {
    //         if(err) {
    //             console.log(`There was an error adding, try again`)
    //         } else {
    //             console.log(`${args[1]} and their toy was added successfully`)
    //         }
    //     })
    //     ; }, 500)
}

const removeLoot = (args) => {
    db.run(`DELETE FROM loot WHERE(
        firstName = "${args[1]}" AND toy = "${args[2]}")`
    )
}

const whichResults = (args) => {
    if(args.length < 2) {
        listNames();
    } else {
        listToys(args);
    }
};

const listNames = () => {
    db.all('SELECT firstName FROM loot WHERE status = "null"', (err, results) => {
        let nameArr = [];
        results.forEach((result) => {
            nameArr.push(result.firstName);
        });
        console.log("nameArr", nameArr);
        return nameArr; 
    });
};

const listToys = (args) => {
    db.all(`SELECT toy FROM loot WHERE firstName = "${args[1]}"`, (err, results) => {
        let toyArr = [];
        results.forEach((result) => {
            toyArr.push(result.toy);
        })
        console.log(toyArr);
        return toyArr;
    });
};

// const listToys = (name) => {
//     return new Promise((resolve, reject) => {
//         resolve
//     })
// }

const status = (args) => {
    db.run(`UPDATE loot SET status = "${args[0]}" WHERE firstName = "${args[1]}"`)
}

const argCheck = (args) => {
    if(args[0] === "add") {
        addLoot(args);
    } else if(args[0] === "remove") {
        removeLoot(args);
    } else if(args[0] === "ls") {
        whichResults(args)
    } else if(args[0] === "delivered") {
        status(args)
    }
}

argCheck(args);

module.exports = {addLoot, argCheck, removeLoot, listNames, listToys, status};