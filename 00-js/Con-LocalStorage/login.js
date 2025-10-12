"use strict";


const resultado=document.getElementById("resultado");
const formulario=document.getElementById("formulario");
const usuario1=document.getElementById("usuario");
const password1=document.getElementById("password");
const btnEnviar=document.getElementById("conectar");

btnEnviar.addEventListener("click",()=>{
    const usuarios=JSON.parse(localStorage.getItem("usuarios")) || {};
    let loginCorrecto=false;

    const user=usuario1.value;
    const pass=password1.value;

    console.log(user,pass);

    Object.entries(usuarios).forEach(([clave,valor])=>{
        console.log("usuario",clave);
        console.log("contraseña",valor.password);
        if (clave==user && valor.password==pass){
            console.log("somos iguales");
            valor.login=true;
            loginCorrecto=true;
            localStorage.setItem("usuarios",JSON.stringify(usuarios));
            return;
        }
    });

    if (loginCorrecto){
        resultado.innerHTML=`<p>Bienvenido ${usuario1}</p>`;
        setTimeout(()=>{
            window.location.href="../index.html";
        },1500);
    }else {
        resultado.innerHTML=`<p>Usuario o contraseña incorrectos. Intentelo de nuevo`;
    }

    formulario.reset();

});