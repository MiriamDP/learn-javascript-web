"use strict";

const result=document.getElementById("resultado");
const form=document.getElementById("formulario");
const nameForm=document.getElementById("nombre");
const userForm=document.getElementById("usuario");
const password=document.getElementById("password");
const userPhoto=document.getElementById("fotoPerfil");
const btnSend=document.getElementById("enviar");

btnSend.addEventListener("click",async ()=>{
    //validamos que el usuario ha introducido todos los campos obligatorios
    if (nameForm==null || userForm==null || password==null){
        return result.innerHTML=`<p>Rellene todos los campos de texto</p>`;
    }

    let photo;
    //validacion foto
    if (userPhoto.files[0]==null){ //esto es que el usuario no ha introducido foto
        photo="http://localhost:4300/learn-javascript-web/img/usuarioDefecto.png"; //ESTA URL ESTA MAL
    }else{
        //validacion extra. aunque en un principio el usuario puede subir solo images este puede manipularlo a traves del inspector o herramientas como postman
        //para evitar esto vamos a validar tambien desde aqui que sea un fichero de imagen valido
        if(userPhoto.files[0].type.startsWith("image/")){
            photo=userPhoto.files[0];
            console.log("archivo valido");
        }else{
            result.innerHTML=`<p>Tipo de archivo de imagen no valido. Intentelo de nuevo.</p>`
            return;//si la imagen no es valida no añadimos el usuario
        }
    }
    
    const user={
        nombre: nameForm.value,
        usuario: userForm.value,
        password: password.value,
        foto: photo,
        rol: "usuario", //este es el rol del usuario
        estado: false, //este estado indica si el usuario esta logeado o no. Si es false no esta conectado
        keepConnect: false //es atributo es para que el usuario decida si quiere mantener la sesion abierta aunque cierre el navegador
    }
    
    //aunque esto devuelve true o false no se puede incluir como condicion del if al tener un await
    const userExists= await userExist(user.usuario);

    if (!userExists){
        const saved=await addUser(user);
        if(saved){
            result.innerHTML=`<p>Usuario añadido correctamente</p>`
            form.reset();
        }

    }else{
        result.innerHTML=`<p>Usuario no valido. Intentelo con otro usuario</p>`;
    }


});


