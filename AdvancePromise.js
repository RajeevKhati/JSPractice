//Example 1

// let fs = require("fs");
// let promise = fs.promises.readFile("f1.txt");

// promise.then(scb, fcb);

// function scb(data) {
//   console.log("The data is: ", data);
// }

// function fcb(error) {
//   console.log("Inside Catch: ", error.message);
// }

//Following throws an error of
//ReferenceError: Cannot access 'scb' before initialization
// const scb = (data) => {
//   console.log("The data is: ", data);
// };

// const fcb = (error) => {
//   console.log("Inside Catch: ", error.message);
// };

//Example 2
// let promise = Promise.resolve(10);
// promise
//   .then(function (data) {
//     console.log("Step 1:", data); // Output: Step 1: 10
//     return data * 2;
//     // return Promise.resolve(data * 8); //this also works
//   })
//   .then(function (firstThenValue) {
//     console.log("Step 2:", firstThenValue); // Output: Step 2: 20
//     return firstThenValue + 3;
//   })
//   .then(function (secondThenValue) {
//     console.log("Step 3:", secondThenValue); // Output: Step 3: 23
//     return secondThenValue * 2;
//   })
//   .then(function (thirdThenValue) {
//     console.log("Step 4:", thirdThenValue); // Output: Step 4: 46
//   });

//Example 3
// Promise.reject(100)
//   .catch((err) => {
//     console.log("err", err);
//   })
//   .then((data) => {
//     console.log("data", data);
//   });
// Promise.reject(100)
//   .finally(() => {
//     console.log("finally");
//     return new Error("errorrrrrr");
//   })
//   .catch((err) => {
//     console.log("err", err);
//   })
//   .then((data) => {
//     console.log("data", data);
//   });

//Example 4
// Promise.resolve("Initial data")
//   .then((data) => {
//     console.log("1st then:", data);
//     return Promise.reject("Rejected from first then");
//   })
//   .catch((err) => {
//     console.log("1st catch:", err);
//   });

//Example 5
// Promise.resolve(100)
//   .then((data) => {
//     console.log("data", data);
//     return data;
//   })
//   .finally((data) => {
//     console.log("finally", data);//this data will always be undefines as finally don't take arguments
//   });

//Example 6
Promise.resolve("Initial data")
  .finally((data) => {
    console.log(data); // 4 undefined
    return "Something";
    // throw new Error("An error in finally");
  })
  .catch((err) => {
    console.log("Caught:", err.message); // Caught: Something
  });
