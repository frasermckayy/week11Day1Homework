// const person = {
//   name: "Guybrush",
//   age: 32,
//   weapon: "cutlass",
//   isAwesome: true,
//   talk: function(){
//     console.log("Shiver me timbers!");
//   },
//   sayName: function(){
//     console.log("Hi, my name is " + this.name);
//   },
//   awesomness: function(){
//     console.log("I am Awesome?..." + this.isAwesome);
//   }
// };
//
// console.log(person.name);
// person.talk();
// person.sayName();
// person.awesomness();



const bear = {
  name: "Paw",
  type: "Grizzly",
  belly: [],
  eat: function(food){
    this.belly.push(food);
  }
};

const fish = {
  name: "rainbow trout"
}

const bird = "pigeon";

bear.eat(fish);
bear.eat(bird);
console.log(bear.belly);
