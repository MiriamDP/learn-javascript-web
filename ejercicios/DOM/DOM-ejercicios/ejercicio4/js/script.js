"use strict";

const resultado=document.getElementById("resultado");
const btnLeer=document.getElementById("leer");
const btnModificar1=document.getElementById("modificar1");
const btnModificar2=document.getElementById("modificar2");
const parrafo=document.getElementById("parrafo");

btnLeer.addEventListener("click",()=>{
    const textoTextContent=parrafo.textContent;
    const textoInnerText=parrafo.innerText;
    const textoInnerHtml=parrafo.innerHTML;
    resultado.innerHTML=`<table><tr><th>TextContent:</th><td>${textoTextContent}</td></tr><tr><th>InnerText:</th><td>${textoInnerText}</td></tr><tr><th>InnerHTML:</th><td>${textoInnerHtml}</td></tr></table>`;
});

btnModificar1.addEventListener("click",()=>{
    parrafo.innerText=`<span style="display: none">Hola</span> <b>hola</b> caracola. Esto se ha añadido con innerText`;
    resultado.textContent=`<span style="display: none">Adiosito<span> <b>vecinito</b>. Esto se ha añadido con textContent`;
});

btnModificar2.addEventListener("click",()=>{
    parrafo.innerHTML=`<p><span style="display: none">Hola</span> <b>hola</b> caracola</p>`;
    resultado.innerHTML="";
});
