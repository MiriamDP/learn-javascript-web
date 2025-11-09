"use strict";


/**
 * Recibe la url de la llamada a la api y devuelve la respuesta de la misma en formato JSON
 * @param {*} url 
 * @returns 
 */
async function APIresponse(url) {
    try {
        const response=await fetch(url); //la api no devuelve un json
        console.log(response);
        const responseJSON=await response.json();
        console.log(responseJSON);
        return responseJSON;
    } catch (error) {
        return error;
    }
}