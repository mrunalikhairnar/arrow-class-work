const fruits = [];
fruits.push("banana", "apple", "peach");
//console.log(fruits.length);

const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
console.log(Array.prototype.filter.call(arrayLike, (x) => (x) => "b"));
