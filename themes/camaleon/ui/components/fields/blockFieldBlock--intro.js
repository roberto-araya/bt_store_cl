((Camaleon) => {
  blockFieldIntro = function (blocks, breakpoint) {
    let customProperties = {
      IntroFontSize: 'introFontSize',
    }

    let i = 0
    for (i; i < blocks.length; i++) {
      Camaleon.applyProperties(blocks[i], breakpoint, customProperties)
    }
  }

  Camaleon.blocksRegister('blockFieldBlock--intro', blockFieldIntro)

})(Camaleon)
