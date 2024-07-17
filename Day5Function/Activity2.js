//Activity2

//Task-3
const maxm = function maxoftwo(num1, num2){
    if(num1>num2){
        console.log("num1 is greater");
    } else {
        console.log("num2 is greater");
    }
}
maxm(2, 3)

//Task-4
const string = function Concatinate(str1, str2) {
    const CtStr = str1.concat(" ",str2);
    return CtStr;
}

console.log(string("vishal", "kumar"));