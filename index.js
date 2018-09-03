// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  let firstDrivers =  drivers.slice(0, 2)
  return firstDrivers;
};

const returnLastTwoDrivers = function (drivers) {
  let lastDrivers = drivers.slice(-2)
  return lastDrivers;
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};