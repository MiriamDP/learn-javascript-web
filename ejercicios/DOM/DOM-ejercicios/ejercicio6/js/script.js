"use strict";

const btnActive=document.getElementById("activeEvent");
const btnRemove=document.getElementById("removeEvent");
const resultado=document.getElementById("resultado");
const raven=document.getElementById("raven");
const ravenLink=document.getElementById("ravenLink");

btnActive.addEventListener("click",()=>{
    raven.addEventListener("mouseover",traducirSpanish);
    resultado.textContent="Pasa el raton por encima del texto para traducir";
});

function traducirSpanish(){
    raven.innerHTML=`Una vez, al filo de una lúgubre media noche,
mientras débil y cansado, en tristes reflexiones embebido,
inclinado sobre un viejo y raro libro de olvidada ciencia,
cabeceando, casi dormido,
oyóse de súbito un leve golpe,
como si suavemente tocaran,
tocaran a la puerta de mi cuarto.
“Es —dije musitando— un visitante
tocando quedo a la puerta de mi cuarto.
Eso es todo, y nada más.”`
    raven.style.color="rgb(163, 38, 96)";
    ravenLink.href="https://www.literatura.us/idiomas/eap_cuervo.html";
    ravenLink.innerHTML="Para leerlo completo en español";
};

btnRemove.addEventListener("click",()=>{
    raven.removeEventListener("mouseover",traducir);
    raven.style.color="black";
    raven.innerHTML=`Once upon a midnight dreary, while I pondered, weak and weary,
Over many a quaint and curious volume of forgotten lore—
    While I nodded, nearly napping, suddenly there came a tapping,
As of some one gently rapping, rapping at my chamber door.
“’Tis some visitor,” I muttered, “tapping at my chamber door—
            Only this and nothing more.”`;
    ravenLink.href="https://www.poetryfoundation.org/poems/48860/the-raven";
    ravenLink.innerHTML="Para leerlo completo en inglés";
    resultado.textContent="Leelo otra vez en ingles";
});