// const intervalId = setInterval(() => {
//   console.log("hello");
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 3000);

//My Way

// function myInterval(cb, timeInterval) {
//   let timeoutId = {
//     id: null,
//   };
//   function inner() {
//     timeoutId.id = setTimeout(() => {
//       cb();
//       inner();
//     }, timeInterval);
//   }

//   inner();
//   return timeoutId;
// }

// function myClearInterval(id) {
//   clearTimeout(id);
// }

// const timeoutId = myInterval(() => {
//   console.log("hello");
// }, 1000);

// setTimeout(() => {
//   myClearInterval(timeoutId.id);
// }, 3000);

//Standard way

function mySetInterval(cb, delay) {
  let timerId = {
    keepRunning: true,
  };
  function callFn() {
    if (timerId.keepRunning) {
      cb();
      setTimeout(callFn, delay);
    }
  }

  setTimeout(callFn, delay);
  return timerId;
}

function myClearInterval(timerId) {
  timerId.keepRunning = false;
}

const timerId = mySetInterval(() => {
  console.log("hello");
}, 1000);

setTimeout(() => {
  myClearInterval(timerId);
}, 4000);
