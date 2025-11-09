"use strict";
import { characterInfo } from "./characterInfo.js";
import { transformationInfo } from "./transformationInfo.js";


/**
 * Recibe los datos de la llamada a la API y crea una tarjeta por cada resultado de los datos recibidos
 * @param {*} data 
 * @returns 
*/
export function createCharacterResults(data, idContainer){
    const container=document.getElementById(idContainer);
    if (data.length==0){
        return container.innerHTML=`<div>No se han encontrado resultados para la busqueda</div>`;
    }
    data.forEach(character => {
        let card=document.createElement("div");
        const imgChar=document.createElement("img");
        imgChar.src=character.image;
        const nameChar=document.createElement("p");
        nameChar.innerHTML=character.name;

        card.appendChild(imgChar);
        card.appendChild(nameChar);
        card.classList.add("cardChar");

        //añadimos el evento para que muestre la informacion
        if (idContainer==="personajes"){
            card.addEventListener("click",()=>characterInfo(character.name));
        }else{
            card.addEventListener("click",()=>transformationInfo(character));  //esta funcion recibira la transformacion
        }

        //cambiamos el estilo de card seleccionada
        card.addEventListener("click",(event)=>{
            let cards=document.querySelectorAll(".cardChar");
            cards.forEach(card=> card.style.borderWidth="2px")

            event.currentTarget.style.borderWidth="6px";
        
        });

        container.appendChild(card);
    });
}