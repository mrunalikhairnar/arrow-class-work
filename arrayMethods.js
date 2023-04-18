let myarray = [23, 4, 6, 7, 87, 4];
console.log("before push ", myarray);
myarray.push(2445);
console.log("after push ", myarray);
let no = myarray.pop();
console.log("after pop ", myarray, "number poppeed", no);
no = myarray.shift();
console.log("after shift ", myarray, "number shifted", no);
myarray.unshift(44);
console.log("after unshift ", myarray);
myarray.splice(0, 2);
console.log("after splice index 0 -2 ", myarray);
myarray.splice(3, 0, "new item inserted at position 3");
console.log(myarray);

let myarr = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saterday",
  "sunday",
];

// function todayis(day) {
//   return "today is " + day;
// }

// let newarr = myarr.map(todayis);

let arr2 = [23, 4, 5, 43, 77, 88, 9];
let newarr2 = arr2.filter((num) => num % 2 == 0);
let newarr = myarr.map((day) => "today is " + day);
console.log(newarr);
console.log(newarr2);
