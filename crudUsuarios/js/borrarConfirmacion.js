"use strict";

let userKey;
let userRol;
let userState;

/**Al hacer click en el boton de borrar de la popup de borrado comprueba si el usuario a borrar es administrador y si se puede borrar
 * Tambien comprueba si esta logeado, en cuyo caso no permite borrar al administrador.
 * En caso de ser un usuario normal se borra este logeado o no. Muestra la tabla actualizada
 */
document.getElementById("deleteConfirm").addEventListener("click",async()=>{
    console.log("vamos a borrar");
    console.log(userRol);
    if (userRol=="administrador"){
        const admins=await adminNumber();
        console.log("administradores: ",admins);
        if (userState){
            return document.getElementById("resultado3").innerHTML=`No se puede borrar. El usuario esta logeado`;
        }
        if(!admins){
            return document.getElementById("resultado3").innerHTML=`No se puede borrar. Debe al menos haber siempre un administrador`;
        }
    }
    await deleteUser(userKey);
    await showUsers();
    document.getElementById("popup-delete").style.display="none";
});

/**
 * Recibe al usuario que se quiere borrar y levanta la popup de confirmacion de borrado
 * @param {*} user 
 */
function borrarUsuarioAdmin(user) {
    let mensaje=document.getElementById("userId");
    mensaje.textContent=`Esta seguro que desea borrar al usuario: ${user.usuario}`;
    document.getElementById("popup-delete").style.display="block";
    userKey = user.usuario;
    userRol = user.rol;
    userState=user.estado;
}

/**
 * Comprueba si hay mas de un administrador
 * @returns true si hay mas de un administrador
 */
async function adminNumber(){
    const users=await readUsers();
    console.log(users);
    const countAdmin=users.filter(user=>user.rol=="administrador").length; //averiguamos cuantos usuarios admin hay
    console.log("numero de admins", countAdmin);
    if (countAdmin>1){
        return true;
    }

    return false;
    
}

