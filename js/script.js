function updateDateTime(){
    const now=new Date();
    const options={
        weekday:'short', year: 'numeric',month:'short',day: 'numeric', hour:'2-digit',minute:'2-digit',second:'2-digit'
    };
    const localDateTime=now.toLocaleDateString('es-ES',options);
    document.getElementById('date-time').textContent=localDateTime;
}

setInterval(updateDateTime,1000); //se actualiza cada segundo
updateDateTime();

const welcomeBtn=document.getElementById("btn-welcome");

welcomeBtn.addEventListener("click",()=>{
    document.cookie="bienvenido=true; path=/"
    const welcome=document.getElementById("welcome");
    welcome.style.display="none";
});