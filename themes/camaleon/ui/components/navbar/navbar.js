(function () {
  let menuBtn = document.getElementsByClassName("mainMenuButton")[0];
  let panel = document.getElementsByClassName("mainMenuPanel")[0];
  let desktop = window.matchMedia("(min-width: 1280px)");

  menuBtn.addEventListener("click", () => {
    panel.classList.toggle("open");
  })

  function Menu() {
    if (desktop.matches) {
      let fragment = document.createDocumentFragment();
      var element = document.getElementById("block-camaleon-main-menu");
      if (typeof(element) != 'undefined' && element != NULL)
      {
        fragment.appendChild(element);;
        document.getElementsByClassName("navbar")[0].appendChild(fragment);
      }
      if (panel.classList.contains("open")){
        panel.classList.toggle("open");
      }
    }
    else {
      let fragment = document.createDocumentFragment();
      var element = document.getElementById("block-camaleon-main-menu");
      if (typeof(element) != 'undefined' && element != NULL)
      {
        fragment.appendChild(element);;
        panel.appendChild(fragment);
      }
    }
  }

  Menu();
  desktop.addEventListener("change", Menu)
})();
