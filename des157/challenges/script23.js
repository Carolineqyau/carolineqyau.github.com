
var pTags = document.querySelectorAll('p');
var btn = document.querySelector('button');

// btn.onclick = function(){
btn.addEventListener('click', function(){
    for (let i=0; i<pTags.length; i++){
        pTags[i].style.color = "green";
    }
});