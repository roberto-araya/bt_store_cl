(function() {
  let header = document.getElementsByTagName('header')[0];
  let branding = document.getElementsByClassName('siteBranding')[0];

  window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    if (scrollPosition >= 5) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  });

})();