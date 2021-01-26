var divTag = document.querySelector('div');
var btnAdd = document.querySelectorAll('button')[0];
var btnDelete = document.querySelectorAll('button')[1];

btnAdd.addEventListener('click', function(){
    var newP = document.createElement('p');
    var pText = document.createTextNode('A new paragraph');
    newP.appendChild(pText);
    divTag.appendChild(newP);
})

btnDelete.addEventListener('click', function(){
    var allPs = document.querySelectorAll('p');
    divTag.removeChild(divTag.children[allPs.length-1]);
});