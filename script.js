const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPages = document.getElementById('pages');
const addBook = document.getElementById('add');
const checkRead = document.getElementById('read');
let bookList = document.getElementById('book-list');

const myLibrary = [];

function Book(id, title, author, numberOfPages, bookRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.id = id;
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.bookRead = bookRead
  // this.info = function () {
  //   return `${title} by ${author}, ${numberOfPages} pages, ${bookRead}.<br> Book ID: ${id} <br>`
  // };
}

function addBookToLibrary(id, title, author, numberOfPages, bookRead) {
  addBook.addEventListener('click', () => {
    id = crypto.randomUUID();
    title = inputTitle.value;
    author = inputAuthor.value;
    numberOfPages = inputPages.value;

    if (checkRead.checked) { bookRead = 'Read'; } else { bookRead = 'Not read yet'; };

    const book = new Book(id, title, author, numberOfPages, bookRead)
    // bookList.innerHTML += book.info();
    myLibrary.push(book);

    // console.log(bookList.innerText);
    console.log(myLibrary);
  })
}

addBookToLibrary()