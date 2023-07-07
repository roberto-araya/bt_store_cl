(()=> {
  // initiate WOW library.
  new WOW().init();

  // Add Event.
  let addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
  }

  function addStyles() {
    // Apply styles based on element css variables and breakpoints.
    const breakpoints = {
      sm: '(min-width: 576px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 992px)',
      xl: '(min-width: 1200px)',
      xxl: '(min-width: 1400px)'
    }

    const bkp_prefixs = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs']

    const breakpoints_keys = Object.keys(breakpoints)
    breakpoints_keys.forEach((breakpoint) => {
      let mediaQuery = window.matchMedia(breakpoints[breakpoint])
      if (mediaQuery.matches) {
        // Get all blocks.
        blocks = document.getElementsByClassName('block')   
        let i = 0
        for (i; i < blocks.length; i++) {
          let id = blocks[i].id.split('--')[0]
          for (prefix_index = bkp_prefixs.indexOf(breakpoint), j = 0; prefix_index < 5; prefix_index++, j++) {
            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'MaxWidth')) {
              blocks[i].style.maxWidth = 'var(--' + breakpoint + 'MaxWidth)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'MaxWidth')) {
              blocks[i].style.maxWidth = 'var(--' + bkp_prefixs[4 - j] + 'MaxWidth)'
            } else if (j == 0) {
              blocks[i].style.maxWidth = 'var(--xsMaxWidth)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'MarginLeft')) {
              blocks[i].style.marginLeft = 'var(--' + breakpoint + 'MarginLeft)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'MarginLeft')) {
              blocks[i].style.marginLeft = 'var(--' + bkp_prefixs[4 - j] + 'MarginLeft)'
            } else if (j == 0) {
              blocks[i].style.marginLeft = 'var(--xsMarginLeft)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'MarginTop')) {
              blocks[i].style.marginTop = 'var(--' + breakpoint + 'MarginTop)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'MarginTop')) {
              blocks[i].style.marginTop = 'var(--' + bkp_prefixs[4 - j] + 'MarginTop)'
            } else if (j == 0) {
              blocks[i].style.marginTop = 'var(--xsMarginTop)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'MarginRight')) {
              blocks[i].style.marginRight = 'var(--' + breakpoint + 'MarginRight)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'MarginRight')) {
              blocks[i].style.marginRight = 'var(--' + bkp_prefixs[4 - j] + 'MarginRight)'
            } else if (j == 0) {
              blocks[i].style.marginRight = 'var(--xsMarginRight)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'MarginBottom')) {
              blocks[i].style.marginBottom = 'var(--' + breakpoint + 'MarginBottom)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'MarginBottom')) {
              blocks[i].style.marginBottom = 'var(--' + bkp_prefixs[4 - j] + 'MarginBottom)'
            } else if (j == 0) {
              blocks[i].style.marginBottom = 'var(--xsMarginBottom)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'PaddingLeft')) {
              blocks[i].style.paddingLeft = 'var(--' + breakpoint + 'PaddingLeft)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'PaddingLeft')) {
              blocks[i].style.paddingLeft = 'var(--' + bkp_prefixs[4 - j] + 'PaddingLeft)'
            } else if (j == 0) {
              blocks[i].style.paddingLeft = 'var(--xsPaddingLeft)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'PaddingTop')) {
              blocks[i].style.paddingTop = 'var(--' + breakpoint + 'PaddingTop)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'PaddingTop')) {
              blocks[i].style.paddingTop = 'var(--' + bkp_prefixs[4 - j] + 'PaddingTop)'
            } else if (j == 0) {
              blocks[i].style.paddingTop = 'var(--xsPaddingTop)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'PaddingRight')) {
              blocks[i].style.paddingRight = 'var(--' + breakpoint + 'PaddingRight)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'PaddingRight')) {
              blocks[i].style.paddingRight = 'var(--' + bkp_prefixs[4 - j] + 'PaddingRight)'
            } else if (j == 0) {
              blocks[i].style.paddingRight = 'var(--xsPaddingRight)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'PaddingBottom')) {
              blocks[i].style.paddingBottom = 'var(--' + breakpoint + 'PaddingBottom)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'PaddingBottom')) {
              blocks[i].style.paddingBottom = 'var(--' + bkp_prefixs[4 - j] + 'PaddingBottom)'
            } else if (j == 0) {
              blocks[i].style.paddingBottom = 'var(--xsPaddingBottom)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'TextAlign')) {
              blocks[i].style.textAlign = 'var(--' + breakpoint + 'TextAlign)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'TextAlign')) {
              blocks[i].style.textAlign = 'var(--' + bkp_prefixs[4 - j] + 'TextAlign)'
            } else if (j == 0) {
              blocks[i].style.textAlign = 'var(--xsTextAlign)'
            }

            if (id != 'blockHero') {
              if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'AlignSelf')) {
                blocks[i].style.alignSelf = 'var(--' + breakpoint + 'AlignSelf)'
              } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'AlignSelf')) {
                blocks[i].style.alignSelf = 'var(--' + bkp_prefixs[4 - j] + 'AlignSelf)'
              } else if (j == 0) {
                blocks[i].style.alignSelf = 'var(--xsAlignSelf)'
              }

              if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'JustifySelf')) {
                blocks[i].style.justifySelf = 'var(--' + breakpoint + 'JustifySelf)'
              } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'JustifySelf')) {
                blocks[i].style.justifySelf = 'var(--' + bkp_prefixs[4 - j] + 'JustifySelf)'
              } else if (j == 0) {
                blocks[i].style.justifySelf = 'var(--xsJustifySelf)'
              }
            }

            if (id == 'blockHero') {
              if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'AlignItems')) {
                blocks[i].style.alignItems = 'var(--' + breakpoint + 'AlignItems)'
              } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'AlignItems')) {
                blocks[i].style.alignItems = 'var(--' + bkp_prefixs[4 - j] + 'AlignItems)'
              } else if (j == 0) {
                blocks[i].style.alignItems = 'var(--xsAlignItems)'
              }

              if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'JustifyContent')) {
                blocks[i].style.JustifyContent = 'var(--' + breakpoint + 'JustifyContent)'
              } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'JustifyContent')) {
                blocks[i].style.JustifyContent = 'var(--' + bkp_prefixs[4 - j] + 'JustifyContent)'
              } else if (j == 0) {
                blocks[i].style.JustifyContent = 'var(--xsJustifyContent)'
              }
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'TitleFontSize') && (title = blocks[i].querySelector('.' + id + '__content-title'))) {
              title.style.fontSize = 'var(--' + breakpoint + 'TitleFontSize)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'TitleFontSize') && (title = blocks[i].querySelector('.' + id + '__content-title'))) {
              title.style.fontSize = 'var(--' + bkp_prefixs[4 - j] + 'TitleFontSize)'
            } else if (j == 0  && (title = blocks[i].querySelector('.' + id + '__content-title'))) {
              title.style.fontSize = 'var(--xsTitleFontSize)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'CaptionFontSize') && (caption = blocks[i].querySelector('.' + id + '__caption'))) {
              caption.style.fontSize = 'var(--' + breakpoint + 'CaptionFontSize)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'CaptionFontSize') && (caption = blocks[i].querySelector('.' + id + '__caption'))) {
              caption.style.fontSize = 'var(--' + bkp_prefixs[4 - j] + 'CaptionFontSize)'
            } else if (j == 0 && (caption = blocks[i].querySelector('.' + id + '__caption'))) {
              caption.style.fontSize = 'var(--xsCaptionFontSize)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'TextFontSize') && (text = blocks[i].querySelector('.' + id + '__text'))) {
              text.style.fontSize = 'var(--' + breakpoint + 'TextFontSize)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'TextFontSize') && (text = blocks[i].querySelector('.' + id + '__text'))) {
              text.style.fontSize = 'var(--' + bkp_prefixs[4 - j] + 'TextFontSize)'
            } else if (j == 0 && (text = blocks[i].querySelector('.' + id + '__text'))) {
              text.style.fontSize = 'var(--xsTextFontSize)'
            }
          }
        }
      }
    })
  }
  Drupal.behaviors.blockStyles = {  
    attach: function (context, settings) {    
      addStyles()
    }
  };
  
  addEvent(window, "resize", addStyles)
})(Drupal);