"use strict";

/**Carga la tabla de usuarios al cargar la pagina */
document.addEventListener("DOMContentLoaded",async ()=>{
    await showUsers();
    console.log("se creo la tabla")
});

/**
 * Crea el cuerpo de la tabla de usuarios. Por defecto el parametro searchActive es false con lo cual mostrara la tabla con todos los usuarios. Si es true
 * creara la tabla con los usuarios que cumplan los criterios de busqueda en el nombre o en el usuario.
 * @param {*} searchActive 
 */
async function showUsers(searchActive=false) {
    cleanTable();
    let users=await readUsers();
    let usersSearch;
    if (searchActive){
        usersSearch=users.filter(user=>user.nombre.toLowerCase().includes(searchParam.toLowerCase()) || user.usuario.toLowerCase().includes(searchParam.toLowerCase()));
        users=usersSearch;
    }
    const body=document.getElementById("cuerpo-tabla");

    users.forEach(user => {
        const tr=document.createElement("tr");
        const tdUser=document.createElement("td");
        tdUser.textContent=user.usuario;
        const tdName=document.createElement("td");
        tdName.textContent=user.nombre;
        const tdPhoto=document.createElement("td");
        
        const photo=document.createElement("img");
        let urlphoto=user.foto;
        photo.src=typeof urlphoto=="string"?urlphoto:URL.createObjectURL(urlphoto);
        photo.onload=()=>URL.revokeObjectURL(photo.src);
        photo.style.borderRadius="50%";
        photo.style.width="50px";
        photo.style.height="50px";
        tdPhoto.appendChild(photo);
        
        const tdRole=document.createElement("td");
        tdRole.textContent=user.rol;

        const tdActions=document.createElement("td");
        const btnUpdate=document.createElement("button");
        btnUpdate.innerHTML='Update';
        const btnDelete=document.createElement("button");
        btnDelete.innerHTML='Delete';

        btnUpdate.onclick=async()=>{
            await updateUserFromAdmin(user);
        };

        btnDelete.onclick=async()=>{
            borrarUsuarioAdmin(user);
            // await deleteUser(user.usuario);
            // await showUsers();
        }

        tdActions.appendChild(btnUpdate);
        tdActions.appendChild(btnDelete);
        tdActions.classList.add("boton-tabla")

        tr.appendChild(tdUser);
        tr.appendChild(tdName);
        tr.appendChild(tdPhoto);
        tr.appendChild(tdRole);
        tr.appendChild(tdActions);

        body.appendChild(tr);

    });
    console.log("Se han mostrado")
}

/**
 * Limpia el cuerpo de la tabla.
 */
function cleanTable(){
    const body=document.getElementById("cuerpo-tabla");
    const rows=body.querySelectorAll("tr");
    rows.forEach(row => {
        body.removeChild(row);
    });
}