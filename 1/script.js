'use strict';

// let bgColors = document.getElementsByClassName("bg_colors");
// console.log(bgColors);
// const body_st = document.getElementsByTagName('body');
// console.log(body_st);

const sel = selector => document.querySelector(selector);


sel('.bg_colors').addEventListener('click', () => {
    sel('.body_style').classList.remove('ImageBox_1', 'ImageBox_2', 'ImageBox_3', 'ImageBox_4', 'ImageBox_5', 'ImageBox_6', 'ImageBox_7', 'ImageBox_8', 'ImageBox_9');

    sel('.ColorBox').classList.add('display-flex');
    sel('.ImageBox').classList.remove('display-flex');

    const colorBox = color_box => document.querySelector(color_box);
    colorBox('.ColorBox_1').addEventListener('click', () => {
        sel('.body_style').classList.add('ColorBox_1');
        sel('.body_style').classList.remove('ColorBox_2', 'ColorBox_3', 'ColorBox_4', 'ColorBox_5', 'ColorBox_6', 'ColorBox_7', 'ColorBox_8', 'ColorBox_9');
    });
    colorBox('.ColorBox_2').addEventListener('click', () => {
        sel('.body_style').classList.add('ColorBox_2');
        sel('.body_style').classList.remove('ColorBox_1', 'ColorBox_3', 'ColorBox_4', 'ColorBox_5', 'ColorBox_6', 'ColorBox_7', 'ColorBox_8', 'ColorBox_9');
    });
    colorBox('.ColorBox_3').addEventListener('click', () => {
        sel('.body_style').classList.add('ColorBox_3');
        sel('.body_style').classList.remove('ColorBox_1', 'ColorBox_2', 'ColorBox_4', 'ColorBox_5', 'ColorBox_6', 'ColorBox_7', 'ColorBox_8', 'ColorBox_9');
    });
    colorBox('.ColorBox_4').addEventListener('click', () => {
        sel('.body_style').classList.add('ColorBox_4');
        sel('.body_style').classList.remove('ColorBox_1', 'ColorBox_3', 'ColorBox_2', 'ColorBox_5', 'ColorBox_6', 'ColorBox_7', 'ColorBox_8', 'ColorBox_9');
    });
    colorBox('.ColorBox_5').addEventListener('click', () => {
        sel('.body_style').classList.add('ColorBox_5');
        sel('.body_style').classList.remove('ColorBox_1', 'ColorBox_3', 'ColorBox_4', 'ColorBox_2', 'ColorBox_6', 'ColorBox_7', 'ColorBox_8', 'ColorBox_9');
    });
    colorBox('.ColorBox_6').addEventListener('click', () => {
        sel('.body_style').classList.add('ColorBox_6');
        sel('.body_style').classList.remove('ColorBox_1', 'ColorBox_3', 'ColorBox_4', 'ColorBox_5', 'ColorBox_2', 'ColorBox_7', 'ColorBox_8', 'ColorBox_9');
    });
    colorBox('.ColorBox_7').addEventListener('click', () => {
        sel('.body_style').classList.add('ColorBox_7');
        sel('.body_style').classList.remove('ColorBox_1', 'ColorBox_3', 'ColorBox_4', 'ColorBox_5', 'ColorBox_6', 'ColorBox_2', 'ColorBox_8', 'ColorBox_9');
    });
    colorBox('.ColorBox_8').addEventListener('click', () => {
        sel('.body_style').classList.add('ColorBox_8');
        sel('.body_style').classList.remove('ColorBox_1', 'ColorBox_3', 'ColorBox_4', 'ColorBox_5', 'ColorBox_6', 'ColorBox_7', 'ColorBox_2', 'ColorBox_9');
    });
    colorBox('.ColorBox_9').addEventListener('click', () => {
        sel('.body_style').classList.add('ColorBox_9');
        sel('.body_style').classList.remove('ColorBox_1', 'ColorBox_3', 'ColorBox_4', 'ColorBox_5', 'ColorBox_6', 'ColorBox_7', 'ColorBox_8', 'ColorBox_2');
    });
})

