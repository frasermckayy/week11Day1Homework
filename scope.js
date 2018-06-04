// const talk = function() {
//   var name = "Alistair";
//   console.log("My name is " + name);
// }
// // talk();
//
// // console.log("trying to access result " + name);
//
// const walk = function(){
//   console.log(name + " is walking");
// }
//
// walk();


// var name = "Upul";
//
// const talk = function(){
// var name = "Alan";
//   console.log("My name is " + name);
// }
//
// const walk = function(){
//   console.log("in walk() the name is " + name);
// }
//
// talk();
// walk();
// console.log("the global name", name);


var globalVariable = 99; // can be seen everywhere

var separateFunction = function() {
  var separateA = 2;//can only be seen within a separate function
};

var outerFunction = function() {
  var outerA = 1;// the function outerA can see the variable outerA()
  var innerFunction = function() {
    console.log('outerA ', outerA); //this would print out outerA 1
    console.log('globalVariable', globalVariable);// this would print out globalvariable 99
    // console.log('separateA ', separateA);//this wont print as its in a separate function "not defined"
  };

  innerFunction()
};

outerFunction();

// outerA 1
//globalvariable 99
