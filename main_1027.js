


let Skaicius=Math.floor(Math.random() * 11);
console.log(Skaicius);
let rezultatas=document.querySelector("#resultText");
let spejimuSkaicius=document.querySelector("#resultCount");

let count=0;
let form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();

let ivestasSkaicius =e.target.elements.input.value;



if(ivestasSkaicius<Skaicius){
    console.log("Jusu ivestas skaicius yra permazas");
    rezultatas.textContent="Jusu ivestas skaicius yra permazas";
}
else if(ivestasSkaicius>Skaicius){
    console.log("Jusu ivestas skaicius yra perdidelis");
    rezultatas.textContent="Jusu ivestas skaicius yra perdidelis";
}

else if(ivestasSkaicius===Skaicius){
    console.log("Jus atspejote skaciu");
    rezultatas.textContent="Atspejote skaciu";
}
count++;

console.log("Buvo atlikta"+count +"spejimu");
spejimuSkaicius.textContent="Buvo atlikta  "+count +"  spejimu";
})


