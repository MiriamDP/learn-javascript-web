"use strict";
let db;

/**
 * Abre la base de datos "usuarios" y crea el storage "usuarios" si no lo esta. Ademas añade a este storage al crearse el usuario admin por defecto
 * @returns 
 */
function openDataBase(){
    return new Promise((resolve, reject)=>{
        const request=indexedDB.open("usuarios",1);

        request.onupgradeneeded=(event)=>{
            db=event.target.result;
            if(!db.objectStoreNames.contains("usuarios")){
                const store=db.createObjectStore("usuarios",{keyPath: "usuario"});
                /*creamos el usuario admin por defecto y temporal. Lo ideal es que la primera 
                vez se entre con el y ya luego se cree el administrador de verdad y este se borre 
                por seguridad*/
                const trans=event.target.transaction; //no se emplea db.transaction como en otros casos porque onupgradeneed ya implica una transaccion, por lo que para crearla se hace de este modo
                // const store=trans.objectStore("usuarios");
                const admin={
                    nombre: "admin",
                    usuario: "admin",
                    password: "dejameya",
                    foto: "http://localhost:4300/learn-javascript-web/img/usuarioDefecto.png",
                    rol: "administrador", 
                    estado: false, 
                    keepConnect: false 
                }
    
                const adminRequest=store.add(admin);

                adminRequest.onsuccess=()=>{
                    console.log("se añadio correctamente")
                }

                adminRequest.onerror=(e)=>{
                    console.error("error al agregar admin: ",e.target.error)
                }
            }


        };
        request.onsuccess=(event)=>{
            db=event.target.result;
            resolve(db);
        };
        request.onerror=(event)=>{
            console.error(`No se ha podido establecer la conexion. ERROR: ${event.target.error?.message}`);
            reject(event.target.error);
        };
    });
}

/**
 * Añade un usuario al storage usuarios. Devuelve true si todo ha ido correcto en caso contrario devuelve el error producido
 * @param {*} user 
 * @returns 
 */
async function addUser(user) {
    try {
        if (!db){
            await openDataBase();
        }

        return new Promise((resolve, reject)=>{
            const trans=db.transaction("usuarios","readwrite");
            const store=trans.objectStore("usuarios");
            const request=store.add(user); //con add si la clave ya esta repetida rechaza la peticion

            request.onsuccess=()=>{
                console.log("usuario guardado");
                resolve(true);
            }

            request.onerror=(event)=>{
                reject(event.target.error);
            }
        })
        
    } catch (e) {
        console.error(`No se pudo guardar. Se ha producido un error durante el guardado. ERROR `);
    }
}

/**
 * Borra el usuario con el nombre de usuario pasado por parametro. Si todo va bien devuelve true en caso contrario devuelve el error producido
 * @param {*} userKey 
 * @returns 
 */
async function deleteUser(userKey){
    try {
        if (!db){
            await openDataBase();
        }

        return new Promise((resolve, reject)=>{
            const trans=db.transaction("usuarios","readwrite");
            const store=trans.objectStore("usuarios");
            const request=store.delete(userKey);

            request.onsuccess=()=>{
                const user=request.result;
                resolve(user);
            }

            request.onerror=(event)=>{
                reject(event.target.error);
            }
        })
        
    } catch (e) {
        console.error(`No se pudo borrar. Se ha producido un error durante la eliminacion del usuario. ERROR ${e.error.message}`)
    }
}

/**
 * Actualiza los valores del usuario pasado por parametro
 * @param {*} user 
 * @returns 
 */
async function updateUser(user) {
    console.log("estoy actualizando");
    try {
        if (!db){
            await openDataBase();
        }

        return new Promise((resolve, reject)=>{
            const trans=db.transaction("usuarios","readwrite");
            const store=trans.objectStore("usuarios");
            const request=store.put(user); //con add si la clave ya esta repetida rechaza la peticion

            request.onsuccess=()=>{
                console.log("usuario guardado");
                resolve(true);
            }

            request.onerror=(event)=>{
                reject(event.target.error);
            }
        })
        
    } catch (e) {
        console.error(`No se pudo guardar. Se ha producido un error durante el guardado. ERROR `);
    }
}

/**
 * Accede al storage y devuelve en caso de exito todos los usuarios del mismo. En caso contrario devuelve el error
 * @returns 
 */
async function readUsers() {
        try {
            if (!db){
                await openDataBase();
            }

        return new Promise((resolve, reject)=>{
            const trans=db.transaction("usuarios","readonly");
            const store=trans.objectStore("usuarios");
            const request=store.getAll();

            request.onsuccess=()=>{
                const users=request.result;
                resolve(users);
            }
            
            request.onerror=(event)=>{
                console.log("error");
                reject(event.target.error);
            }
        });
        
    } catch (e) {
        console.error(`No se pudo leer. Se ha producido un error durante la lectura. ERROR ${e.error.message}`)
    }
}

/**
 * Se trae del storage el usuario cuya nombre de usuario coincide con el pasado por paramtro. En caso contrario devuelve el error.
 * @param {*} userKey 
 * @returns 
 */
async function getUser(userKey){
        try {
        if (!db){
            await openDataBase();
        }

        return new Promise((resolve, reject)=>{
            const trans=db.transaction("usuarios","readonly");
            const store=trans.objectStore("usuarios");
            const request=store.get(userKey);

            request.onsuccess=()=>{
                const user=request.result;
                // console.log("la promesa devuelve")
                // console.log(user);
                resolve(user);
            }

            request.onerror=(event)=>{
                reject(event.target.error);
            }
        })
        
    } catch (e) {
        console.error(`No se pudo obtener. Se ha producido un error durante la obtencion del usuario. ERROR ${e.error.message}`)
    }
}