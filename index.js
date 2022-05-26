// const link = document.querySelectorAll(".nav-link");  console.log(link)
// link.forEach((item)=>{ item.style.backgroundColor="green" }) const link1 =
// Array.from(link); console.log(Array.isArray(link1));

// const link = document.getElementsByClassName("nav-link");

// for(let i=0;i<link.length;i++){
  
//     link[i].style.color="white";


// }

// const link1 =  Array.from(link);
// console.log(Array.isArray(link1))

// const innerhtml = document.querySelector(".task");

// innerhtml.innerHTML="<h1>inner Text</h1>";

// innerhtml.style.textAlign = "center";

// innerhtml.style.color = "white";

// innerhtml.innerHTML +="<button class=\"button\">learn</button>";

// const nodes = document.childNodes[1];
// const head = nodes.childNodes[0].childNodes;
// console.log(head[20].nextSibling)


// const head = document.querySelector(".manage");
// const parent = head.parentNode.style.backgroundColor="#000";
// const node = head.parentNode.parentNode.parentElement;
// console.log(node)


// const list = document.querySelector(".todo-list");

// list.innerHTML += "<li>new todo</li>";

const list1 = document.createElement("li");
// const listText = document.createTextNode("teach student");
// list1.innerText="teach students";
// const list2 = document.querySelector(".todo-list");
// list2.append(list1);
// list2.prepend(list1)

const list2 = document.querySelector(".todo-list li");

console.log(list2);
list2.remove();



