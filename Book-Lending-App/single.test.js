const { Book, Store } = require('./single');

test("Book is available", () => {
 const book = new Book('How to work for nothing');
 expect(book.available).toBe(true);

 book.updateAvailability(false);
 expect(book.available).toBe(false);
})

test("Should show Things fall apart as available book", () => {
 const bookStore = Store;
 expect(bookStore.getAvailableBooks()).toContain('Things fall apart')
})

test("Should check for length of available books when a book is borrowed", () => {
 const bookStore = Store;
 Store.lend('Rich dad, poor dad');

 expect(
  Store.getAvailableBooks().length
 ).toBe(2)
})