var h1Tag = document.querySelector('h1');
var formTag = document.querySelector('form');

formTag.addEventListener('submit', function(event){
    event.preventDefault();
    var myNum = parseInt(document.querySelector('input').value);
    if (myNum){
        h1Tag.style.fontSize = myNum + "px";
    }
    else {
        alert('please enter a number');
    }
});