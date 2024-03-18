/* Funcion de declaracion

function example(a, b, c){
  return a+b+c
} */


// funcion de expresion

example=function(a, b, c){
  return a+b+c
}

aux=document.querySelector('#parr1')
aux.innerHTML=example(5,7,3)
