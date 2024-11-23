let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];

function flattenArray(arr) {
  const ansArray = [];

  for (let element of arr) {
    if (Array.isArray(element)) {
      const newArray = flattenArray(element);
      ansArray.push(...newArray);
    } else {
      ansArray.push(element);
    }
  }

  return ansArray;
}

console.log("ans ->", flattenArray(input));
