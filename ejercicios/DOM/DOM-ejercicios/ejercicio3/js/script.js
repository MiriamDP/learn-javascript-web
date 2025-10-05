"use strict";

const btnSelector=document.getElementById("botonSelector");
const btnAll=document.getElementById("botonSelectorAll");
const resultado=document.getElementById("resultado");

btnSelector.addEventListener("click",()=>{
    const primerParrafo=document.querySelector(".color");
    resultado.innerHTML=`<p>El primer elemento con la clase color es: </p><p>${primerParrafo.textContent}</p>`;
});

btnAll.addEventListener("click",()=>{
    const parrafosColor=document.querySelectorAll(".color");
    console.log(parrafosColor);
    let salida='<p>Los elementos con la clase color encontrados son: </p><ul>';
    parrafosColor.forEach((p)=>{
        salida+=`<li>${p.textContent}</li>`;
    });
    salida+=`</ul>`;
    resultado.innerHTML=salida;
});
