const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPages = document.getElementById('pages');
const bookForm = document.getElementById('book-form');
const addBook = document.getElementById('add');
const checkRead = document.getElementById('read');
const books = document.getElementById('books');

const myLibrary = [];

function Book(id, title, author, numberOfPages, bookRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  };

  this.id = id;
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.bookRead = bookRead;
}

function displayBooks() {
  const divCard = document.createElement("div");
  const divInfo = document.createElement("div");
  const divOptions = document.createElement("div");
  const buttonRemove = document.createElement("i");
  const buttonChange = document.createElement("i");


  myLibrary.forEach((addedBook) => {
    divInfo.innerHTML = `
    <div class="info-rows row1"><label for="book-title${myLibrary.length}"><b>Title:</b></label> <p id="book-title${myLibrary.length}">${addedBook.title}</p></div>
    <div class="info-rows row2"><label for="book-author${myLibrary.length}"><b>Author:</b></label> <p id="book-author${myLibrary.length}">${addedBook.author}</p></div>
    <div class="info-rows row3"><label for="book-pages${myLibrary.length}"><b>Pages:</b></label> <p id="book-pages${myLibrary.length}">${addedBook.numberOfPages}</p></div>
    <div class="info-rows row4"><label for="book-read${myLibrary.length}"><b>Read?</b></label> <p id="book-read${myLibrary.length}">${addedBook.bookRead}</p></div>
    <div class="info-rows row5"><label for="book-id${myLibrary.length}"><b>ID:</b></label> <p id="book-id${myLibrary.length}">${addedBook.id}</p></div>`

    books.append(divCard);
    divCard.append(divInfo);
    divCard.append(divOptions);
    divOptions.append(buttonChange);
    divOptions.append(buttonRemove);

    divCard.className = `book-card card${myLibrary.length}`;
    divInfo.className = "book-info";
    divOptions.className = "book-options";
    buttonRemove.className = "fa-solid fa-trash-can book-remove";
    buttonRemove.title = "Remove book";
    buttonRemove.setAttribute('data-id', `${addedBook.id}`);
    buttonChange.id = `change-status${myLibrary.length}`;
    buttonChange.className = 'fa-solid fa-arrows-rotate book-change';
    buttonChange.title = "Change reading status";

    const bookPagesRead = document.getElementById(`book-read${myLibrary.length}`);

    function changeBookStatus() {
      buttonChange.addEventListener('click', () => {
        if (bookPagesRead.innerHTML === 'No.') {
          bookPagesRead.innerHTML = 'Yes.';
        } else {
          bookPagesRead.innerHTML = 'No.';
        };
      })
    };
    changeBookStatus();

    function removeBook() {
      buttonRemove.addEventListener('click', () => {
        const dataRemover = buttonRemove.dataset.dataRemove;

        if (addedBook.id.value == dataRemover) {
          divCard.style.display = 'none';
        };
      })
    };
    removeBook();
  });
};

function addBookToLibrary(id, title, author, numberOfPages, bookRead) {

  bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    id = crypto.randomUUID();
    title = inputTitle.value;
    author = inputAuthor.value;
    numberOfPages = inputPages.value;

    if (checkRead.checked) { bookRead = 'Yes.'; } else { bookRead = 'No.'; };

    const book = new Book(id, title, author, numberOfPages, bookRead);
    myLibrary.push(book);

    displayBooks();
    bookForm.reset();
  })
};

addBookToLibrary();

// Notas:
// - No momento, não tô conseguindo remover o livro do array quando clico na lixeira;
// - E também não tô conseguindo atualizar o status de lido ou não. Só o primeiro clique muda o status.