//Activity5

//Task-9
function fnParamerter(x, fn) {
    for(let i=0; i<x; i++) {
        fn();
    }
}

fnParamerter(5, function () {
    console.log(5);
})

//Task-10
function hof(fn1, fn2, value) {
    return fn2(fn1(value));
}

const double = x => x * 2;
const square = x => x * x;

const result = hof(double, square, 5);
console.log(result); 
