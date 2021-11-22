let form = document.querySelector("#form1");
let suma = document.querySelector("#kmi");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let Ugis = +e.target.elements.height.value;
    let Svoris = +e.target.elements.weight.value;

    // // if(Ugis<15 && Svoris<30){
    //     console.log("ugis permazas");
    //     pastaba.textContent="Ivekite tikslu svori";
    // }
   
    let KunoMasesIndeksas = (+Svoris / Math.pow(Ugis,2)*10000).toFixed(1);

    suma.textContent=KunoMasesIndeksas;
})

