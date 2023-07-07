((Camaleon) => {
  blockTitleImage = function(blocks, breakpoint) {
    let childsPropertyRules = {
      '__content-title': {TitleFontSize: 'fontSize'},
      '__caption': {CaptionFontSize: 'fontSize'},
    }

    let defaultProperties = Camaleon.defaultProperties();
    let properties = Object.keys(defaultProperties);
    let childPrefix = 'blockTitleImage';
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
  
  Camaleon.blocksRegister('blockTitleImage', blockTitleImage)

})(Camaleon)