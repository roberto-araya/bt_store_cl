((Drupal, ResponsiveLayout, Camaleon)=>{
  Drupal.behaviors.breakpointsButtons = {  
    attach: function (context, settings) {    
      let xs = document.getElementById('xs-breakpoint');
      let sm = document.getElementById('sm-breakpoint');
      let md = document.getElementById('md-breakpoint');
      let lg = document.getElementById('lg-breakpoint');
      let xl = document.getElementById('xl-breakpoint');
      let xxl = document.getElementById('xxl-breakpoint');
      let remove = document.getElementById('remove-breakpoint-preview');

      xs.addEventListener('click', (event) => {
        let container = document.getElementById('layout-builder');
        container.style.setProperty('width', '356px');
        container.style.setProperty('margin', '0 auto');
        container.setAttribute('media-query', '(max-width: 575px)');
        ResponsiveLayout.layoutsCallback();
        Camaleon.blocksCallback();
      })

      sm.addEventListener('click', (event) => {
        let container = document.getElementById('layout-builder');
        container.style.setProperty('width', '612px');
        container.style.setProperty('margin', '0 auto');
        container.setAttribute('media-query', '(min-width: 576px)');
        ResponsiveLayout.layoutsCallback();
        Camaleon.blocksCallback();
      })

      md.addEventListener('click', (event) => {
        let container = document.getElementById('layout-builder');
        container.style.setProperty('width', '804px');
        container.style.setProperty('margin', '0 auto');
        container.setAttribute('media-query', '(min-width: 768px)');
        ResponsiveLayout.layoutsCallback();
        Camaleon.blocksCallback();
      })

      lg.addEventListener('click', (event) => {
        let container = document.getElementById('layout-builder');
        container.style.setProperty('width', '1028px');
        container.style.setProperty('margin', '0 auto');
        container.setAttribute('media-query', '(min-width: 992px)');
        ResponsiveLayout.layoutsCallback();
        Camaleon.blocksCallback();
      })

      xl.addEventListener('click', (event) => {
        let container = document.getElementById('layout-builder');
        container.style.setProperty('width', '1236px');
        container.style.setProperty('margin', '0 auto');
        container.setAttribute('media-query', '(min-width: 1200px)');
        ResponsiveLayout.layoutsCallback();
        Camaleon.blocksCallback();
      })

      xxl.addEventListener('click', (event) => {
        let container = document.getElementById('layout-builder');
        container.style.setProperty('width', '1436px');
        container.style.setProperty('margin', '0 auto');
        container.setAttribute('media-query', '(min-width: 1400px)');
        ResponsiveLayout.layoutsCallback();
        Camaleon.blocksCallback();
      })

      remove.addEventListener('click', (event) => {
        let container = document.getElementById('layout-builder');
        container.style.removeProperty('width');
        container.style.removeProperty('margin');
        container.removeAttribute('media-query');
        ResponsiveLayout.layoutsCallback();
        Camaleon.blocksCallback();
      })

    },
  };
})(Drupal, ResponsiveLayout, Camaleon)

