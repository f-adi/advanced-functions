'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numberPassengers = 1,
  price = 199 * numberPassengers
) {
  //ES5
  // numberPassengers = numberPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numberPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  
  if (passenger.passport === 123456789) {
    alert('Check In');
  } else {
    alert('Wrong Passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
  // console.log(person.passport);
};

newPassport(jonas);
checkIn(flight, jonas);


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function

const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);

transformer('JavaScript is the best', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('🏋🏼');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet(`Hey`);
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')(`Jonas`);

// Challenge

let greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hi')(`Jonas`);

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah Williams');

//Call Method

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

//Apply Method
const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);

book.call(swiss, ...flightData);
console.log(swiss);

// Bind Method
// book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAt = value =>  => value + value *.23
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));



const poll = {
  question: `What is your favorite programming language`,
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get Answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write An Option Number)`
      )
    );
    console.log(answer);
    // Regster Answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }, 'string');

//[5,2,3]
//[1,5,3,9,6,1]

// document.querySelector('.poll').addEventListener('click', function () {
//   prompt(`That's a nice click bro!`);

// let promptAnswer = poll.registerNewAnswer();
// if (promptAnswer < 4 && promptAnswer >= 0) {
//   // poll.answers.splice(newAnswer, 1, +1);
//   poll.answers[promptAnswer] += 1;
// } else {
//   alert(`Your answer was ${prompt}, please make sure it's between 0 and 3`);
// }
// console.log(newAnswer);

//  poll.answers.push(newAnswer);
// console.log(poll.answers);
*/

const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();

// IIFE
(function () {
  console.log(`This will never run again`);
  const isPriviate = 23;
})();

// console.log(isPriviate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
