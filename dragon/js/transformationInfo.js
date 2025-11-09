"use strict";

import { cleanResults } from "./cleanResults.js";

export function transformationInfo(transformation){
    cleanResults("personaje-trans-info");
    console.log("La transformacion es ");
    console.log(transformation);
    document.getElementById("personaje-trans-info").classList.remove("hidden");
    document.getElementById("personajes").style.width="25%";
    document.getElementById("personaje-info").style.width="30%";
    document.getElementById("personaje-trans").style.width="25%";
    document.getElementById("personaje-trans-info").style.width="20%";
    document.getElementById("personaje-trans-info").style.height="100%";
    let transformArea=document.createElement("div");
    transformArea.style.height="100%";
    transformArea.style.width="100%";
    const imgTrans=document.createElement("img");
    imgTrans.src=transformation.image;
    const nameTrans=document.createElement("p");
    nameTrans.innerHTML=transformation.name;
    const kiTrans=document.createElement("p");
    kiTrans.innerHTML=transformation.ki;

    transformArea.appendChild(nameTrans);
    transformArea.appendChild(kiTrans);
    transformArea.appendChild(imgTrans);

    document.getElementById("personaje-trans-info").appendChild(transformArea);
}