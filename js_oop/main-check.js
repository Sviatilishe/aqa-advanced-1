const Book = require('./book');
const EBook = require('./ebook');

const book1 = new Book('Watchmen', 'A.Moore', 1987);
const book2 = new Book('Witcher', 'A.Sapkowski', 1995);
const book3 = new Book('Carbide', 'A.Lyubka', 2015);

book1.title = 2;
book2.author = 2;
book3.year = 'string';

book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook = new EBook(
  'Do Androids Dream of Electric Sheep?',
  'Philip K. Dick',
  1968,
  'PDF',
);

ebook.title = 2;
ebook.author = 123;
ebook.year = '2022';
ebook.fileFormat = 42;

ebook.printInfo();

const oldestBook = Book.findOldestBook([book1, book2, book3, ebook]);
console.log('The oldest book:');
oldestBook.printInfo();

const book4 = new Book('Title', 'Author', 2000);
const ebookFromBook = EBook.createFromBookAndFormat(book3, 'EPUB');
ebookFromBook.printInfo();
