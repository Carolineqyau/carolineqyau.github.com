(function(){
    'use strict';

    const button = document.querySelector('button');
    const submit = document.querySelector('#ff-compose button');
    const form = document.querySelector('#ff-compose');
    const others = document.querySelector('#others');

    button.addEventListener('click', event => {
        button.textContent = `Response recorded!`;
      });

    others.style.display = "none";
    submit.addEventListener('click', event => {
        // form.className = 'hidden';
        // form.classList.toggle('hidden');
        // others.classList.toggle('hidden');
        if (others.style.display === "none") {
          others.style.display = "block";
        } else {
          others.style.display = "none";
        }
    });

})(); // end IIFE