const Book = require('./book');

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(newFormat) {
    if (typeof newFormat === 'string') {
      this._fileFormat = newFormat;
    } else {
      console.error('File format must be a string.');
    }
  }

  printInfo() {
    super.printInfo();
    console.log(`File fromat: ${this._fileFormat}`);
  }

  static createFromBookAndFormat(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

module.exports = EBook;