// Variables
const addNewBookbtn = document.querySelector("#newBook");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");
let myLibrary = [];

// Functions
function popUp() {
  popup.classList.add("active");
}

function closeBtn() {
  popup.classList.remove("active");
}

function addBookToLibrary() {
  //check required
  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||
    pages.value.trim() === ""
  ) {
    alert("Please fill in all required fields.");
    return;
  }
  const newBook = {
    id: Date.now(), //Card Index
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

  // Add index to cards
  newCardDiv.setAttribute("data-id", newBook.id);

  cardButtonDiv.appendChild(bookImgElement);
  cardButtonDiv.appendChild(deleteImgElement);

  newCardDiv.appendChild(titleElement);
  newCardDiv.appendChild(authorElement);
  newCardDiv.appendChild(pagesElement);
  newCardDiv.appendChild(cardButtonDiv);

  const libraryDiv = document.querySelector(".library");
  libraryDiv.appendChild(newCardDiv);

  // Changes book icon and library.read
  bookImgElement.addEventListener("click", function () {
    const cardId = newCardDiv.getAttribute("data-id");
    const cardIndex = myLibrary.findIndex(
      (book) => book.id === parseInt(cardId)
    );
    if (cardIndex !== -1) {
      myLibrary[cardIndex].read = !myLibrary[cardIndex].read; // change .read
      bookImgElement.src = myLibrary[cardIndex].read
        ? "icon/close-book.png"
        : "icon/open-book.png"; // change icon depending on .read
    }
  });

  const deleteButtons = document.querySelectorAll(".deleteCard");
  deleteButtons.forEach(function (deleteBtn) {
    deleteBtn.addEventListener("click", function (event) {
      const cardId = event.target.closest(".card").getAttribute("data-id");
      deleteCard(cardId);
      event.target.closest(".card").remove();
    });
  });
}

function deleteCard(id) {
  myLibrary = myLibrary.filter((book) => book.id !== parseInt(id));
}

// Event Listeners
addNewBookbtn.addEventListener("click", popUp);
close.addEventListener("click", closeBtn);
document.querySelector(".submit").addEventListener("click", addBookToLibrary);
