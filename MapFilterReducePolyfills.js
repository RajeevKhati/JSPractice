const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const mappedArray = arr.map((ele) => ele * 2);
const filteredArray = arr.filter((ele) => ele % 2 === 0);
const reducedArray = arr.reduce((acc, ele) => acc + ele, 0);

console.log("mappedArray", mappedArray);
console.log("filteredArray", filteredArray);
console.log("reducedArray", reducedArray);

Array.prototype.myMap = function (cb) {
  const ans = [];
  this.forEach((ele) => {
    ans.push(cb(ele));
  });
  return ans;
};

Array.prototype.myFilter = function (cb) {
  const ans = [];
  this.forEach((ele, i) => {
    if (cb(ele, i)) {
      ans.push(ele);
    }
  });
  return ans;
};

Array.prototype.myReduce = function (cb, initialValue) {
  let ans = initialValue;
  this.forEach((ele, i) => {
    ans = cb(ans, ele, i);
  });
  return ans;
};

const mappedArray1 = arr.myMap((ele) => ele * 2);
const filteredArray1 = arr.myFilter((ele) => ele % 2 === 0);
const reducedArray1 = arr.myReduce((acc, ele) => acc + ele, 0);

console.log("mappedArray1", mappedArray1);
console.log("filteredArray1", filteredArray1);
console.log("reducedArray1", reducedArray1);
