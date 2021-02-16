(function(){
    "use strict";
    console.log("reading js");
    const els = document.getElementsByClassName('grid-gallery'); //get grid gallery element
    for (let i=0; i<els.length; i++){ //iterate through grid gallery to identify all images
        els[i].addEventListener('click', function(event) { //click event on any of the images
            event.preventDefault();
            let selection = event.target; //the target of click event is the selected image
            //let originalWidth = selection.clientWidth; //get the width of loaded image on website
            selection.classList.add("select"); //add select class to format the clicked image 
            //let deselection = document.querySelector('.select'); //identify the selected image to prepare for deselection
            selection.addEventListener('click', function(event){ //deselection click event
                // event.preventDefault();
                selection.classList.remove("select"); //remove select class formatting to return to original
            });
        });
    }

})();