document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('.fa-bars').addEventListener('click', function() {

    if (this.classList.contains('fa-times')) {
      this.classList.remove('fa-times');
    } else {
      this.classList.add('fa-times');
    }
    
    var navbar = document.querySelector('.nav');
    if (navbar.classList.contains('nav-toggle')) {
      navbar.classList.remove('nav-toggle');
    } else {
      navbar.classList.add('nav-toggle');
    }
  });
});
