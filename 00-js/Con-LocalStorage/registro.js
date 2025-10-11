"use strict";

const resultado=document.getElementById("resultado");
const nombre1=document.getElementById("nombre");
const usuario1=document.getElementById("usuario");
const password1=document.getElementById("password");
const fotoPerfil1=document.getElementById("fotoPerfil");
const btnEnviar=document.getElementById("enviar");

btnEnviar.addEventListener("click", async()=>{

    const user={
        nombre: nombre1.value,
        usuario: usuario1.value,
        password: password1.value,
        foto: fotoPerfil1.files[0],
        login: false
    }

    if (usuarioExiste(user.usuario)){
        resultado.innerHTML=`<p>Nombre de usuario no valido. Intentelo con otro</p>`;
        return;
    }

    await guardarUsuario(user); //como la funcion de guardar es asincrona hay que esperarla para que guarde sino no guarda

    resultado.innerHTML=`<p>Se ha registrado correctamente al usuario ${user.usuario}</p>`;

    document.getElementById("formulario").reset();
})

function usuarioExiste(usuarioClave){
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
    const claves=Object.keys(usuarios);

    for (const clave of claves){
        if(usuarioClave==clave){
            return true;
        }
    }

    return false;
}

async function guardarUsuario(usuario){
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
    if (usuario.foto==null){
        usuario.foto="../../img/usuarioDefecto.png"; //url de la foto por defecto
    }else {
        usuario.foto=await fotoAData(usuario.foto); //sustituimos el fichero de la foto por la url
    }

    usuarios[usuario.usuario]=usuario;
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
}

function fotoAData(foto){
    const lector=new FileReader();
    return new Promise((resolve,reject)=>{
        lector.onload=()=>{
            resolve(lector.result);
        }
        lector.onerror=()=>{
            reject(lector.error);
        }
        lector.readAsDataURL(foto);
    });
}