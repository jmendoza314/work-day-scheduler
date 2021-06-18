let today = moment();
$('#currentDay').text(today.format('MMM Do YYYY'));

let currentHour = (new Date()).getHours();
let saveBtn = document.querySelectorAll('.saveBtn');
const scheduleEvent = document.querySelector('.event');
    scheduleEvent.value = localStorage.getItem("savedEvent")

let hour9 = document.querySelector(".time")
hour9 = 9;
let hour10 = document.querySelector(".time10")
hour10 = 10;
let hour11 = document.querySelector(".time11")
hour11 = 11;
let hour12 = document.querySelector(".time12")
hour12 = 12;
let hour1 = document.querySelector(".time1")
hour1 = 13;
let hour2 = document.querySelector(".time2")
hour2 = 14;
let hour3 = document.querySelector(".time3")
hour3 = 15;
let hour4 = document.querySelector(".time4")
hour4 = 16;
let hour5 = document.querySelector(".time5")
hour5 = 17;


// onClick will save user input to local storage and when page reloads input remains on the screen 
// saveBtn.addEventListener("click", function() {
//     localStorage.setItem("savedEvent", scheduleEvent.value);
//     console.log(currentHour,localStorage.getItem("savedEvent")); 

// });



// function hourColor() {
//     if (hour9 < currentHour) {
//         document.getElementsByClassName("time9").style = (".past")
//     } else {
//         console.log("nope");
//     }
// } 

// hourColor()

console.log(saveBtn);
