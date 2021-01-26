var divTag = document.querySelector('div');
var btnAdd = document.querySelectorAll('button')[0];
var btnDelete = document.querySelectorAll('button')[1];
var numOfPs = 1;

btnAdd.addEventListener('click', function(){
    numOfPs++;
    var newP = document.createElement('p');
    var pText = document.createTextNode(`This is paragraph number ${numOfPs}`);
    newP.appendChild(pText);
    divTag.appendChild(newP);
})

btnDelete.addEventListener('click', function(){
    if(numOfPs > 1){
        divTag.removeChild(divTag.children[numOfPs-1]);
        numOfPs--;
    }
    else {
        alert("Don't delete the last paragraph");
    }  
});