((Camaleon) => {
  blockImage = function (blocks, breakpoint) {
    let i = 0
    for (i; i < blocks.length; i++) {
      Camaleon.applyProperties(blocks[i], breakpoint)
    }
  }

  Camaleon.blocksRegister('blockImage', blockImage)

})(Camaleon)
