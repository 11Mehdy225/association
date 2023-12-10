//leffet de background qui change au defilement de la page
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var logo = document.querySelector('nav img');
    var scrollPosition = window.scrollY;
    console.log(nav);
    console.log(scrollPosition);
  
  
    if (scrollPosition > 0) {
      nav.style.backgroundColor = 'rgb(83, 5, 83)';
      nav.style.transition = 'background-color 0.5s ease';
      logo.style.width = '100px';
      logo.style.height = '100px';
      logo.style.transition = 'width 0.5s ease';
    } else {
      nav.style.backgroundColor = 'transparent';
      nav.style.transition = 'background-color 0.5s ease';
      logo.style.width = '300px';
      logo.style.height = '250px';
      logo.style.transition = 'width 0.5s ease';
    }
  });
  