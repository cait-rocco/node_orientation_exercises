// #!/users/bin/

const name = "John Doe";

let newName = name.replace(/\s/g, '');

let [...nameArr] = newName.toUpperCase();

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

let cheer = (nameArr) => {
    for (let i = 0; i < nameArr.length; i++) {
        var word
        if (nameArr[i] == "A" ||
            nameArr[i] == "E" ||
            nameArr[i] == "F" ||
            nameArr[i] == "H" ||
            nameArr[i] == "I" ||
            nameArr[i] == "L" ||
            nameArr[i] == "M" ||
            nameArr[i] == "N" ||
            nameArr[i] == "O" ||
            nameArr[i] == "R" ||
            nameArr[i] == "S" ||
            nameArr[i] == "X") {
            word = "an"
        } else {
            word = "a"
        }
        console.log("Give me " + word + " " + nameArr[i] + "!");
    }
}

cheer(nameArr);
console.log("What does that spell?");
console.log(name.toUpperCase() + "!");