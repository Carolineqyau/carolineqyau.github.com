
(function(){
    "use strict";
    console.log("reading js");
    const page = document.querySelector('body');
    const els = document.getElementsByClassName('grid-gallery'); //get grid gallery element
    const lay = document.getElementById('overlay');
    let sel = false;
    for (let i=0; i<els.length; i++){ //iterate through grid gallery to identify all images
        els[i].addEventListener('mouseover', function(eachImg){
            page.style.backgroundColor = "#F6F3EE";
        });

        els[i].addEventListener('mouseout', function(eachImg){
            page.style.backgroundColor = "#A19C95";
        });
        
        els[i].addEventListener('click', function(event) { //click event on any of the images
            event.preventDefault();
            let selection = event.target; //the target of click event is the selected image
            let originalWidth = selection.clientWidth; //get the width of loaded image on website
            if (!sel){
                // selection.style.marginTop = `-${selection.clientHeight/2}`;
                // selection.style.marginLeft = `-${selection.clientWidth/2}`;
                selection.classList.add("select"); //add select class to format the clicked image 
                lay.style.visibility = "visible";
            } else {
                selection.classList.remove("select");
                lay.style.visibility = "hidden";
            }
            sel = !sel

        });
    }

})();