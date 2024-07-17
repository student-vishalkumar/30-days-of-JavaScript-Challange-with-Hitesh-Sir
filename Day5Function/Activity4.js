//Activity4

//Task-7
function parameterAndDefault(num1, num2 = 5) {
    const sum = num1*num2;
    return sum;
}
console.log(parameterAndDefault(8));

//Task-8
function parameterAndDefault1(name, age=35) {
    const message = "Hello Mr. " + name + " good morning";
    return message;
}

console.log(parameterAndDefault1("vikas"));