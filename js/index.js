"use strict";

// Mobile Menu Effect
var flipMenu = function flipMenu() {
  var arrowMenu = document.querySelector('.mobile-nav');
  var arrowImage = document.querySelector('.arrow');
  arrowImage.addEventListener('click', function (e) {
    e.preventDefault();
    arrowMenu.classList.toggle('open');
    arrowImage.classList.toggle('open');
  });
};

flipMenu();