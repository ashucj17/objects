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
