"use strict";

const idElement=document.getElementById("hola");
const resultado=document.getElementById("resultado");

console.log(boton);

/*Ojo en las utlimas versiones de los elementos los objetos del DOM con un id pueden 
aparecer directamente en la variable window por lo que se puede acceder a ellos
sin necesidad de hacer un getElementById, pero esto es poco recomendable
Se ha dejado aqui como caso curioso*/
boton.onclick=mostrar; //esta es una forma de añadir un evento a un elemento, como se asigna la funcion no hay que ponerle los parentesis

function mostrar(){
    resultado.innerHTML=idElement.textContent;
}
