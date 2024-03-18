const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector('#list');


toDoForm.addEventListener("submit", (evt) =>{
    evt.preventDefault();

    const newListItem = document.createElement("li");
    newListItem.innerText = evt.target["todo-task"].value;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", (evt) => {
        newListItem.remove(evt);
    });

    newListItem.appendChild(deleteButton);
    toDoList.appendChild(newListItem)

});   

const showDateButton = document.querySelector("#show-date");
const displayDate = document.querySelector("#display-date");

showDateButton.addEventListener("click", (evt) => {
    const date = new Date();
displayDate.innerText = new Intl.DateTimeFormat('en-UK').format(date);
});
