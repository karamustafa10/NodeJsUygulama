const fs = require("fs");
const yargs = require("yargs");

const dataBuffer = fs.readFileSync("book.json");

const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);

console.log(data);
