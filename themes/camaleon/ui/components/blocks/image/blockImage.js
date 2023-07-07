((Camaleon) => {
  blockImage = function(blocks, breakpoint) {
    let defaultProperties = Camaleon.defaultProperties();
    let properties = Object.keys(defaultProperties);
    let childPrefix = 'blockImage';
    let i = 0
    for (i; i < blocks.length; i++) {
      properties.forEach((property) => {
        Camaleon.applyPropertyToRule(blocks[i], breakpoint, property, defaultProperties[property]);
      })   
    
      if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'MaxWidth')  && (img = blocks[i].querySelector('img'))) {
        if (blocks[i].classList.contains('blockImage--circle') || 
        blocks[i].classList.contains('blockImage--big_circle') ||
        blocks[i].classList.contains('blockImage--small_circle')) {
          img.style.width = 'var(--' + breakpoint + 'MaxWidth)';
          img.style.height = 'var(--' + breakpoint + 'MaxWidth)';
        }
  
        if (blocks[i].classList.contains('blockImage--default')) {
          img.style.width = 'var(--' + breakpoint + 'MaxWidth)';
        }
      }

      if (blocks[i].classList.contains('blockImage--full')) {
        Camaleon.applyWidth(blocks[i], breakpoint);

        if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'MaxWidth') &&
        (boxed = blocks[i].querySelector('.boxed'))) {
          boxed.style.width = 'var(--' + breakpoint + 'MaxWidth)';
        }
      }
    }
  }
  
  Camaleon.blocksRegister('blockImage', blockImage)

})(Camaleon)