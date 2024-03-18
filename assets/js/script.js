
// *********************Pregunta 3 desafio*****************************

function pintare(num){
  //  caj.style.border = 'orange'
  if(num==1){
    caj1.style.backgroundColor = 'black'
  }else if(num==2){
    caj2.style.backgroundColor = 'black'
  }else if(num==3){
    caj3.style.backgroundColor = 'black'
  }else{
    caj4.style.backgroundColor = 'black'
  }
}

caj1 = document.querySelector("#caja1")
caj2 = document.querySelector("#caja2")
caj3 = document.querySelector("#caja3")
caj4 = document.querySelector("#caja4")

caj1.addEventListener('click', function(){
    pintare(1)  
});
caj2.addEventListener('click', function(){
    pintare(2)  
});
caj3.addEventListener('click', function(){
    pintare(3)  
});
caj4.addEventListener('click', function(){
    pintare(4)  
});

