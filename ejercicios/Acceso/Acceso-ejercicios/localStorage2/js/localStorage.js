"use strict";

function guardar(usuario){
    let usuarios=JSON.parse(localStorage.getItem("usuariosEjer")) || {}; //esto crea la estructura clave=usuarios valor={} en caso de no existir
    console.log(usuarios);
    //cada usuario sera un objeto dentro del objeto value y este se identificara por una clave
    usuarios[usuario.usuario]=usuario;
    localStorage.setItem("usuariosEjer",JSON.stringify(usuarios));
}

function leerUnUsuario(usuarioClave){
    const usuarios=JSON.parse(localStorage.getItem("usuariosEjer")) || {};

    if (Object.keys(usuarios).length===0){
        return "No hay usuarios";
    }

    for (const clave in usuarios){
        if (usuarios[clave].usuario==usuarioClave){
            return `<p>Usuario: ${usuarios[clave].usuario}, Nombre: ${usuarios[clave].nombre}<p>`;
        }
    }
    return `<p>No se encontro al usuario ${usuarioClave}</p>`;
}

function leerTodosUsuarios(){
    let salida="";
    const usuarios=JSON.parse(localStorage.getItem("usuariosEjer")) || {};

    //comprobamos si hay usuarios o no
    if (Object.keys(usuarios).length===0){
        return "No hay usuarios";
    }
    
    //Forma 1 Con un for in
    // for (const clave in usuarios){
    //     salida+=`<p>Usuario ${usuarios[clave].usuario}, Nombre: ${usuarios[clave].nombre}`;
    // }

    //forma 2 con un foreach de las claves
    // const claves=Object.keys(usuarios);
    // claves.forEach(clave=>{
    //     salida+=`<p>Usuario ${clave}, Nombre: ${usuarios[clave].nombre}`;
    // })

    //forma 3 Con un for of de las claves
    // const claves=Object.keys(usuarios);
    // for (const clave of claves){
    //     salida+=`<p>Usuario ${clave}, Nombre: ${usuarios[clave].nombre}`;
    // }

    //forma 4 Con un for of de las valores con entries
    // for (const usuario of Object.entries(usuarios)){
    //     const [clave, valor]=usuario;
    //     salida+=`<p>Usuario ${clave}, Nombre: ${valor.nombre}`;
    // }

    //forma 5 Con un for of de los valores con entries
    //     for (const [clave,valor] of Object.entries(usuarios)){
    //     salida+=`<p>Usuario ${clave}, Nombre: ${valor.nombre}`;
    // }

    //forma 6 foreach entries
    Object.entries(usuarios).forEach(([clave,valor])=>{
        salida+=`<p>Usuario ${clave}, Nombre: ${valor.nombre}`;

    })

    return salida;
}

function borrar(clave){
    const usuarios = JSON.parse(localStorage.getItem("usuariosEjer")) || {};
    if (localExiste(clave)){
        delete usuarios[clave];
        localStorage.setItem("usuariosEjer",JSON.stringify(usuarios));
        return `<p>Se ha borrado el usuario: ${clave}</p>`;
    }

    return `<p>No se encontro al usuario ${clave}. No se ha podido borrar`;
    
}

function localExiste(usuarioClave){
    const claves=Object.keys(JSON.parse(localStorage.getItem("usuariosEjer")));
    for (const clave of claves){
        if(usuarioClave==clave){
            return true;
        }
    }

    return false;
}