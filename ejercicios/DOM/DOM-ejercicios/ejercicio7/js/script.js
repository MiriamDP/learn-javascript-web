"use strict";

const btnPadre=document.getElementById("padre");
const btnNodoHijos=document.getElementById("nodoHijos");
const btnPrimer=document.getElementById("primerHijo");
const btnUltimo=document.getElementById("ultimoHijo");
const resultado=document.getElementById("resultado");

btnPadre.addEventListener("click",()=>{
    const actualLista=document.getElementById("actualLista");
    const actualDiv=document.getElementById("actualDiv");

    const padreLista=actualLista.parentNode;
    const padreDiv=actualDiv.parentElement;
    console.log(padreLista);
    console.log(padreDiv);

    resultado.innerHTML=`<p>Nodo padre de la lista <code>${padreLista.nodeName}</code> con ID: "${padreLista.id}"</p><br>
    <p>Nodo padre de los parrafos <code>${padreDiv.nodeName}</code> con ID: "${padreDiv.id}"</p>`
});

btnNodoHijos.addEventListener("click",()=>{
    const hijosLista=document.getElementById("padreLista").childNodes;
    const hijosDiv=document.getElementById("padreParrafos").children;
    console.log(hijosLista);
    console.log(hijosDiv);

    let salida=`<p>Hijos de la lista: </p><ul><br>`;
    hijosLista.forEach(hijo =>{
        salida+=`<li>${hijo.textContent}</li>`;
    });
    salida+=`</ul><br><p>Y los hijos del div</p><br>`;
    for(let i=0;i<hijosDiv.length;i++){
        salida+=`<li>${hijosDiv[i].textContent}</li>`;
    }

    resultado.innerHTML=salida;
});

btnPrimer.addEventListener("click",()=>{
    const primerLista=document.getElementById("padreLista").firstChild;
    const primerDiv=document.getElementById("padreParrafos").firstChild;
    const primerListaElem=document.getElementById("padreLista").firstElementChild;
    const primerDivElem=document.getElementById("padreParrafos").firstElementChild;

    console.log(primerLista);
    console.log(primerDiv);

     resultado.innerHTML=`<p>Usando firstChild</p><p>El primer hijo de la lista es ${primerLista.innerHTML}<br>
    <p>El primer hijo del div es ${primerDiv.innerHTML}</p>
    <p>Usando firstChildElement</p><p>El primer hijo de la lista es ${primerListaElem.textContent}<br>
    <p>El primer hijo del div es ${primerDivElem.textContent}</p>`
});

btnUltimo.addEventListener("click",()=>{
    const ultimoLista=document.getElementById("padreLista").lastChild;
    const ultimoDiv=document.getElementById("padreParrafos").lastChild;
    const ultimoListaElem=document.getElementById("padreLista").lastElementChild;
    const ultimoDivElem=document.getElementById("padreParrafos").lastElementChild;

    console.log(ultimoLista);
    console.log(ultimoDiv);

     resultado.innerHTML=`<p>Usando lastChild</p><p>El ultimo hijo de la lista es ${ultimoLista.innerHTML}<br>
    <p>El ultimo hijo del div es ${ultimoDiv.innerHTML}</p>
    <p>Usando flastChildElement</p><p>El primer ultimo de la lista es ${ultimoListaElem.textContent}<br>
    <p>El ultimo hijo del div es ${ultimoDivElem.textContent}</p>`
});