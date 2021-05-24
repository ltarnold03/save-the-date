var schedule = {};

// display current Weekday, Month, Date, Time
var currentDay = document.querySelector("#currentDay");
var currentDay = moment().format("dddd MMMM Do HH:mm");
var currentDayInput = new Date();
$("#currentDay").append(currentDay);
console.log(currentDay);

// click begins //

$('#btn0').on('click', function() {
    var input0 = document.querySelector("#hour0");
    localStorage.setItem("#btn0", input0.value)
    $("#hour0").append(input0);
    return input0.value
})


$('#btn1').on('click', function() {
    //alert("clicked");
    var input1 = document.querySelector("#hour1");
    localStorage.setItem("#btn1", input1.value)
    $("#hour1").append(input1);
    return input1.value
})

$('#btn9').on('click', function() {
    //alert("clicked");
    var input9 = document.querySelector("#hour9");
    localStorage.setItem("#btn9", input9.value)
    $("#hour9").append(input9);
    return input9.value
})

$('#btn10').on('click', function() {
    //alert("clicked");
    var input10 = document.querySelector("#hour10");
    localStorage.setItem("#btn10", input10.value)
    $("#hour10").append(input10);
    return input10.value
})

$('#btn11').on('click', function() {
    //alert("clicked");
    var input11 = document.querySelector("#hour11");
    localStorage.setItem("#btn11", input11.value)
    $("#hour11").append(input11);
    return input11.value
})

$('#btn12').on('click', function() {
    //alert("clicked");
    var input12 = document.querySelector("#hour12");
    localStorage.setItem("#btn12", input12.value)
    $("#hour12").append(input12);
    return input12.value
})

$('#btn13').on('click', function() {
   // alert("clicked");
   var input13 = document.querySelector("#hour13");
    localStorage.setItem("#btn13", input13.value)
    $("#hour13").append(input13);
    return input13.value
})

$('#btn14').on('click', function() {
   // alert("clicked");
   var input14 = document.querySelector("#hour14");
    localStorage.setItem("#btn14", input14.value)
    $("#hour14").append(input14);
    return input14.value
})

$('#btn15').on('click', function() {
   // alert("clicked");
   var input15 = document.querySelector("#hour15");
    localStorage.setItem("#btn15", input15.value)
    $("#hour15").append(input15);
    return input15.value
})

$('#btn16').on('click', function() {
   // alert("clicked");
   var input16 = document.querySelector("#hour16");
    localStorage.setItem("#btn16", input16.value)
    $("#hour16").append(input16);
    return input16.value
})

$('#btn17').on('click', function() {
   // alert("clicked");
   var input17 = document.querySelector("#hour17");
    localStorage.setItem("#btn17", input17.value)
    $("#hour17").append(input17);
    return input17.value
})

$('#btn18').on('click', function() {
   // alert("clicked");
   var input18 = document.querySelector("#hour18");
    localStorage.setItem("#btn18", input18.value)
    $("#hour18").append(input18);
    localStorage.getItem()
    return input18.value
})

// click ends //







// Color Code timebocks for past, present, future
// var hour = document.querySelector("#time-block");

// var hour = {
//     time: ["9:00"]
// }


// make sure text input presist when page reloaded

//var schedule = {};

// $(".time-block").each(function () {            
//     var time = parseInt($(this).attr("id"));
//     $(this).children().each(function() {
//         var text = $(this)
//         .find("textarea")

//         var time = $(this)
//         .find("hour")

//         tempArr.push({
//             text: text,
//             hour: hour
//         })
//     })
// })



//preventDefault();

 //var time = momemt.hour("HH");




// var getTime = function (timeEl) {
// if (moment().isAfter(time)) {
//     $(timeEl).addClass("time-block");
// }
//  else if (time > timeEL) {
//      $("time-block").addClass("past");
// }
// else if (time = hour) {
//     $("time-block").addClass("present");
// }
// else if (time < hour) {
//     $("time-block").addClass("future");
//}
//  }}

////else if (Math.abs(moment().diff(time, "hour"))) {
  //$(timeEl).addClass("time-block");
//}
//}
//console.log(time);

// time = new Date();
// $(".time-block").each(function () {            
// var getTime = parseInt($(this).attr("id"));

// if (getTime < time ) {
// $(this).addClass(past);
// }
// else if (getTime = time) {
// $(this).addClass(present);
// }
// else (getTime > time) {
// $(this).addClass(future);
// });
// }