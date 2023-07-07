((Camaleon) => {
  siteBranding = function(blocks, breakpoint) {
    let childsPropertyRules = {
      '__name': {NameFontSize: 'fontSize'},
      '__slogan': {SloganFontSize: 'fontSize'},
    }

    let defaultProperties = Camaleon.defaultProperties();
    let properties = Object.keys(defaultProperties);
    let childPrefix = 'siteBranding';
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
  
  Camaleon.blocksRegister('siteBranding', siteBranding)

})(Camaleon)