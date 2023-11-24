let allAuthor = [];
let allBooks = [];

function Author(name, birthYear, nationality){
  this.name = name;
  this.birthYear = birthYear;
  this.nationality = nationality;
  allAuthor.push(this);
}

function Book(title, author, genre, price){
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.price = price;
  allBooks.push(this);
  this.getBookInfo = function (){
    return `Title: ${this.title},
Author Name: ${this.author.name}, 
Genre: ${this.genre}, 
Price: ${this.price}`;
  };
};




ath1 = new Author("J.K. Rowling", 1965, "British");
ath2 = new Author("Stephen King", 1947, "American");
ath3 = new Author("George R.R. Martin", 1948, "American");
ath4 = new Author("J.R.R. Tolkien", 1892, "British");

book1 = new Book("Harry Potter and the Philosopher's Stone", ath1,"Fantasy", "£14.99");
book2 = new Book("Harry Potter and the Chamber of Secrets", ath1, "Fantasy", "£12.99");
book3 = new Book("Sharpe's Triumph", ath2,"Fiction", "£24.99");
book4 = new Book("The Last Kingdom", ath2,"Fiction", "£14.99");
book5 = new Book("Agent Running in the Field", ath3,"Thriller", "£24.99"); 




// console.log(book1);
// console.log(book2);
// console.log(book3);
// console.log(book4);
// console.log(book5);

// console.log(book1.getBookInfo());




console.log("************ Wellcome to Bookstore ************");
console.log("Total book available: " + allBooks.length);
console.log("Total Authors:" + allAuthor.length);
console.log("\n");

console.log("A book info: " + book1.getBookInfo());
console.log("\n");


console.log("************ All book details ************");

allBooks.forEach((itm)=>{
  console.log(itm.getBookInfo());
  console.log("------------------------------------------");
});

console.log("\n");
console.log("************ Thank You ************");