
    import React, { useEffect } from "react";
    export default function Scroll() {
        useEffect(function mount() {
          function onScroll() {
            var logo=document.getElementById("logo")
            if(window.pageYOffset  < 100){
                logo.style.display="block"
             }else{
                 logo.style.display="none"
             }
          }
      
          window.addEventListener("scroll", onScroll);
      
          return function unMount() {
            window.removeEventListener("scroll", onScroll);
          };
        });
      
        return null;
      }

     