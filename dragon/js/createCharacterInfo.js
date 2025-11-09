"use strict";

import { cleanResults } from "./cleanResults.js";
import { getTransformations } from "./getTransformations.js";

const characterInfoDiv=document.getElementById("personaje-info");
const charactersDiv=document.getElementById("personajes");

export function createCharacterInfo(data){
    document.getElementById("personaje-trans").classList.add("hidden"); //ocultamos las transformaciones
    document.getElementById("personaje-trans").classList.remove("cardArea"); //ocultamos las transformaciones
    document.getElementById("personaje-trans-info").classList.add("hidden"); //ocultamos info transformacion
    cleanResults("personaje-info");

    //añadimos [] para prevenir errores en caso de que data sea un array vacio, aunque no deberia tal y como esta configurada la api
    const [character]=data || []; //desectructuramos para no tener que trabajar con el array data y obtener directamente el objeto
    const card=document.createElement("div");
    card.classList.add("cardInfo");

    const imgChar=document.createElement("img");
    imgChar.src=character.image;
    imgChar.classList.add("cardInfoFoto");

    const h3CharName=document.createElement("h3");
    h3CharName.classList.add("cardTitle");
    h3CharName.innerHTML=character.name;

    const infoArea=document.createElement("div");
    infoArea.classList.add("cardInfoArea");
    const pCharKi=document.createElement("p");
    pCharKi.innerHTML=`<b>Ki:</b> ${character.ki}`;
    const pCharRace=document.createElement("p");
    pCharRace.innerHTML=`<b>Raza:</b> ${character.race}`;
    const pCharGender=document.createElement("p");
    pCharGender.innerHTML=`<b>Genero:</b> ${character.gender}`;
    const pCharAff=document.createElement("p");
    pCharAff.innerHTML=`<b>Afiliacion:</b> ${character.affiliation}`;


    const btnTrans=document.createElement("button");
    btnTrans.innerHTML="Ver Transformaciones";

    btnTrans.addEventListener("click",()=> getTransformations(character)//*()=>{*/
        // document.getElementById("personaje-trans").classList.remove("hidden");
        // document.getElementById("personaje-trans").innerHTML="Transformaciones de "+character.name;
        // document.getElementById("personaje-trans").style.width="33%";
        // characterInfoDiv.style.width="33%";
        // charactersDiv.style.width="33%";
    /*}*/);




    const pCharDescr=document.createElement("p");
    pCharDescr.innerHTML=character.description;
    pCharDescr.classList.add("cardDesc");


    card.appendChild(imgChar);
    card.appendChild(h3CharName);
    infoArea.appendChild(pCharKi);
    infoArea.appendChild(pCharGender);
    infoArea.appendChild(pCharRace);
    infoArea.appendChild(pCharAff);
    infoArea.appendChild(btnTrans);
    card.appendChild(infoArea);
    card.appendChild(pCharDescr);

    characterInfoDiv.appendChild(card);
    characterInfoDiv.classList.remove("hidden");

    // esto hay que dejarlo para que ocupe la mitad cada una
    charactersDiv.style.width="50%";
    characterInfoDiv.style.width="50%";

}