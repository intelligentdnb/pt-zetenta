let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // Hacia arriba
    document.querySelector('.header').classList.remove('hide');
  } else {
    // Hacia abajo
    document.querySelector('.header').classList.add('hide');
  }
  prevScrollPos = currentScrollPos;
};