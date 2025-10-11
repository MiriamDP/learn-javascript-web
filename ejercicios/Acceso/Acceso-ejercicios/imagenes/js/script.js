"use strict";

const btnTry1=document.getElementById("try1");
const btnTry2=document.getElementById("try2");
const btnTry3=document.getElementById("try3");
const btnTry4=document.getElementById("try4");
const btnMostrar=document.getElementById("mostrar");
const image=document.getElementById("image");
const resultado=document.getElementById("resultado");

btnMostrar.addEventListener("click",()=>{
    const img=document.createElement("img");
    img.src=localStorage.getItem("imagen");
    img.width=120;

    resultado.appendChild(img);
});