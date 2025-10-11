"use strict";

btnTry1.addEventListener("click",()=>{
    const ruta=image.value;

    localStorage.setItem("imagen", ruta);
    console.log(localStorage.getItem("imagen"));

    //cremaos la imagen y la mostramos
    const img=document.createElement("img");
    img.src=localStorage.getItem("imagen");
    img.width=120;

    resultado.innerHTML=`<p>Imagen guardada por ruta</p>`;
    resultado.appendChild(img);
});