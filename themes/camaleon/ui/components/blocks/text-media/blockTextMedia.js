((Camaleon) => {
  blockTextMedia = function(blocks, breakpoint) {
    let customProperties = {
      TitleFontSize: 'titleFontSize',
      CaptionFontSize: 'captionFontSize',
      TextFontSize: 'textFontSize',
    }

    let i = 0
    for (i; i < blocks.length; i++) {
      Camaleon.applyProperties(blocks[i], breakpoint, customProperties)
    }
  }
  
  Camaleon.blocksRegister('blockTextMedia', blockTextMedia)

})(Camaleon)