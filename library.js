const myLibrary = [];

function Book(id, title, author, pages, isRead,  notes) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.notes = notes;
  this.info = function() {
     if (this.isRead==true) return `${this.title} by ${this.author}, ${this.pages} pages, read` ;
     else return `${this.title} by ${this.author}, ${this.pages} pages, not read yet` ;
  }
}

function addBookToLibrary(title, author, pages, isRead, notes) {
  // create a book then store it in the array
  const id = crypto.randomUUID();
  const newBook = new Book(id, title, author, pages, isRead, notes);
  myLibrary.push(newBook)
}

function removeBookFromLibrary(bookId) {
    let indexToRemove = myLibrary.findIndex(book => book.id === bookId);
    console.log("index to remove:", indexToRemove);
    if (indexToRemove !== -1) {
        myLibrary.splice(indexToRemove, 1); 
    }
}

Book.prototype.toggleIsRead = function() {
   this.isRead = !this.isRead; 
};

function bookToggleIsReadLibrary(bookId) {
    let indexToToggle = myLibrary.findIndex(book => book.id === bookId);
    console.log("index to toggle:", indexToToggle);
    if (indexToToggle !== -1) {
        myLibrary[indexToToggle].toggleIsRead(); 
    }
}

function displayLibrary(libArray){
    const headerTitle = "Title: ";
    const headerAuthor = "Author: ";
    const headerPages = "Pages: ";
    const headerIsRead = "Read? ";
    const headerNotes = "Notes: ";
    const libraryCardsDiv = document.getElementById('libraryCards');
    libArray.forEach((book) => {
         console.log(book.title);

         const cardDiv = document.createElement("div");
         cardDiv.classList.add("card");
         cardDiv.dataset.bookId = book.id; //set the book id as a data attribute so this card can be tracked for removal with button is clicked

         const headerTitleH4 = document.createElement("h4");
         headerTitleH4.classList.add("headerTitle");
         headerTitleH4.textContent = headerTitle;
         cardDiv.appendChild(headerTitleH4);

         const headerAuthorH4 = document.createElement("h4");
         headerAuthorH4.classList.add("headerAuthor");
         headerAuthorH4.textContent = headerAuthor;
         cardDiv.appendChild(headerAuthorH4);

         const headerPagesH4 = document.createElement("h4");
         headerPagesH4.classList.add("headerPages");
         headerPagesH4.textContent = headerPages;
         cardDiv.appendChild(headerPagesH4);

         const headerIsReadH4 = document.createElement("h4");
         headerIsReadH4.classList.add("headerIsRead");
         headerIsReadH4.textContent = headerIsRead;
         cardDiv.appendChild(headerIsReadH4);

         const headerNotesH4 = document.createElement("h4");
         headerNotesH4.classList.add("headerNotes");
         headerNotesH4.textContent = headerNotes;
         cardDiv.appendChild(headerNotesH4);

         const bookTitleP = document.createElement("p");
         bookTitleP.classList.add("bookTitle");
         bookTitleP.textContent = book.title;
         cardDiv.appendChild(bookTitleP);

         const bookAuthorP = document.createElement("p");
         bookAuthorP.classList.add("bookAuthor");
         bookAuthorP.textContent = book.author;
         cardDiv.appendChild(bookAuthorP);

         const bookPagesP = document.createElement("p");
         bookPagesP.classList.add("bookPages");
         bookPagesP.textContent = book.pages;
         cardDiv.appendChild(bookPagesP);

         const bookIsReadP = document.createElement("p");
         bookIsReadP.classList.add("bookIsRead");
         bookIsReadP.textContent = book.isRead;
         cardDiv.appendChild(bookIsReadP);

         const bookNotesP = document.createElement("p");
         bookNotesP.classList.add("bookNotes");
         bookNotesP.textContent = book.notes;
         cardDiv.appendChild(bookNotesP);

         const cardBottomContainer = document.createElement('div');
         cardBottomContainer.classList.add('cardBottomContainer');

         const isReadCheckbox = document.createElement('input');
         isReadCheckbox.type = 'checkbox';
         isReadCheckbox.name = 'isRead';
         isReadCheckbox.classList.add('isReadCheckbox');
         isReadCheckbox.dataset.bookId = book.id; //set the book id as a data attribute
         const isReadLabel = document.createElement('lable');
         isReadLabel.classList.add('isReadLabel');
         isReadLabel.htmlFor = 'isReadCheckbox'; // Link label to checkbox by id
         isReadLabel.textContent = 'Read';
         cardBottomContainer.appendChild(isReadLabel);
         cardBottomContainer.appendChild(isReadCheckbox);

         const removeBookBtn = document.createElement('button');
         removeBookBtn.classList.add('removeBookBtn');
         removeBookBtn.textContent = 'Remove';
         removeBookBtn.id = 'removeBookBtn';
         removeBookBtn.dataset.bookId = book.id; //set the book id as a data attribute so this card can be tracked for removal with button is clicked
         cardBottomContainer.appendChild(removeBookBtn);
         cardDiv.appendChild(cardBottomContainer);


         libraryCardsDiv.appendChild(cardDiv);
    
    });
}

