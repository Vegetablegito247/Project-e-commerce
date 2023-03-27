let side = document.getElementById('list');
let cartMenu = document.getElementById('crr');
let menu = document.querySelector('.menu');
let cart = document.querySelector('.cart');
let pop = document.querySelector('.pop-modal');
let closeList = document.querySelector('.close img');

let minus = document.querySelector('.p-1');
let num = document.querySelector('.p-2');
let add = document.querySelector('.p-3');
let number = 0;
num.innerHTML = number;

menu.addEventListener('click', () => {
    side.style.display = 'block';

    closeList.addEventListener('click', () => {
        side.style.display = 'none';
    })
});

cart.addEventListener('click', () => {
    cartMenu.style.display = 'block';
    pop.style.display = 'block';
    pop.addEventListener('click', () => {
        cartMenu.style.display = 'none';
        pop.style.display = 'none';
    });
});
add.addEventListener('click', () => {
    if (number < 20) {
        number++;
        num.innerText = number;
    };
});
minus.addEventListener('click', () => {
    if (number > 1) {
        number--;
        num.innerText = number;
    }
});

let slides = document.querySelectorAll('#slides');
let btnPrev = document.querySelector('.prev');
let btnNext = document.querySelector('.next');

let x = window.matchMedia('(max-width: 578px)')

let curSlider = 0;
let maxSlide = slides.length - 1;


if (x.matches) {
    
slides.forEach((value, index, array) => {
    value.style.transform = `translateX(${index * 100}%)`;
});

btnNext.addEventListener('click', () => {
    if (curSlider === maxSlide) {
        curSlider = 0;
    }

    else {
        curSlider++;
    };

    slides.forEach((value, index, array) => {
        value.style.transform = `translateX(${100 * (index - curSlider)}%)`;
    });
});

btnPrev.addEventListener('click', () => {
    if (curSlider === 0) {
        curSlider = maxSlide;
    }

    else {
        curSlider--;
    };

    slides.forEach((value, index, array) => {
        value.style.transform = `translateX(${100 * (index - curSlider)}%)`;
    });
});
}