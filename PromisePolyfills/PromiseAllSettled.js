const promise1res = () => Promise.resolve(1);
const promise2res = () => Promise.resolve(2);
const promise3res = () => Promise.resolve(3);

const promise1rej = () => Promise.reject(1);
const promise2rej = () => Promise.reject(2);
const promise3rej = () => Promise.reject(3);

/**
 * Promise allSettled:-
 * It Always resolves
 *    - provides an array of answers returned by all promises in then callback along with the information of whether a promise was fulfilled or rejected in the following format
 *      [
            { status: 'rejected', reason: 1 },
            { status: 'fulfilled', value: 2 },
            { status: 'rejected', reason: 3 }
        ]
 */

Promise.allSettled([promise1res(), promise2res(), promise3res()])
  .then((data) => {
    console.log("promise allSettled resolve", data);
  })
  .catch((data) => {
    console.log("promise allSettled reject", data);
  });

Promise.allSettled([promise1rej(), promise2res(), promise3rej()])
  .then((data) => {
    console.log("promise allSettled resolve", data);
  })
  .catch((data) => {
    console.log("promise allSettled reject", data);
  });

Promise.myAllSettled = function (promisesArray) {
  return new Promise((resolve) => {
    const ans = [];
    promisesArray.forEach((promise, index) => {
      promise
        .then((data) => {
          ans[index] = { status: "fulfilled", value: data };
          if (ans.length === promisesArray.length) {
            resolve(ans);
          }
        })
        .catch((err) => {
          ans[index] = { status: "rejected", value: err };
          if (ans.length === promisesArray.length) {
            resolve(ans);
          }
        });
    });
  });
};

Promise.myAllSettled([promise1res(), promise2res(), promise3res()])
  .then((data) => {
    console.log("promise myAllSettled resolve", data);
  })
  .catch((data) => {
    console.log("promise myAllSettled reject", data);
  });

Promise.myAllSettled([promise1rej(), promise2res(), promise3rej()])
  .then((data) => {
    console.log("promise myAllSettled resolve", data);
  })
  .catch((data) => {
    console.log("promise myAllSettled reject", data);
  });
