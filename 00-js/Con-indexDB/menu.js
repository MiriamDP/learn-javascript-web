"use strict";

document.addEventListener("DOMContentLoaded",async ()=>{

    try{
        await openDataBase();
        // console.log("base de datos abierta");

    }catch(e){
        console.error("error al abrir la base de datos: ",e.message);
    }

    let userLogged=false;

    const userKey=localStorage.getItem("userLogged")??sessionStorage.getItem("userLogged");

    // console.log(userKey);

    let user; //no se puede definir dentro del if por el ambito de las variables

    if (userKey!=null){
        user=await getUser(userKey);
        // console.log("lo encontre");
        // console.log(user);
        userLogged=true;
    }

    const menusPrivados=document.querySelectorAll(".privado");
    const menusPublicos=document.querySelectorAll(".publico");
    const menusAdmin=document.querySelectorAll(".admin");
    const usuarioNav=document.getElementById("usuario");

    // console.log("El usuario es")
    // console.log(user);
    if (userLogged){
        menusPrivados.forEach(element=> element.style.display="block");
        menusPublicos.forEach(element=> element.style.display="none");
        if (user!=null && user.rol=="administrador"){
            menusAdmin.forEach(element=> element.style.display="block");
        }
        usuarioNav.innerHTML=`${userKey}`;
        //desabilitamos el enlace de usuario
        // const enlaceUsuario=document.getElementById("enlaceUsuario");
        // enlaceUsuario.addEventListener("click",(e)=>{
        //     e.preventDefault();
        // });
        // //con la funcion inferior nos aseguramos que no coja el css de a:hover y deje el cursor por defecto
        // enlaceUsuario.addEventListener("mouseenter",()=>{
        //     enlaceUsuario.style.cursor = "default";
        // });



        //cambio imagen usuario
        const fotoUsuario=document.getElementById("fotoUsuario");
        if (user.foto instanceof Blob){
            const urlTemp=URL.createObjectURL(user.foto);
            fotoUsuario.onload=()=>{
                URL.revokeObjectURL(urlTemp);
            }
            fotoUsuario.src=urlTemp;
        }else {
            fotoUsuario.src=user.foto;
            //aqui comprobaremos si es la foto por defecto o una url
        }
        // if (user.foto!="fotoPorDefecto"){
        //     if (user.foto instanceof Blob){
        //         const urlTemp=URL.createObjectURL(user.foto);
        //         fotoUsuario.onload=()=>{
        //             URL.revokeObjectURL(urlTemp);
        //         }
        //         fotoUsuario.src=urlTemp;
        //     }
        // }





        //Para darle estilo a la imagen
        fotoUsuario.style.objectFit="cover";
        fotoUsuario.style.borderRadius="50%";
        fotoUsuario.style.margin="3%";
        fotoUsuario.style.paddingBottom="5%";
    }else {
        menusPrivados.forEach(element=> element.style.display="none");
        menusPublicos.forEach(element=> element.style.display="block");
    }
    
    const logout=document.getElementById("logout");
    logout?.addEventListener("click",async (e)=>{
        console.log("estoy cerrando la sesion")
        e.preventDefault();
        if (user.keepConnect){
            localStorage.removeItem("userLogged");
            user.keepConnect=false;
            user.estado=false;
            await updateUser(user);
            const enlaceLogout=document.getElementById("enlaceLogout");
            window.location.href = enlaceLogout.href;
        }else {
            sessionStorage.removeItem("userLogged");
            user.estado=false;
            await updateUser(user);
            const enlaceLogout=document.getElementById("enlaceLogout");
            window.location.href = enlaceLogout.href;
        }
    });
});