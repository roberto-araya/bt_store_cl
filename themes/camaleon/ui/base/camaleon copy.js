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

  const bpKeys = Object.keys(bp);
  
  var camaleon = {};
  
  var applyPropertyToRule = function(element, breakpoint, property, rule){
    if (getComputedStyle(element).getPropertyValue('--' + breakpoint + property)) {
      element.style[rule] = 'var(--' + breakpoint + property + ')'
    }
  }

  var applyChildsPropertyToRule = function(element, id, breakpoint, child, PropertyRule){
    let properties = Object.keys(PropertyRule);
    properties.forEach((property) => {
      if (getComputedStyle(element).getPropertyValue('--' + breakpoint + property) && (childElement = element.querySelector('.' + id + child))) {
        childElement.style[PropertyRule[property]] = 'var(--' + breakpoint + property + ')'
      }
    })
  }

  var applyWidth = function(element, breakpoint){
    element.style.width = 'calc(100% - (var(--' + breakpoint + 'MarginRight, 0px) + var(--' + breakpoint + 'MarginLeft, 0px)))';
  }

  var applyMaxWidth = function(element, breakpoint) {
    if (getComputedStyle(element).getPropertyValue('--' + breakpoint + 'MaxWidth') && (boxed = element.querySelector('.boxed'))) {
      boxed.style.maxWidth = 'var(--' + breakpoint + 'MaxWidth)'
    } else {
      element.style.maxWidth = 'var(--' + breakpoint + 'MaxWidth)'
    }
  }

  var justifyButtons = function(element, breakpoint, id) {
    if (getComputedStyle(element).getPropertyValue('--' + breakpoint + 'TextAlign') && (buttons = element.querySelector('.' + id + '__buttons'))) {
      buttons.style.justifyContent = 'var(--' + breakpoint + 'TextAlign, center)'
    }
  }

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

  camaleon.addBlockStyles = function(blocks, PropertyRules, childsPropertyRules = null) {
    let properties = Object.keys(PropertyRules);
    bpKeys.forEach((breakpoint) => {
      let mediaQuery = window.matchMedia(bp[breakpoint])
      if (mediaQuery.matches) {
        // Get all blocks.
        let i = 0
        for (i; i < blocks.length; i++) {
          let id = blocks[i].id.split('--')[0];
          properties.forEach((property) => {
            applyPropertyToRule(blocks[i], breakpoint, property, PropertyRules[property]);
          })
          
          if (childsPropertyRules !== null) {
            childs = Object.keys(childsPropertyRules);
            childs.forEach((child) => {
              applyChildsPropertyToRule(blocks[i], id, breakpoint, child, childsPropertyRules[child]);
            });
          }
          applyWidth(blocks[i], breakpoint);
          applyMaxWidth(blocks[i], breakpoint);
          justifyButtons(blocks[i], breakpoint, id);
        }
      }
    })
  }

  return camaleon;
}());

window.Camaleon = Camaleon