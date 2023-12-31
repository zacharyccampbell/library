const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  // the constructor...
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function render() {
    let libraryBook = document.querySelector(".library");
    libraryBook.innerHTML = ``;
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement("div");
        bookElement.setAttribute("class", "book-card");
        bookElement.innerHTML = `      
        <div class="card-header">
            <h3 class="title">${book.title}</h3>
            <h5 class="author">by ${book.author}</h5>
        </div>
        <div class="card-body">
            <p>${book.pages} pages</p>
            <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
            <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
            <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
        </div>
    `;
        libraryBook.appendChild(bookElement);
    }
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBooks = new Book(title, author, pages, read);
    myLibrary.push(newBooks);
    render();
  // do stuff here
} 

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}


let newBook = document.querySelector(".new-book-btn");
newBook.addEventListener("click", function() {
    let newBookForm = document.querySelector(".new-book-form");
    // console.log(newBookForm);
    newBookForm.style.display = "block";
});

document.querySelector(".new-book-form").addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
});