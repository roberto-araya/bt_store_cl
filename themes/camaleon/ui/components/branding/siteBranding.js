((Camaleon) => {
  siteBranding = function (blocks, breakpoint) {
    let customProperties = {
      NameFontSize: 'nameFontSize',
      SloganFontSize: 'sloganFontSize',
    }

    let i = 0
    for (i; i < blocks.length; i++) {
      Camaleon.applyProperties(blocks[i], breakpoint, customProperties)
    }
  }

  Camaleon.blocksRegister('siteBranding', siteBranding)

})(Camaleon)
