const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPages = document.getElementById('pages');
const bookForm = document.getElementById('book-form')
const addBook = document.getElementById('add');
const checkRead = document.getElementById('read');
const books = document.getElementById('books');

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
  const divCard = document.createElement("div");
  const divInfo = document.createElement("div");
  const divRemove = document.createElement("i");

  myLibrary.forEach((addedBook) => {
    divInfo.innerHTML = `
    <b>Title</b>: ${addedBook.title}<br> 
    <b>Author</b>: ${addedBook.author}<br> 
    <b>Pages</b>: ${addedBook.numberOfPages}<br> 
    <b>Did you read it?</b> ${addedBook.bookRead}<br>
    <b>ID</b>: ${addedBook.id}<br> 
      `;

    books.append(divCard);
    divCard.append(divInfo);
    divCard.append(divRemove);

    divCard.className = `book-card card${myLibrary.length}`;
    divInfo.className = "book-info";
    divRemove.className = "fa-solid fa-trash-can book-remove";
    divRemove.title = "Remove book";
    divRemove.setAttribute('data-remove', `${addedBook.id}`)
    
    
    function removeBook() {
      divRemove.addEventListener('click', () => {
        const dataRemover = divRemove.dataset.dataRemove;

        if (addedBook.id.value == dataRemover) {
          divCard.style.display = 'none';
        }
      })
    }

    removeBook();
  });

}

function addBookToLibrary(id, title, author, numberOfPages, bookRead) {
  bookForm.addEventListener('submit', (e) => {
    id = crypto.randomUUID();
    title = inputTitle.value;
    author = inputAuthor.value;
    numberOfPages = inputPages.value;

    if (checkRead.checked) { bookRead = 'Yes.'; } else { bookRead = 'Not yet.'; };

    const book = new Book(id, title, author, numberOfPages, bookRead)
    myLibrary.push(book);

    displayBooks();
    bookForm.reset();
    console.log(myLibrary);
    

    e.preventDefault();
  })
}

addBookToLibrary();