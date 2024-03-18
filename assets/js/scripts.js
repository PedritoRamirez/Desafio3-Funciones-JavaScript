


function pintar(color ='green'){
  
  if(ele.style.backgroundColor == 'green'){
   ele.style.backgroundColor = 'yellow'
  }else{
   ele.style.backgroundColor = 'green'
  }
  
}

const ele = document.getElementById("ele1")
ele.addEventListener("click", function(){
    pintar()  
});