sel('.bg_images').addEventListener('click', () => {
    sel('.body_style').classList.remove('ColorBox_1', 'ColorBox_2', 'ColorBox_3', 'ColorBox_4', 'ColorBox_5', 'ColorBox_6', 'ColorBox_7', 'ColorBox_8', 'ColorBox_9');

    sel('.ImageBox').classList.add('display-flex');
    sel('.ColorBox').classList.remove('display-flex');

    const colorBox = color_box => document.querySelector(color_box);
    colorBox('.ImageBox_1').addEventListener('click', () => {
        sel('.body_style').classList.add('ImageBox_1');
        sel('.body_style').classList.remove('ImageBox_2', 'ImageBox_3', 'ImageBox_4', 'ImageBox_5', 'ImageBox_6', 'ImageBox_7', 'ImageBox_8', 'ImageBox_9');
    });
    colorBox('.ImageBox_2').addEventListener('click', () => {
        sel('.body_style').classList.add('ImageBox_2');
        sel('.body_style').classList.remove('ImageBox_1', 'ImageBox_3', 'ImageBox_4', 'ImageBox_5', 'ImageBox_6', 'ImageBox_7', 'ImageBox_8', 'ImageBox_9');
    });

    colorBox('.ImageBox_3').addEventListener('click', () => {
        sel('.body_style').classList.add('ImageBox_3');
        sel('.body_style').classList.remove('ImageBox_1', 'ImageBox_2', 'ImageBox_4', 'ImageBox_5', 'ImageBox_6', 'ImageBox_7', 'ImageBox_8', 'ImageBox_9');
    });
    colorBox('.ImageBox_4').addEventListener('click', () => {
        sel('.body_style').classList.add('ImageBox_4');
        sel('.body_style').classList.remove('ImageBox_2', 'ImageBox_3', 'ImageBox_1', 'ImageBox_5', 'ImageBox_6', 'ImageBox_7', 'ImageBox_8', 'ImageBox_9');
    });
    colorBox('.ImageBox_5').addEventListener('click', () => {
        sel('.body_style').classList.add('ImageBox_5');
        sel('.body_style').classList.remove('ImageBox_1', 'ImageBox_3', 'ImageBox_4', 'ImageBox_2', 'ImageBox_6', 'ImageBox_7', 'ImageBox_8', 'ImageBox_9');
    });

    colorBox('.ImageBox_6').addEventListener('click', () => {
        sel('.body_style').classList.add('ImageBox_6');
        sel('.body_style').classList.remove('ImageBox_1', 'ImageBox_3', 'ImageBox_4', 'ImageBox_5', 'ImageBox_2', 'ImageBox_7', 'ImageBox_8', 'ImageBox_9');
    });
    colorBox('.ImageBox_7').addEventListener('click', () => {
        sel('.body_style').classList.add('ImageBox_7');
        sel('.body_style').classList.remove('ImageBox_2', 'ImageBox_3', 'ImageBox_4', 'ImageBox_5', 'ImageBox_6', 'ImageBox_1', 'ImageBox_8', 'ImageBox_9');
    });
    colorBox('.ImageBox_8').addEventListener('click', () => {
        sel('.body_style').classList.add('ImageBox_8');
        sel('.body_style').classList.remove('ImageBox_1', 'ImageBox_3', 'ImageBox_4', 'ImageBox_5', 'ImageBox_6', 'ImageBox_7', 'ImageBox_2', 'ImageBox_9');
    });

    colorBox('.ImageBox_9').addEventListener('click', () => {
        sel('.body_style').classList.add('ImageBox_9');
        sel('.body_style').classList.remove('ImageBox_1', 'ImageBox_3', 'ImageBox_4', 'ImageBox_5', 'ImageBox_6', 'ImageBox_7', 'ImageBox_8', 'ImageBox_2');
    });
})