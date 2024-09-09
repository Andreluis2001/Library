const myLibrary = [];
const bookContainer = document.querySelector('.books-container');
const addBook = document.querySelector('#addBook');
const submit = document.querySelector('#submit');
const inputs = document.querySelectorAll("input");

function Book(name, author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(name, author, pages){
    const newBook = new Book(name, author, pages);
    myLibrary.push(newBook);
}

addBook.addEventListener('click', function(){
    for (i of inputs){
        i.value = "";
    }
    document.querySelector("dialog").setAttribute("open", true);
});

submit.addEventListener('click', function(event){
    event.preventDefault();
    addBookToLibrary(inputs[0].value, inputs[1].value, inputs[2].value);
    bookContainer.innerHTML += `<div class="book"><h3>${myLibrary[myLibrary.length - 1].name}
    </h3><p>${myLibrary[myLibrary.length - 1].author}</p><p>Pages: ${myLibrary[myLibrary.length - 1].pages}</p></div>`;
    document.querySelector("dialog").removeAttribute("open");   
})
