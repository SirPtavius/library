class Book {
  constructor(title, author, pages, read) {
    this.id = Date.now();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    this.renderBook(book);
  }

  deleteBook(id) {
    this.books = this.books.filter((book) => book.id !== parseInt(id));
  }

  toggleRead(id) {
    const book = this.books.find((book) => book.id === parseInt(id));
    if (book) {
      book.read = !book.read;
    }
  }

  renderBook(book) {
    const newCardDiv = document.createElement("div");
    newCardDiv.classList.add("card");
    newCardDiv.setAttribute("data-id", book.id);

    const titleElement = document.createElement("h2");
    titleElement.textContent = book.title;

    const authorElement = document.createElement("p");
    authorElement.textContent = book.author;

    const pagesElement = document.createElement("p");
    pagesElement.textContent = book.pages;

    const cardButtonDiv = document.createElement("div");
    cardButtonDiv.classList.add("cardButton");

    const bookImgElement = document.createElement("img");
    bookImgElement.src = book.read
      ? "icon/close-book.png"
      : "icon/open-book.png";
    bookImgElement.classList.add("bookImg");
    bookImgElement.alt = "Icona libro";

    const deleteImgElement = document.createElement("img");
    deleteImgElement.src = "icon/bin.png";
    deleteImgElement.classList.add("deleteCard");
    deleteImgElement.alt = "Icona eliminazione";

    cardButtonDiv.appendChild(bookImgElement);
    cardButtonDiv.appendChild(deleteImgElement);

    newCardDiv.appendChild(titleElement);
    newCardDiv.appendChild(authorElement);
    newCardDiv.appendChild(pagesElement);
    newCardDiv.appendChild(cardButtonDiv);

    const libraryDiv = document.querySelector(".library");
    libraryDiv.appendChild(newCardDiv);

    bookImgElement.addEventListener("click", () => {
      this.toggleRead(book.id);
      bookImgElement.src = book.read
        ? "icon/close-book.png"
        : "icon/open-book.png";
    });

    deleteImgElement.addEventListener("click", (event) => {
      this.deleteBook(book.id);
      event.target.closest(".card").remove();
    });
  }
}

class UI {
  static init() {
    const addNewBookbtn = document.querySelector("#newBook");
    const popup = document.querySelector(".popup");
    const close = document.querySelector(".close");
    const submit = document.querySelector(".submit");

    addNewBookbtn.addEventListener("click", UI.popUp);
    close.addEventListener("click", UI.closePopUp);
    submit.addEventListener("click", UI.addBookToLibrary);

    UI.library = new Library();
  }

  static popUp() {
    document.querySelector(".popup").classList.add("active");
  }

  static closePopUp() {
    document.querySelector(".popup").classList.remove("active");
  }

  static addBookToLibrary() {
    const title = document.querySelector("#title").value.trim();
    const author = document.querySelector("#author").value.trim();
    const pages = document.querySelector("#pages").value.trim();
    const read = document.querySelector("#read").checked;

    if (title === "" || author === "" || pages === "") {
      alert("Please fill in all required fields.");
      return;
    }

    const newBook = new Book(title, author, pages, read);
    UI.library.addBook(newBook);

    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#read").checked = false;

    UI.closePopUp();
  }
}

document.addEventListener("DOMContentLoaded", UI.init);
