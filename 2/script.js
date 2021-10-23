'use strict';
// let mkey = document.querySelector('.mykey');
// console.log(mkey.textContent);

const sel = selector => document.querySelector(selector);

window.addEventListener('keydown', function (event) {
    console.log('Key: ', event.key);
    console.log('keyCode: ', event.keyCode);

    let mykey = document.getElementsByClassName('key');
    for (let i = 0; i < mykey.length; i++) {
        // console.log(mykey[i]);
        if (mykey[i].textContent == event.key) {
            //mykey[i].textContent.toLowerCase == event.key.toLowerCase - Чи так якось робити при Капслоці, щоб працювалу?
            console.log('mykey[i].textContent ', mykey[i].textContent);
            console.log('DOWN this Key: ', event.key);
            mykey[i].classList.add('key_on');
            mykey[i].classList.remove('key_off');
        }
    }
})

window.addEventListener('keyup', function (event) {
    let mykey = document.getElementsByClassName('key');
    for (let i = 0; i < mykey.length; i++) {
        // console.log(mykey[i]);
        if (mykey[i].textContent == event.key) {
            console.log('UP this Key: ', event.key);
            mykey[i].classList.add('key_off');
            mykey[i].classList.remove('key_on');
        }
    }
})