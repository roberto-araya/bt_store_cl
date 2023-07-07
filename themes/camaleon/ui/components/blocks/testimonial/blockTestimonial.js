((Camaleon) => {
  blockTestimonial = function(blocks, breakpoint) {
    let childsPropertyRules = {
      '__content-title': {TitleFontSize: 'fontSize'},
      '__text': {TextFontSize: 'fontSize'},
      '__name': {TextFontSize: 'fontSize'},
      '__organization': {TextFontSize: 'fontSize'},
    }

    let defaultProperties = Camaleon.defaultProperties();
    let properties = Object.keys(defaultProperties);
    let childPrefix = 'blockTestimonial';
    let i = 0
    for (i; i < blocks.length; i++) {
      properties.forEach((property) => {
        Camaleon.applyPropertyToRule(blocks[i], breakpoint, property, defaultProperties[property]);
      })
     
      childs = Object.keys(childsPropertyRules);
      childs.forEach((child) => {
        Camaleon.applyChildsPropertyToRule(blocks[i], childPrefix, breakpoint, child, childsPropertyRules[child]);
      });

      Camaleon.applyWidth(blocks[i], breakpoint);
      Camaleon.applyMaxWidth(blocks[i], breakpoint);
      Camaleon.justifyButtons(blocks[i], breakpoint, childPrefix);
    }
  }
  
  Camaleon.blocksRegister('blockTestimonial', blockTestimonial)

})(Camaleon)