//Activity5

let year = 2024;

if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year");
} else {
    console.log("not leap year");
}