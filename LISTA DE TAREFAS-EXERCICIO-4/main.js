$(document).ready(function() {
    $('#taskForm').submit(function(e) {
        e.preventDefault();
        addTask();
    })

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    })
    function addTask() {
        const taskInput = $('#taskInput').val();
        if (taskInput !== '') {
            const listItem = $('<li></li>').text(taskInput);
            $('#taskList').append(listItem);
            $('#taskInput').val('');
        }}
})
