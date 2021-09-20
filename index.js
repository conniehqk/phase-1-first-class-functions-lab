// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(n) {
    return function(fare) {
        return fare*n
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    }else if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}