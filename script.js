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
*/

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
