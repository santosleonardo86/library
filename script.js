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

// Book.prototype.toggleBookStatus = function () {
//   const changeStatus = document.getElementById(`change-status${myLibrary.length}`);

//   if (this.bookRead === 'Yes.') {
//     changeStatus.addEventListener("click", () => {
//       this.bookRead = 'No.';
//       console.log(myLibrary);
//     })
//   } else {
//     changeStatus.addEventListener("click", () => {
//       this.bookRead = 'Yes.';
//       console.log(myLibrary);
//     })
//   }
// }

function DisplayBooks() {
  const divCard = document.createElement("div");
  const divInfo = document.createElement("div");
  const divRemove = document.createElement("i");
  const buttonChange = document.createElement("button");


  myLibrary.forEach((addedBook) => {
    divInfo.innerHTML = `
    <div class="info-rows row1"><label for="book-title${myLibrary.length}"><b>Title:</b></label> <p id="book-title${myLibrary.length}">${addedBook.title}</p></div>
    <div class="info-rows row2"><label for="book-author${myLibrary.length}"><b>Author:</b></label> <p id="book-author${myLibrary.length}">${addedBook.author}</p></div>
    <div class="info-rows row3"><label for="book-pages${myLibrary.length}"><b>Pages:</b></label> <p id="book-pages${myLibrary.length}">${addedBook.numberOfPages}</p></div>
    <div class="info-rows row4"><label for="book-read${myLibrary.length}"><b>Read?</b></label> <p id="book-read${myLibrary.length}">${addedBook.bookRead}</p></div>
    <div class="info-rows row5"><label for="book-id${myLibrary.length}"><b>ID:</b></label> <p id="book-id${myLibrary.length}">${addedBook.id}</p></div>`

    books.append(divCard);
    divCard.append(divInfo);
    divCard.append(divRemove);
    divCard.append(buttonChange);

    divCard.className = `book-card card${myLibrary.length}`;
    divInfo.className = "book-info";
    divRemove.className = "fa-solid fa-trash-can book-remove";
    divRemove.title = "Remove book";
    divRemove.setAttribute('data-remove', `${addedBook.id}`);
    // buttonChange.className = "change-status";
    buttonChange.id = `change-status${myLibrary.length}`;
    buttonChange.innerHTML = "Change status";

    const bookPagesRead = document.getElementById(`book-read${myLibrary.length}`);


    function changeBookStatus() {
      buttonChange.addEventListener('click', () => {
        if (bookPagesRead.innerHTML === 'No.') {
          bookPagesRead.innerHTML = 'Yes.';
        } else {
          bookPagesRead.innerHTML = 'No.'
        }
      })
    }
    changeBookStatus();

    function removeBook() {
      divRemove.addEventListener('click', () => {
        const dataRemover = divRemove.dataset.dataRemove;

        if (addedBook.id.value == dataRemover) {
          divCard.style.display = 'none';

          console.log(myLibrary);
        }
      })
    }
    removeBook();
  });
};

Object.setPrototypeOf(DisplayBooks.prototype, Book.prototype);

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

    DisplayBooks();
    bookForm.reset();

    // book.toggleBookStatus();
    // console.log(myLibrary);
  })
};

addBookToLibrary();



// Notas:
// - No momento, não tô conseguindo remover o livro do array quando clico na lixeira;
// - E também não tô conseguindo atualizar o status de lido ou não.
// - Só o primeiro clique muda o status.
// - A interface tá funcionando do jeito certo.