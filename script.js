const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector('#list');
const completedList = document.querySelector("#completed-tasks")


toDoForm.addEventListener("submit", (evt) =>{
    evt.preventDefault();

    const newListItem = document.createElement("li");
    newListItem.innerText = evt.target["todo-task"].value;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
   

    deleteButton.addEventListener("click", (evt) => {
        newListItem.remove(evt);
    });
    const completeButton = document.createElement("button");
    completeButton.textContent = 'Complete!';
    
    completeButton.addEventListener("click", () => {
        completedList.appendChild(newListItem);
    });
    

    newListItem.appendChild(deleteButton);
    toDoList.appendChild(newListItem);
    newListItem.appendChild(completeButton);

});   

const showDateButton = document.querySelector("#show-date");
const displayDate = document.querySelector("#display-date");

showDateButton.addEventListener("click", (evt) => {
    const date = new Date();
displayDate.innerText = new Intl.DateTimeFormat('en-UK').format(date);
});

