//Activity3

//Task-5
const sumOfTwo = (a, b) => {
    const sum = a+b;
    return sum;
}

console.log(sumOfTwo(3,4));

console.log();

//Task-6
const stringContainLetter = (str, x) => {
    if(str.includes(x)) {
        return true;
    } else {
        return false;
    }
}

console.log(stringContainLetter("vishal", "g"));