(function () {
    'use strict';
    const container = document.querySelector('div');
    const theImg = document.querySelector('div img');
    const percent = container.offsetWidth / 100;
    let prevLoc = 0;

    container.addEventListener('mousemove', reportPos);
    function reportPos(event) {
        const mousePosX = Math.ceil((event.clientX - (container.getBoundingClientRect().left)) / percent);
    
        if (prevLoc !== mousePosX) {
            const addedPx = mousePosX * 30;
            theImg.style.width = (800 + addedPx) + 'px';
            prevLoc = mousePosX;
            console.log(prevLoc);
        }
    }
    



})();