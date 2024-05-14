// Variables
const addNewBookbtn = document.querySelector("#newBook");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");
const myLibrary = [];

// Functions
function popUp() {
  popup.classList.add("active");
}

function closeBtn() {
  popup.classList.remove("active");
}

function addBookToLibrary() {
  const newBook = {
    title: title.value,
    author: author.value,
    pages: pages.value,
    read: read.checked,
  };

  myLibrary.push(newBook);
  addNewCard(newBook);

  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;

  closeBtn();
}

function addNewCard(newBook) {
  const newCardDiv = document.createElement("div");
  newCardDiv.classList.add("card");

  const titleElement = document.createElement("h2");
  titleElement.textContent = newBook.title;

  const authorElement = document.createElement("p");
  authorElement.textContent = newBook.author;

  const pagesElement = document.createElement("p");
  pagesElement.textContent = newBook.pages;

  const cardButtonDiv = document.createElement("div");
  cardButtonDiv.classList.add("cardButton");

  const bookImgElement = document.createElement("img");
  bookImgElement.src = newBook.read
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

  const deleteButtons = document.querySelectorAll(".deleteCard");
  deleteButtons.forEach(function (deleteBtn) {
    deleteBtn.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.remove();
    });
  });

  const bookImgs = document.querySelectorAll(".bookImg");
  bookImgs.forEach(function (bookImg) {
    bookImg.addEventListener("click", function () {
      if (bookImg.classList.contains("active")) {
        bookImg.src = "icon/open-book.png";
        bookImg.classList.remove("active");
      } else {
        bookImg.classList.add("active");
        bookImg.src = "icon/close-book.png";
      }
    });
  });
}

// Event Listeners
addNewBookbtn.addEventListener("click", popUp);
close.addEventListener("click", closeBtn);
document.querySelector(".submit").addEventListener("click", addBookToLibrary);

const deleteButtons = document.querySelectorAll(".deleteCard");
deleteButtons.forEach(function (deleteBtn) {
  deleteBtn.addEventListener("click", function (event) {
    event.target.parentNode.parentNode.remove();
  });
});
