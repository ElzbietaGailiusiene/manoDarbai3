


let form = document.querySelector("#form1");
let SkaiciuSuma = document.querySelector("#sum");
console.log(form);


form.addEventListener("submit", function (e) {
    e.preventDefault();

    let PirmasSkaicius = +e.target.elements.firstNumber.value;
    let AntrasSkaicius = +e.target.elements.secondNumber.value;


    let SkaiciuSuma = PirmasSkaicius + AntrasSkaicius;
    console.log(SkaiciuSuma);
 
})

console.log(SkaiciuSuma);