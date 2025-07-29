const myLibrary = [];

function Book(title, author, numberOfPages, bookRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.bookRead = function () { !bookRead ? 'not read yet' : 'read' };
  this.info = function () { `${title} by ${author}, ${numberOfPages} pages, ${this.bookRead()}.` };
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  
}
