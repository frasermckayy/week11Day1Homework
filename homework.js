
//Question 1
var name = 'Bob';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

//Answer : My name is Bob


//Question 2
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());
// Answer : 3


//Question 3
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

//Answer : ['Ducks', 'Dogs', 'Lions']
// Actual 0: Ducks, 1: Dogs, 2:Lions

//Question 4
var suspectOne = 'Ally';
var suspectTwo = 'Alan';
var suspectThree = 'Upul';
var suspectFour = 'Alistair';

var allSuspects = function() {
  var suspectThree = 'Colin'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

//Answer : 'Suspects include Ally, Alan, Colin, Alistair'
// 'Suspect three is Upul'


//Question 5
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

//Answer : 'Poirot' 'Ace Ventura, monkey'
//Actual : 'Poirot'


// Question 6
var murderer = 'Rick'; //global variable

var outerFunction = function() {
  var murderer = 'Morty';

  var innerFunction = function() {
    murderer = 'Jerry';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);


// Answer : 'the murderer is Rick'



//Question 7
var foodTheif = 'Elephant';

var foodTheif = 'Duck';

var diffAnimal = function(){
  foodTheif = 'Otter';

var anotherSuspect = function(){
  fodTheif = 'Jaguar';
}

anotherSuspect();
}

diffAnimal();
console.log("who stole the food? It was the... ", foodTheif);
