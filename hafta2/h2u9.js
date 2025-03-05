const book = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

const bookJSON = JSON.stringify(book);

const parsedData = JSON.parse(bookJSON);

console.log(
  "The book is called " +
    book.title +
    " and it was written by " +
    book.author +
    " and it has " +
    book.pageCount +
    " pages."
);

console.log(bookJSON);

console.log(parsedData.author);
console.log(parsedData.title);
console.log(parsedData.pageCount);
