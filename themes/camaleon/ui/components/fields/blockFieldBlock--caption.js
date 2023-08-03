((Camaleon) => {
  blockFieldCaption = function(blocks, breakpoint) {
    let customProperties = {
      CaptionFontSize: 'captionFontSize',
    }

    let i = 0
    for (i; i < blocks.length; i++) {
      Camaleon.applyProperties(blocks[i], breakpoint, customProperties)
    }
  }
  
  Camaleon.blocksRegister('blockFieldBlock--caption', blockFieldCaption)

})(Camaleon)