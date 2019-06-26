// Mobile Menu Effect

const flipMenu = function () {
    const arrowMenu = document.querySelector('.mobile-nav');
    const arrowImage = document.querySelector('.arrow-image');

    arrowImage.addEventListener('click', function(e){
        e.preventDefault();
        arrowMenu.classList.toggle('open');
        arrowImage.classList.toggle('open');
    });
}
flipMenu();


