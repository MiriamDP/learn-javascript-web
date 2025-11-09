"use strict";

export function cleanResults(elementId){
    const results=document.getElementById(elementId);
    const cards=results.querySelectorAll(":scope > div"); //de esta forma solo seleccionamos los hijos directos
    console.log(cards);
    cards.forEach(card => {
        console.log(card);
        results.removeChild(card);
    });
}