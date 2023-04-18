// rest operator  fun(...para)
function add(...num3) {
  return num3.reduce((prev, curr) => prev + curr);
}

//   console.log(add(12, 34, 45));

// spread operator

arr1 = [10, 20, 30];
arr2 = [40, 50, 60];

console.log([...arr1, ...arr2]);
