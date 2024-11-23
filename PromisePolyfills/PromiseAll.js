const promise1res = () => Promise.resolve(1);
const promise2res = () => Promise.resolve(2);
const promise3res = () => Promise.resolve(3);

const promise1rej = () => Promise.reject(1);
const promise2rej = () => Promise.reject(2);
const promise3rej = () => Promise.reject(3);

/**
 * Promise all:-
 *  resolves when all promises resolves
 *    - provides an array of answers returned by all promises in then callback
 *  rejects when any one promise rejects
 *    - provides first rejected promise answer in catch callback
 */

Promise.all([promise1res(), promise2res(), promise3res()])
  .then((data) => {
    console.log("promise all resolve", data);
  })
  .catch((data) => {
    console.log("promise all reject", data);
  });

Promise.all([promise1rej(), promise2res(), promise3res()])
  .then((data) => {
    console.log("promise all resolve", data);
  })
  .catch((data) => {
    console.log("promise all reject", data);
  });

Promise.myAll = function (promisesArray) {
  return new Promise((resolve, reject) => {
    const ans = [];
    promisesArray.forEach((promise) => {
      promise
        .then((data) => {
          ans.push(data);
          if (ans.length === promisesArray.length) {
            resolve(ans);
          }
        })
        .catch((data) => {
          reject(data);
        });
    });
    // resolve(ans);
  });
};

Promise.myAll([promise1res(), promise2res(), promise3res()])
  .then((data) => {
    console.log("promise myAll resolve", data);
  })
  .catch((data) => {
    console.log("promise myAll reject", data);
  });

Promise.myAll([promise1res(), promise2res(), promise3rej()])
  .then((data) => {
    console.log("promise myAll resolve", data);
  })
  .catch((data) => {
    console.log("promise myAll reject", data);
  });

//Solution by Mentor
// Promise.myAll = function (iterable) {
//   return new Promise((resolve, reject) => {
//     let result = [];
//     let count = 0;
//     iterable.forEach((pr, ind) => {
//       Promise.resolve(pr)
//         .then((val) => {
//           result[ind] = val;
//           count++;
//           if (count === iterable.length) resolve(result);
//         })
//         .catch((err) => reject(err));
//     });
//   });
// };
