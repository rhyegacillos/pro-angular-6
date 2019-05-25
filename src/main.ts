import {reduce} from 'rxjs/operators';
import * as NameAndWeatherLocation from './modules/NameAndWeather';
import {Name as OtherName} from './modules/DuplicateName';
import {TempConverter} from './modules/tempConverter';

console.log('Hello');

// function expression

let myFunc = function () {
  console.log('This is a statement');
};

myFunc();


myfuncDec();
// function declaration
function myfuncDec() {
  console.log('function declaration');
}


// function using defaul parameters

let myFunctDefaultParam = function (name, weather = 'raining') {
  console.log('Hello ' + name + '.');
  console.log('It is ' + weather + ' today');
};

myFunctDefaultParam('rhye');

// function using rest parameters
let myFuncRestParam = function (name, weather, ...extraArgs) {
  console.log('Hello ' + name + '.');
  console.log('It is ' + weather + ' today');

  for (let i = 0; i < extraArgs.length; i++) {
    console.log('Extra Arg: ' + extraArgs[i]);
  }
};

myFuncRestParam('Adam', 'sunny', 'one', 'two', 'three');

// function that return results
let myFuncReturnResults = function (name) {
  return ('Hello ' + name + '.');
};

console.log(myFuncReturnResults('Rhye'));


// functions as arguments to other functions
let myFuncFunctionArg = function(nameFunction) {
  return ('Hello ' + nameFunction() + '.');
};

console.log(myFuncFunctionArg(function () {
  return 'Adam';
}));

// function chaining
let myFuncChain = function (nameFunction) {
  return ('Hello ' + nameFunction() + '.');
};

let printName = function (nameFunction, printFunction) {
  printFunction(myFuncChain(nameFunction));
};

printName(function () { return 'James'; }, console.log);


// using arrow function

let myArrowFunc = (nameFunction) => ('Hello ' + nameFunction() + '.');
let printNameArrowFunc = (nameFunction, printFunction) => printFunction(myArrowFunc(nameFunction));

printNameArrowFunc(function () {return 'Louie'; }, console.log);


// using let keyword
let messageLetFunction = function (name, weather) {
  let message = 'Hello, Adam';
  if (weather === 'sunny') {
    let message = 'It is a nice day';
    console.log(message);
  } else {
    let message = 'It is ' + weather + ' today';
    console.log(message);
  }
  console.log(message);
};

messageLetFunction('Adam', 'raining');

// using var keyword

let messageVarFunction = function (name, weather) {
  var message = 'Hello, Adam';
  if (weather === 'sunny') {
    var message = 'It is a nice day';
    console.log(message);
  } else {
    var message = 'It is ' + weather + ' today';
    console.log(message);
  }
  console.log(message);
};

messageVarFunction('Adam', 'raining');

// using variable closure

let myClosureFunc = function (name) {
  let myLocalVar = 'sunny';
  let innerFunction = function () {
    return ('Hello ' + name + '. Today is ' + myLocalVar + '.');
  };

  return innerFunction();
};

console.log(myClosureFunc('Jessie'));

// using template strings
const weather = 'sunny';

let messageTemplate = `It is ${weather} today`;

console.log(messageTemplate);

// enumerating contents of an array using forEach
let myArray = [100, 'Adam', true];

myArray.forEach((value, index) => console.log('Index ' + index + ': ' + value));


// using spread operator
 let otherArray = [...myArray, 200, 'Bob', false];

 otherArray.forEach((value, index) => console.log(`Array item ${index}: ${value}`));

 // using filter and reduce helper method
let products = [
  { name: 'Hat', price: 24.5, stock: 10 },
  { name: 'Kayak', price: 289.99, stock: 1 },
  { name: 'Soccer Ball', price: 10, stock: 0 },
  { name: 'Running Shoes', price: 116.50, stock: 20 }
];

let totalValue = products
                  .filter(item => item.stock > 0)
                  .reduce((prev, item) => prev + (item.price * item.stock), 0);

console.log('Total value $' + totalValue.toFixed(2));


// javascript objects
let myData = new Object();
myData.name = 'Elise';
myData.weather = 'sunny';

console.log('Hello ' + myData.name + '.');
console.log('Today is ' + myData.weather + '.');

// using object literals  and functions as methods

let myData2 = {
  name: 'Luewin',
  weather: 'sunny',
  printMessages: function () {
    console.log('Hello ' + this.name + '.');
    console.log('Today is ' + this.weather + '.');
  }
};

myData2.printMessages();

// javascript class
class MyClass {
  constructor(name, weather) {
    this.name = name;
    this._weather = weather;
  }

  set weather(value) {
    this._weather = value;
  }

  get weather() {
    return `Today is ${this._weather}`;
  }

  printMessages() {
    console.log('Hello ' + this.name + '.');
    console.log('Today is ' + this.weather + '.');
  }
}

// using class inheritance
class MySubClass extends MyClass {
  constructor(name, weather, city) {
    super(name, weather);
    this.city = city;
  }

  printMessages() {
    super.printMessages();
    console.log(`You are in ${this.city}`);
  }
}

let myData3 = new MySubClass('Jason', 'sunny', 'London');
myData3.printMessages();


// using javascript modules

// let name = new Name('Adam', 'Freeman');
// let loc = new WeatherLocation('raining', 'London');

// console.log(name.nameMessage);
// console.log(loc.weatherMessage);

// renaming imports
let other = new OtherName();
console.log(other.message);

// importing All of the types in a module
let name  = new NameAndWeatherLocation.Name('Adan', 'Freeman');
let loc = new NameAndWeatherLocation.WeatherLocation('raining', 'London');

console.log(name.nameMessage);
console.log(loc.weatherMessage);

// typescript annotation
let cTemp = TempConverter.convertFtoC(38);
console.log(`The temo is ${cTemp}C`);


// using tuples
let tuple: [string, string, string];
tuple = ['London', 'raining', TempConverter.convertFtoC('38')];

console.log(`It is ${tuple[2]} degrees C and ${tuple[1]} in ${tuple[0]}`);


// using indextable types

let cities: {[index: string]: [string, string] } = {};
cities['London'] = ['raining', TempConverter.convertFtoC('38')];
cities['Paris'] = ['sunny', TempConverter.convertFtoC('52')];
cities['Berlin'] = ['snowing', TempConverter.convertFtoC('23')];

for(let key in cities) {
  console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}


