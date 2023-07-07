((Camaleon) => {
  menuFooter = function(blocks, breakpoint) {
    let PropertyRules = {
      MarginLeft: 'marginLeft',
      MarginTop: 'marginTop',
      MarginRight: 'marginRight',
      MarginBottom: 'marginBottom',
      TextAlign: 'textAlign',
      AlignSelf: 'alignSelf',
      JustifySelf: 'justifySelf'
    };

    let childsPropertyRules = {
      '__menu-title': {TitleFontSize: 'fontSize'},
      '__nav': {
        PaddingLeft: 'paddingLeft',
        PaddingTop: 'paddingTop',
        PaddingRight: 'paddingRight',
        PaddingBottom: 'paddingBottom',
      },
      '__link': {
        ItemFontSize: 'fontSize',
        ItemPaddingLeft: 'paddingLeft',
        ItemPaddingTop: 'paddingTop',
        ItemPaddingRight: 'paddingRight',
        ItemPaddingBottom: 'paddingBottom',
      }
    }

    let properties = Object.keys(PropertyRules);
    let childPrefix = 'menuFooter';
    let i = 0
    for (i; i < blocks.length; i++) {
      properties.forEach((property) => {
        Camaleon.applyPropertyToRule(blocks[i], breakpoint, property, PropertyRules[property]);
        })
     
      childs = Object.keys(childsPropertyRules);
      childs.forEach((child) => {
        Camaleon.applyChildsPropertyToRule(blocks[i], childPrefix, breakpoint, child, childsPropertyRules[child]);
      });

      Camaleon.applyMaxWidth(blocks[i], breakpoint);
    }
  }
  
  Camaleon.blocksRegister('menuFooter', menuFooter)

})(Camaleon)