var toDo = {
    task: "Water the dog",
    priority: "urgent",
    dueDate: "today"
};
var toDo_string = JSON.stringify(toDo);
var toDo_parsed = JSON.parse(toDo_string);

localStorage.setItem("name", "Parker");

document.getElementById("to-dos").innerHTML = toDo_parsed.task + " (" + localStorage.getItem("name") + ") " + " must be completed by " + toDo_parsed.dueDate + ".";