"use strict";

const btnGuardar=document.getElementById("guardar");
const btnLeerUno=document.getElementById("leerUno");
const btnLeerTodos=document.getElementById("leerTodos");
const btnBorrar=document.getElementById("borrar");
const nombre1=document.getElementById("nombre");
const usuario1=document.getElementById("usuarioForm");
const password1=document.getElementById("password");

console.log(nombre1);
console.log(usuario1);
console.log(password1);

btnGuardar.addEventListener("click",async ()=>{
    console.log("he clicao");
    const user={
        nombre: nombre1.value,
        usuario: usuario1.value,
        password: password1.value,
    }

    console.log(user.usuario);

    await guardarUsuario(user);
});

btnLeerTodos.addEventListener("click", async()=>{
    mostrarUsuarios();
});

btnLeerUno.addEventListener("click",async()=>{
    const user={
        nombre: nombre1.value,
        usuario: usuario1.value,
        password: password1.value,
    }

    console.log(user.usuario);

    await mostrarUsuario(user);
});

btnBorrar.addEventListener("click",async()=>{
    const user={
        nombre: nombre1.value,
        usuario: usuario1.value,
        password: password1.value,
    }

    console.log(user.usuario);

    await borrarUsuario(user);
});