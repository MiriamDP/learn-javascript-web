"use strict";

let dbEjer;

/**
 * En esta funcion solicitaremos crear la conexion con indexDB y un almacenamiento
 * @returns 
 */
function abrirBaseDatos(){
    return new Promise((resolve,reject)=>{
        const request=indexedDB.open("usuariosEjerDB",1);

        request.onupgradeneeded=(event)=>{
            dbEjer=event.target.result;
            if(!dbEjer.objectStoreNames.contains("usuariosEjer")){
                const store=dbEjer.createObjectStore("usuariosEjer",{keyPath: "usuario"})
            }
        };

        request.onerror=(event)=>{
            console.error(`No se ha podido establece la conexion con la base de datos. Error ${event.target.error?.message}`);
            reject(event.target.error);
        };

        request.onsuccess=(event)=>{
            dbEjer=event.target.result;
            resolve(dbEjer); //esto es lo que devolvermos que una instancia de IDBDatabase
        };
    });
}

async function guardarUsuario(user){
    try{

    if(!dbEjer) await abrirBaseDatos();
    return new Promise((resolve, reject)=>{
        const transaccion=dbEjer.transaction("usuariosEjer","readwrite");
        const almacen=transaccion.objectStore("usuariosEjer"); //aqui seleccionamos el almacen con el que vamos a trabajar
        const request=almacen.put(user);

        request.onsuccess=(event)=>{//aqui se puede pasar o no el evento, depende de si lo usamos o no. En este caso no seria necesario
            console.log("Usuario guardado correctamente");
            resolve(true); //aqui resolvemos a true porque no vamos a hacer nada mas con el objeto guardado
        }

        request.onerror=(event)=>{
            console.log("Error al guardar")
            reject(event.target.error);
        }
    });
}catch(e){
    console.log("esta fallando aqui");
}
}

async function mostrarUsuarios() {
    if (!dbEjer) await abrirBaseDatos();

    return new Promise((resolve, reject)=>{
        const transaccion=dbEjer.transaction("usuariosEjer","readonly");
        const almacen=transaccion.objectStore("usuariosEjer");
        const request=almacen.getAll(); //aqui hacemos una peticion a index para que nos devuelve todos los datos. Cuando nos los de se activara el onsuccess

        request.onsuccess=()=>{ 
            const usuarios=request.result;
            if(usuarios.lenght==0){
                resultado.innerHTML="<p>No hay usuarios guardados</p>";
                resolve([]); //devuelve un array vacio
                return;
            }

            let salida="<h4>Usuarios guardados: </h4>"
            usuarios.forEach(usuario => {
                salida+=`<li>Nombre: ${usuario.nombre}; Usuario: ${usuario.usuario}</li>`;
            });

            resultado.innerHTML=salida;
            resolve(usuarios); //devuelve el array de usuarios
        }

        request.onerror=(event)=>{
            console.log("Error al leer")
            reject(event.target.error);
        }
    });
}

async function mostrarUsuario(user) {
    const keyUsuario=user.usuario;
    if (!dbEjer) await abrirBaseDatos();

    return new Promise((resolve, reject)=>{
        const transaccion=dbEjer.transaction("usuariosEjer","readonly");
        const almacen=transaccion.objectStore("usuariosEjer");
        const request=almacen.get(keyUsuario); //aqui hacemos una peticion a index para que nos devuelve todos los datos. Cuando nos los de se activara el onsuccess

        request.onsuccess=()=>{ 
        
            const usuario=request.result;
            resultado.innerHTML=`<p>Usuario: ${usuario.usuario}; Nombre: ${usuario.nombre}</p>`;
            resolve(usuarios); //devuelve el array de usuarios
        }

        request.onerror=(event)=>{
            console.log("Error al leer")
            reject(event.target.error);
        }
    });
}

//ojo como indexdb trabaja asincronamente puede ser que el usuario se borre pero siga apareciendo en el almacen, basta con refrescar el almacen
async function borrarUsuario(user) {
    console.error(user.usuario);
    keyUsuario=user.usuario;
    if (!dbEjer) await abrirBaseDatos();
    console.log(keyUsuario);

    return new Promise((resolve, reject) => {
            const transaction = dbEjer.transaction("usuariosEjer", "readwrite");
            const store = transaction.objectStore("usuariosEjer");
            const requestBorrar = store.delete(keyUsuario);

            requestBorrar.onsuccess = () => {
                // console.log(`✅ Usuario '${usuarioClave}' borrado correctamente.`);
                // mostrarUsuariosIndexedDB(); // actualizamos la vista
                resultado.innerHTML=`<p>Se borro correctamente el usuario ${user.usuario}`;
                resolve(true);
            };

            requestBorrar.onerror = (event) => {
                console.error("❌ Error al borrar usuario:", event.target.error);
                reject(event.target.error);
            };
        });

}
