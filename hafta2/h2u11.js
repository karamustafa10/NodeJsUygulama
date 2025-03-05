const fs = require("fs");
const yargs = require("yargs");

const book = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

const bookJSON = JSON.stringify(book);

fs.writeFileSync("book.json", bookJSON);
