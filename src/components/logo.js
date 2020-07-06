var logo=document.getElementById("logo");
console.log(window.pageYOffset)
window.onscroll=function(){
    "use strict";
    if(window.pageYOffset <  100){
       logo.style.display="block"
    }else{
        logo.style.display="none"
    }

}
