var divTag = document.querySelector('div');
var btn = document.querySelector('button');

btn.addEventListener('click', function(){
    var newP = document.createElement('p');
    var pText = document.createTextNode('A new paragraph');
    newP.appendChild(pText);
    divTag.appendChild(newP);
});