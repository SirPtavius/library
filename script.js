document.querySelector("#newBook").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .cancel").addEventListener("click", function () {
  document.querySelector(".popup").classList.remove("active");
});

const bookImg = document.getElementById("bookImg");
bookImg.addEventListener("click", function () {
  if (bookImg.classList.contains("active")) {
    bookImg.src = "icon/open-book.png";
    bookImg.classList.remove("active");
  } else {
    bookImg.classList.add("active");
    bookImg.src = "icon/close-book.png";
  }
});
const myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(title, author, pages, read);
  };
}
function addBookToLibrary() {
  //
}
const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295",
  "not read yet"
);
theHobbit.info();
