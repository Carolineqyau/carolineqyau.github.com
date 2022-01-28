(function(){
    'use strict';

    let globalData;
    const button = document.querySelector('#button');
    const text = document.querySelector('#text');
    
    button.addEventListener('click', function () {
        
        // button.classList.toggle('hidden');
        text.classList.toggle('hidden');

    });
    async function getData(){
        const alarms = await fetch('data/alarm.json');
        const data = await myMoods.json();
        // Gets the keys and puts them in an array
        const dataPoints = Object.keys(data);
        // Gets the values and puts them in the globalData array
        globalData = Object.values(data);
        // Gets the number of entries in the JSON file
        numDataPoints = dataPoints.length;
        //console.log(globalData, numDataPoints);
    }

})(); // end IIFE