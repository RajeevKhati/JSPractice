function counter(arg) {
  let ans = 1;
  if (arg == 0) {
    return ans;
  }

  return function inner(arg) {
    ans++;
    if (arg == 0) {
      return ans;
    }
    return inner;
  };
}

console.log(counter(0)); // Output :  1
console.log(counter()(0)); // Output : 2
console.log(counter()()()()(0)); // Output : 5
