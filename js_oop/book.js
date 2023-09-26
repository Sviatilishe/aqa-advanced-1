class Book {
    constructor(title, author, year) {
      this._title = title;
      this._author = author;
      this._year = year;
    }
  
    get title() {
      return this._title;
    }
  
    set title(newTitle) {
      if (typeof newTitle === 'string') {
        this._title = newTitle;
      } else {
        console.error('Title must be a string.');
      }
    }
  
    get author() {
      return this._author;
    }
  
    set author(newAuthor) {
      if (typeof newAuthor === 'string') {
        this._author = newAuthor;
      } else {
        console.error('Author must be a string.');
      }
    }
  
    get year() {
      return this._year;
    }
  
    set year(newYear) {
      if (typeof newYear === 'number' && newYear >= 0) {
        this._year = newYear;
      } else {
        console.error('Publication year must be a number greater than or equal to zero.');
      }
    }
  
    printInfo() {
      console.log(`Title: ${this._title}`);
      console.log(`Author: ${this._author}`);
      console.log(`Publication year: ${this._year}`);
    }
  
    static findOldestBook(books) {
      if (books.length === 0) {
        return null;
      }
  
      let oldestBook = books[0];
      for (let i = 1; i < books.length; i++) {
        if (books[i].year < oldestBook.year) {
          oldestBook = books[i];
        }
      }
  
      return oldestBook;
    }
  }
  
  module.exports = Book;