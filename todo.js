let input = document.getElementById("task");
let submit = document.getElementById("submit");
let section = document.getElementById("section");

input.onclick = function() {
    input.style.outline = "none";
};

submit.onclick = function(event) {
    event.preventDefault();

    if (input.value.length > 0) {

        let todoContainer = document.createElement("div"); //The section that hosts all data
        todoContainer.id = "todoContainer"
        section.appendChild(todoContainer);


        let todo = document.createElement("h3"); //All tasks written in the main input
        todo.textContent = input.value;
        todo.id = "todos"
        todoContainer.appendChild(todo); 
        input.value = "";

        var deletes = document.createElement("img"); //Delete the button 
        deletes.src = "delete(2).png";
        deletes.id = "deletes";
        todoContainer.appendChild(deletes);

        var  change = document.createElement("img"); //change button for tasks
        change.src = "edit(1).png";
        change.id = "change";
        todoContainer.appendChild(change);

        var changeText = document.createElement("input"); //change task after change button is clicked
        changeText.type = "text";
        changeText.id = "changeText";

        var submitIcon = document.createElement("img");  //submit icon after change
        submitIcon.src = "check.png";
        submitIcon.id = "submitIcon";

        deletes.onclick = function() {
            todoContainer.style.display = "none";
        }
        change.onclick = function() {
            todo.style.display = "none";
            changeText.value = todo.innerText;
            todoContainer.appendChild(changeText);
            change.style.display = "none";
            todoContainer.appendChild(submitIcon);

            submitIcon.onclick = function() {
                todo.style.display = "block";
                todo.innerText = changeText.value;
                changeText.style.display = "none";
                submitIcon.style.display = "none";
                change.style.display = "block";
            }
        }
    } else {
        alert("You should fill the form!");
    }
};


