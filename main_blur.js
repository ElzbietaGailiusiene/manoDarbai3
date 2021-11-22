let form=document.querySelector("#todolist");
let ul=document.querySelector("#list");
let box=document.querySelector("#task");


box.addEventListener("focus",function(a){
    box.style.backgroundColor="red";
  
})

box.addEventListener("blur",function(b){
    box.style.backgroundColor="green";
})
// form.addEventListener("submit",function(e){
// e.preventDefault();
// let li=document.createElement("li");
// li.textContent=e.target.elements.task.value;
// ul.appendChild(li);

// e.target.elements.task.value="";


// })
