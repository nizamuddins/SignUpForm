const submit = document.querySelector(".todo-form");
const todoLi = document.querySelector(".todo-list")
const input = document.querySelector("#todo")
const span = document.querySelector(".li .li-span")


// console.log(submit)

submit.addEventListener("submit", (e) => {
    e.preventDefault();
// oneWay
    const newLi = document.createElement("li");
    const newText = document.createTextNode(input.value);
    const newSpan = document.createElement("span");
     newSpan.append(newText);
     newSpan.classList.add("li-span")   
    newLi.append(newSpan);
    console.log(newLi)

    const div = document.createElement("div")
    div.classList.add("form-list")

    const button1 = document.createElement("button");
    button1.textContent = "Done";
    button1.classList.add("list-btn")
    button1.classList.add("done")
    const button2 = document.createElement("button");
    button2.textContent = "Remove";
    button2.classList.add("list-btn");
    button2.classList.add("remove");

    div.append(button1);
    div.append(button2);

    newLi.append(div);
    if(input.value!== ""){
    todoLi.append(newLi);

    }

// secondWay
//    const newLi = document.createElement("li");

// const innerhtml = `<span class="li-span">${input.value}</span>
//     <div class="form-list">
//         <button class="list-btn done">Done</button>
//         <button class="list-btn remove">Remove</button>
//     </div>`
// newLi.innerHTML = innerhtml;
// if (input.value !== "") {

//     todoLi.append(newLi);

// }

input.value = "";

})







todoLi.addEventListener("click", function (e) {
    if (e.target.classList.contains("done")) {

        const done = e.target.parentNode.previousElementSibling;
        done.style.textDecoration = "line-through";

    }

    if (e.target.classList.contains("remove")) {
        e
            .target
            .parentNode
            .parentNode
            .remove();
    }
})
