"use strict";

function guardarCookieSin(clave,valor){
    document.cookie=`${clave}=${valor}; path=/`;
}

function guardarCookieMax(clave,valor){
    document.cookie=`${clave}=${valor}; max-age=10; path=/`;
}

function guardarCookieFecha(clave,valor){
    const fechaCaducidad=new Date(Date.now()+10000); //caducara 10000ms=10s desde la fecha de creacion
    console.log(fechaCaducidad);
    document.cookie=`${clave}=${valor};expires=${fechaCaducidad}; path=/`;
}

function leerUnaCookie(clave){
    const cookies=document.cookie.split("; "); //array con clave=valor como string en cada celda
    for (const cookie of cookies){
        const [claveCookie,valor]=cookie.split("=");
        if(claveCookie==clave){
            return `<p>La cookie tiene de clave: ${claveCookie} y de valor: ${valor}</p>`;
        }
    }

    return `<p>No se encontro la cookie con clave ${clave}</p>`;
}

function leerTodasCookies(){
    const cookies=document.cookie.split("; ");
    let salida="";
    for (const cookie of cookies){
        const [claveCookie,valor]=cookie.split("=");
        salida+=`<p>La cookie tiene de clave: ${claveCookie} y de valor: ${valor}</p>`;
    }

    return salida;
}

function borrarCookie(clave){
    if(cookieExiste(clave)){
        document.cookie=`${clave}=; max-age=0; path=/`;
        return `<p>Cookie ${clave} borrada correctamente</p>`;
    }

    return `<p>No se ha podido borrar, no se encontro la cookie</p>`
    
}

function cookieExiste(clave){
    const cookies=document.cookie.split("; "); //array con clave=valor como string en cada celda
    for (const cookie of cookies){
        const [claveCookie,valor]=cookie.split("=");
        if(claveCookie==clave){
            return true;
        }
    }

    return false;
}