((Camaleon) => {
  blockImagesSlide = function(blocks, breakpoint) {
    let defaultProperties = Camaleon.defaultProperties();
    let properties = Object.keys(defaultProperties);
    let childPrefix = 'blockImagesSlide';
    let i = 0
    for (i; i < blocks.length; i++) {
      properties.forEach((property) => {
        Camaleon.applyPropertyToRule(blocks[i], breakpoint, property, defaultProperties[property]);
      })   
      Camaleon.applyWidth(blocks[i], breakpoint);
      Camaleon.applyMaxWidth(blocks[i], breakpoint);
    }
  }
  
  Camaleon.blocksRegister('blockImagesSlide', blockImagesSlide)

})(Camaleon)