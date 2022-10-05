console.log("this is js");

//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display Constructor
function Display() {

}

// Add Method to display prototype  Mujhe display ke prototype(properties) me sab method add karna hai
Display.prototype.add = function(book){
      console.log("Adding to ui");
      tableBody = document.getElementById('tableBody');
      let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                      </tr>`;
      tableBody.innerHTML += uiString;
}

//Implement The Clear Function
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

//Implement The Validate Function
Display.prototype.validate = function(book){
    if (book.name.length < 2 ||  book.author.length < 2)
    {
        return false;
    }
    else
    {
        return true;
    }
}

Display.prototype.show = function(type, displayMessage){
let message = document.getElementById('message');
message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show role="alert">
                        <strong>Messge:</strong> ${displayMessage}
                        <button type="button" class="close" data-dismiss="alertaria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                      </div>`; 

setTimeout(function () {
    message.innerHTML = '';
}, 5000);

}



// Add submit event listner to form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("You Have submitted library Form");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    //Fiction Programming cooking
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)){

        display.add(book);
        display.clear();
        display.show('success', 'Your Book is added sucessfully');
    }
    else{

        display.show('danger', 'sorry you cannot add the book' );
    }
   
    e.preventDefault();
}

