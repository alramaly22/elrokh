window.addEventListener('scroll', function() {
    var navbar = document.getElementById('header');

  
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.style.backgroundColor = 'var(--body-color)'; 


  
    } else {
      navbar.style.backgroundColor = 'transparent';   
    }
  });