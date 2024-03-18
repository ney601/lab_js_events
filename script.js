
// const textInput = document.querySelector
// ("#todo-task");
// // textInput.addEventListener("input", (evt) =>{
// //     textOutput.innerText = evt.target.value;
// // })


// const textOutput = document.querySelector
// ("#text-output");
// textInput.addEventListener("input", (evt) =>{
//     // textOutput.innerText = evt.target.value;
//     console.log(evt.target.value);
//     //console.log("user is typing")
// })


const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector('#list');
// const deleteButton = document.createElement("button");
// deleteButton.innerText("delete");
// deleteButton.setAttribute("click", "removeItemFromList(this)");

// function removeItemFromList(evt) {
//     evt.parentElement.remove();
// }

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

