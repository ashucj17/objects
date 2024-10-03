//___________Obejct using literals______________
let car = {
  brandName: "Tata",
  modle: "Safari",
  year: 2018,
};

//_________Fetching details_____________

console.log(car.brandName);
console.log(car.modle);
console.log(car.year);

//_______________Modifying details____________

car.brandName = "Mahindra";
car.modle = "Bolero";
car.year = "2004";
console.log(car);

//_______Adding new fratures__________

car.price = 400000;
car.capacity = 7;
car.milage = "20 Kmpl";
console.log(car);

//__________If else statement_______________

let age = 19;
if (age > 18) {
  console.log("You are eligible");
} else console.log("you are not eligible");

//__________Nested if else_________________

let yourScore = 80;

if (yourScore >= 90) {
  console.log("Your grade is A+");
} else if (yourScore >= 85) {
  console.log("Your grade is A");
} else if (yourScore >= 70) {
  console.log("Your grade is B+");
} else if (yourScore >= 55) {
  console.log("Your grade is B");
} else if (yourScore >= 40) {
  console.log("Your grade is C");
} else {
  console.log("you failed");
}

//_______________________statement with conditionals____________
