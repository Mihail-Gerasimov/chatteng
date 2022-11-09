const burgerBtn = document.querySelector('.nav__main--burger'),
    mobileMenu = document.querySelector('.nav__menu'),
    listItem = document.querySelector('.list-element');

burgerBtn.onclick = function () {
    mobileMenu.classList.toggle('nav__menu--active');
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos >= currentScrollPos) {
        mobileMenu.classList.remove('nav__menu--active');
    }
    prevScrollpos = currentScrollPos;
};

const swiper = new Swiper('.reviews__swiper--wrapper', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.reviews__swiper-next',
        prevEl: '.reviews__swiper-prev',
    },

    spaceBetween: 20,
});

const questions = document.querySelectorAll('.questions__question-header');

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.nextSibling.nextSibling.classList.toggle('questions__question-content--active');
        question.classList.toggle('questions__question-header--active');
    });
});
