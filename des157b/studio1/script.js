(function() {
    'use strict';
    console.log('reading');
    const myVideo = document.querySelector('#myVideo');
    const fs = document.querySelector('.fa-expand');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const play = document.querySelector('.play');
    const button = document.querySelector('.button');

    const poem = {
        start: [5, 10],
        stop: [10, 15],
        line: [line1, line2]
    }


    const intervalID = setInterval(checkTime, 1000);

    function checkTime() {
        for (let i = 0; i < poem.start.length; i++) {
            if (poem.start[i] < myVideo.currentTime && myVideo.currentTime < poem.stop[i]) {
                poem.line[i].className = "showing";
            } else {
                poem.line[i].className = "hidden";
            }
        }
    }

    fs.addEventListener('click', function() {
        // The fullscreenElement attribute returns null if the element is in windowed mode
        if (!document.fullscreenElement) {
            // document.documentElement returns the Element that is a direct child of the document, the <html> element
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    myVideo.addEventListener('click', function() {
        if (myVideo.currentTime > 0 && !myVideo.paused && !myVideo.ended) {
            myVideo.pause();
            myVideo.classList.toggle('blurEffect');
            button.classList.toggle('hidden');
        } else {
            myVideo.play();
            myVideo.classList.toggle('blurEffect');
            button.classList.toggle('hidden');
        }
    });

    button.addEventListener('click', function() {
        if (myVideo.currentTime > 0 && !myVideo.paused && !myVideo.ended) {
            myVideo.pause();
            myVideo.classList.toggle('blurEffect');
            button.classList.toggle('hidden');
        } else {
            myVideo.play();
            myVideo.classList.toggle('blurEffect');
            button.classList.toggle('hidden');
        }
    });

})();