"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    const usuarios=JSON.parse(localStorage.getItem("usuarios")) || {};
    let userLog=false;
    let userName;
    let urlFoto;

    const menusPrivados=document.querySelectorAll(".privado");
    const menusPublicos=document.querySelectorAll(".publico");
    const usuarioNav=document.getElementById("usuario");

    const usuarioLogged=JSON.parse(sessionStorage.getItem("usuarioLogged"));

    Object.entries(usuarios).forEach(([clave,valor])=>{
        if (clave==usuarioLogged.usuario){
            userLog=true;
            userName=valor.usuario;
            urlFoto=valor.foto;
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
        //cambio imagen usuario
        const fotoUsuario=document.getElementById("fotoUsuario");
        if (urlFoto!="fotoPorDefecto"){
            fotoUsuario.src=urlFoto;
        }
        //Para darle estilo a la imagen
        fotoUsuario.style.objectFit="cover";
        fotoUsuario.style.borderRadius="50%";
        fotoUsuario.style.margin="3%";
        fotoUsuario.style.paddingBottom="5%";
        
        
    }else {
        menusPrivados.forEach(element=> element.style.display="none");
        menusPublicos.forEach(element=> element.style.display="block");
    }

    //comporamiento de cerrarSession
    const logout=document.getElementById("logout");
    logout?.addEventListener("click",(e)=>{
        e.preventDefault();
        Object.entries(usuarios).forEach(([clave,valor])=>{
            if (valor.usuario==userName){
                valor.login=false;
                localStorage.setItem("usuarios",JSON.stringify(usuarios));
                //para que independientemente del nivel de subcarpeta en el que estemos nos lleve de nuevo al index
                const enlaceLogout=document.getElementById("enlaceLogout");
                window.location.href = enlaceLogout.href;
                return;
            }
        });
    });

});