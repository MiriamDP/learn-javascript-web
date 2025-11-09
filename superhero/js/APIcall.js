import { APIresponse } from "./APIresponse.js";
export async function APIcall(search) {
    const urlBase="https://superheroapi.com/api/";
    const tokenAccess="5827e69a09b59ce2426d3eda804acc0b";
    try {
        let url=urlBase+tokenAccess+"/search/"+search;
        console.log(url);
        // if (typeof search=="number"){
        //     url=urlBase+`/${search}`;
        // }else{
        //     if (Object.keys(search).length==1){
        //         url=urlBase+`?name=${search.name}`;
        //     }else{
        //         url=urlBase+`?race=${search.race}&gender=${search.gender}&affiliation=${search.affiliation}`;
        //     }

        // }
        const data=await APIresponse(url);
        return data;
        
    } catch (error) {
        console.error(error);
        mensaje.textContent=`Error al obtener los datos de la API`;
        throw error; //para que se propague sino dejarlo como return {}
    }
}
