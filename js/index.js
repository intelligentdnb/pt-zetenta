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

const button = document.getElementById('aboutus-btn-change');
const isMobile = /Mobile/.test(navigator.userAgent);

if (isMobile) {
  button.innerHTML = 'Read more';
} else {
  button.innerHTML = 'More about us';
}