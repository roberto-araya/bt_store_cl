((Camaleon) => {
  blockSocialProfiles = function(blocks, breakpoint) {
    let customProperties = {
      TextFontSize: 'textFontSize',
    }

    let i = 0;
    for (i; i < blocks.lenght; i++) {
      Camaleon.applyProperties(blocks[i], breakpoint, customProperties)
    }
  }
  
  Camaleon.blocksRegister('blockSocialProfiles', blockSocialProfiles)

})(Camaleon)