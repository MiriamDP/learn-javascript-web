"use strict";

const btnMostrar=document.getElementById("mostrar");
const btnOcultar=document.getElementById("ocultar");
const mensaje=document.getElementById("mensaje");

btnOcultar.addEventListener("click",()=>{
    mensaje.style.display="none";
});

btnMostrar.addEventListener("click",()=>{
    mensaje.style.display="block";
});