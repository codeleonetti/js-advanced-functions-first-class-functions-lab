// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    let n = 2
    return drivers.slice(0,n)
}

const returnLastTwoDrivers = function(drivers){
    //let n = 2
    return drivers.slice(Math.max(drivers.length - 2, 1))
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
// function selectingDrivers(){
//     newArray = [returnFirstTwoDrivers(), returnLastTwoDrivers()]
// }

const createFareMultiplier = function(fare){
//    console.log("check", x)
//     // x = 4
//     let multiply = 
    return function(x){ return fare * x }
}

const fareDoubler = createFareMultiplier(2)
console.log("check", fareDoubler)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}
