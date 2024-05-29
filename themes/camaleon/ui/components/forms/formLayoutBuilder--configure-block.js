((Camaleon) => {
  Drupal.behaviors.updateBlockStyle = {  
    attach: function (context, settings) {       
      const formElement = document.getElementsByClassName("layout-builder-update-block");
      if (formElement !== undefined && formElement[0] !== undefined) {
        const blockUUID = formElement[0].getAttribute('data-layout-builder-target-highlight-id');
        const blockElement = document.querySelectorAll(`[data-layout-block-uuid=${CSS.escape(blockUUID)}]`);
        const blockType = blockElement[0].getAttribute('id');

        /** TITLE **/ 
        // Title color.
        const titleColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-title-color-select"]');
        const customTitleColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-title-color-custom"]');

        if (titleColor.length !== 0 &&
          titleColor !== undefined &&
          customTitleColor !== undefined) {
          titleColor[0].addEventListener("change", (event) => {
            if (event.target.value !== 'customColor' && event.target.value !== 'default') {
              blockElement[0].style.setProperty('--titleColor', `var(--bt--${event.target.value})`);
            } else if (event.target.value === 'customColor'){
              blockElement[0].style.setProperty('--titleColor', customTitleColor[0].value );
            }
            if (event.target.value === 'default') {
              blockElement[0].style.removeProperty('--titleColor');
            }
          });
    
          customTitleColor[0].addEventListener("change", (event) => {
            blockElement[0].style.setProperty('--titleColor', event.target.value );
          });
        }

        // Title font family.
        const titleFontFamily = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-title-font-family"]');      
        if (titleFontFamily.length !== 0 && titleFontFamily !== undefined) {
          titleFontFamily[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              let fontName = event.target.value;
              blockElement[0].style.setProperty('--titleFontFamily', fontName.replace("-", " "));
            } else {
              blockElement[0].style.removeProperty('--titleFontFamily');
            }
          });
        }

        // Title font size.
        const xsTitleFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-title-font-size-xs-font-size"]');
        if (xsTitleFontSize.length !== 0 && xsTitleFontSize !== undefined) {
          xsTitleFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--xsTitleFontSize', event.target.value);
            } else {
              blockElement[0].style.removeProperty('--xsTitleFontSize');
              blockElement[0].style.removeProperty('--titleFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        const smTitleFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-title-font-size-sm-font-size"]');
        if (smTitleFontSize.length !== 0 && smTitleFontSize !== undefined) { 
          smTitleFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--smTitleFontSize', event.target.value);
            } else {
              blockElement[0].style.removeProperty('--smTitleFontSize');
              blockElement[0].style.removeProperty('--titleFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        const mdTitleFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-title-font-size-md-font-size"]');
        if (mdTitleFontSize.length !== 0 && mdTitleFontSize !== undefined) {
          mdTitleFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--mdTitleFontSize', event.target.value);
            }  else {
              blockElement[0].style.removeProperty('--mdTitleFontSize');
              blockElement[0].style.removeProperty('--titleFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        const lgTitleFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-title-font-size-lg-font-size"]');
        if (lgTitleFontSize.length !== 0 && lgTitleFontSize !== undefined) {
          lgTitleFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--lgTitleFontSize', event.target.value);
            } else {
              blockElement[0].style.removeProperty('--lgTitleFontSize');
              blockElement[0].style.removeProperty('--titleFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        const xlTitleFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-title-font-size-xl-font-size"]');
        if (xlTitleFontSize.length !== 0 && xlTitleFontSize !== undefined) {
          xlTitleFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--xlTitleFontSize', event.target.value);
            } else {
              blockElement[0].style.removeProperty('--xlTitleFontSize');
              blockElement[0].style.removeProperty('--titleFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        const xxlTitleFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-title-font-size-xxl-font-size"]');
        if (xxlTitleFontSize.length !== 0 && xxlTitleFontSize !== undefined) {
          xxlTitleFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--xxlTitleFontSize', event.target.value);
            } else {
              blockElement[0].style.removeProperty('--xxlTitleFontSize');
              blockElement[0].style.removeProperty('--titleFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        /** CAPTION **/
        // Caption color
        const captionColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-caption-color-select"]');
        const customCaptionColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-caption-color-custom"]');

        if (captionColor.length !== 0 &&
          captionColor !== undefined &&
          customCaptionColor !== undefined) {
          captionColor[0].addEventListener("change", (event) => {
            if (event.target.value !== 'customColor' && event.target.value !== 'default') {
              blockElement[0].style.setProperty('--captionColor', `var(--bt--${event.target.value})`);
            } else if (event.target.value === 'customColor') {
              blockElement[0].style.setProperty('--captionColor', customCaptionColor[0].value );
            }
            if (event.target.value === 'default') {
              blockElement[0].style.removeProperty('--captionColor');
            }
          });
    
          customCaptionColor[0].addEventListener("change", (event) => {
            blockElement[0].style.setProperty('--captionColor', event.target.value );
          });
        }

        // Caption font family.
        const captionFontFamily = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-caption-font-family"]');      
        if (captionFontFamily.length !== 0 && captionFontFamily !== undefined) {
          captionFontFamily[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              let fontName = event.target.value;
              blockElement[0].style.setProperty('--captionFontFamily', fontName.replace("-", " "));
            } else {
              blockElement[0].style.removeProperty('--captionFontFamily');
            }
          });
        }

        // Caption font size.
        const xsCaptionFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-caption-font-size-xs-font-size"]');
        if (xsCaptionFontSize.length !== 0 && xsCaptionFontSize !== undefined) {
          xsCaptionFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--xsCaptionFontSize', event.target.value );
            } else {
              blockElement[0].style.removeProperty('--xsCaptionFontSize');
              blockElement[0].style.removeProperty('--captionFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        const smCaptionFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-caption-font-size-sm-font-size"]');
        if (smCaptionFontSize.length !== 0 && smCaptionFontSize !== undefined) {
          smCaptionFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--smCaptionFontSize', event.target.value);
            } else {
              blockElement[0].style.removeProperty('--smCaptionFontSize');
              blockElement[0].style.removeProperty('--captionFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        const mdCaptionFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-caption-font-size-md-font-size"]');
        if (mdCaptionFontSize.length !== 0 && mdCaptionFontSize !== undefined) {
          mdCaptionFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--mdCaptionFontSize', event.target.value);
            } else {
              blockElement[0].style.removeProperty('--mdCaptionFontSize');
              blockElement[0].style.removeProperty('--captionFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        const lgCaptionFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-caption-font-size-lg-font-size"]');
        if (lgCaptionFontSize.length !== 0 && lgCaptionFontSize !== undefined) {
          lgCaptionFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--lgCaptionFontSize', event.target.value);
            } else {
              blockElement[0].style.removeProperty('--lgCaptionFontSize');
              blockElement[0].style.removeProperty('--captionFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        const xlCaptionFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-caption-font-size-xl-font-size"]');
        if (xlCaptionFontSize.length !== 0 && xlCaptionFontSize !== undefined) {
          xlCaptionFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--xlCaptionFontSize', event.target.value);
            } else {
              blockElement[0].style.removeProperty('--xlCaptionFontSize');
              blockElement[0].style.removeProperty('--captionFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        const xxlCaptionFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-caption-font-size-xxl-font-size"]');
        if (xxlCaptionFontSize.length !== 0 && xxlCaptionFontSize !== undefined) {
          xxlCaptionFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--xxlCaptionFontSize', event.target.value );
            } else {
              blockElement[0].style.removeProperty('--xxlCaptionFontSize');
              blockElement[0].style.removeProperty('--captionFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        /** TEXT **/
        // Text color
        const textColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-text-color-select"]');
        const customTextColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-text-color-custom"]');

        if (textColor.length !== 0 &&
          textColor !== undefined &&
          customTextColor !== undefined) {
          textColor[0].addEventListener("change", (event) => {
            if (event.target.value !== 'customColor' && event.target.value !== 'default') {
              blockElement[0].style.setProperty('--textColor', `var(--bt--${event.target.value})`);
            } else if (event.target.value === 'customColor') {
              blockElement[0].style.setProperty('--textColor', customCaptionColor[0].value );
            }
            if (event.target.value === 'default') {
              blockElement[0].style.removeProperty('--textColor');
            }
          });
    
          customTextColor[0].addEventListener("change", (event) => {
            blockElement[0].style.setProperty('--textColor', event.target.value );
          });
        }

        // Text font family.
        const textFontFamily = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-text-font-family"]');
        if (textFontFamily.length !== 0 && textFontFamily !== undefined) {
          textFontFamily[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              let fontName = event.target.value;
              blockElement[0].style.setProperty('--textFontFamily', fontName.replace("-", " "));
            } else {
              blockElement[0].style.removeProperty('--textFontFamily');
            }
          });
        }

        // Text font size.
        const xsTextFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-text-font-size-xs-font-size"]');
        if (xsTextFontSize.length !== 0 && xsTextFontSize !== undefined) {
          xsTextFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--xsTextFontSize', event.target.value );
            } else {
              blockElement[0].style.removeProperty('--xsTextFontSize');
              blockElement[0].style.removeProperty('--textFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        const smTextFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-text-font-size-sm-font-size"]');
        if (smTextFontSize.length !== 0 && smTextFontSize !== undefined) {
          smTextFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--smTextFontSize', event.target.value);
            } else {
              blockElement[0].style.removeProperty('--smTextFontSize');
              blockElement[0].style.removeProperty('--textFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        const mdTextFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-text-font-size-md-font-size"]');
        if (mdTextFontSize.length !== 0 && mdTextFontSize !== undefined) {
          mdTextFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--mdTextFontSize', event.target.value);
            } else {
              blockElement[0].style.removeProperty('--mdTextFontSize');
              blockElement[0].style.removeProperty('--textFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        const lgTextFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-text-font-size-lg-font-size"]');
        if (lgTextFontSize.length !== 0 && lgTextFontSize !== undefined) {
          lgTextFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--lgTextFontSize', event.target.value);
            } else {
              blockElement[0].style.removeProperty('--lgTextFontSize');
              blockElement[0].style.removeProperty('--textFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        const xlTextFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-text-font-size-xl-font-size"]');
        if (xlTextFontSize.length !== 0 && xlTextFontSize !== undefined) {
          xlTextFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--xlTextFontSize', event.target.value );
            } else {
              blockElement[0].style.removeProperty('--xlTextFontSize');
              blockElement[0].style.removeProperty('--textFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        const xxlTextFontSize = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-text-font-size-xxl-font-size"]');
        if (xxlTextFontSize.length !== 0 && xxlTextFontSize !== undefined) {
          xxlTextFontSize[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              blockElement[0].style.setProperty('--xxlTextFontSize', event.target.value );
            } else {
              blockElement[0].style.removeProperty('--xxlTextFontSize');
              blockElement[0].style.removeProperty('--textFontSize');
            }
            Camaleon.blocksCallback();
          });
        }

        /** BUTTONS **/    
        // Button color.
        const buttonColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-buttons-button-color-select"]');
        const customButtonColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-buttons-button-color-custom"]');

        if (buttonColor.length !== 0 &&
          buttonColor !== undefined &&
          customButtonColor !== undefined) {
          buttonColor[0].addEventListener("change", (event) => {
            if (event.target.value !== 'customColor' && event.target.value !== 'default') {
              blockElement[0].style.setProperty('--buttonColor', `var(--bt--${event.target.value})`);
            } else if (event.target.value === 'customColor') {
              blockElement[0].style.setProperty('--buttonColor', customButtonColor[0].value );
            }
          });
    
          customButtonColor[0].addEventListener("change", (event) => {
            blockElement[0].style.setProperty('--buttonColor', event.target.value );
          });
        }

        // Button link color.
        const buttonLinkColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-buttons-button-link-color-select"]');
        const customButtonLinkColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-buttons-button-link-color-custom"]');

        if (buttonLinkColor.length !== 0 &&
          buttonLinkColor !== undefined &&
          customButtonLinkColor !== undefined) {
          buttonLinkColor[0].addEventListener("change", (event) => {
            if (event.target.value !== 'customColor' && event.target.value !== 'default') {
              blockElement[0].style.setProperty('--buttonLinkColor', `var(--bt--${event.target.value})`);
            } else if (event.target.value === 'customColor') {
              blockElement[0].style.setProperty('--buttonLinkColor', customButtonLinkColor[0].value );
            }
          });
    
          customButtonLinkColor[0].addEventListener("change", (event) => {
            blockElement[0].style.setProperty('--buttonLinkColor', event.target.value );
          });
        }

        // Button secondary color.
        const buttonSecondaryColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-buttons-button-secondary-color-select"]');
        const customButtonSecondaryColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-buttons-button-secondary-color-custom"]');
        if (buttonSecondaryColor.length !== 0 &&
          buttonSecondaryColor !== undefined && 
          customButtonSecondaryColor !== undefined) {
          buttonSecondaryColor[0].addEventListener("change", (event) => {
            if (event.target.value !== 'customColor' && event.target.value !== 'default') {
              blockElement[0].style.setProperty('--buttonSecondaryColor', `var(--bt--${event.target.value})`);
            } else if (event.target.value === 'customColor') {
              blockElement[0].style.setProperty('--buttonSecondaryColor', customButtonSecondaryColor[0].value );
            }
          });
    
          customButtonSecondaryColor[0].addEventListener("change", (event) => {
            blockElement[0].style.setProperty('--buttonSecondaryColor', event.target.value );
          });
        }
        
        // Button secondary link color.
        const buttonSecondaryLinkColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-buttons-button-secondary-link-color-select"]');
        const customButtonSecondaryLinkColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-buttons-button-secondary-link-color-custom"]');

        if (buttonSecondaryLinkColor.length !== 0 &&
          buttonSecondaryLinkColor !== undefined &&
          customButtonSecondaryLinkColor !== undefined) {
          buttonSecondaryLinkColor[0].addEventListener("change", (event) => {
            if (event.target.value !== 'customColor' && event.target.value !== 'default') {
              blockElement[0].style.setProperty('--buttonSecondaryLinkColor', `var(--bt--${event.target.value})`);
            } else if (event.target.value === 'customColor') {
              blockElement[0].style.setProperty('--buttonSecondaryLinkColor', customButtonSecondaryLinkColor[0].value );
            }
          });
    
          customButtonSecondaryLinkColor[0].addEventListener("change", (event) => {
            blockElement[0].style.setProperty('--buttonSecondaryLinkColor', event.target.value );
          });
        }
        
        /** ANIMATIONS **/
        const animationTrigger = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-animation-trigger"]');
        const animationType = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-animation-type"]');
        let previousAnimationType = animationType[0].value;
        animationType[0].addEventListener("change", (event) => {
          if (animationTrigger[0].value === "on_scroll") {
            if (blockType.includes('blockHero')) {
              const heroBoxed = document.querySelector(`#${blockType} .boxed`);
              heroBoxed.classList.remove(previousAnimationType);
              heroBoxed.classList.add('wow');
              heroBoxed.classList.add(event.target.value);
              heroBoxed.style.animationName = event.target.value;
            } else {
              blockElement[0].classList.remove(previousAnimationType);
              blockElement[0].classList.add('wow');
              blockElement[0].classList.add(event.target.value);
              blockElement[0].style.animationName = event.target.value;
            }
            previousAnimationType = event.target.value;
          } else {
            if (blockType.includes('blockHero')) {
              const heroBoxed = document.querySelector(`#${blockType} .boxed`);
              heroBoxed.classList.remove(previousAnimationType);
              heroBoxed.classList.add(event.target.value);
              heroBoxed.style.animationName = event.target.value;
            } else {
              blockElement[0].classList.remove(previousAnimationType);
              blockElement[0].classList.add(event.target.value);
              blockElement[0].style.animationName = event.target.value;
            }
            previousAnimationType = event.target.value;
          }
        });

        // Animation duration.
        const animationDuration = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-animation-duration"]');
        animationDuration[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--animationDuration', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--animationDuration');
          }
        });

        // Animation count.
        const animationCount = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-animation-count"]');
        animationCount[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--animationCount', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--animationCount');
          }
        });

        // Animation delay.
        const animationDelay = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-animation-delay"]');
        animationDelay[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--animationDelay', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--animationDelay');
          }
        });

        // Animation function.
        const animationFunction = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-animation-function"]');
        animationFunction[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            blockElement[0].style.setProperty('--animationFunction', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--animationFunction');
          }
        });

        // Animation fill.
        const animationFill = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-animation-fill"]');
        animationFill[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            blockElement[0].style.setProperty('--animationFill', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--animationFill');
          }
        });

        /** BACKGROUND COLOR **/
        const backgroundColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-background-color-select"]');
        const customBackgroundColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-background-color-custom"]');
        const opacity = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-background-color-opacity"]');
        const customOpacity = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-background-color-custom-opacity"]');

        if (backgroundColor !== undefined && customBackgroundColor !== undefined) {
          backgroundColor[0].addEventListener("change", (event) => {
          
            if (event.target.value !== 'customColor' && event.target.value !== 'default') {
              if (opacity[0].value === '1.0') {
                blockElement[0].style.setProperty('--backgroundColor', `var(--bt--${event.target.value})`);
              } else {
                blockElement[0].style.setProperty('--backgroundColor', `rgb(var(--bt--${event.target.value}-rgb), ${opacity[0].value})`)
              }
            } else if (event.target.value === 'default') {
              blockElement[0].style.setProperty('--backgroundColor', 'transparent');
            }

            if (event.target.value === 'customColor') {
              if (customOpacity[0].value === 'FF') {
                blockElement[0].style.setProperty('--backgroundColor', event.target.value);
              } else {
                blockElement[0].style.setProperty('--backgroundColor', event.target.value + customOpacity[0].value)
              }
            }
          });
    
          customBackgroundColor[0].addEventListener("change", (event) => {
            if (customOpacity[0].value === 'FF') {
              blockElement[0].style.setProperty('--backgroundColor', event.target.value);
            } else {
              blockElement[0].style.setProperty('--backgroundColor', event.target.value + customOpacity[0].value)
            }
          });

          opacity[0].addEventListener("change", (event) => {
            if (event.target.value === '1.0') {
              blockElement[0].style.setProperty('--backgroundColor', `var(--bt--${backgroundColor[0].value})`);
            } else {
              blockElement[0].style.setProperty('--backgroundColor', `rgb(var(--bt--${backgroundColor[0].value}-rgb), ${event.target.value})`)
            }
          });

          customOpacity[0].addEventListener("change", (event) => {
            if (event.target.value === 'FF') {
              blockElement[0].style.setProperty('--backgroundColor', customBackgroundColor[0].value);
            } else {
              blockElement[0].style.setProperty('--backgroundColor', customBackgroundColor[0].value + event.target.value)
            }
          });
        }    

        /** MAX WIDTH **/
        const xsMaxWidth = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-max-width-xs-max-width"]');
        xsMaxWidth[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xsMaxWidth', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xsMaxWidth');
            blockElement[0].style.removeProperty('--maxWidth');
          }
          Camaleon.blocksCallback();
        });

        const smMaxWidth = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-max-width-sm-max-width"]');
        smMaxWidth[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--smMaxWidth', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--smMaxWidth');
            blockElement[0].style.removeProperty('--maxWidth');
          }
          Camaleon.blocksCallback();
        });

        const mdMaxWidth = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-max-width-md-max-width"]');
        mdMaxWidth[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--mdMaxWidth', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--mdMaxWidth');
            blockElement[0].style.removeProperty('--maxWidth');
          }
          Camaleon.blocksCallback();
        });

        const lgMaxWidth = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-max-width-lg-max-width"]');
        lgMaxWidth[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--lgMaxWidth', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--lgMaxWidth');
            blockElement[0].style.removeProperty('--maxWidth');
          }
          Camaleon.blocksCallback();
        });

        const xlMaxWidth = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-max-width-xl-max-width"]');
        xlMaxWidth[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xlMaxWidth', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xlMaxWidth');
            blockElement[0].style.removeProperty('--maxWidth');
          }
          Camaleon.blocksCallback();
        });

        const xxlMaxWidth = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-max-width-xxl-max-width"]');
        xxlMaxWidth[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xxlMaxWidth', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xxlMaxWidth');
            blockElement[0].style.removeProperty('--maxWidth');
          }
          Camaleon.blocksCallback();
        });

        /** MARGIN **/
        // XS.
        const xsMarginLeft = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-xs-margin-left"]');
        xsMarginLeft[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xsMarginLeft', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xsMarginLeft');
            blockElement[0].style.removeProperty('--marginLeft');
          }
          Camaleon.blocksCallback();
        });

        const xsMarginTop = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-xs-margin-top"]');
        xsMarginTop[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xsMarginTop', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xsMarginTop');
            blockElement[0].style.removeProperty('--marginTop');
          }
          Camaleon.blocksCallback();
        });

        const xsMarginRight = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-xs-margin-right"]');
        xsMarginRight[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xsMarginRight', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xsMarginRight');
            blockElement[0].style.removeProperty('--marginRight');
          }
          Camaleon.blocksCallback();
        });

        const xsMarginBottom = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-xs-margin-bottom"]');
        xsMarginBottom[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xsMarginBottom', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xsMarginBottom');
            blockElement[0].style.removeProperty('--marginBottom');
          }
          Camaleon.blocksCallback();
        });

        // SM.
        const smMarginLeft = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-sm-margin-left"]');
        smMarginLeft[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--smMarginLeft', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--smMarginLeft');
            blockElement[0].style.removeProperty('--marginLeft');
          }
          Camaleon.blocksCallback();
        });

        const smMarginTop = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-sm-margin-top"]');
        smMarginTop[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--smMarginTop', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--smMarginTop');
            blockElement[0].style.removeProperty('--marginTop');
          }
          Camaleon.blocksCallback();
        });

        const smMarginRight = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-sm-margin-right"]');
        smMarginRight[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--smMarginRight', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--smMarginRight');
            blockElement[0].style.removeProperty('--marginRight');
          }
          Camaleon.blocksCallback();
        });

        const smMarginBottom = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-sm-margin-bottom"]');
        smMarginBottom[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--smMarginBottom', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--smMarginBottom');
            blockElement[0].style.removeProperty('--marginBottom');
          }
          Camaleon.blocksCallback();
        });

        // MD.
        const mdMarginLeft = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-md-margin-left"]');
        mdMarginLeft[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--mdMarginLeft', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--mdMarginLeft');
            blockElement[0].style.removeProperty('--marginLeft');
          }
          Camaleon.blocksCallback();
        });

        const mdMarginTop = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-md-margin-top"]');
        mdMarginTop[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--mdMarginTop', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--mdMarginTop');
            blockElement[0].style.removeProperty('--marginTop');
          }
          Camaleon.blocksCallback();
        });

        const mdMarginRight = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-md-margin-right"]');
        mdMarginRight[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--mdMarginRight', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--mdMarginRight');
            blockElement[0].style.removeProperty('--marginRight');
          }
          Camaleon.blocksCallback();
        });

        const mdMarginBottom = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-md-margin-bottom"]');
        mdMarginBottom[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--mdMarginBottom', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--mdMarginBottom');
            blockElement[0].style.removeProperty('--marginBottom');
          }
          Camaleon.blocksCallback();
        });

        // LG.
        const lgMarginLeft = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-lg-margin-left"]');
        lgMarginLeft[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--lgMarginLeft', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--lgMarginLeft');
            blockElement[0].style.removeProperty('--marginLeft');
          }
          Camaleon.blocksCallback();
        });

        const lgMarginTop = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-lg-margin-top"]');
        lgMarginTop[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--lgMarginTop', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--lgMarginTop');
            blockElement[0].style.removeProperty('--marginTop');
          }
          Camaleon.blocksCallback();
        });

        const lgMarginRight = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-lg-margin-right"]');
        lgMarginRight[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--lgMarginRight', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--lgMarginRight');
            blockElement[0].style.removeProperty('--marginRight');
          }
          Camaleon.blocksCallback();
        });

        const lgMarginBottom = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-lg-margin-bottom"]');
        lgMarginBottom[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--lgMarginBottom', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--lgMarginBottom');
            blockElement[0].style.removeProperty('--marginBottom');
          }
          Camaleon.blocksCallback();
        });

        // XL.
        const xlMarginLeft = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-xl-margin-left"]');
        xlMarginLeft[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xlMarginLeft', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xlMarginLeft');
            blockElement[0].style.removeProperty('--marginLeft');
          }
          Camaleon.blocksCallback();
        });

        const xlMarginTop = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-xl-margin-top"]');
        xlMarginTop[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xlMarginTop', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xlMarginTop');
            blockElement[0].style.removeProperty('--marginTop');
          }
          Camaleon.blocksCallback();
        });

        const xlMarginRight = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-xl-margin-right"]');
        xlMarginRight[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xlMarginRight', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xlMarginRight');
            blockElement[0].style.removeProperty('--marginRight');
          }
          Camaleon.blocksCallback();
        });

        const xlMarginBottom = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-xl-margin-bottom"]');
        xlMarginBottom[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xlMarginBottom', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xlMarginBottom');
            blockElement[0].style.removeProperty('--marginBottom');
          }
          Camaleon.blocksCallback();
        });

        // XXL.
        const xxlMarginLeft = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-xxl-margin-left"]');
        xxlMarginLeft[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xxlMarginLeft', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xxlMarginLeft');
            blockElement[0].style.removeProperty('--marginLeft');
          }
          Camaleon.blocksCallback();
        });

        const xxlMarginTop = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-xxl-margin-top"]');
        xxlMarginTop[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xxlMarginTop', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xxlMarginTop');
            blockElement[0].style.removeProperty('--marginTop');
          }
          Camaleon.blocksCallback();
        });

        const xxlMarginRight = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-xxl-margin-right"]');
        xxlMarginRight[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xxlMarginRight', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xxlMarginRight');
            blockElement[0].style.removeProperty('--marginRight');
          }
          Camaleon.blocksCallback();
        });

        const xxlMarginBottom = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-margin-xxl-margin-bottom"]');
        xxlMarginBottom[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xxlMarginBottom', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xxlMarginBottom');
            blockElement[0].style.removeProperty('--marginBottom');
          }
          Camaleon.blocksCallback();
        });

        /** PADDING **/
        // XS.
        const xsPaddingLeft = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-xs-padding-left"]');
        xsPaddingLeft[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xsPaddingLeft', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xsPaddingLeft');
            blockElement[0].style.removeProperty('--paddingLeft');
          }
          Camaleon.blocksCallback();
        });

        const xsPaddingTop = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-xs-padding-top"]');
        xsPaddingTop[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xsPaddingTop', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xsPaddingTop');
            blockElement[0].style.removeProperty('--paddingTop');
          }
          Camaleon.blocksCallback();
        });

        const xsPaddingRight = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-xs-padding-right"]');
        xsPaddingRight[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xsPaddingRight', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xsPaddingRight');
            blockElement[0].style.removeProperty('--paddingRight');
          }
          Camaleon.blocksCallback();
        });

        const xsPaddingBottom = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-xs-padding-bottom"]');
        xsPaddingBottom[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xsPaddingBottom', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xsPaddingBottom');
            blockElement[0].style.removeProperty('--paddingBottom');
          }
          Camaleon.blocksCallback();
        });

        // SM.
        const smPaddingLeft = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-sm-padding-left"]');
        smPaddingLeft[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--smPaddingLeft', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--smPaddingLeft');
            blockElement[0].style.removeProperty('--paddingLeft');
          }
          Camaleon.blocksCallback();
        });

        const smPaddingTop = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-sm-padding-top"]');
        smPaddingTop[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--smPaddingTop', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--smPaddingTop');
            blockElement[0].style.removeProperty('--paddingTop');
          }
          Camaleon.blocksCallback();
        });

        const smPaddingRight = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-sm-padding-right"]');
        smPaddingRight[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--smPaddingRight', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--smPaddingRight');
            blockElement[0].style.removeProperty('--paddingRight');
          }
          Camaleon.blocksCallback();
        });

        const smPaddingBottom = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-sm-padding-bottom"]');
        smPaddingBottom[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--smPaddingBottom', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--smPaddingBottom');
            blockElement[0].style.removeProperty('--paddingBottom');
          }
          Camaleon.blocksCallback();
        });

        // MD.
        const mdPaddingLeft = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-md-padding-left"]');
        mdPaddingLeft[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--mdPaddingLeft', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--mdPaddingLeft');
            blockElement[0].style.removeProperty('--paddingLeft');
          }
          Camaleon.blocksCallback();
        });

        const mdPaddingTop = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-md-padding-top"]');
        mdPaddingTop[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--mdPaddingTop', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--mdPaddingTop');
            blockElement[0].style.removeProperty('--paddingTop');
          }
          Camaleon.blocksCallback();
        });

        const mdPaddingRight = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-md-padding-right"]');
        mdPaddingRight[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--mdPaddingRight', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--mdPaddingRight');
            blockElement[0].style.removeProperty('--paddingRight');
          }
          Camaleon.blocksCallback();
        });

        const mdPaddingBottom = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-md-padding-bottom"]');
        mdPaddingBottom[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--mdPaddingBottom', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--mdPaddingBottom');
            blockElement[0].style.removeProperty('--paddingBottom');
          }
          Camaleon.blocksCallback();
        });

        // LG.
        const lgPaddingLeft = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-lg-padding-left"]');
        lgPaddingLeft[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--lgPaddingLeft', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--lgPaddingLeft');
            blockElement[0].style.removeProperty('--paddingLeft');
          }
          Camaleon.blocksCallback();
        });

        const lgPaddingTop = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-lg-padding-top"]');
        lgPaddingTop[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--lgPaddingTop', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--lgPaddingTop');
            blockElement[0].style.removeProperty('--paddingTop');
          }
          Camaleon.blocksCallback();
        });

        const lgPaddingRight = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-lg-padding-right"]');
        lgPaddingRight[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--lgPaddingRight', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--lgPaddingRight');
            blockElement[0].style.removeProperty('--paddingRight');
          }
          Camaleon.blocksCallback();
        });

        const lgPaddingBottom = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-lg-padding-bottom"]');
        lgPaddingBottom[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--lgPaddingBottom', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--lgPaddingBottom');
            blockElement[0].style.removeProperty('--paddingBottom');
          }
          Camaleon.blocksCallback();
        });

        // XL.
        const xlPaddingLeft = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-xl-padding-left"]');
        xlPaddingLeft[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xlPaddingLeft', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xlPaddingLeft');
            blockElement[0].style.removeProperty('--paddingLeft');
          }
          Camaleon.blocksCallback();
        });

        const xlPaddingTop = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-xl-padding-top"]');
        xlPaddingTop[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xlPaddingTop', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xlPaddingTop');
            blockElement[0].style.removeProperty('--paddingTop');
          }
          Camaleon.blocksCallback();
        });

        const xlPaddingRight = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-xl-padding-right"]');
        xlPaddingRight[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xlPaddingRight', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xlPaddingRight');
            blockElement[0].style.removeProperty('--paddingRight');
          }
          Camaleon.blocksCallback();
        });

        const xlPaddingBottom = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-xl-padding-bottom"]');
        xlPaddingBottom[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xlPaddingBottom', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xlPaddingBottom');
            blockElement[0].style.removeProperty('--paddingBottom');
          }
          Camaleon.blocksCallback();
        });

        // XXL.
        const xxlPaddingLeft = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-xxl-padding-left"]');
        xxlPaddingLeft[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xxlPaddingLeft', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xxlPaddingLeft');
            blockElement[0].style.removeProperty('--paddingLeft');
          }
          Camaleon.blocksCallback();
        });

        const xxlPaddingTop = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-xxl-padding-top"]');
        xxlPaddingTop[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xxlPaddingTop', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xxlPaddingTop');
            blockElement[0].style.removeProperty('--paddingTop');
          }
          Camaleon.blocksCallback();
        });

        const xxlPaddingRight = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-xxl-padding-right"]');
        xxlPaddingRight[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xxlPaddingRight', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xxlPaddingRight');
            blockElement[0].style.removeProperty('--paddingRight');
          }
          Camaleon.blocksCallback();
        });

        const xxlPaddingBottom = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-padding-xxl-padding-bottom"]');
        xxlPaddingBottom[0].addEventListener("change", (event) => {
          if (event.target.value !== "") {
            blockElement[0].style.setProperty('--xxlPaddingBottom', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xxlPaddingBottom');
            blockElement[0].style.removeProperty('--paddingBottom');
          }
          Camaleon.blocksCallback();
        });

        /** ALIGN **/
        const xsAlignSelf = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-align-xs-align"]');
        xsAlignSelf[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            blockElement[0].style.setProperty('--xsAlignSelf', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xsAlignSelf');
            blockElement[0].style.removeProperty('--alignSelf');
          }
          Camaleon.blocksCallback();
        });

        const smAlignSelf = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-align-sm-align"]');
        smAlignSelf[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            blockElement[0].style.setProperty('--smAlignSelf', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--smAlignSelf');
            blockElement[0].style.removeProperty('--alignSelf');
          }
          Camaleon.blocksCallback();
        });

        const mdAlignSelf = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-align-md-align"]');
        mdAlignSelf[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            blockElement[0].style.setProperty('--mdAlignSelf', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--mdAlignSelf');
            blockElement[0].style.removeProperty('--alignSelf');
          }
          Camaleon.blocksCallback();
        });

        const lgAlignSelf = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-align-lg-align"]');
        lgAlignSelf[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            blockElement[0].style.setProperty('--lgAlignSelf', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--lgAlignSelf');
            blockElement[0].style.removeProperty('--alignSelf');
          }
          Camaleon.blocksCallback();
        });

        const xlAlignSelf = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-align-xl-align"]');
        xlAlignSelf[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            blockElement[0].style.setProperty('--xlAlignSelf', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xlAlignSelf');
            blockElement[0].style.removeProperty('--alignSelf');
          }
          Camaleon.blocksCallback();
        });

        const xxlAlignSelf = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-align-xxl-align"]');
        xxlAlignSelf[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            blockElement[0].style.setProperty('--xxlAlignSelf', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xxlAlignSelf');
            blockElement[0].style.removeProperty('--alignSelf');
          }
          Camaleon.blocksCallback();
        });

        /** JUSTIFY **/
        const xsJustifySelf = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-justify-xs-justify"]');
        xsJustifySelf[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            if (blockType.includes('blockHero')) {
              blockElement[0].style.setProperty('--xsJustifyContent', event.target.value);
            } else {
              blockElement[0].style.setProperty('--xsJustifySelf', event.target.value);
            }
          } else {
            if (blockType.includes('blockHero')) {
              blockElement[0].style.removeProperty('--xsJustifySelf');
              blockElement[0].style.removeProperty('--justifySelf');
            } else {
              blockElement[0].style.removeProperty('--xsJustifyContent');
              blockElement[0].style.removeProperty('--justifyContent');
            }
          }
          Camaleon.blocksCallback();
        });

        const smJustifySelf = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-justify-sm-justify"]');
        smJustifySelf[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            if (blockType.includes('blockHero')) {
              blockElement[0].style.setProperty('--smJustifyContent', event.target.value);
            } else {
              blockElement[0].style.setProperty('--smJustifySelf', event.target.value);
            }
          } else {
            if (blockType.includes('blockHero')) {
              blockElement[0].style.removeProperty('--smJustifySelf');
              blockElement[0].style.removeProperty('--justifySelf');
            } else {
              blockElement[0].style.removeProperty('--smJustifyContent');
              blockElement[0].style.removeProperty('--justifyContent');
            }
          }
          Camaleon.blocksCallback();
        });

        const mdJustifySelf = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-justify-md-justify"]');
        mdJustifySelf[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            if (blockType.includes('blockHero')) {
              blockElement[0].style.setProperty('--mdJustifyContent', event.target.value);
            } else {
              blockElement[0].style.setProperty('--mdJustifySelf', event.target.value);
            }
          } else {
            if (blockType.includes('blockHero')) {
              blockElement[0].style.removeProperty('--mdJustifySelf');
              blockElement[0].style.removeProperty('--justifySelf');
            } else {
              blockElement[0].style.removeProperty('--mdJustifyContent');
              blockElement[0].style.removeProperty('--justifyContent');
            }
          }
          Camaleon.blocksCallback();
        });

        const lgJustifySelf = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-justify-lg-justify"]');
        lgJustifySelf[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            if (blockType.includes('blockHero')) {
              blockElement[0].style.setProperty('--lgJustifyContent', event.target.value);
            } else {
              blockElement[0].style.setProperty('--lgJustifySelf', event.target.value);
            }
          } else {
            if (blockType.includes('blockHero')) {
              blockElement[0].style.removeProperty('--lgJustifySelf');
              blockElement[0].style.removeProperty('--justifySelf');
            } else {
              blockElement[0].style.removeProperty('--lgJustifyContent');
              blockElement[0].style.removeProperty('--justifyContent');
            }
          }
          Camaleon.blocksCallback();
        });

        const xlJustifySelf = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-justify-xl-justify"]');
        xlJustifySelf[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            if (blockType.includes('blockHero')) {
              blockElement[0].style.setProperty('--xlJustifyContent', event.target.value);
            } else {
              blockElement[0].style.setProperty('--xlJustifySelf', event.target.value);
            }
          } else {
            if (blockType.includes('blockHero')) {
              blockElement[0].style.removeProperty('--xlJustifySelf');
              blockElement[0].style.removeProperty('--justifySelf');
            } else {
              blockElement[0].style.removeProperty('--xlJustifyContent');
              blockElement[0].style.removeProperty('--justifyContent');
            }
          }
          Camaleon.blocksCallback();
        });

        const xxlJustifySelf = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-justify-xxl-justify"]');
        xxlJustifySelf[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            if (blockType.includes('blockHero')) {
              blockElement[0].style.setProperty('--xxlJustifyContent', event.target.value);
            } else {
              blockElement[0].style.setProperty('--xxlJustifySelf', event.target.value);
            }
          } else {
            if (blockType.includes('blockHero')) {
              blockElement[0].style.removeProperty('--xxlJustifySelf');
              blockElement[0].style.removeProperty('--justifySelf');
            } else {
              blockElement[0].style.removeProperty('--xxlJustifyContent');
              blockElement[0].style.removeProperty('--justifyContent');
            }
          }
          Camaleon.blocksCallback();
        });

        /** TEXT ALIGN **/
        const xsTextAlign = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-text-align-xs-text-align"]');
        xsTextAlign[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            blockElement[0].style.setProperty('--xsTextAlign', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xsTextAlign');
            blockElement[0].style.removeProperty('--textAlign');
          }
          Camaleon.blocksCallback();
        });

        const smTextAlign = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-text-align-sm-text-align"]');
        smTextAlign[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            blockElement[0].style.setProperty('--smTextAlign', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--smTextAlign');
            blockElement[0].style.removeProperty('--textAlign');
          }
          Camaleon.blocksCallback();
        });

        const mdTextAlign = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-text-align-md-text-align"]');
        mdTextAlign[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            blockElement[0].style.setProperty('--mdTextAlign', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--mdTextAlign');
            blockElement[0].style.removeProperty('--textAlign');
          }
          Camaleon.blocksCallback();
        });

        const lgTextAlign = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-text-align-lg-text-align"]');
        lgTextAlign[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            blockElement[0].style.setProperty('--lgTextAlign', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--lgTextAlign');
            blockElement[0].style.removeProperty('--textAlign');
          }
          Camaleon.blocksCallback();
        });

        const xlTextAlign = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-text-align-xl-text-align"]');
        xlTextAlign[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            blockElement[0].style.setProperty('--xlTextAlign', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xlTextAlign');
            blockElement[0].style.removeProperty('--textAlign');
          }
          Camaleon.blocksCallback();
        });

        const xxlTextAlign = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-text-align-xxl-text-align"]');
        xxlTextAlign[0].addEventListener("change", (event) => {
          if (event.target.value !== "default") {
            blockElement[0].style.setProperty('--xxlTextAlign', event.target.value);
          } else {
            blockElement[0].style.removeProperty('--xxlTextAlign');
            blockElement[0].style.removeProperty('--textAlign');
          }
          Camaleon.blocksCallback();
        });

        /** BLOCK QUOTE **/    
        if (blockType.includes('blockQuote')) {
          // Source color.      
          const sourceColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-source-color-select"]');
          const customSourceColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-source-color-custom"]');

          if (sourceColor.length !== 0 &&
            sourceColor !== undefined &&
            customSourceColor !== undefined) {
            sourceColor[0].addEventListener("change", (event) => {
              if (event.target.value !== 'customColor' && event.target.value !== 'default') {
                blockElement[0].style.setProperty('--sourceColor', `var(--bt--${event.target.value})`);
              } else if (event.target.value === 'customColor') {
                blockElement[0].style.setProperty('--sourceColor', customSourceColor[0].value );
              }
            });
      
            customSourceColor[0].addEventListener("change", (event) => {
              blockElement[0].style.setProperty('--sourceColor', event.target.value );
            });
          }

          // Link color.      
          const linkColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-link-color-select"]');
          const customLinkColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-link-color-custom"]');

          if (linkColor.length !== 0 &&
            linkColor !== undefined &&
            customLinkColor !== undefined) {
            linkColor[0].addEventListener("change", (event) => {
              if (event.target.value !== 'customColor' && event.target.value !== 'default') {
                blockElement[0].style.setProperty('--linkColor', `var(--bt--${event.target.value})`);
              } else if (event.target.value === 'customColor') {
                blockElement[0].style.setProperty('--linkColor', customLinkColor[0].value );
              }
            });
      
            customLinkColor[0].addEventListener("change", (event) => {
              blockElement[0].style.setProperty('--linkColor', event.target.value );
            });
          }

          // Symbol color.      
          const symbolColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-symbol-color-select"]');
          const customSymbolColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-symbol-color-custom"]');

          if (symbolColor.length !== 0 &&
            symbolColor !== undefined &&
            customSymbolColor !== undefined) {
            symbolColor[0].addEventListener("change", (event) => {
              if (event.target.value !== 'customColor' && event.target.value !== 'default') {
                blockElement[0].style.setProperty('--symbolColor', `var(--bt--${event.target.value})`);
              } else if (event.target.value === 'customColor') {
                blockElement[0].style.setProperty('--symbolColor', customSymbolColor[0].value );
              }
            });
      
            customSymbolColor[0].addEventListener("change", (event) => {
              blockElement[0].style.setProperty('--symbolColor', event.target.value );
            });
          }
        }

        /** CONTACT INFO **/
        if (blockType.includes('blockContactInfo')) {
          // Link color.      
          const linkColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-link-color-select"]');
          const customLinkColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-link-color-custom"]');

          if (linkColor.length !== 0 &&
            linkColor !== undefined &&
            customLinkColor !== undefined) {
            linkColor[0].addEventListener("change", (event) => {
              if (event.target.value !== 'customColor' && event.target.value !== 'default') {
                blockElement[0].style.setProperty('--linkColor', `var(--bt--${event.target.value})`);
              } else if (event.target.value === 'customColor') {
                blockElement[0].style.setProperty('--linkColor', customLinkColor[0].value );
              }
            });
      
            customLinkColor[0].addEventListener("change", (event) => {
              blockElement[0].style.setProperty('--linkColor', event.target.value );
            });
          }
        }

        /** SOCIAL PROFILES **/
        if (blockType.includes('blockSocialProfiles')) {
          // Icon color.      
          const iconColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-icon-color-select"]');
          const customIconColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-icon-color-custom"]');

          if (iconColor.length !== 0 &&
            iconColor !== undefined &&
            customIconColor !== undefined) {
            iconColor[0].addEventListener("change", (event) => {
              if (event.target.value !== 'customColor' && event.target.value !== 'default') {
                blockElement[0].style.setProperty('--iconColor', `var(--bt--${event.target.value})`);
              } else if (event.target.value === 'customColor') {
                blockElement[0].style.setProperty('--iconColor', customIconColor[0].value );
              }
            });
      
            customIconColor[0].addEventListener("change", (event) => {
              blockElement[0].style.setProperty('--iconColor', event.target.value );
            });
          }
        }

        /** TITLE ICON AND TEXT ICON**/
        if (blockType.includes('blockTitleIcon') || blockType.includes('blockTextIcon')) {
          // Icon color.      
          const iconColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-icon-color-select"]');
          const customIconColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-icon-color-custom"]');

          if (iconColor.length !== 0 &&
            iconColor !== undefined &&
            customIconColor !== undefined) {
            iconColor[0].addEventListener("change", (event) => {
              if (event.target.value !== 'customColor' && event.target.value !== 'default') {
                blockElement[0].style.setProperty('--iconColor', `var(--bt--${event.target.value})`);
              } else if (event.target.value === 'customColor') {
                blockElement[0].style.setProperty('--iconColor', customIconColor[0].value );
              }
            });
      
            customIconColor[0].addEventListener("change", (event) => {
              blockElement[0].style.setProperty('--iconColor', event.target.value );
            });
          }
        }

        /** HIGHLIGHTED TEXT AND HIGHLIGHTED TEXT IMAGE **/
        if (blockType.includes('blockHighlightedText') || blockType.includes('blockHighlightedTextImage')) {
          // Icon color.      
          const highlightedColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-highlighted-color-select"]');
          const customHighlightedColor = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-highlighted-color-custom"]');

          if (highlightedColor.length !== 0 &&
            highlightedColor !== undefined &&
            customHighlightedColor !== undefined) {
            highlightedColor[0].addEventListener("change", (event) => {
              if (event.target.value !== 'customColor' && event.target.value !== 'default') {
                blockElement[0].style.setProperty('--highlightedColor', `var(--bt--${event.target.value})`);
              } else if (event.target.value === 'customColor') {
                blockElement[0].style.setProperty('--highlightedColor', customHighlightedColor[0].value );
              }
            });
      
            customHighlightedColor[0].addEventListener("change", (event) => {
              blockElement[0].style.setProperty('--highlightedColor', event.target.value );
            });
          }
        }
        
        // CSS CLASSES
        const BlockClasses = document.querySelectorAll('[data-drupal-selector="edit-third-party-settings-bt-cbc-custom-classes"]');
        if (BlockClasses.length !== 0 &&
          BlockClasses !== undefined &&
          BlockClasses !== undefined) {

          currentBlockClasses = BlockClasses[0].value;
          BlockClasses[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              if (currentBlockClasses !== "") {
                classes = currentBlockClasses.split(" ");
                classes.forEach(element => {
                  blockElement[0].classList.remove(element);                
                });
              }

              classes = event.target.value.split(" ");
              classes.forEach(element => {
                blockElement[0].classList.add(element);
              })
              currentBlockClasses = event.target.value;
            } else if (currentBlockClasses !== "") {
              classes = currentBlockClasses.split(" ");
              classes.forEach(element => {
                blockElement[0].classList.remove(element);                
              });
            }
          });
        }

        /** CONTENT **/
        // Title
        const Title = document.querySelectorAll('[data-drupal-selector="edit-settings-block-form-field-bt-content-title-0-value"]');
        if (Title.length !== 0 &&
          Title !== undefined &&
          Title !== undefined) {
          
          TitleElement = blockElement[0].querySelector('[class$="content-title"]');
          currentTitle = Title[0].value;
          Title[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              TitleElement.innerHTML = event.target.value;
            } else {
              TitleElement.innerHTML = "";
            }
          });
        }

        // Caption
        const Caption = document.querySelectorAll('[data-drupal-selector="edit-settings-block-form-field-bt-epigrafe-0-value"]');
        if (Caption.length !== 0 &&
          Caption !== undefined &&
          Caption !== undefined) {
          
          CaptionElement = blockElement[0].querySelector('[class$="caption"]');
          currentCaption = Caption[0].value;
          Caption[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              CaptionElement.innerHTML = event.target.value;
            } else {
              CaptionElement.innerHTML = "";
            }
          });
        }

      }
    }
  };
})(Camaleon)
