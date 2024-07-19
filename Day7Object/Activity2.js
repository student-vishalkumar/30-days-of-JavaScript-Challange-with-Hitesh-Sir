//Activity2

//Task-3
const book = {
    title: "Concept of Physics",
    author: "HC Verma",
    year: 1992,
    titleAndAuthor() {
        return `${book.title} and ${book.author}`;
    } 
}
console.log(book.titleAndAuthor());

//Task-4
const book1 = {
    title: "COncept of Physics",
    author: "HC Verma",
    year: 1992,
    updateYear(Year) {
        book1.year = Year;
    }
}

book1.updateYear(2001);
console.log(book1.year);