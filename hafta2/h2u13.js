const fs = require("fs");
const yargs = require("yargs");

const book = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

const bookJSON = JSON.stringify(book);

fs.writeFileSync("book.json", bookJSON);

function changeBook(book) {
  book.title = "Animal Farm";
  book.author = "George Orwell";
  book.pageCount = 112;
  fs.writeFileSync("book.json", JSON.stringify(book));
  return book;
}

changeBook(book);
