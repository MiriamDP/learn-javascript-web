document.addEventListener("DOMContentLoaded",()=>{
    console.log("he cargado");
    const cookies=document.cookie.split("; ");
    console.log(cookies);
    let welcome;
    cookies.forEach(cookie => {
        const [clave, valor]=cookie.split("=");
        console.log("clave= ");
        console.log(clave)
        console.log("valor= ");
        console.log(valor)
        if (clave=="bienvenido" && valor=="true"){
            console.log("Soy bienvenido")
            welcome=true;
        }
    });

    console.log(welcome);

    if(welcome===true){
        document.getElementById("welcome").style.display="none";
    }else {
        console.log("estoy aqui")
        document.getElementById("welcome").style.display="";
    }
});