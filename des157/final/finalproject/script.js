(function(){
    "use strict";
    console.log("reading js");

    const btn = document.getElementById('submit');
    const rtn = document.getElementById('return');
    var fill = document.getElementById('fill');
    var result = document.getElementById('result');
    var output = document.getElementById('output');

    btn.onclick = function(){
        var product = document.getElementById('product').value.toLowerCase();
        var customer = document.getElementById('customer').value.toLowerCase();
        // const goal = document.getElementById('goal').value.toLowerCase();
        // const verb1 = document.getElementById('verb1').value.toLowerCase();
        // const gain = document.getElementById('gain').value.toLowerCase();
        // const verb2 = document.getElementById('verb2').value.toLowerCase();
        // const pain = document.getElementById('pain').value.toLowerCase();
        // const competitor = document.getElementById('competitor').value.toLowerCase();

        // document.getElementById('boldProduct').innerHTML = product;
        // document.getElementById('boldCustomers').innerHTML = customer;
        // document.getElementById('boldGoal').innerHTML = goal;
        // document.getElementById('boldVerb1').innerHTML = verb1;
        // document.getElementById('boldGain').innerHTML = gain;
        // document.getElementById('boldVerb2').innerHTML = verb2;
        // document.getElementById('boldPain').innerHTML = pain;
        // document.getElementById('boldCompetitor').innerHTML = competitor;

        result.style.display = "block";
        fill.style.display = "none";
        btn.style.display = "none";
        rtn.style.display = "block";
    }

    rtn.onclick = function(){
        result.style.display = "none";
        fill.style.display = "block";
        btn.style.display = "block";
        rtn.style.display = "none";
    }

    alert("Hello! Please answer this survey from Caroline Yau about your most used app!");

})();