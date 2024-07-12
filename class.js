// Class

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    (this.name = name),
      (this.releaseDate = releaseDate),
      (this.pagesCount = pagesCount),
      (this.state = 100),
      (this.type = null);
  }
  fix() {
    this.state = this._state * 1.5;
  }
  set state(num) {
    this._state = num < 0 ? 0 : num >= 100 ? 100 : num;
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    (this.type = "book"), (this.author = author);
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    (this.name = name), (this.books = []);
  }
  addBook(book) {
    book.state > 30 && this.books.push(book);
  }
  findBookBy(t, value) {
    const result = this.books.find((bo) => bo[t] === value);
    return result ? result : null;
  }
  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {

        const res = this.books.splice(i, 1)
        return res
      }
    }
  }
}

const library = new Library("Библиотека имени Ленина");
const df = new DetectiveBook(
  "Артур Конан Дойл",
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);
const df2 = new DetectiveBook(
  "Артур Конан Дойл",
  "Полное собрание повестей и рассказов о ",
  2020,
  1008
);
df.state = 40;

library.addBook(df);
library.addBook(df2);

const boock1 = library.giveBookByName('Полное собрание повестей и рассказов о ')
console.log(boock1)
console.log(library.books)
