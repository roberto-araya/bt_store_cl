((Camaleon) => {
  blockHero = function(blocks, breakpoint) {
    let customProperties = {
      AlignItems: 'alignItems',
      JustifyContent: 'justifyContent',
      TitleFontSize: 'titleFontSize',
      CaptionFontSize: 'captionFontSize',
      TextFontSize: 'textFontSize',
    };

    let i = 0
    for (i; i < blocks.length; i++) {
      Camaleon.applyProperties(blocks[i], breakpoint, customProperties)
    }
  }
  
  Camaleon.blocksRegister('blockHero', blockHero)

})(Camaleon)