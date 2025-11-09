"use strict";

const btnAddAPI=document.getElementById("addAPI");
const btnAdd=document.getElementById("add");
const btnSignUp=document.getElementById("registrar");
const message=document.getElementById("mensaje");
const btnSearch=document.getElementById("btnSearch");


/**Al hacer click en el boton se llama a la API random user y añade al usuario*/
btnAddAPI.addEventListener("click",async ()=>{
    let dataUser=await APIcall();
    dataUser=dataUser.results[0];
    
    const user={
        nombre: dataUser.name.first,
        usuario: dataUser.login.username,
        password: "123",
        foto: dataUser.picture.thumbnail,
        rol: "usuario", 
        estado: false, 
        keepConnect: false
    }
    
    await addUser(user);
    await showUsers();
    console.log("se guardo usuario aleatorio");
    message.innerHTML=`Se guardo usuario aleatorio: ${user.usuario}`;
});

/**Al hacer click en el boton se levanta la popup de añadir usuario manual */
btnAdd.addEventListener("click",()=>{
    const popup=document.getElementById("popup-add");
    popup.style.display="block";
});


/**Al hacer click en el boton de la popup de añadir. Se recogen los datos del formulario y se hacen las validas correspondientes.
 * Si el valido el usuario se añade
 */
btnSignUp.addEventListener("click",async ()=>{
    const result=document.getElementById("resultado");
    const mensaje=document.getElementById("mensaje");
    const form=document.getElementById("popup-form-add");
    const nameForm=document.getElementById("nombre");
    const userForm=document.getElementById("usuarioForm");
    const password=document.getElementById("password");
    const userPhoto=document.getElementById("fotoPerfil");
    const role=document.getElementById("role");
    
    if (nameForm.value=="" || userForm.value=="" || password.value==""){
        return result.innerHTML=`<p>Rellene todos los campos de texto</p>`;
    }

    let photo;
    if (userPhoto.files[0]==null){ 
        photo="./img/usuarioDefecto.png";
    }else{
        if(userPhoto.files[0].type.startsWith("image/")){
            photo=userPhoto.files[0];
            console.log("archivo valido");
        }else{
            result.innerHTML=`<p>Tipo de archivo de imagen no valido. Intentelo de nuevo.</p>`
            return;
        }
    }

    const userRol=(role.checked)?"administrador":"usuario";

    console.log(nameForm.value);
    
    const user={
        nombre: nameForm.value,
        usuario: userForm.value,
        password: password.value,
        foto: photo,
        rol: userRol, 
        estado: false, 
        keepConnect: false 
    }
    console.log(user);
    
    const userExists= await userExist(user.usuario);
    console.log(user.usuario);

    if (!userExists){
        console.log(user.usuario);
        const saved=await addUser(user);
        if(saved){
            result.innerHTML=`<p>Usuario añadido correctamente</p>`;
            form.reset();
            await showUsers();
            mensaje.innerHTML=`Se guardo usuario: ${user.usuario}`; //no se muestra el mensaje porque el boton de cierre recarga la pagina no cierra solo la popup

        }

    }else{
        result.innerHTML=`<p>Usuario no valido. Intentelo con otro usuario</p>`;
    }
})

let searchParam;

/**Al pulsar el boton se recibe el criterio de busqueda, si es vacio muestra la tabla completa, si no lo es muestra los usuarios que cumplan el parametro */
btnSearch.addEventListener("click",()=>{
    const search=document.getElementById("search");
    if(search==""){
        showUsers();
    }
    searchParam=search.value;
    showUsers(true);
})



/*ESTE CODIGO ESTA EN CONSTRUCCION. LA IDEA ES QUE AL CLICAR EN EL CIERRE DE LAS
POPUPS NO RECARGUE LA PAGINA PARA PODER MANTENER EL MENSAJE*/
// const cierre=document.getElementById("cierre");

// cierre.addEventListener("click",()=>{
//     const popup=document.getElementsByClassName("cierre-popup");
//     for(let i=0;i<popup.length;i++){
//         popup[i].style.display="none";
//     }
// })