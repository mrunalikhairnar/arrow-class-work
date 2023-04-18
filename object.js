const person = {
  fname: "Amit",
  lname: "Mali",
  contact: 9595949452,
  height: 5.7,
  married: true,
  fullName: function () {
    return this.fname + " " + this.lname;
  },
  hobbies: ["playing cricket", "watching series", "gaming"],
  address: {
    street: "vadala-pathardi rd.",
    area: "indira nagar",
  },
};

const result = Object.entries(person).forEach((elem) => {
  console.log("the key is = ", elem[0], "have a value ", elem[1]);
});
// console.log(result[0][1]);
// console.log("name -", person.fname, person.lname);
// console.log(person.fullName());
// console.log(person.address["street"]);
