//Activity3

//Task-7
const arr = [1, 2, 3, 4, 5];
const newarr = arr.map((x) => {return 2*x})
console.log(newarr);

//Task-8
const arr1 = [1, 2, 3, 4, 5];
const newarr1 = arr1.filter((x) => {
    return x%2 === 0;
})
console.log(newarr1);

//Task-9
const arr2 = [1, 2, 3, 4, 5];
const sumOfArrElement = arr2.reduce(add, 0)

function add(accumulator, a) {
    return accumulator+a;
}
console.log(sumOfArrElement);