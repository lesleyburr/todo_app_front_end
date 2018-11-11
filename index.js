$(document).ready(function() {
  $("#add-new-button").click(function(){
   // Assign the todo description and pomodoro estimate to variables
   var todoBlock = $(this).closest("#new-todo-block")
   var description = todoBlock.find("#add-text-field")
   var pomodoroEstimate = todoBlock.find("#add-time-field")

   // Append the new todo to the list of todos
   $("ul").append("<li> <input type='checkbox'/> " + description.val() + " <span class='time-estimate'>" + pomodoroEstimate.val() + " pomodoros</span> </li>")

   // Clear the input fields for new-todo-description and pomdoro-estimate by entering an empty string as the value
   description.val("")
   pomodoroEstimate.val("")
 })
})



$(document).ready(function() {
  // Strike through todo when its checkbox is clicked
  $("ul").on("click", "input[type=checkbox]", function(){
    $(this).closest("li").toggleClass("completed-todo")
  })
})