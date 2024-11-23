Function.prototype.myCall = function (obj, ...args) {
  const sym = Symbol();
  obj[sym] = this;
  obj[sym](...args);
  delete obj[sym];
};

Function.prototype.myApply = function (obj, args) {
  const sym = Symbol();
  obj[sym] = this;
  obj[sym](...args);
  delete obj[sym];
};

Function.prototype.myBind = function (obj, ...args1) {
  const borrowedFn = this;
  return function (...args2) {
    const sym = Symbol();
    obj[sym] = borrowedFn;
    obj[sym](...args1, ...args2);
    delete obj[sym];
  };
};

const person1 = {
  name: "John",
  printName: function (age) {
    console.log("Name is", this.name, "and age is", age);
  },
};

const person2 = {
  name: "Justin",
};

person1.printName.call(person2, 20);
person1.printName.myCall(person2, 20);
person1.printName.apply(person2, [20]);
person1.printName.myApply(person2, [20]);

const printNameFn = person1.printName.bind(person2);
printNameFn(20);
const myPrintNameFn = person1.printName.myBind(person2);
myPrintNameFn(20);
