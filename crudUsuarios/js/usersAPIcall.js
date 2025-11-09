"use strict";

/**
 * Llamada a la api de random user. Devuelve un usuario obtenido en la respuesta que recibe
 * @returns 
 */
async function APIcall() {
    const urlBase="https://randomuser.me/api/";
    try {
        const data=await APIresponse(urlBase);
        return data;
        
    } catch (error) {
        console.error(error);
        mensaje.textContent=`Error al obtener los datos de la API`;
        return {}
    }
}