const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPages = document.getElementById('pages');
const bookForm = document.getElementById('book-form')
const addBook = document.getElementById('add');
const checkRead = document.getElementById('read');
const bookList = document.getElementById('book-list');

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
}

function displayBooks() {
  const div = document.createElement("div");

  myLibrary.forEach((book2) => {
    div.innerHTML = `
      ID: ${book2.id}<br> 
      Title: ${book2.title}<br> 
      Author: ${book2.author}<br> 
      Pages: ${book2.numberOfPages}<br> 
      Did you read it? ${book2.bookRead}<br>
      `;
    bookList.append(div);
  });
}

function addBookToLibrary(id, title, author, numberOfPages, bookRead) {
  addBook.addEventListener('click', () => {
    id = crypto.randomUUID();
    title = inputTitle.value;
    author = inputAuthor.value;
    numberOfPages = inputPages.value;

    if (checkRead.checked) { bookRead = 'Yes'; } else { bookRead = 'Not yet'; };

    const book = new Book(id, title, author, numberOfPages, bookRead)
    myLibrary.push(book);

    displayBooks();
    bookForm.reset()
    console.log(myLibrary);
  })
}

addBookToLibrary()




