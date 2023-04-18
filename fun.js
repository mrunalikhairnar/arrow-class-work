function hello(name = "user") {
  return `hello ${name} `;
}

function add(...num3) {
  return num3.reduce((prev, curr) => prev + curr);
}

console.log(add(12, 34, 45));
