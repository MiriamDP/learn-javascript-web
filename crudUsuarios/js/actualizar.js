"use strict";

/**
 * Levanta la popup de actulizacion de usuarios y lo rellena con los valores actuales
 * @param {*} user 
 */
async function updateUserFromAdmin(user) {
    const popup=document.getElementById("popup-update");
    popup.style.display="block";
    const filtro=document.getElementsByClassName("filtro");
    popup.style.display="block";

    const userUser=document.getElementById("usuarioUpdate");
    userUser.value=user.usuario;
    const userName=document.getElementById("nombreUpdate");
    userName.value=user.nombre;
    const userPass=document.getElementById("password");
    userPass.value=user.password;
    const userRole=document.getElementById("roleUpdate");
    userRole.checked=user.rol;

    const img=document.getElementById("imgPreview");
    if (user.foto instanceof Blob){
            const urlTemp=URL.createObjectURL(user.foto);
            img.onload=()=>{
                URL.revokeObjectURL(urlTemp);
            }
            img.src=urlTemp;
        }else {
            img.src=user.foto;}

            //no esta cogiendo el estilo
    userOld = user;
}

let userOld;

const btnUpdateSend=document.getElementById("updateForm");
const result=document.getElementById("resultado2");

/**Recoge los datos del formulario y hace las comprobaciones necesarias para validar el usuario.Si todo es correcto lo actualiza */
btnUpdateSend.addEventListener("click",async ()=>{
        console.log(userOld);
        console.log("se pulso el boton");
        const newUserUser=document.getElementById("usuarioUpdate");
        const newUserName=document.getElementById("nombreUpdate");
        const newUserPass=document.getElementById("passwordUpdate");
        const newUserRole=document.getElementById("roleUpdate");
        const newUserPhoto=document.getElementById("fotoPerfilUpdate");

        if (newUserUser.value=="" || newUserName.value=="" || newUserPass.value=="" ){
            return result.innerHTML=`Todos los campos de texto deben tener un valor`;

            // return;
        }
        
        console.log("2")
        
        if (userOld.usuario!==newUserUser.value){
            console.log("usuario comprobacion")
            const existsUser=await userExist(newUserUser.value); //comprobamos si existe el nuevo nombre de usuario

            if (existsUser){
                return document.getElementById("resultado").textContent=`Nombre de usuario no valido intentelo con otro`;
            }
        }
        
        console.log("3")


        let photo;
        //validacion foto
        if (newUserPhoto.files[0]==null){ //si no se ha introducido una imagen nos quedamos con la actual
            photo=userOld.foto; 
        }else{
            if(newUserPhoto.files[0].type.startsWith("image/")){
                photo=newUserPhoto.files[0];
                console.log("archivo valido");
            }else{
                result.innerHTML=`<p>Tipo de archivo de imagen no valido. Intentelo de nuevo.</p>`
                return;
            }
        }

        let role="usuario";
        if (newUserRole.checked){
            role="administrador";
        }

        const newUser={
            usuario: newUserUser.value,
            nombre: newUserName.value,
            password: newUserPass.value,
            foto: photo,
            rol: role,
            estado: false,
            keepConnect: false,
        }
        console.log(newUser);

        if (userOld.usuario==newUserUser){
            await updateUser(newUser);
            console.log("actualizado correctamente");
        }else{
            await deleteUser(userOld.usuario);
            await addUser(newUser);
            console.log("actualizado correctamente");
        }
        result.innerHTML=`Actualizado correctamente`
        setTimeout(()=>{
            result.innerHTML="Mensaje: "; //para limpiar el contenido
            document.getElementById("popup-update").style.display="none";
        },3000);
    });