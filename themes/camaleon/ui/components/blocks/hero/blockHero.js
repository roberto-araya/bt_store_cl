((Camaleon) => {
  blockHero = function(blocks, breakpoint) {
    let PropertyRules = {
      MarginLeft: 'marginLeft',
      MarginTop: 'marginTop',
      MarginRight: 'marginRight',
      MarginBottom: 'marginBottom',
      PaddingLeft: 'paddingLeft',
      PaddingTop: 'paddingTop',
      PaddingRight: 'paddingRight',
      PaddingBottom: 'paddingBottom',
      TextAlign: 'textAlign',
      AlignItems: 'justifySelf',
      JustifyContent: 'justifyContent'
    };
  
    let childsPropertyRules = {
      '__content-title': {TitleFontSize: 'fontSize'},
      '__caption': {CaptionFontSize: 'fontSize'},
      '__text': {TextFontSize: 'fontSize'}
    }

    let properties = Object.keys(PropertyRules);
    let childPrefix = 'blockHero';
    let i = 0
    for (i; i < blocks.length; i++) {
      properties.forEach((property) => {
      Camaleon.applyPropertyToRule(blocks[i], breakpoint, property, PropertyRules[property]);
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
  
  Camaleon.blocksRegister('blockHero', blockHero)

})(Camaleon)