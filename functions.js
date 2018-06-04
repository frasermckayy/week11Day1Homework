// function hello() {
//   return("hello G5");
// }
// console.log(hello());
// //this actually prints out the functions action.
//
//
// function mood(name, mood, weather){
//   console.log(name + " you are: " + mood + " and it is " + weather);
// }
// // mood("Fraser", "happy", "sunny");
// // you can keep adding arguments as you go
//
//
//
//
// function add(num1, num2) {
//   return num1 + num2;
// }
// // console.log("the return value is: " + add(2, 2, 8));



// function sum() {
//   let i;
//   let total = 0;
//   for (i = 0; i < arguments.length; i++){
//     total += arguments[i];
//   }
//   return total;
// }
//
// // console.log(sum(1, 2, 3, 4));
//
//
// const hello = function(){
//   return("Hello");
//  }

 // console.log(hello());



function names(firstName, surname){
  console.log("Hey, I am " + firstName + surname );
}
names("Fraser", "McKay");







function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(2, 2, 8));






const array = [1, 2, 3];
function firstInArray(array) {
  return array[0];
}
console.log(firstInArray(array));







const printNames = function(names){
  console.log(names);
}
printNames(['Fraser', 'Roberto']);





const farmAnimals = ["cow", "pig", "chicken"];
const farm = [];
const addFarmAnimalsToFarm = function(){
  for (let i = 0; i < farmAnimals.length; i++) {
    farm.push(farmAnimals[i]);
  }
}
addFarmAnimalsToFarm();
console.log(farm);
