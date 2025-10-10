"use strict";

const btnAnterior=document.getElementById("anterior");
const btnSiguiente=document.getElementById("siguiente");
const resultado=document.getElementById("resultado");


btnAnterior.addEventListener("click",()=>{
    const anteriorLista=document.getElementById("actualLista").previousSibling;
    const anteriorDiv=document.getElementById("actualDiv").previousSibling;
    const anteriorListaElem=document.getElementById("actualLista").previousElementSibling;
    const anteriorDivElem=document.getElementById("actualDiv").previousElementSibling;

     resultado.innerHTML=`<p>Usando previousSibling</p><p>El hermano anterior al actual de la lista es ${anteriorLista.innerHTML}<br>
    <p>El hermano anterior al actual del div es ${anteriorDiv.innerHTML}</p>
    <p>Usando previousElementSibling</p><p>El hermano anterior al actual de la lista es ${anteriorListaElem.textContent}<br>
    <p>El hermano anterior al actual del div es ${anteriorDivElem.textContent}</p>`;
});

btnSiguiente.addEventListener("click",()=>{
    const siguienteLista=document.getElementById("actualLista").nextSibling;
    const siguienteDiv=document.getElementById("actualDiv").nextSibling;
    const siguienteListaElem=document.getElementById("actualLista").nextElementSibling;
    const siguienteDivElem=document.getElementById("actualDiv").nextElementSibling;

     resultado.innerHTML=`<p>Usando previousSibling</p><p>El hermano anterior al actual de la lista es ${siguienteLista.innerHTML}<br>
    <p>El hermano anterior al actual del div es ${siguienteDiv.innerHTML}</p>
    <p>Usando previousElementSibling</p><p>El hermano anterior al actual de la lista es ${siguienteListaElem.textContent}<br>
    <p>El hermano anterior al actual del div es ${siguienteDivElem.textContent}</p>`;
});