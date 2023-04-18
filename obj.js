const manager = {
  name: "shraddha",
  age: 22,
  job: "software engineer",
};

const Intern = {
  name: "raj",
  age: 21,
  job: "software engineer Intern",
};

console.log(manager["name"]);
console.log(Intern["job"]);
console.log(manager[("name", "age", "job")]);
console.log(Intern[("name", "age", "job")]);
