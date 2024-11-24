const personMap = new Map();
personMap.set("name", "Sachin");
personMap.set("surName", "Tendulkar");
const keyState = { state: "Maharashtra" };
personMap.set(keyState, { city: "Mumbai" });

console.log("personMap", personMap);

for (let [key, value] of personMap) {
  console.log("key->", key, "value->", value);
}

console.log(personMap.get("surName"));
// console.log(personMap.get({ state: "Maharashtra" })); //this does not work
console.log(personMap.get(keyState));

//Strong reference in Map
let john = { name: "John" };
let map = new Map();
map.set(john, "hi");
john = null;
console.log("map get", map.get(john));
