((Camaleon) => {
  menuMain = function (blocks, breakpoint) {
    let customProperties = {
      TitleFontSize: 'titleFontSize',
      ItemFontSize: 'itemFontSize',
      ItemPaddingLeft: 'itemPaddingLeft',
      ItemPaddingTop: 'itemPaddingTop',
      ItemPaddingRight: 'itemPaddingRight',
      ItemPaddingBottom: 'itemPaddingBottom',
    }

    let i = 0;
    for (i; i < blocks.length; i++) {
      Camaleon.applyProperties(blocks[i], breakpoint, customProperties)
    }
  }

  Camaleon.blocksRegister('menuMain', menuMain)

})(Camaleon)
