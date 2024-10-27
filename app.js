//___________Obejct using literals______________
// let car = {
//   brandName: "Tata",
//   modle: "Safari",
//   year: 2018,
// };

//_________Fetching details_____________

// console.log(car.brandName);
// console.log(car.modle);
// console.log(car.year);

//_______________Modifying details____________

// car.brandName = "Mahindra";
// car.modle = "Bolero";
// car.year = "2004";
// console.log(car);

//_______Adding new fratures__________

// car.price = 400000;
// car.capacity = 7;
// car.milage = "20 Kmpl";
// console.log(car);

//__________If else statement_______________

// let age = 19;
// if (age > 18) {
//   console.log("You are eligible");
// } else console.log("you are not eligible");

//__________Nested if else_________________

// let yourScore = 80;
//
// if (yourScore >= 90) {
// console.log("Your grade is A+");
// } else if (yourScore >= 85) {
// console.log("Your grade is A");
// } else if (yourScore >= 70) {
// console.log("Your grade is B+");
// } else if (yourScore >= 55) {
// console.log("Your grade is B");
// } else if (yourScore >= 40) {
// console.log("Your grade is C");
// } else {
// console.log("you failed");
// }

//_______________________statement with conditionals____________
// let age = 19;
// let indian = true;
// if (age >= 18 && indian) {
//   console.log("person is indian, can vote");
// } else {
//   console.log("cannot vote");
// }

// let x = "5";
// if (x == 5) {
//   console.log("loose equality :true");
// }
// if (x === 5) {
//   console.log("strict equality :true");
// }

//_________Conditionals assignment_____//
// let num = prompt("enter number");
// if (num > 0) {
//   console.log("Number is positive");
// } else if (num == 0) {
//   console.log("Number is zero");
// } else if (num < 0) {
//   console.log("Number is negative");
// }

// let score = prompt("Enter your marks");
// if (score >= 90) {
//   console.log("A");
// } else if (score >= 80 && score <= 89) {
//   console.log("B");
// } else if (score >= 70 && score <= 79) {
//   console.log("C");
// } else if (score >= 60 && score <= 69) {
//   console.log("D");
// } else {
//   console.log("fail");
// }
//____________loops_____________/
// for (let i = 0; i <= 9; i++) {
//   console.log(i);
// }
//
// let emp = [
//   { name: "arun", email: "arun@gmail.com", age: 21 },
//   { name: "trun", email: "trun@gmail.com", age: 24 },
//   { name: "varun", email: "vrun@gmail.com", age: 25 },
//   { name: "neha", email: "neha@gmail.com", age: 30 },
//   { name: "hana", email: "hana@gmail.com", age: 50 },
//   { name: "hansh", email: "hansh@gmail.com", age: 27 },
// ];
// console.log(emp);
// for (let i = 0; i < emp.length; i++) {
// console.log(emp[i].name);
// }
// for (let i = 0; i < emp.length; i++) {
// console.log(emp[i].age);
// }
// for (let i = 0; i < emp.length; i++) {
//   // if (emp[i].age >= 18) {
//     console.log(emp[i].name);
//   }
// }

// let car = {};
// car.type = "Toyota";
// car.model = "Fortuner";
// car.colot = "Balck";
// car.wheels = 4;
// console.log(typeof car);
// console.log(car);
// const mySym = Symbol("keyl");
// let user_details = {
//   name: "ashish",
//   email: "ashu@gmail.com",
//   age: 21,
//   [mySym]: "myKey1",
//   city: "Kanpur",
//   State: "Uttar Pradesh",
//   Country: "India",
// };
// console.log(user_details.name); /* Famous Method */
// console.log(user_details["name"]); /* alternate method */
// console.log(user_details[mySym]);
// console.log(user_details);

// user_details.email = "ashu@galghar.com";
// Object.freeze(user_details);
// user_details.name = "Ashu";
// console.log(user_details);

// user_details.greatings = function (user) {
//   console.log(`Hello, ${user}`);
// };
// console.log(user_details.greatings("ashu"));

// let obj1 = { a: 1, b: 2, c: 3 };
// let obj2 = { d: 4, e: 5, f: 6 };
// let obj3 = { h: 7, g: 8, i: 9 };
//
// let newObj = {
//   obj1,
//   obj2,
// }; /* here obj1 & obj2 is stored as an object of newObj */
// console.log("newObj:", newObj);
// let obj = Object.assign({}, obj1, obj2, obj3);
// console.log("Object:", obj);
//
// console.log(user_details.hasOwnProperty(mySym));

/* Object destructuring */

let emp_details = {
  username: "ak07",
  password: "ashu@1234",
  hobby: "cricket",
  designation: "Lead",
};

let { designation } = emp_details;
console.log(designation);
console.log(designation);
