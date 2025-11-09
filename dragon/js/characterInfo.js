"use strict";

import { APIcall } from "./APIcall.js";
import { createCharacterInfo } from "./createCharacterInfo.js";
let searchName;

export async function characterInfo(nameChar){
    searchName={
        name: nameChar
    }
    //obtiene los datos del personaje
    let data=await APIcall(searchName);

    //crea la informacion del personaje y la muestra
    createCharacterInfo(data);
}