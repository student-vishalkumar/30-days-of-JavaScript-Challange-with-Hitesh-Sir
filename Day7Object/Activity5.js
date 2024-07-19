//Activity5

//Task-8
const book = {
    title: "COncept of Physics",
    author: "HC Verma",
    year: 1992
}

for (const property in book) {
    console.log(`${property}: ${book[property]} `);
}

//Task-9
console.log(Object.keys(book));
console.log(Object.values(book));