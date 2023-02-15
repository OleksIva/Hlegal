(function(){
    const headerBurgerBtn = document.querySelector('.header__burger');
    const headerNavigtion = document.querySelector('.header__nav');
    const headerButtonCloseNav = document.querySelector('.header__nav-close');


    headerBurgerBtn.addEventListener('click', e =>  {
        headerNavigtion.classList.add('active');
    });

    headerButtonCloseNav.addEventListener('click', e =>  {
        headerNavigtion.classList.remove('active');
    });

})(); 

const swiper = new Swiper('.swiper', {
    // Optional parameters
    spaceBetween: 20,
    // If we need pagination
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
});