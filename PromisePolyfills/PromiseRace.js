const promise1res = () => Promise.resolve(1);
const promise2res = () => Promise.resolve(2);
const promise3res = () => Promise.resolve(3);

const promise1rej = () => Promise.reject(1);
const promise2rej = () => Promise.reject(2);
const promise3rej = () => Promise.reject(3);

/**
 * Promise race:-
 *  resolves when first settled promise is resolved
 *      - provides value of resolved promise in then block
 *  rejects when first settled promise is rejected
 *      - provides value of rejected promise in catch blocks
 */

Promise.race([promise1res(), promise2res(), promise3res()])
  .then((data) => {
    console.log("promise race resolve", data);
  })
  .catch((data) => {
    console.log("promise race reject", data);
  });

Promise.race([promise1rej(), promise2rej(), promise3rej()])
  .then((data) => {
    console.log("promise race resolve", data);
  })
  .catch((data) => {
    console.log("promise race reject", data);
  });

Promise.myRace = function (promisesArray) {
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.myRace([promise1res(), promise2res(), promise3res()])
  .then((data) => {
    console.log("promise myRace resolve", data);
  })
  .catch((data) => {
    console.log("promise myRace reject", data);
  });

Promise.myRace([promise1rej(), promise2rej(), promise3rej()])
  .then((data) => {
    console.log("promise myRace resolve", data);
  })
  .catch((data) => {
    console.log("promise myRace reject", data);
  });
