(function(){
    "use strict";
    console.log("reading js");

    const btn = document.getElementById('submit');
    const rtn = document.getElementById('return');
    var product = document.getElementById('product').value.toLowerCase();
    var customer = document.getElementById('customer').value.toLowerCase();
    const goal = document.getElementById('goal').value.toLowerCase();
    const verb1 = document.getElementById('verb1').value.toLowerCase();
    const gain = document.getElementById('gain').value.toLowerCase();
    const verb2 = document.getElementById('verb2').value.toLowerCase();
    const pain = document.getElementById('pain').value.toLowerCase();
    const competitor = document.getElementById('competitor').value.toLowerCase();
    var fill = document.getElementById('fill');
    var result = document.getElementById('result');
    var output = document.getElementById('output');

    btn.onclick = function(){
        var bproduct = document.getElementById('boldProduct').innerHTML = '<b>product</b>';
        var bcustomer = document.getElementById('boldCustomer').innerHTML = '<b>customer</b>';

        result.style.display = "block";
        // output.innerHTML = product;
        // output.innerHTML = "Our " + product + " helps " + customer + " who wants to " + goal + " by " + verb1 + " " + gain + " and " + verb2 + " " + pain + " unlike " + competitor;
                // myArticle.innerHTML = '<p>I like cheese!<p>';
        fill.style.display = "none";
        btn.style.display = "none";
        rtn.style.display = "block";
        
    }


})();