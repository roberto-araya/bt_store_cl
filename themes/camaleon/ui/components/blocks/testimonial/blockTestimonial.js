((Camaleon) => {
  blockTestimonial = function (blocks, breakpoint) {
    let customProperties = {
      TitleFontSize: 'titleFontSize',
      TextFontSize: 'textFontSize',
    }

    let i = 0;
    for (i; i < blocks.length; i++) {
      Camaleon.applyProperties(blocks[i], breakpoint, customProperties)
    }
  }

  Camaleon.blocksRegister('blockTestimonial', blockTestimonial)

})(Camaleon)
