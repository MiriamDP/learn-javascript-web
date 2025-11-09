"use strict";

const userKey=localStorage.getItem("userLogged")||sessionStorage.getItem("userLogged");
const userUser=document.getElementById("usuarioForm");
const userName=document.getElementById("nombre");
const userPass=document.getElementById("password");
const userPhoto=document.getElementById("fotoPerfil");
const userPhotoOld=document.getElementById("imgPreview");
const btnUpdate=document.getElementById("updateBtn");
const btnUpdateConfirm=document.getElementById("updateConfirm");
let userOld;
let newUserConfirm;

/**Añade los valores actuales al cargar la pagina */
document.addEventListener("DOMContentLoaded",async()=>{
    const user=await getUser(userKey);
    userOld=user;

    userUser.value=user.usuario;
    userName.value=user.nombre;
    userPass.value=user.password;
    const urlPhoto=user.foto;
    userPhotoOld.src=typeof urlPhoto=="string"?urlPhoto:URL.createObjectURL(urlPhoto);
    userPhotoOld.onload=()=>{
        URL.revokeObjectURL(userPhotoOld.src);
    }

})

/**Recoge los valores nuevos del formulario de actualizacion. Hace las comprobaciones necesarias y crea el nuevo usuario. */
btnUpdate.addEventListener("click",async ()=>{
    const newUserUser=comprobacionRelleno(userUser.value)?userUser.value:userOld.usuario;
    if (userOld.usuario!==newUserUser.value){
        const existsUser=await userExist(newUserUser.value); //comprobamos si existe el nuevo nombre de usuario

        if (existsUser){
            return document.getElementById("resultado").textContent=`Nombre de usuario no valido intentelo con otro`;
        }
    }
    const newUserName=comprobacionRelleno(userName.value)?userName.value:userOld.nombre;
    const newUserPass=comprobacionRelleno(userPass.value)?userPass.value:userOld.password;
    //realmente el cambio de contraseña deberia de funciona de otra forma, ya que ahora mismo el usuario podria cambiar la contraseña a la actual y en realidad es algo que se deberia prevenir
    let newUserPhoto=userPhoto.files[0];
    console.log(newUserPhoto);
    if (newUserPhoto==null){
        newUserPhoto=userOld.foto;
    }else{
        if(newUserPhoto.type.startsWith("image/")){
                console.log("archivo valido");
        }else{
            result.innerHTML=`<p>Tipo de archivo de imagen no valido. Intentelo de nuevo.</p>`
            return;
        }
    }

    const newUser={
        usuario: newUserUser,
        nombre: newUserName,
        password: newUserPass,
        foto: newUserPhoto,
        rol: userOld.rol,
        estado: userOld.estado,
        keepConnect: userOld.keepConnect
    }
    console.log("foto")
    console.log(newUser.foto);
    newUserConfirm=newUser;
    updateConfirm();

});

/**Despliega la popup de confimacion de cambios. Si la contraseña actual es igual a la introducida pasa a actualizar el 
 * usuario si este conserva el nombre de usuario o lo elimina y añade el nuevo en caso contrario */
btnUpdateConfirm.addEventListener("click",async()=>{
    const passConfirm=document.getElementById("passwordConfirm");
    const message=document.getElementById("mensaje");
    if (passConfirm.value==userOld.password){
        if (newUserConfirm.usuario!==userOld.usuario){ //si se ha cambiado el nombre de usuario hay que borrarlo antes de introducirlo de nuevo para evitar datos duplicados
            //hay que cambiar el sessionstorage o el localstorage de la sesion se ha cambiado el nombre de usuario
            if (sessionStorage.getItem("userLogged")){
                sessionStorage.setItem("userLogged",newUserConfirm.usuario);
            }else {
                localStorage.setItem("userLogged",newUserConfirm.usuario);
            }
            await deleteUser(userOld.usuario);
            await addUser(newUserConfirm); //podriamos ahorrarnos el else y hacer solo updateUser pero con add tenemos una validacion extra de que el nombre de usuario no este repetido por si hubiesen fallado las anteriores
        }else{
            await updateUser(newUserConfirm);
            await updateUser(newUserConfirm);
        }
        message.innerHTML=`Datos actualizados correctamente`;
        setTimeout(()=>{
            message.innerHTML="Mensaje: ";
            document.getElementById("popup-update-user").style.display="none";
            location.reload();
        },3000);
    }else{
        return message.innerHTML=`Contraseña no valida.`;
    }
});

/**
 * Cambia la visibilidad de la popup de confirmacion a block
 */
function updateConfirm(){
    const popup=document.getElementById("popup-update-user");
    popup.style.display="block";
    
}

/**
 * Comprueba si el parametro de texto pasado esta relleno o no
 * @param {*} valor 
 * @returns 
 */
function comprobacionRelleno(valor){
    if (valor==""){
        return false;
    }

    return true;

}

