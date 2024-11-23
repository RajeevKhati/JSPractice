// # Sample Input:
const obj = {
  newObj: {
    obj2: {
      obj5: {
        one: 1,
      },
    },
  },
  obj3: {
    obj4: { two: 2 },
  },
};
// # Sample Output:
//{ 'newObj.obj2.obj5.one': 1, 'obj3.obj4.two': 2 }

function flattenObj(obj, previousKey) {
  let ans = {};

  for (let key in obj) {
    let newKey = key;
    if (previousKey) {
      newKey = `${previousKey}.${newKey}`;
    }
    let restAns = {};
    if (typeof obj[key] === "object") {
      restAns = flattenObj(obj[key], newKey);
    } else {
      restAns = { [newKey]: obj[key] };
    }
    ans = { ...ans, ...restAns };
  }

  return ans;
}

console.log("ans -> ", flattenObj(obj, ""));

let person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
    postCodes: {
      firstBlock: 10,
      secondBlock: 12,
    },
  },
};

console.log("ans -> ", flattenObj(person, ""));
