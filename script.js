let today = moment();
$('#currentDay').text(today.format('MMM Do YYYY'));
let currentHour = (new Date()).getHours();
let saveBtn = document.querySelectorAll('.saveBtn');
const scheduleEvent9 = document.querySelector('.event9');
const scheduleEvent10 = document.querySelector('.event10');
const scheduleEvent11 = document.querySelector('.event11');
const scheduleEvent12 = document.querySelector('.event12');
const scheduleEvent1 = document.querySelector('.event1');
const scheduleEvent2 = document.querySelector('.event2');
const scheduleEvent3 = document.querySelector('.event3');
const scheduleEvent4 = document.querySelector('.event4');
const scheduleEvent5 = document.querySelector('.event5');
let currColor = document.querySelector('.container');

scheduleEvent9.value = localStorage.getItem("savedEvent9");
scheduleEvent10.value = localStorage.getItem("savedEvent10");
scheduleEvent11.value = localStorage.getItem("savedEvent11");
scheduleEvent12.value = localStorage.getItem("savedEvent12");
scheduleEvent1.value = localStorage.getItem("savedEvent1");
scheduleEvent2.value = localStorage.getItem("savedEvent2");
scheduleEvent3.value = localStorage.getItem("savedEvent3");
scheduleEvent4.value = localStorage.getItem("savedEvent4");
scheduleEvent5.value = localStorage.getItem("savedEvent5");

saveBtn.forEach(function (button) {
    button.addEventListener("click", function () {
        localStorage.setItem("savedEvent9", scheduleEvent9.value);
        localStorage.setItem("savedEvent10", scheduleEvent10.value);
        localStorage.setItem("savedEvent11", scheduleEvent11.value);
        localStorage.setItem("savedEvent12", scheduleEvent12.value);
        localStorage.setItem("savedEvent1", scheduleEvent1.value);
        localStorage.setItem("savedEvent2", scheduleEvent2.value);
        localStorage.setItem("savedEvent3", scheduleEvent3.value);
        localStorage.setItem("savedEvent4", scheduleEvent4.value);
        localStorage.setItem("savedEvent5", scheduleEvent5.value);
        ;
    })
});

function timeColor() {
    var element9 = document.getElementById('timeColor9')
    var element10 = document.getElementById('timeColor10')
    var element11 = document.getElementById('timeColor11')
    var element12 = document.getElementById('timeColor12')
    var element1 = document.getElementById('timeColor1')
    var element2 = document.getElementById('timeColor2')
    var element3 = document.getElementById('timeColor3')
    var element4 = document.getElementById('timeColor4')
    var element5 = document.getElementById('timeColor5')
    var elementAll = document.getElementById('timeColor');

    if (currentHour === 9) {
        element9.classList.add('present');
        var elementRemaining = document.getElementById('timeColor');
        elementRemaining.classList.add('future')
    } 
    else if (currentHour === 10) {
        element9.classList.add('past');
        element10.classList.add('present');
        elementAll.classList.add('future')
    }  
    else if (currentHour === 11) {
        element9.classList.add('past');
        element10.classList.add('past');
        element11.classList.add('present');
        elementAll.classList.add('future')
    } 
    else if (currentHour === 12) {
        element9.classList.add('past');
        element10.classList.add('past');
        element11.classList.add('past');
        element12.classList.add('present')
        elementAll.classList.add('future')
    } 
    else if (currentHour === 13) {
        element9.classList.add('past');
        element10.classList.add('past');
        element11.classList.add('past');
        element12.classList.add('past')
        element1.classList.add('present')
        elementAll.classList.add('future')
    }
    else if (currentHour === 14) {
        element9.classList.add('past');
        element10.classList.add('past');
        element11.classList.add('past');
        element12.classList.add('past')
        element1.classList.add('past')
        element2.classList.add('present')
        elementAll.classList.add('future')
    }
    else if (currentHour === 15) {
        element9.classList.add('past');
        element10.classList.add('past');
        element11.classList.add('past');
        element12.classList.add('past')
        element1.classList.add('past')
        element2.classList.add('past')
        element3.classList.add('present')
        elementAll.classList.add('future')
    }
    else if (currentHour === 16) {
        element9.classList.add('past');
        element10.classList.add('past');
        element11.classList.add('past');
        element12.classList.add('past')
        element1.classList.add('past')
        element2.classList.add('past')
        element3.classList.add('past')
        element4.classList.add('present')
        elementAll.classList.add('future')
    } 
    else if (currentHour === 17) {
        element9.classList.add('past');
        element10.classList.add('past');
        element11.classList.add('past');
        element12.classList.add('past')
        element1.classList.add('past')
        element2.classList.add('past')
        element3.classList.add('past')
        element4.classList.add('past')
        element5.classList.add('present')
    } else {
        elementAll.classList.add('past')
    }
} 


timeColor()
