
function returnFirstTwoDrivers() {
    return firstTwo;
}

function returnLastTwoDrivers() {
    return lastTwo;
}

function createFareMultiplier(integer) {
        const fare = integer;
    return function fareQuintupler(fare) {
        return fare * 5;
    }
}

function fareDoubler(fare) {
    const doubledFare = fare * 2;
    return doubledFare;
}

function fareTripler(fare) {
    const tripledFare = fare * 3;
    return tripledFare;
}

function selectDifferentDrivers(drivers, selectingDrivers) {
    if (selectingDrivers === firstTwo) {
        return firstTwo;
    } else if (selectingDrivers === lastTwo) {
        return lastTwo;
    }
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const firstTwo = drivers.slice(0, 2);
const lastTwo = drivers.slice(-2);
console.log(fareDoubler(10));