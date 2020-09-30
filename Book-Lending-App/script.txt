//function Book(title) {
//this.title = title;
//}



/**
 * Book class
 */
class Book {
 constructor(title) {
  this.title = title;
  this.available = true;
 }

 isAvailable() {
  return this.available;
 }

 updateAvailability(status) {
  this.available = status;
 }
}


const BOOK_TITLES = ['Things fall apart', 'Rich dad, poor dad', 'Macbeth'];

class Store {
 constructor() {
  this.books = BOOK_TITLES.map(title => new Book(title));
 }

 lend(title) {
  const book = this.books.find(book => book.title === title);
  if (!book) {
   console.error("This book is unavailable");
   return;
  }

  if (!book.isAvailable()) {
   console.error("This book has been lent out");
   return;
  }

  book.updateAvailability(false);
  console.log("You have successfully borrowed " + title);
 }

 returnBook(title) {
  const book = this.books.find(book => book.title === title);
  if (book) {
   book.updateAvailability(true);
   console.log(title + " has been successfully returned");
  }
 }

 getAvailableBooks() {
  return this.books.filter(book => book.isAvailable())
   .map(book => book.title);
 }

 getBorrowedBooks() {
  return this.books.filter(book => !book.isAvailable())
   .map(book => book.title);
 }
}


const store = new Store();






// Sample usage
store.lend('Things fall apart');
store.lend('Things fall apart');
store.lend('Something we dont have');
console.log('Available Books: ', store.getAvailableBooks());
console.log('Borrowed Books: ', store.getBorrowedBooks());
store.returnBook('Things fall apart');
console.log('Available Books: ', store.getAvailableBooks());
console.log('Borrowed Books: ', store.getBorrowedBooks());