function displayCard(book){
    const headerTitle = "Title: ";
    const headerAuthor = "Author: ";
    const headerPages = "Pages: ";
    const headerIsRead = "Read? ";
    const headerNotes = "Notes: ";
    const libraryCardsDiv = document.getElementById('libraryCards');
    
         console.log(book.title);

         const cardDiv = document.createElement("div");
         cardDiv.classList.add("card");
         cardDiv.dataset.bookId = book.id; //set the book id as a data attribute so this card can be tracked for removal with button is clicked
         
         const headerTitleH4 = document.createElement("h4");
         headerTitleH4.classList.add("headerTitle");
         headerTitleH4.textContent = headerTitle;
         cardDiv.appendChild(headerTitleH4);

         const headerAuthorH4 = document.createElement("h4");
         headerAuthorH4.classList.add("headerAuthor");
         headerAuthorH4.textContent = headerAuthor;
         cardDiv.appendChild(headerAuthorH4);

         const headerPagesH4 = document.createElement("h4");
         headerPagesH4.classList.add("headerPages");
         headerPagesH4.textContent = headerPages;
         cardDiv.appendChild(headerPagesH4);

         const headerIsReadH4 = document.createElement("h4");
         headerIsReadH4.classList.add("headerIsRead");
         headerIsReadH4.textContent = headerIsRead;
         cardDiv.appendChild(headerIsReadH4);

         const headerNotesH4 = document.createElement("h4");
         headerNotesH4.classList.add("headerNotes");
         headerNotesH4.textContent = headerNotes;
         cardDiv.appendChild(headerNotesH4);

         const bookTitleP = document.createElement("p");
         bookTitleP.classList.add("bookTitle");
         bookTitleP.textContent = book.title;
         cardDiv.appendChild(bookTitleP);

         const bookAuthorP = document.createElement("p");
         bookAuthorP.classList.add("bookAuthor");
         bookAuthorP.textContent = book.author;
         cardDiv.appendChild(bookAuthorP);

         const bookPagesP = document.createElement("p");
         bookPagesP.classList.add("bookPages");
         bookPagesP.textContent = book.pages;
         cardDiv.appendChild(bookPagesP);

         const bookIsReadP = document.createElement("p");
         bookIsReadP.classList.add("bookIsRead");
         bookIsReadP.textContent = book.isRead;
         cardDiv.appendChild(bookIsReadP);

         const bookNotesP = document.createElement("p");
         bookNotesP.classList.add("bookNotes");
         bookNotesP.textContent = book.notes;
         cardDiv.appendChild(bookNotesP);

         const cardBottomContainer = document.createElement('div');
         cardBottomContainer.classList.add('cardBottomContainer');

         const isReadCheckbox = document.createElement('input');
         isReadCheckbox.type = 'checkbox';
         isReadCheckbox.name = 'isRead';
         isReadCheckbox.classList.add('isReadCheckbox');
         isReadCheckbox.dataset.bookId = book.id; //set the book id as a data attribute
         const isReadLabel = document.createElement('lable');
         isReadLabel.classList.add('isReadLabel');
         isReadLabel.htmlFor = 'isReadCheckbox'; // Link label to checkbox by id
         isReadLabel.textContent = 'Read';
         cardBottomContainer.appendChild(isReadLabel);
         cardBottomContainer.appendChild(isReadCheckbox);
         
         const removeBookBtn = document.createElement('button');
         removeBookBtn.classList.add('removeBookBtn');
         removeBookBtn.textContent = 'Remove';
         removeBookBtn.id = 'removeBookBtn';
         removeBookBtn.dataset.bookId = book.id; //set the book id as a data attribute so this card can be tracked for removal with button is clicked
         cardBottomContainer.appendChild(removeBookBtn);
         cardDiv.appendChild(cardBottomContainer);

         libraryCardsDiv.appendChild(cardDiv);
};

// removes the card dispalyed by removing parent and grandparent containers of the remove button that was clicked.
function removeParentAndGrandparent(event) {
  const targetElement = event.target;
  const parentElement = targetElement.parentNode;
  const grandparentElement = parentElement ? parentElement.parentNode : null; // Check if parent exists before getting grandparent
  if (parentElement) {
    parentElement.remove();
  }
  if (grandparentElement && grandparentElement !== document.body) {
    grandparentElement.remove();
  }
}




const hobbit = new Book(999, 'The Hobbit', 'J.R.R. Tolkien', 600, false, "some remarks");
console.log(hobbit.info());
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false, "some remarks about the book expeirence")
addBookToLibrary('The Bobbit Doth Protest', 'Some Guy', 214, false, "here are some remarks which are notes about the book reading")
addBookToLibrary('The Zobbit That Never Was', 'Some Gal', 314, false, "some remarks to help remember details about teh book and teh experience reading it")
addBookToLibrary('The Mobbit of Age Old', 'Sir Francis Drake', 435, false, "notes describing the circumstances under which the book was read")
console.log(myLibrary);
displayLibrary(myLibrary);


document.getElementById('addBookBtn').onclick = function(event) {
    event.preventDefault();
    const form = document.getElementById('addBookForm');
    const formData = new FormData(form);
    const title = formData.get('book_title');
    const author = formData.get('book_author');
    const pages = formData.get('book_pages');
    const isRead = formData.get('book_isRead');
    const notes = formData.get('book_notes');
    
    addBookToLibrary(title, author, pages, isRead, notes);
    displayCard(myLibrary[myLibrary.length - 1]);
    
    console.log('title:', title);
    console.log('author:', author);
    console.log('pages:', pages);
    console.log('Read? ', isRead);
    console.log('notes:', notes);
    
    form.reset(); 
    
}

// to listen for all the 'remove' buttons or checkbox events. Since they are dynamically created buttons
// and checkboxes, we must listen on parent (libraryCards) container of all the cards
const parentContainer = document.getElementById('libraryCards');
    parentContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('removeBookBtn')) {
            removeBookFromLibrary(event.target.dataset.bookId);
            removeParentAndGrandparent(event); //remove book card from display by removing the button parent and gradnparent containers
            console.log(myLibrary)
        }
        if (event.target.classList.contains('isReadCheckbox')) {
            bookToggleIsReadLibrary(event.target.dataset.bookId);
            console.log(myLibrary);
        }
    });



