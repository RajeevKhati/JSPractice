function* fn() {
  console.log("First yield");
  yield 10;
  console.log("Second yield");
  yield 20;
  console.log("Third yield");
  return 30;
}

let generator = fn();

console.log("Before");
console.log("Between", generator.next().value);
console.log("hello");
console.log("Between", generator.next().value);
console.log("After");
