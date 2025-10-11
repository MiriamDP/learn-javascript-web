"use strict";
const nombre1=document.getElementById("nombre");
const usuario1=document.getElementById("usuario");
const password1=document.getElementById("password");
const btnGuardar=document.getElementById("guardar");
const btnLeerUno=document.getElementById("leerUno");
const btnLeerTodos=document.getElementById("leerTodos");
const btnBorrar=document.getElementById("borrar");
const resultado=document.getElementById("resultado");


btnGuardar.addEventListener("click",()=>{
    const usuario={
        nombre: nombre1.value,
        usuario: usuario1.value,
        password: password1.value
    }
    guardar(usuario);
    resultado.innerHTML=`Se guardo correctamente el usuario ${usuario.usuario}`;
});


btnLeerUno.addEventListener("click",()=>{
    resultado.innerHTML=leerUnUsuario(usuario1.value);
});

btnLeerTodos.addEventListener("click",()=>{
    resultado.innerHTML=leerTodosUsuarios();
});

btnBorrar.addEventListener("click",()=>{
    resultado.innerHTML=borrar(usuario.value);
});
