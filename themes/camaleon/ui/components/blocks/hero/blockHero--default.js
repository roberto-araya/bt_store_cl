(() => {
  // initiate WOW library.
  new WOW().init();

  // Add Event.
  let addEvent = function (object, type, callback) {
    if (object == NULL || typeof(object) == 'undefined') { return;
    }
    if (object.addEventListener) {
        object.addEventListener(type, callback, FALSE);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on" + type] = callback;
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
        for (i; i < blocks.length; i = i + 1) {
          let id = blocks[i].id.split('--')[0]
          for (prefix_index = bkp_prefixs.indexOf(breakpoint), j = 0; prefix_index < 5; prefix_index++, j++) {
            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'PaddingLeft')) {
              blocks[i].style.paddingLeft = 'var(--' + breakpoint + 'PaddingLeft)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'PaddingLeft')) {
              blocks[i].style.paddingLeft = 'var(--' + bkp_prefixs[4 - j] + 'PaddingLeft)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'PaddingTop')) {
              blocks[i].style.paddingTop = 'var(--' + breakpoint + 'PaddingTop)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'PaddingTop')) {
              blocks[i].style.paddingTop = 'var(--' + bkp_prefixs[4 - j] + 'PaddingTop)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'PaddingRight')) {
              blocks[i].style.paddingRight = 'var(--' + breakpoint + 'PaddingRight)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'PaddingRight')) {
              blocks[i].style.paddingRight = 'var(--' + bkp_prefixs[4 - j] + 'PaddingRight)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'PaddingBottom')) {
              blocks[i].style.paddingBottom = 'var(--' + breakpoint + 'PaddingBottom)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'PaddingBottom')) {
              blocks[i].style.paddingBottom = 'var(--' + bkp_prefixs[4 - j] + 'PaddingBottom)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'TextAlign')) {
              blocks[i].style.textAlign = 'var(--' + breakpoint + 'TextAlign)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'TextAlign')) {
              blocks[i].style.textAlign = 'var(--' + bkp_prefixs[4 - j] + 'TextAlign)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'AlignSelf')) {
              blocks[i].style.alignSelf = 'var(--' + breakpoint + 'AlignSelf)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'AlignSelf')) {
              blocks[i].style.alignSelf = 'var(--' + bkp_prefixs[4 - j] + 'AlignSelf)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'TitleFontSize') && (title = blocks[i].querySelector('.' + id + '__content-title'))) {
              title.style.fontSize = 'var(--' + breakpoint + 'TitleFontSize)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'TitleFontSize') && (title = blocks[i].querySelector('.' + id + '__content-title'))) {
              title.style.fontSize = 'var(--' + bkp_prefixs[4 - j] + 'TitleFontSize)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'CaptionFontSize') && (caption = blocks[i].querySelector('.' + id + '__caption'))) {
              caption.style.fontSize = 'var(--' + breakpoint + 'CaptionFontSize)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'CaptionFontSize') && (caption = blocks[i].querySelector('.' + id + '__caption'))) {
              caption.style.fontSize = 'var(--' + bkp_prefixs[4 - j] + 'CaptionFontSize)'
            }

            if (getComputedStyle(blocks[i]).getPropertyValue('--' + breakpoint + 'TextFontSize') && (text = blocks[i].querySelector('.' + id + '__text'))) {
              text.style.fontSize = 'var(--' + breakpoint + 'TextFontSize)'
            } else if (getComputedStyle(blocks[i]).getPropertyValue('--' + bkp_prefixs[4 - j] + 'TextFontSize') && (text = blocks[i].querySelector('.' + id + '__text'))) {
              text.style.fontSize = 'var(--' + bkp_prefixs[4 - j] + 'TextFontSize)'
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
