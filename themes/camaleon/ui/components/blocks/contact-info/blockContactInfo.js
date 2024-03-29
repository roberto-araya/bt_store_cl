((Camaleon) => {
  blockContactInfo = function(blocks, breakpoint) {
    let customProperties = {
      TextFontSize: 'textFontSize',
    }

    let i = 0
    for (i; i < blocks.length; i++) {
      Camaleon.applyProperties(blocks[i], breakpoint, customProperties)
    }
  }
  
  Camaleon.blocksRegister('blockContactInfo', blockContactInfo)

})(Camaleon)