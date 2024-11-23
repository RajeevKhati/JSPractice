//example 1
// const fs = require("fs");
// console.log("before");

// // Initiating an asynchronous file reading operation
// const promise = fs.promises.readFile("./f1.txt");

// console.log(promise);
// console.log("After");

// // Scheduling a callback to execute after a 2-second delay
// setTimeout(() => {
//     console.log("i am file read");
//     console.log(promise);
// }, 2000);

const fs = require("fs");
console.log("before");

// Initiating an asynchronous file reading operation
const promise = fs.promises.readFile("./f1.txt");

console.log(promise);
console.log("After");

// Using .then() to handle the resolved Promise
promise.then(futurevalue => {
    console.log("data inside the file is:", futurevalue.toString());
});

// Scheduling a callback to execute after a 2-second delay
setTimeout(() => {
    console.log("i am file read");
    console.log(promise);
}, 2000);