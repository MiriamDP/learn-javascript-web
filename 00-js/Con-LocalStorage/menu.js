"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    const usuarios=JSON.parse(localStorage.getItem("usuarios")) || {};
    let userLog=false;
    let userName;

    const menusPrivados=document.querySelectorAll(".privado");
    const menusPublicos=document.querySelectorAll(".publico");
    const usuarioNav=document.getElementById("usuario");

    Object.entries(usuarios).forEach(([clave,valor])=>{
        if (valor.login==true){
            userLog=true;
            userName=valor.usuario;
            return;
        }
    });
    
    if (userLog){
        menusPrivados.forEach(element=> element.style.display="block");
        menusPublicos.forEach(element=> element.style.display="none");
        usuarioNav.innerHTML=`${userName}`;
        //desabilitamos el enlace de usuario
        const enlaceUsuario=document.getElementById("enlaceUsuario");
        enlaceUsuario.addEventListener("click",(e)=>{
            e.preventDefault();
        });
        //con la funcion inferior nos aseguramos que no coja el css de a:hover y deje el cursor por defecto
        enlaceUsuario.addEventListener("mouseenter",()=>{
            enlaceUsuario.style.cursor = "default";
        });
    }else {
        menusPrivados.forEach(element=> element.style.display="none");
        menusPublicos.forEach(element=> element.style.display="block");
    }

    console.log("Hola");
    //comporamiento de cerrarSession
    const logout=document.getElementById("logout");
    console.log(logout);
    logout.addEventListener("click",(e)=>{
        console.log("estoy dentro");
        e.preventDefault();
        Object.entries(usuarios).forEach(([clave,valor])=>{
            console.log("Usuario",valor.usuario,"Login",valor.login);
            console.log(userName);
            if (valor.usuario==userName){
                valor.login=false;
                localStorage.setItem("usuarios",JSON.stringify(usuarios));
                location.reload();
                return;
            }
        });
    });

});