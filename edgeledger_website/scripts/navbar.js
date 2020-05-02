const navbar = document.getElementById('navbar');
window.onscroll = ()=> {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top')
  } else {
    navbar.classList.add('top')
  }
};