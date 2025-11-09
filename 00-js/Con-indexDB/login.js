"use strict";

const result=document.getElementById("resultado");
const form=document.getElementById("formulario");
const user1=document.getElementById("usuario");
const password1=document.getElementById("password");
const keepConnect1=document.getElementById("keepConnect");
const btnSend=document.getElementById("conectar");

btnSend.addEventListener("click",async ()=>{
    const userForm={
        usuario: user1.value,
        password: password1.value,
        keepConnect: keepConnect1.checked //se emplea checked para que devuelva tru o false, si se usa value devuelve on que es el valor por defecto si no se le asigna uno y devovlveria este valor este marcado o no
    }

    const users=await readUsers();

    let userLog=false;

    users.forEach(user =>{
        if (user.usuario==userForm.usuario && user.password==userForm.password){
            user.estado=true;
            user.keepConnect=userForm.keepConnect;
            userLog=true;
            createSession(user);
        }
    });

    if (userLog){
        resultado.innerHTML=`<p>Bienvenido ${userForm.usuario}. Redirigiendo al Inicio...</p>`;
        setTimeout(()=>{
            window.location.href="../index.html";
        },1500);
    }else {
        resultado.innerHTML=`<p>Usuario o contraseña incorrectos. Intentelo de nuevo</p>`;
    }

});

function createSession(user){
    if (user.keepConnect){
        localStorage.setItem("userLogged",user.usuario);
    }else{
        sessionStorage.setItem("userLogged",user.usuario);
    }
}