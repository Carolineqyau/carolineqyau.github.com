(function(){
    'use strict';

    let globalData;
    let numDataPoints;
    let notificationsSum = 0;
    let pickupsSum = 0;
    let durationSum = 0;
    let successSum = 0;
    let weekend = 0;
    let weekendCount = 0;
    let workday = 0;
    let workdayCount = 0;

    const button = document.querySelector('#button');
    const text = document.querySelector('#text');
    const image = document.querySelector('img');

    async function getData(){
        const alarms = await fetch('data/alarm.json');
        const data = await alarms.json();
        // Gets the keys and puts them in an array
        const dataPoints = Object.keys(data);
        // Gets the values and puts them in the globalData array
        globalData = Object.values(data);
        // Gets the number of entries in the JSON file
        numDataPoints = dataPoints.length;
        //console.log(globalData, numDataPoints);

        for (let i=0; i<numDataPoints; i++){
            notificationsSum += globalData[i].notifications;
            pickupsSum += globalData[i].pickups;
            durationSum += globalData[i].duration;
            successSum += globalData[i].success;

            if (globalData[i].holiday == 1) {
                weekend += globalData[i].wakeup;
                weekendCount += 1;
            } else {
                workday += globalData[i].wakeup;
                workdayCount += 1;
            }
        }

        document.querySelector('#notifications').innerHTML = notificationsSum / numDataPoints;
        document.querySelector('#pickups').innerHTML = pickupsSum / numDataPoints;
        document.querySelector('#duration').innerHTML = durationSum / numDataPoints;
        document.querySelector('#success').innerHTML = successSum / numDataPoints * 100;
        document.querySelector('#duration').innerHTML = durationSum / numDataPoints;
        document.querySelector('#weekend').innerHTML = Math.round(weekend / weekendCount);
        document.querySelector('#workday').innerHTML = Math.round(workday / workdayCount);
    }



    // function presentData(data) {
    //     // button.classList.toggle('hidden');
    //     // profile.classList.toggle('hidden');
    //     text.classList.remove('hidden');
    //     // document.querySelector('#notifications').innerHTML = data[0].notifications / numDataPoints;
    // }
    button.addEventListener('click', function(){
        text.className = 'showing';
        document.querySelector('#notifications').className = 'transition';
        document.querySelector('#pickups').className = 'transition';
        document.querySelector('#duration').className = 'transition';
        document.querySelector('#success').className = 'transition';
        document.querySelector('#duration').className = 'transition';
        document.querySelector('#weekend').className = 'transition';
        document.querySelector('#workday').className = 'transition';
        button.className = 'transition';
        // profile.className = 'showing';
        // const imagesrc = ['images/arrow.png', 'images/portrait.png'];
        // image.setAttribute('src', imagesrc[1]);
        image.setAttribute('src', 'images/portrait.png');

    });
    
    getData();

})(); // end IIFE