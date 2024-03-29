((Camaleon) => {
  blockSectionTitle = function(blocks, breakpoint) {
    let customProperties = {
      TitleFontSize: 'titleFontSize',
      CaptionFontSize: 'captionFontSize',
    }

    let i = 0;
    for (i; i < blocks.length; i++) {
      Camaleon.applyProperties(blocks[i], breakpoint, customProperties)
    }
  }

  Camaleon.blocksRegister('blockSectionTitle', blockSectionTitle)

})(Camaleon)