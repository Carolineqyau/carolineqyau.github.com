(function(){
    "use strict";
    const pTag= document.querySelector('p');
    const btn = document.querySelector('button');
    btn.onclick = function(){
        pTag.style.color = "green";
    }
}());