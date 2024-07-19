//Activity4

//task-7
const book = {
    title: "Concept of Physics",
    author: "HC Verma",
    year: 1992,
    This() {
        return `Book title is ${this.title} and year is ${this.year}.`;
    }
}

console.log(book.This());