const guitars = ["fender", "gibson"];
//setup of an array

guitars.push("gretsch");
//adds a guitar to the array list

console.log("guitars: ", guitars);
// priinting out the array with the string before it. Java script will put them all together which is great.
// console.log(guitars[1]);
// //accessing specific items from the array
// console.log(guitars[200]);
// //this will be undefined because there isnt a 200th item in the array.
// console.log(guitars[guitars.length -1]);
// //accesses the last item int he array
// const lastGuitars = guitars.pop();
// console.log(guitars);
// console.log(lastGuitars);

guitars[1] = "ibanez";


console.log(guitars);
