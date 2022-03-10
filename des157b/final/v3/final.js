(function(){
    'use strict';

    const button = document.querySelectorAll('button');
    const submit = document.querySelector('#ff-compose button');
    const form = document.querySelector('#ff-compose');
    const others = document.querySelector('#others');

    button.addEventListener('click', event => {
        button.textContent = `Share your response`;
      });

    submit.addEventListener('click', event => {
        form.className = 'hidden';
        others.className = 'showing';
        others.classList.toggle('hidden');
    });
})(); // end IIFE