"use strict";

async function userExist(userID){
    const users= await readUsers();
    let existUser=false;

    if(users.length==0){
        existUser=false;
    }else{
        users.forEach(user =>{
            if (user.usuario==userID){
                existUser=true;
            }
        });
    }

    return existUser;
}