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
    let statement = "Maybe it has been read";
 
        if(this.read == true)
            statement = "has been read";
            else
            statement = "has not been read";

        return(   "\""+this.title +"\"" +' by '+ this.author +", "+ this.pages+ " pages" +", "+ statement);
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
    container.innerHTML = "Is this thing on?";
}
//Test classes
//  let cheese = new Book("The Ballad of Gay Tony","Rockstar Games","69",false);
//  let butter = new Book("The Ballad of Straight Tony","Rockstar Games","70",true);
//  let pb = new Book("Mouse Adventure","Jerry Smith","170",false);
 
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

//THis function should show all the books currently in the library and allow the user to go back tp adding more books
function ShowAll()
{
    let form =  document.querySelector('#Book-Form');
    let btn = document.querySelector('#Add');
    btn.addEventListener('click',()=>{form.innerHTML = FORM_DATA; btn.innerHTML ="Add to Library"; btn.addEventListener('click',BookAdd)});
    btn.removeEventListener('click',BookAdd);
    
    form.innerHTML = "";
    btn.innerHTML = "Add Another Book";
    

    
}


 reset.addEventListener('click',() => { Clear() });
 show.addEventListener('click',() => { ShowAll() }); 
 add.addEventListener('click',BookAdd); // This is functional!!
//  AddBook(pb);
//  AddBook(butter);
//  AddBook(cheese);

//  InfoDump();

