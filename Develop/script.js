var currentDay = document.querySelector("#currentDay");
var currentDay = moment().format("dddd MMMM Do HH:mm");
var currentDayInput = new Date();
$("#currentDay").append(currentDay);
console.log(currentDay);