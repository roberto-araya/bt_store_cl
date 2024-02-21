var Camaleon = (function () {
  // Breakpoints
  const breakpoints = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1400px)'
  };

  const defaultProperties = {
    MarginLeft: 'marginLeft',
    MarginTop: 'marginTop',
    MarginRight: 'marginRight',
    MarginBottom: 'marginBottom',
    PaddingLeft: 'paddingLeft',
    PaddingTop: 'paddingTop',
    PaddingRight: 'paddingRight',
    PaddingBottom: 'paddingBottom',
    TextAlign: 'textAlign',
    AlignSelf: 'alignSelf',
    JustifySelf: 'justifySelf',
    MaxWidth: 'maxWidth',
  };

  const breakpointsKeys = Object.keys(breakpoints);
  var blocksRegisterCallbacks = [];
  var camaleon = {};

  camaleon.applyProperties = function (element, breakpoint, custom_properties = {}) {
    let all_properties = {...defaultProperties, ...custom_properties}
    let properties = Object.keys(all_properties);

    properties.forEach((property) => {
      if (getComputedStyle(element).getPropertyValue('--' + breakpoint + property)) {
        element.style.setProperty('--' + all_properties[property], 'var(--' + breakpoint + property + ')');
      }
    })
  }

  camaleon.blocksRegister = function (blockType, callback) {
    let blocks = document.getElementsByClassName(blockType);
    blocksRegisterCallbacks.push({blocks: blocks, callback: callback});
  };

  camaleon.addEvent = function (object, type, callback) {
    if (object == null || typeof(object) == 'undefined') { return;
    }
    if (object.addEventListener) {
        object.addEventListener(type, callback, FALSE);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on" + type] = callback;
    }
  }

  camaleon.blocksCallback = function () {
    breakpointsKeys.forEach((breakpoint) => {
      let mediaQuery = window.matchMedia(breakpoints[breakpoint])
      if (mediaQuery.matches) {
        blocksRegisterCallbacks.forEach((blockType) => {
          blockType.callback(blockType.blocks, breakpoint)
        })
      }
    })
  }
  return camaleon;
}());

window.Camaleon = Camaleon
Camaleon.addEvent(window, "load", Camaleon.blocksCallback)
Camaleon.addEvent(window, "resize", Camaleon.blocksCallback)
Drupal.behaviors.camaleonBlocksCallbacks = {
  attach: function (context, settings) {
    Camaleon.blocksCallback();
  }
};
