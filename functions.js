function hello(name = "user") {
  console.log("hello ", name);
}

let username = "amit";
// hello(username);
// hello();

function helloall(names, msg = "hello") {
  console.log(msg, names[0]);
  console.log(msg, names[1]);
  console.log(msg, names[2]);
}

// helloall(["amit", "sumit", "rahul"]);

const helloArrow = (name) => {
  console.log("hello", name);
};

helloArrow("amit");
