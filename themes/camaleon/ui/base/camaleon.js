var Camaleon = (function() {
  // Breakpoints
  const bp = {
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
    JustifySelf: 'justifySelf'
  };

  const bpKeys = Object.keys(bp);
  var blocksRegisterCallbacks = [];  
  var camaleon = {};
 
  camaleon.defaultProperties = function() {
    return defaultProperties;
  }

  camaleon.applyPropertyToRule = function(element, breakpoint, property, rule){
    if (getComputedStyle(element).getPropertyValue('--' + breakpoint + property)) {
      element.style[rule] = 'var(--' + breakpoint + property + ')'
    }
  }

  camaleon.applyChildsPropertyToRule = function(element, childPrefix, breakpoint, child, PropertyRule){
    let properties = Object.keys(PropertyRule);
    properties.forEach((property) => {
      if (getComputedStyle(element).getPropertyValue('--' + breakpoint + property) && (childElements = element.getElementsByClassName(childPrefix + child))) {
        Array.from(childElements).forEach((childElement) => {
          childElement.style[PropertyRule[property]] = 'var(--' + breakpoint + property + ')'
        })
      }
    })
  }

  camaleon.applyWidth = function(element, breakpoint){
    if (getComputedStyle(element).getPropertyValue('--' + breakpoint + 'MarginRight')) {
      element.style.setProperty('--marginRight', 'var(--' + breakpoint + 'MarginRight)');
    }

    if (getComputedStyle(element).getPropertyValue('--' + breakpoint + 'MarginLeft')) {
      element.style.setProperty('--marginLeft', 'var(--' + breakpoint + 'MarginLeft)');
    }
    element.style.width = 'calc(100% - (var(--marginRight, 0px) + var(--marginLeft, 0px)))';
  }

  camaleon.applyMaxWidth = function(element, breakpoint) {
    if (getComputedStyle(element).getPropertyValue('--' + breakpoint + 'MaxWidth') && (boxed = element.querySelector('.boxed'))) {
      boxed.style.maxWidth = 'var(--' + breakpoint + 'MaxWidth)'
    } else if ((getComputedStyle(element).getPropertyValue('--' + breakpoint + 'MaxWidth'))) {
      element.style.maxWidth = 'var(--' + breakpoint + 'MaxWidth)'
    }
  }

  camaleon.justifyButtons = function(element, breakpoint, childPrefix) {
    if (getComputedStyle(element).getPropertyValue('--' + breakpoint + 'TextAlign') && (buttons = element.querySelector('.' + childPrefix + '__buttons'))) {
      buttons.style.justifyContent = 'var(--' + breakpoint + 'TextAlign, center)'
    }
  }

  camaleon.blocksRegister = function(blockType, callback) {
    let blocks = document.getElementsByClassName(blockType);
    blocksRegisterCallbacks.push({blocks: blocks, callback: callback});
  };

  camaleon.addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
  }

  camaleon.blocksCallback = function() {
    bpKeys.forEach((breakpoint) => {
      let mediaQuery = window.matchMedia(bp[breakpoint])
      if (mediaQuery.matches) {
        blocksRegisterCallbacks.forEach((blockType)=>{
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
