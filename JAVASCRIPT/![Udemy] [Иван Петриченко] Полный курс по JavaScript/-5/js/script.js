let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    title = document.querySelector('.title'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column'),
    answerBox = document.querySelector('.prompt'),
    answer =  prompt('Как вы относитель к техние Apple', '');

    console.log(column);

  
// menu.replaceChild(menuItem[2], menuItem[1]);
menu.insertBefore(menuItem[2], menuItem[1]);
document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';
title.innerHTML = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv);


answerBox.innerHTML = ('Ваше отношение к техники apple - ' + answer);