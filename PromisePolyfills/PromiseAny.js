const promise1res = () => Promise.resolve(1);
const promise2res = () => Promise.resolve(2);
const promise3res = () => Promise.resolve(3);

const promise1rej = () => Promise.reject(1);
const promise2rej = () => Promise.reject(2);
const promise3rej = () => Promise.reject(3);

/**
 * Promise any:-
 *  resolves when any one of the promise is resolved
 *      - provides value of resolved promise in then block
 *  rejects when all promises are rejected
 *      - provides value of all rejected promise in an AggregateError(an array but not exactly array) in catch block
 */

Promise.any([promise1rej(), promise2res(), promise3res()])
  .then((data) => {
    console.log("promise any resolve", data);
  })
  .catch((data) => {
    console.log("promise any reject", data);
  });

Promise.any([promise1rej(), promise2rej(), promise3rej()])
  .then((data) => {
    console.log("promise any resolve", data);
  })
  .catch((data) => {
    console.log("promise any reject", data);
  });

Promise.myAny = function (promisesArray) {
  return new Promise((resolve, reject) => {
    const rejectedPromises = [];
    promisesArray.forEach((promise) => {
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((data) => {
          rejectedPromises.push(data);
          if (rejectedPromises.length === promisesArray.length) {
            reject(rejectedPromises);
          }
        });
    });
  });
};

Promise.myAny([promise1rej(), promise2res(), promise3res()])
  .then((data) => {
    console.log("promise myAny resolve", data);
  })
  .catch((data) => {
    console.log("promise myAny reject", data);
  });

Promise.myAny([promise1rej(), promise2rej(), promise3rej()])
  .then((data) => {
    console.log("promise myAny resolve", data);
  })
  .catch((data) => {
    console.log("promise myAny reject", data);
  });
