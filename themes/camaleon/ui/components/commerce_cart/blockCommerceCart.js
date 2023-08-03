((Camaleon) => {
  blockCommerceCart = function(blocks, breakpoint) {
    let customProperties = {
      TextFontSize: 'textFontSize',
    }

    let i = 0
    for (i; i < blocks.length; i++) {
      Camaleon.applyProperties(blocks[i], breakpoint, customProperties)
    }
  }
  
  Camaleon.blocksRegister('commerceCart', blockCommerceCart)

})(Camaleon)