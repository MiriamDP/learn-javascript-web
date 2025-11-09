"use strict";

import { APIcall } from "./APIcall.js";
import { createCharacterResults } from "./createCharacterResults.js";

export async function getTransformations(character) {
        document.getElementById("personaje-trans").classList.remove("hidden");
        document.getElementById("personaje-trans").classList.add("cardArea");
        document.getElementById("personaje-trans").innerHTML="Transformaciones de "+character.name;
        document.getElementById("personaje-trans").style.width="33%";
        document.getElementById("personajes").style.width="33%";
        document.getElementById("personaje-info").style.width="33%";

        let transformations=await APIcall(character.id);
        console.log("Transformaciones");
        console.log(transformations.transformations);

        createCharacterResults(transformations.transformations,"personaje-trans");
}