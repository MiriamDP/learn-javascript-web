"use strict";

const clase=document.getElementsByClassName("color");
const parrafos=document.getElementsByTagName("p");
const btnClase=document.getElementById("botonClase");
const btnTag=document.getElementById("botonTag");

btnClase.onclick=mostrarClases;
btnTag.onclick=mostrarTag;

function mostrarClases(){
    for (let i=0;i<clase.length;i++){
        clase[i].style.color="rgb(163, 38, 96)";
        clase[i].style.backgroundColor="rgb(245, 180, 210)";
    }
    console.log(clase);
}

function mostrarTag(){
    for (let i=0;i<parrafos.length;i++){
        parrafos[i].style.color="rgb(245, 180, 210)";
        parrafos[i].style.backgroundColor="rgb(163, 38, 96)";
    }
    console.log(parrafos);
}