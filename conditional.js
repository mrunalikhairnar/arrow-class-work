function oddEven(no) {
  if (no % 2 === 0) {
    console.log("is true");
    //this block will execute if condition is true
  } else {
    console.log("is false");
    //this block will get executed if condition is false
  }
}

oddEven(12);

function greaterOfThree(no1, no2, no3) {
  if (no1 === no2 && no1 == no3) {
    return `all are equal`;
  }
  if (no1 > no2 && no1 > no3) {
    return `${no1} is greater`;
  } else if (no2 > no1 && no2 > no3) {
    return `${no2} is greater`;
  } else {
    return `${no3} is greater`;
  }
}

console.log(greaterOfThree(10, 20, 34));
console.log(greaterOfThree(10, 10, 10));
