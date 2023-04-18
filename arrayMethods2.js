let arr = [23, 4, 5, 43, 77, 88, 9];

let newArr = arr.map((item) => {
  return item * 2;
});

// console.log(newArr);

arr.forEach((item) => {
  //   console.log(item);
});

const total = arr.reduce((prev, current) => prev + current);
console.log(total);

let filterArr = arr.filter((item) => item % 2 !== 0);

console.log(filterArr);
