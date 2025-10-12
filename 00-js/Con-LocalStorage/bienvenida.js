//el mensaje de bienvenida solo se mostrara la primera vez que se entre en la sesion. Por ello se ha decido usar sessionStorage
document.addEventListener("DOMContentLoaded",()=>{

    let welcome=false;
    const claves=Object.keys(sessionStorage);
    for (const clave of claves){
        if (clave=="bienvenido"){
            welcome=true;
            break;
        }
    }

    if(welcome){
        document.getElementById("welcome").style.display="none";
    }else {
        console.log("estoy aqui")
        document.getElementById("welcome").style.display="";
    }
});

const btnWelcome=document.getElementById("welcome-btn");

btnWelcome.addEventListener("click",()=>{
    sessionStorage.setItem("bienvenido",JSON.stringify(true)); //establecemos una sesion de bienvenida
    location.reload();
});