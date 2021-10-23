'use strict';
// let mkey = document.querySelector('.mykey');
// console.log(mkey.textContent);

const sel = selector => document.querySelector(selector);

window.addEventListener('keydown', function (event) {
    console.log('Key: ', event.key);
    // console.log('keyCode: ', event.keyCode);

    console.log('this Key ', sel('.key').textContent);
    // if (sel('.key').textContent == event.key) { console.log('this Key: ', event.key); }
    if (event.keyCode == 192) {
        sel('.key').classList.add('key_on');
        sel('.key').classList.remove('key_off');
    }

})

window.addEventListener('keyup', function (event) {
    // console.log('Key: ', event.key);
    // console.log('keyCode: ', event.keyCode);

    if (event.keyCode == 192) {
        sel('.mykey').classList.remove('key_on');
        sel('.mykey').classList.add('key_off');
    }
})