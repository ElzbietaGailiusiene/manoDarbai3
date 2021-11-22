
let forma = document.querySelector("#todolist");
let ul = document.querySelector("#list");
forma.addEventListener("submit", function (e) {
e.preventDefault();
let txtTASK = e.target.elements.task.value;
let li = document.createElement("li");
li.textContent = txtTASK;
ul.appendChild(li);
e.target.elements.task.value = "";

});

