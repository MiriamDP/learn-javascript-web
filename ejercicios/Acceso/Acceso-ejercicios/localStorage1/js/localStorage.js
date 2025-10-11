"use strict";

function guardar(usuario){
    localStorage.setItem(usuario.usuario, JSON.stringify(usuario));
}



function leerUnUsuario(usuarioClave){
    const claves=Object.keys(localStorage);
    for (const clave of claves){
        if (clave==usuarioClave){
            return `<p>Usuario: ${usuarioClave}, Nombre: ${JSON.parse(localStorage.getItem(clave)).nombre}<p>`;
        }
    }
    return `<p>No se encontro al usuario ${usuarioClave}</p>`;
}

function leerTodosUsuarios(){
    let salida="";
    // forma 1. Con for
    for (let i=0;i<localStorage.length;i++){
        salida+=`<p>Usuario: ${localStorage.key(i)}. Nombre: ${JSON.parse(localStorage.getItem(localStorage.key(i))).nombre}</p>`;
    }

    //forma 2. Con Objects.keys es un array de strings
    // const claves=Object.keys(localStorage);
    // for(const clave of claves){
    //     salida+=`<p>Usuario: ${clave}. Nombre: ${JSON.parse(localStorage.getItem(clave)).nombre}</p>`;
    // }

    //forma 3. Con Objects.entries es un array de arrays. Hacemos desestructuracion
    // Object.entries(localStorage).forEach(([clave,valor])=>{
    //     salida+=`<p>Usuario: ${clave}. Nombre: ${JSON.parse(valor).nombre}</p>`;
    // });

    // //forma 4. Con for in. Puede incluir claves no deseadas. No recomendado
    // for (let clave in localStorage){
    //     salida+=`<p>Usuario: ${clave}. Nombre: ${JSON.parse(localStorage.getItem(clave))}</p>`;
    // }

    //forma 5. Object.entries y for of
    // const usuarios=Object.entries(localStorage);
    // for (let usuario of usuarios){
    //     salida+=`${usuario}<br>`; //usuario tienen tanto la clave como el valor, habria que desestructurar (const [key, value] of entries)
    // }

    return salida;
}

function borrar(clave){
    if (localExiste(clave)){
        localStorage.removeItem(clave);
        return `<p>Se ha borrado el usuario: ${clave}</p>`;
    }

    return `<p>No se encontro al usuario ${clave}. No se ha podido borrar`;
    
}

function localExiste(usuarioClave){
    const claves=Object.keys(localStorage);
    for (const clave of claves){
        if(usuarioClave==clave){
            return true;
        }
    }

    return false;
}