((Camaleon) => {
  menuNormal = function(blocks, breakpoint) {
    let customProperties = {
      TitleFontSize: 'titleFontSize',
      ItemFontSize: 'ItemFontSize',
      ItemPaddingLeft: 'itemPaddingLeft',
      ItemPaddingTop: 'itemPaddingTop',
      ItemPaddingRight: 'itemPaddingRight',
      ItemPaddingBottom: 'itemPaddingBottom',
    }

    let i = 0;
    for (i; i < blocks.lenght; i++) {
      Camaleon.applyProperties(blocks[i], breakpoint, customProperties)
    }
  }
  
  Camaleon.blocksRegister('menuNormal', menuNormal)

})(Camaleon)