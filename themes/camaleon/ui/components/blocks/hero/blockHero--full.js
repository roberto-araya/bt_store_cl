(function() {
  blocks = document.getElementsByClassName('blockHero--full');
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.top = 0;
        entry.target.style.opacity = 1;
      }
    });
  },{
    threshold: 0.85
  })

  Array.from(blocks).forEach((blockHero) => {
    title = document.querySelector('#' + blockHero.id + ' .blockHero--full__content-title')
    if (typeof(title) != 'undefined' && title != null)
    {
      observer.observe(title)
    }

    caption = document.querySelector('#' + blockHero.id + ' .blockHero--full__caption')
    if (typeof(caption) != 'undefined' && caption != null)
    {
      observer.observe(caption)
    }

    text = document.querySelector('#' + blockHero.id + ' .blockHero--full__text')
    if (typeof(text) != 'undefined' && text != null)
    {
      observer.observe(text)
    }

    buttons = document.querySelector('#' + blockHero.id + ' .blockHero--full__buttons')
    if (typeof(buttons) != 'undefined' && buttons != null)
    {
      observer.observe(buttons)
    }
  });
})()