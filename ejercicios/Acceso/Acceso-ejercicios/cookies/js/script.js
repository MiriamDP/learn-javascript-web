"use strict";
const usuario=document.getElementById("usuario");
const password=document.getElementById("password");
const btnGuardarSin=document.getElementById("guardarSin");
const btnGuardarMax=document.getElementById("guardarMax");
const btnGuardarFecha=document.getElementById("guardarFecha");
const btnLeerUna=document.getElementById("leerUna");
const btnLeerTodas=document.getElementById("leerTodas");
const btnBorrar=document.getElementById("borrar");
const resultado=document.getElementById("resultado");


btnGuardarSin.addEventListener("click",()=>{
    guardarCookieSin(usuario.value,password.value);
    resultado.innerHTML=`Se guardo correctamente la cookie con la clave ${usuario.value}`;
});

btnGuardarMax.addEventListener("click",()=>{
    guardarCookieMax(usuario.value,password.value);
    resultado.innerHTML=`Se guardo correctamente la cookie con la clave ${usuario.value}`;
});

btnGuardarFecha.addEventListener("click",()=>{
    guardarCookieFecha(usuario.value,password.value);
    resultado.innerHTML=`Se guardo correctamente la cookie con la clave ${usuario.value}`;
});

btnLeerUna.addEventListener("click",()=>{
    resultado.innerHTML=leerUnaCookie(usuario.value);
});

btnLeerTodas.addEventListener("click",()=>{
    resultado.innerHTML=leerTodasCookies();
});

btnBorrar.addEventListener("click",()=>{
    resultado.innerHTML=borrarCookie(usuario.value);
});
