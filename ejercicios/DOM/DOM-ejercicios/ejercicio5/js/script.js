"use strict";

const btnAdd=document.getElementById("addElement");
const btnRemove=document.getElementById("removeElement");
const resultado=document.getElementById("resultado");
const lista=document.getElementById("lista");

btnAdd.addEventListener("click",()=>{
    const nuevoElemento=document.createElement("li");
    nuevoElemento.innerHTML=`Nuevo elemento ${lista.children.length+1}`;
    lista.appendChild(nuevoElemento);
    resultado.textContent=`Elemento ${lista.children.length} añadido correctamente`;
});

btnRemove.addEventListener("click",()=>{
    if(lista.children.length>0){
        const ultimoElemento=lista.lastElementChild;
        lista.removeChild(ultimoElemento);
        resultado.textContent=`Elemento ${lista.children.lenght+1} eliminado correctamente`;
    }else{
        resultado.textContent=`No hay elementos que eliminar`;
    }
});