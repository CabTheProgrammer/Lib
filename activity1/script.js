let MyLibrary = [];
const container = document.querySelector('#container');
const reset = document.querySelector('#Reset');
const add = document.querySelector('#Add');
const show = document.querySelector('#Show');
const FORM_DATA = document.querySelector('#Book-Form').innerHTML;

function Book(title, author, pages, read)
{ 
    this.pos = 0; //Position of the book in the array
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

// Modifies book prototype to add a function to print book info
Book.prototype.info = function(){
        if(this.read == true)
            statement = "has been read";
            else
            statement = "has not been read";

        return(   "\""+this.title +"\"" +' by '+ this.author +", "+ this.pages+ " pages" +", "+ statement);
}

Book.prototype.toggleRead = function() // Toggles the read status of the book
{
    if (read == true)
        read = false;
    else
        read = true;   

}
// Functions for Array 
function AddBook(Book) 
{
    Book.pos = MyLibrary.length;
    MyLibrary.push(Book);
    console.log("A book has been added to the library!");
}
function InfoDump()
{
    let index = 0;
    while(index < MyLibrary.length)
    {
        console.log(MyLibrary[index].info());
        index += 1;
    }
}

// functions for container
// This function clears container div
function Clear()
{
    container.innerHTML = "Library has been reset, please add some books";
    MyLibrary = []; //This empties the array that holds the books

}

 
function BookAdd()
{
    let title = document.binfo.title.value;   
    let author = document.binfo.author.value;
    let page = document.binfo.page.value;
    let read = document.binfo.read;


    if(title === "" && author === "")
        return;


   if(read.checked)
    read = true;
    else
    read = false;



    let b = new Book(title,author,page,read);
    AddBook(b);
    console.log( b.info());

    //This is suppose to bring up a pop up menu for adding new books
    // Populate Area

}


function ShowAll() //Make this print cards with the book infos!
{
    container.innerHTML = ""; //This would prevent repitition when the show library button is pressed repetitively
    let index = 0;
    while(index < MyLibrary.length)
    {
        let book = document.createElement("div");
        
        if(index %2 == 0)
                book.classList.add("bontainer1");
        else
            book.classList.add("bontainer2");
        

        book.innerHTML = "<p>Book:"+ MyLibrary[index].title+"</p> \
        <p>Author:"+ MyLibrary[index].author+"</p>  \
        <p>Pages:"+ MyLibrary[index].pages+"</p>\
        <p>Has Read:"+ MyLibrary[index].read+"</p>\
        <button id =\"ToggRead\">Toggle Read Status</button>\
        <button id =\"RemoveBook\">Remove Book</button>";

        container.appendChild(book);
        index+=1;
        // Generate bcontainer class
    }
   
}

 reset.addEventListener('click',() => { Clear() });
 show.addEventListener('click',() => { ShowAll() }); 
 add.addEventListener('click',BookAdd); // This is functional!!
//  AddBook(pb);
//  AddBook(butter);
//  AddBook(cheese);

//  InfoDump();

