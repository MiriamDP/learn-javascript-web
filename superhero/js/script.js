import { APIcall } from "./APIcall.js";
import { createCharacterResults} from "./createCharacterResults.js"
import { cleanResults } from "./cleanResults.js";
import { hideElement } from "./hideDiv.js";

const btnSearch=document.getElementById("search-button");
const nameSearch=document.getElementById("nombreBusqueda");
let data;


btnSearch.addEventListener("click",async ()=>{
    // console.log(search);
    console.log(nameSearch.value);
    if (nameSearch!==""){
        data=await APIcall(nameSearch.value);
        console.log(data);

    }
    // console.log("Datos");
    // console.log("Datos lol");
    // console.log(data);
    // cleanResults("personajes");
    // document.getElementById("personajes").style.width="100%"; //sirve para resetear el ancho cuando se vuelve a llamar

    // //ocultamos las ventanas de informacion extras
    // hideElement("personaje-info");
    // document.getElementById("personaje-trans").classList.remove("cardArea"); //por motivos de especificidad del css hay que eliminar la clase no basta con añadir la que lo oculta
    // hideElement("personaje-trans");
    // hideElement("personaje-trans-info");

    // //creamos las tarjetas de resultado de personajes
    // createCharacterResults(data, "personajes");
})


