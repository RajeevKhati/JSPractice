const person = {
  name: "Jasprit",
  surname: "Bumrah",
};

const handler = {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      throw new Error("Property does not exist");
    }
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error("Can't add new property");
    }
  },
};

const personProxy = new Proxy(person, handler);

console.log("personProxy", personProxy);
personProxy.name = "Harbhajan";
console.log("personProxy", personProxy);
personProxy.city = "Punjab";
