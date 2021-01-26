var bodyTag = document.querySelector('body');
document.addEventListener('keydown', function(event){
    var keyPressed = event.key;

    switch(keyPressed){
        case 'b': bodyTag.className="one"; break;
        case 'v': bodyTag.className="two"; break;
        case 'c': bodyTag.className="three"; break;
        case 'f': bodyTag.className="four"; break;
        case 'g': bodyTag.className="five"; break;
        default: alert("You didn't press one of the specified keys!");
    }
});