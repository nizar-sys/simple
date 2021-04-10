/*
  
  nama : candra dwi cahyo
  umur : 16 tahun
  email : candradwicahyo18@gmail.com
  
*/

// plugin animate on scroll
AOS.init({
  duration: 1500
});

const navbarContainer = document.querySelector('.nav-container');
const scrollingBtn = document.querySelector('.scrolling-container')
window.addEventListener('scroll', () => {
  navbarContainer.classList.toggle('active', window.scrollY > 100);
  scrollingBtn.classList.toggle('active', window.scrollY > 200)
});

/* navbar toggle event */
const navListContainer = navbarContainer.querySelector('.nav-list-container');
const navButton = navbarContainer.querySelector('.nav-toggle');
navButton.addEventListener('click', function() {
  this.classList.toggle('active');
  navListContainer.classList.toggle('active');
});
