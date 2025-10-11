"use strict";

btnTry2.addEventListener("click",()=>{
    const archivo=image.files[0];
    console.log(archivo);

    localStorage.setItem("imagen",archivo);

    console.log(localStorage.getItem("image"))

    //cremaos la imagen y la mostramos
    const img=document.createElement("img");
    img.src=localStorage.getItem("imagen");
    img.width=120;

    resultado.innerHTML=`<p>Imagen guardada por archivo</p>`;
    resultado.appendChild(img);
});