((Camaleon) => {
  blockFieldTitle = function (blocks, breakpoint) {
    let customProperties = {
      TitleFontSize: 'titleFontSize',
    }

    let i = 0
    for (i; i < blocks.length; i++) {
      Camaleon.applyProperties(blocks[i], breakpoint, customProperties)
    }
  }

  Camaleon.blocksRegister('blockFieldBlock--title', blockFieldTitle)

})(Camaleon)
