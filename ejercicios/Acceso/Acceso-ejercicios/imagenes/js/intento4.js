"use strict";

btnTry4.addEventListener("click",async ()=>{
    const archivo=image.files[0];

    const archivoURL=await fileToDataURL(archivo);

    localStorage.setItem("imagen",archivoURL);

    //cremaos la imagen y la mostramos
    const img=document.createElement("img");
    img.src=localStorage.getItem("imagen");
    img.width=120;

    resultado.innerHTML=`<p>Imagen guardada por archivo</p>`;
    resultado.appendChild(img);
});

function fileToDataURL(file){
    const manejadorArchivo=new FileReader();
    return new Promise((resolve,reject)=>{
        manejadorArchivo.onload=()=>{
            resolve(manejadorArchivo.result);
        };

        manejadorArchivo.onerror=()=>{
            reject(manejadorArchivo.error);
        }

        manejadorArchivo.readAsDataURL(file);
    });
}