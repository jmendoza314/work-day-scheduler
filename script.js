let today = moment();
$('#currentDay').text(today.format("MMM Do, YYYY"));

let addBtn = $('#saveBtn')
let time = $('#time').text('9 AM')
let scheduleEvent = $("#event");



$(function(){
    addBtn.on('click', function()
    {
        localStorage.content = scheduleEvent.html();
        scheduleEvent.html(localStorage.content);
    })

})

