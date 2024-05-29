((ResponsiveLayout) => {
  Drupal.behaviors.updateSectionStyle = {  
    attach: function (context, settings) {       
      const formElement = document.getElementsByClassName("layout-builder-configure-section");
      if (formElement !== undefined && formElement[0] !== undefined) {
        const sectionUpdateID = formElement[0].getAttribute('data-layout-builder-target-highlight-id');
        const sectionElement = document.querySelectorAll(`[data-layout-builder-highlight-id=${CSS.escape(sectionUpdateID)}]`);
        if (sectionElement[0].classList.contains('rlayout')) {
            /** TITLE **/ 
          // Title color.
          const sectionTitleColor = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-title-color"]');
          const customSectionTitleColor = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-title-custom-color"]');

          if (sectionTitleColor.length !== 0 &&
            sectionTitleColor !== undefined &&
            customSectionTitleColor !== undefined) {
            sectionTitleColor[0].addEventListener("change", (event) => {
              if (event.target.value !== 'customColor' && event.target.value !== 'default') {
                sectionElement[0].style.setProperty('--sectionTitleColor', `var(--bt--${event.target.value})`);
              } else if (event.target.value === 'customColor'){
                sectionElement[0].style.setProperty('--sectionTitleColor', customSectionTitleColor[0].value );
              }
              if (event.target.value === 'default') {
                sectionElement[0].style.removeProperty('--sectionTitleColor');
              }
            });
      
            customSectionTitleColor[0].addEventListener("change", (event) => {
              sectionElement[0].style.setProperty('--sectionTitleColor', event.target.value );
            });
          }
        
          // Title font family.
          const sectionTitleFontFamily = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-title-font-family"]');      
          if (sectionTitleFontFamily.length !== 0 && sectionTitleFontFamily !== undefined) {
            sectionTitleFontFamily[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                let fontName = event.target.value;
                sectionElement[0].style.setProperty('--sectionTitleFontFamily', fontName.replace("-", " "));
              } else {
                sectionElement[0].style.removeProperty('--sectionTitleFontFamily');
              }
            });
          }

          // Title font size.
          const xsSectionTitleFontSize = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-section-xs-title-font-size"]');
          if (xsSectionTitleFontSize.length !== 0 && xsSectionTitleFontSize !== undefined) {
            xsSectionTitleFontSize[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xsSectionTitleFontSize', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionTitleFontSize');
                sectionElement[0].style.removeProperty('--sectionTitleFontSize');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionTitleFontSize = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-section-sm-title-font-size"]');
          if (smSectionTitleFontSize.length !== 0 && smSectionTitleFontSize !== undefined) { 
            smSectionTitleFontSize[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--smSectionTitleFontSize', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionTitleFontSize');
                sectionElement[0].style.removeProperty('--sectionTitleFontSize');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionTitleFontSize = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-section-md-title-font-size"]');
          if (mdSectionTitleFontSize.length !== 0 && mdSectionTitleFontSize !== undefined) {
            mdSectionTitleFontSize[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--mdSectionTitleFontSize', event.target.value);
              }  else {
                sectionElement[0].style.removeProperty('--mdSectionTitleFontSize');
                sectionElement[0].style.removeProperty('--sectionTitleFontSize');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionTitleFontSize = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-section-lg-title-font-size"]');
          if (lgSectionTitleFontSize.length !== 0 && lgSectionTitleFontSize !== undefined) {
            lgSectionTitleFontSize[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--lgSectionTitleFontSize', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionTitleFontSize');
                sectionElement[0].style.removeProperty('--sectionTitleFontSize');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xlSectionTitleFontSize = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-section-xl-title-font-size"]');
          if (xlSectionTitleFontSize.length !== 0 && xlSectionTitleFontSize !== undefined) {
            xlSectionTitleFontSize[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xlSectionTitleFontSize', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionTitleFontSize');
                sectionElement[0].style.removeProperty('--sectionTitleFontSize');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionTitleFontSize = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-section-xxl-title-font-size"]');
          if (xxlSectionTitleFontSize.length !== 0 && xxlSectionTitleFontSize !== undefined) {
            xxlSectionTitleFontSize[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xxlSectionTitleFontSize', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionTitleFontSize');
                sectionElement[0].style.removeProperty('--sectionTitleFontSize');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          // Title max-width.
          const xsSectionTitleMaxWidth = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-section-xs-title-max-width"]');
          xsSectionTitleMaxWidth[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--xsSectionTitleMaxWidth', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xsSectionTitleMaxWidth');
              sectionElement[0].style.removeProperty('--sectionTitleMaxWidth');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const smSectionTitleMaxWidth = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-section-sm-title-max-width"]');
          smSectionTitleMaxWidth[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--smSectionTitleMaxWidth', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--smSectionTitleMaxWidth');
              sectionElement[0].style.removeProperty('--sectionTitleMaxWidth');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const mdSectionTitleMaxWidth = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-section-md-title-max-width"]');
          mdSectionTitleMaxWidth[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--mdSectionTitleMaxWidth', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--mdSectionTitleMaxWidth');
              sectionElement[0].style.removeProperty('--sectionTitleMaxWidth');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const lgSectionTitleMaxWidth = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-section-lg-title-max-width"]');
          lgSectionTitleMaxWidth[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--lgSectionTitleMaxWidth', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--lgSectionTitleMaxWidth');
              sectionElement[0].style.removeProperty('--sectionTitleMaxWidth');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const xlSectionTitleMaxWidth = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-section-xl-title-max-width"]');
          xlSectionTitleMaxWidth[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--xlSectionTitleMaxWidth', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xlSectionTitleMaxWidth');
              sectionElement[0].style.removeProperty('--sectionTitleMaxWidth');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const xxlSectionTitleMaxWidth = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-section-xxl-title-max-width"]');
          xxlSectionTitleMaxWidth[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--xxlSectionTitleMaxWidth', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xxlSectionTitleMaxWidth');
              sectionElement[0].style.removeProperty('--sectionTitleMaxWidth');
            }
            ResponsiveLayout.layoutsCallback();
          });
      
          // Title margin
          const xsSectionTitleMargin = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-section-xs-title-margin"]');
          xsSectionTitleMargin[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--xsSectionTitleMargin', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xsSectionTitleMargin');
              sectionElement[0].style.removeProperty('--sectionTitleMargin');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const smSectionTitleMargin = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-section-sm-title-margin"]');
          smSectionTitleMargin[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--smSectionTitleMargin', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--smSectionTitleMargin');
              sectionElement[0].style.removeProperty('--sectionTitleMargin');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const mdSectionTitleMargin = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-section-md-title-margin"]');
          mdSectionTitleMargin[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--mdSectionTitleMargin', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--mdSectionTitleMargin');
              sectionElement[0].style.removeProperty('--sectionTitleMargin');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const lgSectionTitleMargin = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-section-lg-title-margin"]');
          lgSectionTitleMargin[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--lgSectionTitleMargin', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--lgSectionTitleMargin');
              sectionElement[0].style.removeProperty('--sectionTitleMargin');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const xlSectionTitleMargin = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-section-xl-title-margin"]');
          xlSectionTitleMargin[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--xlSectionTitleMargin', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xlSectionTitleMargin');
              sectionElement[0].style.removeProperty('--sectionTitleMargin');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const xxlSectionTitleMargin = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-section-xxl-title-margin"]');
          xxlSectionTitleMargin[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--xxlSectionTitleMargin', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xxlSectionTitleMargin');
              sectionElement[0].style.removeProperty('--sectionTitleMargin');
            }
            ResponsiveLayout.layoutsCallback();
          });

          /** TITLE ALIGN **/
          const xsSectionTitleAlign = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-section-xs-title-align"]');
          xsSectionTitleAlign[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--xsSectionTitleAlign', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xsSectionTitleAlign');
              sectionElement[0].style.removeProperty('--sectionTitleAlign');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const smSectionTitleAlign = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-section-sm-title-align"]');
          smSectionTitleAlign[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--smSectionTitleAlign', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--smSectionTitleAlign');
              sectionElement[0].style.removeProperty('--sectionTitleAlign');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const mdSectionTitleAlign = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-section-md-title-align"]');
          mdSectionTitleAlign[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--mdSectionTitleAlign', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--mdSectionTitleAlign');
              sectionElement[0].style.removeProperty('--sectionTitleAlign');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const lgSectionTitleAlign = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-section-lg-title-align"]');
          lgSectionTitleAlign[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--lgSectionTitleAlign', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--lgSectionTitleAlign');
              sectionElement[0].style.removeProperty('--sectionTitleAlign');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const xlSectionTitleAlign = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-section-xl-title-align"]');
          xlSectionTitleAlign[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--xlSectionTitleAlign', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xlSectionTitleAlign');
              sectionElement[0].style.removeProperty('--sectionTitleAlign');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const xxlSectionTitleAlign = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-section-xxl-title-align"]');
          xxlSectionTitleAlign[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--xxlSectionTitleAlign', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xxlSectionTitleAlign');
              sectionElement[0].style.removeProperty('--sectionTitleAlign');
            }
            ResponsiveLayout.layoutsCallback();
          });

          /** BACKGROUND COLOR**/ 
          const sectionBackgroundColor = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-background-color"]');
          const customSectionBackgroundColor = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-background-custom-color"]');

          if (sectionBackgroundColor.length !== 0 &&
            sectionBackgroundColor !== undefined &&
            customSectionBackgroundColor !== undefined) {
            sectionBackgroundColor[0].addEventListener("change", (event) => {
              if (event.target.value !== 'customColor' && event.target.value !== 'default') {
                sectionElement[0].style.setProperty('--sectionBackgroundColor', `var(--bt--${event.target.value})`);
              } else if (event.target.value === 'customColor'){
                sectionElement[0].style.setProperty('--sectionBackgroundColor', customSectionBackgroundColor[0].value );
              }
              if (event.target.value === 'default') {
                sectionElement[0].style.removeProperty('--sectionBackgroundColor');
              }
            });
      
            customSectionBackgroundColor[0].addEventListener("change", (event) => {
              sectionElement[0].style.setProperty('--sectionBackgroundColor', event.target.value );
            });
          }

          /** CONTAINER **/
          // Container full width
          const xsSectionPaddingX = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-container-xs-full-select"]');      
          xsSectionPaddingX[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--xsSectionPaddingX', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xsSectionPaddingX');
              sectionElement[0].style.removeProperty('--sectionPaddingX');
            }
            sectionElement[0].style.removeProperty('--xsSectionWidth');
            sectionElement[0].style.removeProperty('--sectionWidth');
            ResponsiveLayout.layoutsCallback();
          });

          const smSectionPaddingX = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-container-sm-full-select"]');
          smSectionPaddingX[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--smSectionPaddingX', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--smSectionPaddingX');
              sectionElement[0].style.removeProperty('--sectionPaddingX');
            }
            sectionElement[0].style.removeProperty('--smSectionWidth');
            sectionElement[0].style.removeProperty('--sectionWidth');
            ResponsiveLayout.layoutsCallback();
          });

          const mdSectionPaddingX = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-container-md-full-select"]');
          mdSectionPaddingX[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--mdSectionPaddingX', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--mdSectionPaddingX');
              sectionElement[0].style.removeProperty('--sectionPaddingX');
            }
            sectionElement[0].style.removeProperty('--mdSectionWidth');
            sectionElement[0].style.removeProperty('--sectionWidth');
            ResponsiveLayout.layoutsCallback();
          });

          const lgSectionPaddingX = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-container-lg-full-select"]');
          lgSectionPaddingX[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--lgSectionPaddingX', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--lgSectionPaddingX');
              sectionElement[0].style.removeProperty('--sectionPaddingX');
            }
            sectionElement[0].style.removeProperty('--lgSectionWidth');
            sectionElement[0].style.removeProperty('--sectionWidth');
            ResponsiveLayout.layoutsCallback();
          });

          const xlSectionPaddingX = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-container-xl-full-select"]');
          xlSectionPaddingX[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--xlSectionPaddingX', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xlSectionPaddingX');
              sectionElement[0].style.removeProperty('--sectionPaddingX');
            }
            sectionElement[0].style.removeProperty('--xxlSectionWidth');
            sectionElement[0].style.removeProperty('--sectionWidth');
            ResponsiveLayout.layoutsCallback();
          });

          const xxlSectionPaddingX = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-container-xxl-full-select"]');
          xxlSectionPaddingX[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--xxlSectionPaddingX', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xxlSectionPaddingX');
              sectionElement[0].style.removeProperty('--sectionPaddingX');
            }
            sectionElement[0].style.removeProperty('--xxlSectionWidth');
            sectionElement[0].style.removeProperty('--sectionWidth');
            ResponsiveLayout.layoutsCallback();
          });

          // Container box width
          const xsSectionWidth = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-container-xs-box-select"]');      
          xsSectionWidth[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--xsSectionWidth', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xsSectionWidth');
              sectionElement[0].style.removeProperty('--sectionWidth');
            }
            sectionElement[0].style.removeProperty('--xsSectionPaddingX');
            sectionElement[0].style.removeProperty('--sectionPaddingX');
            ResponsiveLayout.layoutsCallback();
          });

          const smSectionWidth = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-container-sm-box-select"]');
          smSectionWidth[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--smSectionWidth', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--smSectionWidth');
              sectionElement[0].style.removeProperty('--sectionWidth');
            }
            sectionElement[0].style.removeProperty('--smSectionPaddingX');
            sectionElement[0].style.removeProperty('--sectionPaddingX');
            ResponsiveLayout.layoutsCallback();
          });

          const mdSectionWidth = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-container-md-box-select"]');
          mdSectionWidth[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--mdSectionWidth', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--mdSectionWidth');
              sectionElement[0].style.removeProperty('--sectionWidth');
            }
            sectionElement[0].style.removeProperty('--mdSectionPaddingX');
            sectionElement[0].style.removeProperty('--sectionPaddingX');
            ResponsiveLayout.layoutsCallback();
          });

          const lgSectionWidth = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-container-lg-box-select"]');
          lgSectionWidth[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--lgSectionWidth', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--lgSectionWidth');
              sectionElement[0].style.removeProperty('--sectionWidth');
            }
            sectionElement[0].style.removeProperty('--lgSectionPaddingX');
            sectionElement[0].style.removeProperty('--sectionPaddingX');
            ResponsiveLayout.layoutsCallback();
          });

          const xlSectionWidth = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-container-xl-box-select"]');
          xlSectionWidth[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--xlSectionWidth', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xlSectionWidth');
              sectionElement[0].style.removeProperty('--sectionWidth');
            }
            sectionElement[0].style.removeProperty('--xlSectionPaddingX');
            sectionElement[0].style.removeProperty('--sectionPaddingX');
            ResponsiveLayout.layoutsCallback();
          });

          const xxlSectionWidth = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-container-xxl-box-select"]');
          xxlSectionWidth[0].addEventListener("change", (event) => {
            if (event.target.value !== "default") {
              sectionElement[0].style.setProperty('--xxlSectionWidth', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xxlSectionWidth');
              sectionElement[0].style.removeProperty('--sectionWidth');
            }
            sectionElement[0].style.removeProperty('--xxlSectionPaddingX');
            sectionElement[0].style.removeProperty('--sectionPaddingX');
            ResponsiveLayout.layoutsCallback();
          });
          
          /** CONTAINER SECTION HEIGHT **/
          const xsSectionHeight = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-container-xs-height"]');
          xsSectionHeight[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--xsSectionHeight', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xsSectionHeight');
              sectionElement[0].style.removeProperty('--sectionHeight');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const smSectionHeight = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-container-sm-height"]');
          smSectionHeight[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--smSectionHeight', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--smSectionHeight');
              sectionElement[0].style.removeProperty('--sectionHeight');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const mdSectionHeight = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-container-md-height"]');
          mdSectionHeight[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--mdSectionHeight', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--mdSectionHeight');
              sectionElement[0].style.removeProperty('--sectionHeight');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const lgSectionHeight = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-container-lg-height"]');
          lgSectionHeight[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--lgSectionHeight', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--lgSectionHeight');
              sectionElement[0].style.removeProperty('--sectionHeight');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const xlSectionHeight = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-container-xl-height"]');
          xlSectionHeight[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--xlSectionHeight', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xlSectionHeight');
              sectionElement[0].style.removeProperty('--sectionHeight');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const xxlSectionHeight = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-container-xxl-height"]');
          xxlSectionHeight[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--xxlSectionHeight', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xxlSectionHeight');
              sectionElement[0].style.removeProperty('--sectionHeight');
            }
            ResponsiveLayout.layoutsCallback();
          });

          /** CONTAINER SECTION PADDING TOP **/
          const xsSectionPaddingTop = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-container-padding-xs-padding-top"]');
          xsSectionPaddingTop[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--xsSectionPaddingTop', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xsSectionPaddingTop');
              sectionElement[0].style.removeProperty('--sectionPaddingTop');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const smSectionPaddingTop = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-container-padding-sm-padding-top"]');
          smSectionPaddingTop[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--smSectionPaddingTop', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--smSectionPaddingTop');
              sectionElement[0].style.removeProperty('--sectionPaddingTop');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const mdSectionPaddingTop = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-container-padding-md-padding-top"]');
          mdSectionPaddingTop[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--mdSectionPaddingTop', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--mdSectionPaddingTop');
              sectionElement[0].style.removeProperty('--sectionPaddingTop');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const lgSectionPaddingTop = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-container-padding-lg-padding-top"]');
          lgSectionPaddingTop[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--lgSectionPaddingTop', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--lgSectionPaddingTop');
              sectionElement[0].style.removeProperty('--sectionPaddingTop');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const xlSectionPaddingTop = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-container-padding-xl-padding-top"]');
          xlSectionPaddingTop[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--xlSectionPaddingTop', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xlSectionPaddingTop');
              sectionElement[0].style.removeProperty('--sectionPaddingTop');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const xxlSectionPaddingTop = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-container-padding-xxl-padding-top"]');
          xxlSectionPaddingTop[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--xxlSectionPaddingTop', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xxlSectionPaddingTop');
              sectionElement[0].style.removeProperty('--sectionPaddingTop');
            }
            ResponsiveLayout.layoutsCallback();
          });

          /** CONTAINER SECTION PADDING BOTTOM **/
          const xsSectionPaddingBottom = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-container-padding-xs-padding-bottom"]');
          xsSectionPaddingBottom[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--xsSectionPaddingBottom', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xsSectionPaddingBottom');
              sectionElement[0].style.removeProperty('--sectionPaddingBottom');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const smSectionPaddingBottom = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-container-padding-sm-padding-bottom"]');
          smSectionPaddingBottom[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--smSectionPaddingBottom', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--smSectionPaddingBottom');
              sectionElement[0].style.removeProperty('--sectionPaddingBottom');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const mdSectionPaddingBottom = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-container-padding-md-padding-bottom"]');
          mdSectionPaddingBottom[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--mdSectionPaddingBottom', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--mdSectionPaddingBottom');
              sectionElement[0].style.removeProperty('--sectionPaddingBottom');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const lgSectionPaddingBottom = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-container-padding-lg-padding-bottom"]');
          lgSectionPaddingBottom[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--lgSectionPaddingBottom', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--lgSectionPaddingBottom');
              sectionElement[0].style.removeProperty('--sectionPaddingBottom');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const xlSectionPaddingBottom = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-container-padding-xl-padding-bottom"]');
          xlSectionPaddingBottom[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--xlSectionPaddingBottom', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xlSectionPaddingBottom');
              sectionElement[0].style.removeProperty('--sectionPaddingBottom');
            }
            ResponsiveLayout.layoutsCallback();
          });

          const xxlSectionPaddingBottom = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-container-padding-xxl-padding-bottom"]');
          xxlSectionPaddingBottom[0].addEventListener("change", (event) => {
            if (event.target.value !== "") {
              sectionElement[0].style.setProperty('--xxlSectionPaddingBottom', event.target.value);
            } else {
              sectionElement[0].style.removeProperty('--xxlSectionPaddingBottom');
              sectionElement[0].style.removeProperty('--sectionPaddingBottom');
            }
            ResponsiveLayout.layoutsCallback();
          });

          /** ONE COLUMN COLUMN 1 **/
          /** ONE COLUMN COLUMN 1 GRID ROW **/
          const xsSectionColumn1GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-column-1-grid-row"]');
          if (xsSectionColumn1GridRow.length !== 0 &&
            xsSectionColumn1GridRow !== undefined &&
            xsSectionColumn1GridRow !== undefined) {
            xsSectionColumn1GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xsSectionColumn1GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn1GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn1GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumn1GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-column-1-grid-row"]');
          if (smSectionColumn1GridRow.length !== 0 &&
            smSectionColumn1GridRow !== undefined &&
            smSectionColumn1GridRow !== undefined) {       
            smSectionColumn1GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--smSectionColumn1GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn1GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn1GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumn1GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-column-1-grid-row"]');
          if (mdSectionColumn1GridRow.length !== 0 &&
            mdSectionColumn1GridRow !== undefined &&
            mdSectionColumn1GridRow !== undefined) {
            mdSectionColumn1GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--mdSectionColumn1GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn1GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn1GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumn1GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-column-1-grid-row"]');
          if (lgSectionColumn1GridRow.length !== 0 &&
            lgSectionColumn1GridRow !== undefined &&
            lgSectionColumn1GridRow !== undefined) {
            lgSectionColumn1GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--lgSectionColumn1GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn1GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn1GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }
          
          const xlSectionColumn1GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-column-1-grid-row"]');
          if (xlSectionColumn1GridRow.length !== 0 &&
            xlSectionColumn1GridRow !== undefined &&
            xlSectionColumn1GridRow !== undefined) {
            xlSectionColumn1GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xlSectionColumn1GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn1GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn1GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumn1GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-column-1-grid-row"]');
          if (xxlSectionColumn1GridRow.length !== 0 &&
            xxlSectionColumn1GridRow !== undefined &&
            xxlSectionColumn1GridRow !== undefined) {
            xxlSectionColumn1GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xxlSectionColumn1GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn1GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn1GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          /** ONE COLUMN COLUMN 1 ALIGN ITEMS **/
          const xsSectionColumn1AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-column-1-align-items"]');
          if (xsSectionColumn1AlignItems.length !== 0 &&
            xsSectionColumn1AlignItems !== undefined &&
            xsSectionColumn1AlignItems !== undefined) {
            xsSectionColumn1AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xsSectionColumn1AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn1AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn1AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumn1AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-column-1-align-items"]');
          if (smSectionColumn1AlignItems.length !== 0 &&
            smSectionColumn1AlignItems !== undefined &&
            smSectionColumn1AlignItems !== undefined) {
            smSectionColumn1AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--smSectionColumn1AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn1AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn1AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumn1AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-column-1-align-items"]');
          if (mdSectionColumn1AlignItems.length !== 0 &&
            mdSectionColumn1AlignItems !== undefined &&
            mdSectionColumn1AlignItems !== undefined) {
            mdSectionColumn1AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--mdSectionColumn1AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn1AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn1AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumn1AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-column-1-align-items"]');
          if (lgSectionColumn1AlignItems.length !== 0 &&
            lgSectionColumn1AlignItems !== undefined &&
            lgSectionColumn1AlignItems !== undefined) {
            lgSectionColumn1AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--lgSectionColumn1AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn1AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn1AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xlSectionColumn1AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-column-1-align-items"]');
          if (xlSectionColumn1AlignItems.length !== 0 &&
            xlSectionColumn1AlignItems !== undefined &&
            xlSectionColumn1AlignItems !== undefined) {
            xlSectionColumn1AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xlSectionColumn1AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn1AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn1AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumn1AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-column-1-align-items"]');
          if (xxlSectionColumn1AlignItems.length !== 0 &&
            xxlSectionColumn1AlignItems !== undefined &&
            xxlSectionColumn1AlignItems !== undefined) {
            xxlSectionColumn1AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xxlSectionColumn1AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn1AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn1AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          /** COLUMNS **/
          // Columns size 
          const xsSectionColumnsSize = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-columns-size"]');
          if (xsSectionColumnsSize.length !== 0 &&
            xsSectionColumnsSize !== undefined &&
            xsSectionColumnsSize !== undefined) {
            xsSectionColumnsSize[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xsSectionColumnsSize', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumnsSize');
                sectionElement[0].style.removeProperty('--sectionColumnsSize');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumnsSize = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-columns-size"]');
          if (smSectionColumnsSize.length !== 0 &&
            smSectionColumnsSize !== undefined &&
            smSectionColumnsSize !== undefined) {
            smSectionColumnsSize[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--smSectionColumnsSize', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumnsSize');
                sectionElement[0].style.removeProperty('--sectionColumnsSize');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumnsSize = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-columns-size"]');
          if (mdSectionColumnsSize.length !== 0 &&
            mdSectionColumnsSize !== undefined &&
            mdSectionColumnsSize !== undefined) {
            mdSectionColumnsSize[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--mdSectionColumnsSize', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumnsSize');
                sectionElement[0].style.removeProperty('--sectionColumnsSize');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumnsSize = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-columns-size"]');
          if (lgSectionColumnsSize.length !== 0 &&
            lgSectionColumnsSize !== undefined &&
            lgSectionColumnsSize !== undefined) {
            lgSectionColumnsSize[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--lgSectionColumnsSize', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumnsSize');
                sectionElement[0].style.removeProperty('--sectionColumnsSize');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xlSectionColumnsSize = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-columns-size"]');
          if (xlSectionColumnsSize.length !== 0 &&
            xlSectionColumnsSize !== undefined &&
            xlSectionColumnsSize !== undefined) {
            xlSectionColumnsSize[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xlSectionColumnsSize', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumnsSize');
                sectionElement[0].style.removeProperty('--sectionColumnsSize');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumnsSize = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-columns-size"]');
          if (xxlSectionColumnsSize.length !== 0 &&
            xxlSectionColumnsSize !== undefined &&
            xxlSectionColumnsSize !== undefined) {
            xxlSectionColumnsSize[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xxlSectionColumnsSize', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumnsSize');
                sectionElement[0].style.removeProperty('--sectionColumnsSize');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          // Columns Gaps
          const xsSectionColumnsGap = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-gap"]');
          if (xsSectionColumnsGap.length !== 0 &&
            xsSectionColumnsGap !== undefined &&
            xsSectionColumnsGap !== undefined) {
            xsSectionColumnsGap[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xsSectionColumnsGap', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumnsGap');
                sectionElement[0].style.removeProperty('--sectionColumnsGap');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumnsGap = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-gap"]');
          if (smSectionColumnsGap.length !== 0 &&
            smSectionColumnsGap !== undefined &&
            smSectionColumnsGap !== undefined) {
            smSectionColumnsGap[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--smSectionColumnsGap', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumnsGap');
                sectionElement[0].style.removeProperty('--sectionColumnsGap');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumnsGap = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-gap"]');
          if (mdSectionColumnsGap.length !== 0 &&
            mdSectionColumnsGap !== undefined &&
            mdSectionColumnsGap !== undefined) {
            mdSectionColumnsGap[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--mdSectionColumnsGap', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumnsGap');
                sectionElement[0].style.removeProperty('--sectionColumnsGap');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumnsGap = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-gap"]');
          if (lgSectionColumnsGap.length !== 0 &&
            lgSectionColumnsGap !== undefined &&
            lgSectionColumnsGap !== undefined) {
            lgSectionColumnsGap[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--lgSectionColumnsGap', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumnsGap');
                sectionElement[0].style.removeProperty('--sectionColumnsGap');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xlSectionColumnsGap = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-gap"]');
          if (xlSectionColumnsGap.length !== 0 &&
            xlSectionColumnsGap !== undefined &&
            xlSectionColumnsGap !== undefined) {
            xlSectionColumnsGap[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xlSectionColumnsGap', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumnsGap');
                sectionElement[0].style.removeProperty('--sectionColumnsGap');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumnsGap = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-gap"]');
          if (xxlSectionColumnsGap.length !== 0 &&
            xxlSectionColumnsGap !== undefined &&
            xxlSectionColumnsGap !== undefined) {
            xxlSectionColumnsGap[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xxlSectionColumnsGap', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumnsGap');
                sectionElement[0].style.removeProperty('--sectionColumnsGap');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          /** COLUMN 1 **/
          // Background color
          const sectionColumn1BackgroundColor = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-columns-column-1-background-color"]');
          const customSectionColumn1BackgroundColor = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-columns-column-1-background-custom-color"]');

          if (sectionColumn1BackgroundColor.length !== 0 &&
            sectionColumn1BackgroundColor !== undefined &&
            customSectionColumn1BackgroundColor !== undefined) {
            sectionColumn1BackgroundColor[0].addEventListener("change", (event) => {
              if (event.target.value !== 'customColor' && event.target.value !== 'default') {
                sectionElement[0].style.setProperty('--sectionColumn1BackgroundColor', `var(--bt--${event.target.value})`);
              } else if (event.target.value === 'customColor'){
                sectionElement[0].style.setProperty('--sectionColumn1BackgroundColor', customSectionColumn1BackgroundColor[0].value );
              }
              if (event.target.value === 'default') {
                sectionElement[0].style.removeProperty('--sectionColumn1BackgroundColor');
              }
            });
      
            customSectionColumn1BackgroundColor[0].addEventListener("change", (event) => {
              sectionElement[0].style.setProperty('--sectionColumn1BackgroundColor', event.target.value );
            });
          }

          // Order
          const xsSectionColumn1Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-1-order"]');
          if (xsSectionColumn1Order.length !== 0 &&
            xsSectionColumn1Order !== undefined &&
            xsSectionColumn1Order !== undefined) {
            xsSectionColumn1Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xsSectionColumn1Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn1Order');
                sectionElement[0].style.removeProperty('--sectionColumn1Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumn1Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-1-order"]');
          if (smSectionColumn1Order.length !== 0 &&
            smSectionColumn1Order !== undefined &&
            smSectionColumn1Order !== undefined) {
            smSectionColumn1Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--smSectionColumn1Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn1Order');
                sectionElement[0].style.removeProperty('--sectionColumn1Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumn1Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-1-order"]');
          if (mdSectionColumn1Order.length !== 0 &&
            mdSectionColumn1Order !== undefined &&
            mdSectionColumn1Order !== undefined) {
            mdSectionColumn1Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--mdSectionColumn1Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn1Order');
                sectionElement[0].style.removeProperty('--sectionColumn1Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumn1Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-1-order"]');
          if (lgSectionColumn1Order.length !== 0 &&
            lgSectionColumn1Order !== undefined &&
            lgSectionColumn1Order !== undefined) {
            lgSectionColumn1Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--lgSectionColumn1Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn1Order');
                sectionElement[0].style.removeProperty('--sectionColumn1Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xlSectionColumn1Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-1-order"]');
          if (xlSectionColumn1Order.length !== 0 &&
            xlSectionColumn1Order !== undefined &&
            xlSectionColumn1Order !== undefined) {
            xlSectionColumn1Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xlSectionColumn1Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn1Order');
                sectionElement[0].style.removeProperty('--sectionColumn1Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumn1Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-1-order"]');
          if (xxlSectionColumn1Order.length !== 0 &&
            xxlSectionColumn1Order !== undefined &&
            xxlSectionColumn1Order !== undefined) {
            xxlSectionColumn1Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xxlSectionColumn1Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn1Order');
                sectionElement[0].style.removeProperty('--sectionColumn1Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          // Grid row
          const xsSectionColumns1GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-1-grid-row"]');
          if (xsSectionColumns1GridRow.length !== 0 &&
            xsSectionColumns1GridRow !== undefined &&
            xsSectionColumns1GridRow !== undefined) {
            xsSectionColumns1GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xsSectionColumn1GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn1GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn1GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumns1GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-1-grid-row"]');
          if (smSectionColumns1GridRow.length !== 0 &&
            smSectionColumns1GridRow !== undefined &&
            smSectionColumns1GridRow !== undefined) {       
            smSectionColumns1GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--smSectionColumn1GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn1GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn1GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumns1GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-1-grid-row"]');
          if (mdSectionColumns1GridRow.length !== 0 &&
            mdSectionColumns1GridRow !== undefined &&
            mdSectionColumns1GridRow !== undefined) {
            mdSectionColumns1GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--mdSectionColumn1GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn1GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn1GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumns1GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-1-grid-row"]');
          if (lgSectionColumns1GridRow.length !== 0 &&
            lgSectionColumns1GridRow !== undefined &&
            lgSectionColumns1GridRow !== undefined) {
            lgSectionColumns1GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--lgSectionColumn1GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn1GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn1GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }
          
          const xlSectionColumns1GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-1-grid-row"]');
          if (xlSectionColumns1GridRow.length !== 0 &&
            xlSectionColumns1GridRow !== undefined &&
            xlSectionColumns1GridRow !== undefined) {
            xlSectionColumns1GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xlSectionColumn1GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn1GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn1GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumns1GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-1-grid-row"]');
          if (xxlSectionColumns1GridRow.length !== 0 &&
            xxlSectionColumns1GridRow !== undefined &&
            xxlSectionColumns1GridRow !== undefined) {
            xxlSectionColumns1GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xxlSectionColumn1GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn1GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn1GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          // Align items
          const xsSectionColumns1AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-1-align-items"]');
          if (xsSectionColumns1AlignItems.length !== 0 &&
            xsSectionColumns1AlignItems !== undefined &&
            xsSectionColumns1AlignItems !== undefined) {
            xsSectionColumns1AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xsSectionColumn1AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn1AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn1AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumns1AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-1-align-items"]');
          if (smSectionColumns1AlignItems.length !== 0 &&
            smSectionColumns1AlignItems !== undefined &&
            smSectionColumns1AlignItems !== undefined) {
            smSectionColumns1AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--smSectionColumn1AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn1AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn1AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumns1AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-1-align-items"]');
          if (mdSectionColumns1AlignItems.length !== 0 &&
            mdSectionColumns1AlignItems !== undefined &&
            mdSectionColumns1AlignItems !== undefined) {
            mdSectionColumns1AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--mdSectionColumn1AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn1AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn1AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumns1AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-1-align-items"]');
          if (lgSectionColumns1AlignItems.length !== 0 &&
            lgSectionColumns1AlignItems !== undefined &&
            lgSectionColumns1AlignItems !== undefined) {
            lgSectionColumns1AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--lgSectionColumn1AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn1AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn1AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xlSectionColumns1AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-1-align-items"]');
          if (xlSectionColumns1AlignItems.length !== 0 &&
            xlSectionColumns1AlignItems !== undefined &&
            xlSectionColumns1AlignItems !== undefined) {
            xlSectionColumns1AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xlSectionColumn1AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn1AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn1AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumns1AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-1-align-items"]');
          if (xxlSectionColumns1AlignItems.length !== 0 &&
            xxlSectionColumns1AlignItems !== undefined &&
            xxlSectionColumns1AlignItems !== undefined) {
            xxlSectionColumns1AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xxlSectionColumn1AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn1AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn1AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          /** COLUMN 2 **/
          // Background color
          const sectionColumn2BackgroundColor = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-columns-column-2-background-color"]');
          const customSectionColumn2BackgroundColor = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-columns-column-2-background-custom-color"]');

          if (sectionColumn2BackgroundColor.length !== 0 &&
            sectionColumn2BackgroundColor !== undefined &&
            customSectionColumn2BackgroundColor !== undefined) {
            sectionColumn2BackgroundColor[0].addEventListener("change", (event) => {
              if (event.target.value !== 'customColor' && event.target.value !== 'default') {
                sectionElement[0].style.setProperty('--sectionColumn2BackgroundColor', `var(--bt--${event.target.value})`);
              } else if (event.target.value === 'customColor'){
                sectionElement[0].style.setProperty('--sectionColumn2BackgroundColor', customSectionColumn2BackgroundColor[0].value );
              }
              if (event.target.value === 'default') {
                sectionElement[0].style.removeProperty('--sectionColumn2BackgroundColor');
              }
            });
      
            customSectionColumn2BackgroundColor[0].addEventListener("change", (event) => {
              sectionElement[0].style.setProperty('--sectionColumn2BackgroundColor', event.target.value );
            });
          }

          // Order
          const xsSectionColumn2Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-2-order"]');
          if (xsSectionColumn2Order.length !== 0 &&
            xsSectionColumn2Order !== undefined &&
            xsSectionColumn2Order !== undefined) {
            xsSectionColumn2Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xsSectionColumn2Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn2Order');
                sectionElement[0].style.removeProperty('--sectionColumn2Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumn2Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-2-order"]');
          if (smSectionColumn2Order.length !== 0 &&
            smSectionColumn2Order !== undefined &&
            smSectionColumn2Order !== undefined) {
            smSectionColumn2Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--smSectionColumn2Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn2Order');
                sectionElement[0].style.removeProperty('--sectionColumn2Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumn2Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-2-order"]');
          if (mdSectionColumn2Order.length !== 0 &&
            mdSectionColumn2Order !== undefined &&
            mdSectionColumn2Order !== undefined) {
            mdSectionColumn2Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--mdSectionColumn2Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn2Order');
                sectionElement[0].style.removeProperty('--sectionColumn2Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumn2Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-2-order"]');
          if (lgSectionColumn2Order.length !== 0 &&
            lgSectionColumn2Order !== undefined &&
            lgSectionColumn2Order !== undefined) {
            lgSectionColumn2Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--lgSectionColumn2Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn2Order');
                sectionElement[0].style.removeProperty('--sectionColumn2Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xlSectionColumn2Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-2-order"]');
          if (xlSectionColumn2Order.length !== 0 &&
            xlSectionColumn2Order !== undefined &&
            xlSectionColumn2Order !== undefined) {
            xlSectionColumn2Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xlSectionColumn2Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn2Order');
                sectionElement[0].style.removeProperty('--sectionColumn2Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumn2Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-2-order"]');
          if (xxlSectionColumn2Order.length !== 0 &&
            xxlSectionColumn2Order !== undefined &&
            xxlSectionColumn2Order !== undefined) {
            xxlSectionColumn2Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xxlSectionColumn2Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn2Order');
                sectionElement[0].style.removeProperty('--sectionColumn2Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          // Grid row
          const xsSectionColumns2GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-2-grid-row"]');
          if (xsSectionColumns2GridRow.length !== 0 &&
            xsSectionColumns2GridRow !== undefined &&
            xsSectionColumns2GridRow !== undefined) {
            xsSectionColumns2GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xsSectionColumn2GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn2GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn2GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumns2GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-2-grid-row"]');
          if (smSectionColumns2GridRow.length !== 0 &&
            smSectionColumns2GridRow !== undefined &&
            smSectionColumns2GridRow !== undefined) {       
            smSectionColumns2GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--smSectionColumn2GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn2GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn2GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumns2GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-2-grid-row"]');
          if (mdSectionColumns2GridRow.length !== 0 &&
            mdSectionColumns2GridRow !== undefined &&
            mdSectionColumns2GridRow !== undefined) {
            mdSectionColumns2GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--mdSectionColumn2GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn2GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn2GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumns2GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-2-grid-row"]');
          if (lgSectionColumns2GridRow.length !== 0 &&
            lgSectionColumns2GridRow !== undefined &&
            lgSectionColumns2GridRow !== undefined) {
            lgSectionColumns2GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--lgSectionColumn2GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn2GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn2GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }
          
          const xlSectionColumns2GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-2-grid-row"]');
          if (xlSectionColumns2GridRow.length !== 0 &&
            xlSectionColumns2GridRow !== undefined &&
            xlSectionColumns2GridRow !== undefined) {
            xlSectionColumns2GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xlSectionColumn2GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn2GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn2GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumns2GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-2-grid-row"]');
          if (xxlSectionColumns2GridRow.length !== 0 &&
            xxlSectionColumns2GridRow !== undefined &&
            xxlSectionColumns2GridRow !== undefined) {
            xxlSectionColumns2GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xxlSectionColumn2GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn2GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn2GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          // Align items
          const xsSectionColumns2AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-2-align-items"]');
          if (xsSectionColumns2AlignItems.length !== 0 &&
            xsSectionColumns2AlignItems !== undefined &&
            xsSectionColumns2AlignItems !== undefined) {
            xsSectionColumns2AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xsSectionColumn2AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn2AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn2AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumns2AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-2-align-items"]');
          if (smSectionColumns2AlignItems.length !== 0 &&
            smSectionColumns2AlignItems !== undefined &&
            smSectionColumns2AlignItems !== undefined) {
            smSectionColumns2AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--smSectionColumn2AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn2AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn2AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumns2AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-2-align-items"]');
          if (mdSectionColumns2AlignItems.length !== 0 &&
            mdSectionColumns2AlignItems !== undefined &&
            mdSectionColumns2AlignItems !== undefined) {
            mdSectionColumns2AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--mdSectionColumn2AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn2AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn2AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumns2AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-2-align-items"]');
          if (lgSectionColumns2AlignItems.length !== 0 &&
            lgSectionColumns2AlignItems !== undefined &&
            lgSectionColumns2AlignItems !== undefined) {
            lgSectionColumns2AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--lgSectionColumn2AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn2AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn2AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xlSectionColumns2AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-2-align-items"]');
          if (xlSectionColumns2AlignItems.length !== 0 &&
            xlSectionColumns2AlignItems !== undefined &&
            xlSectionColumns2AlignItems !== undefined) {
            xlSectionColumns2AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xlSectionColumn2AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn2AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn2AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumns2AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-2-align-items"]');
          if (xxlSectionColumns2AlignItems.length !== 0 &&
            xxlSectionColumns2AlignItems !== undefined &&
            xxlSectionColumns2AlignItems !== undefined) {
            xxlSectionColumns2AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xxlSectionColumn2AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn2AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn2AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          /** COLUMN 3 **/
          // Background color
          const sectionColumn3BackgroundColor = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-columns-column-3-background-color"]');
          const customSectionColumn3BackgroundColor = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-columns-column-3-background-custom-color"]');

          if (sectionColumn3BackgroundColor.length !== 0 &&
            sectionColumn3BackgroundColor !== undefined &&
            customSectionColumn3BackgroundColor !== undefined) {
            sectionColumn3BackgroundColor[0].addEventListener("change", (event) => {
              if (event.target.value !== 'customColor' && event.target.value !== 'default') {
                sectionElement[0].style.setProperty('--sectionColumn3BackgroundColor', `var(--bt--${event.target.value})`);
              } else if (event.target.value === 'customColor'){
                sectionElement[0].style.setProperty('--sectionColumn3BackgroundColor', customSectionColumn3BackgroundColor[0].value );
              }
              if (event.target.value === 'default') {
                sectionElement[0].style.removeProperty('--sectionColumn3BackgroundColor');
              }
            });
      
            customSectionColumn3BackgroundColor[0].addEventListener("change", (event) => {
              sectionElement[0].style.setProperty('--sectionColumn3BackgroundColor', event.target.value );
            });
          }

          // Order
          const xsSectionColumn3Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-3-order"]');
          if (xsSectionColumn3Order.length !== 0 &&
            xsSectionColumn3Order !== undefined &&
            xsSectionColumn3Order !== undefined) {
            xsSectionColumn3Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xsSectionColumn3Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn3Order');
                sectionElement[0].style.removeProperty('--sectionColumn3Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumn3Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-3-order"]');
          if (smSectionColumn3Order.length !== 0 &&
            smSectionColumn3Order !== undefined &&
            smSectionColumn3Order !== undefined) {
            smSectionColumn3Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--smSectionColumn3Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn3Order');
                sectionElement[0].style.removeProperty('--sectionColumn3Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumn3Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-3-order"]');
          if (mdSectionColumn3Order.length !== 0 &&
            mdSectionColumn3Order !== undefined &&
            mdSectionColumn3Order !== undefined) {
            mdSectionColumn3Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--mdSectionColumn3Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn3Order');
                sectionElement[0].style.removeProperty('--sectionColumn3Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumn3Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-3-order"]');
          if (lgSectionColumn3Order.length !== 0 &&
            lgSectionColumn3Order !== undefined &&
            lgSectionColumn3Order !== undefined) {
            lgSectionColumn3Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--lgSectionColumn3Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn3Order');
                sectionElement[0].style.removeProperty('--sectionColumn3Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xlSectionColumn3Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-3-order"]');
          if (xlSectionColumn3Order.length !== 0 &&
            xlSectionColumn3Order !== undefined &&
            xlSectionColumn3Order !== undefined) {
            xlSectionColumn3Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xlSectionColumn3Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn3Order');
                sectionElement[0].style.removeProperty('--sectionColumn3Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumn3Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-3-order"]');
          if (xxlSectionColumn3Order.length !== 0 &&
            xxlSectionColumn3Order !== undefined &&
            xxlSectionColumn3Order !== undefined) {
            xxlSectionColumn3Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xxlSectionColumn3Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn3Order');
                sectionElement[0].style.removeProperty('--sectionColumn3Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          // Grid row
          const xsSectionColumns3GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-3-grid-row"]');
          if (xsSectionColumns3GridRow.length !== 0 &&
            xsSectionColumns3GridRow !== undefined &&
            xsSectionColumns3GridRow !== undefined) {
            xsSectionColumns3GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xsSectionColumn3GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn3GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn3GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumns3GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-3-grid-row"]');
          if (smSectionColumns3GridRow.length !== 0 &&
            smSectionColumns3GridRow !== undefined &&
            smSectionColumns3GridRow !== undefined) {       
            smSectionColumns3GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--smSectionColumn3GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn3GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn3GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumns3GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-3-grid-row"]');
          if (mdSectionColumns3GridRow.length !== 0 &&
            mdSectionColumns3GridRow !== undefined &&
            mdSectionColumns3GridRow !== undefined) {
            mdSectionColumns3GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--mdSectionColumn3GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn3GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn3GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumns3GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-3-grid-row"]');
          if (lgSectionColumns3GridRow.length !== 0 &&
            lgSectionColumns3GridRow !== undefined &&
            lgSectionColumns3GridRow !== undefined) {
            lgSectionColumns3GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--lgSectionColumn3GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn3GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn3GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }
          
          const xlSectionColumns3GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-3-grid-row"]');
          if (xlSectionColumns3GridRow.length !== 0 &&
            xlSectionColumns3GridRow !== undefined &&
            xlSectionColumns3GridRow !== undefined) {
            xlSectionColumns3GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xlSectionColumn3GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn3GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn3GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumns3GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-3-grid-row"]');
          if (xxlSectionColumns3GridRow.length !== 0 &&
            xxlSectionColumns3GridRow !== undefined &&
            xxlSectionColumns3GridRow !== undefined) {
            xxlSectionColumns3GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xxlSectionColumn3GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn3GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn3GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          // Align items
          const xsSectionColumns3AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-3-align-items"]');
          if (xsSectionColumns3AlignItems.length !== 0 &&
            xsSectionColumns3AlignItems !== undefined &&
            xsSectionColumns3AlignItems !== undefined) {
            xsSectionColumns3AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xsSectionColumn3AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn3AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn3AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumns3AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-3-align-items"]');
          if (smSectionColumns3AlignItems.length !== 0 &&
            smSectionColumns3AlignItems !== undefined &&
            smSectionColumns3AlignItems !== undefined) {
            smSectionColumns3AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--smSectionColumn3AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn3AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn3AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumns3AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-3-align-items"]');
          if (mdSectionColumns3AlignItems.length !== 0 &&
            mdSectionColumns3AlignItems !== undefined &&
            mdSectionColumns3AlignItems !== undefined) {
            mdSectionColumns3AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--mdSectionColumn3AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn3AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn3AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumns3AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-3-align-items"]');
          if (lgSectionColumns3AlignItems.length !== 0 &&
            lgSectionColumns3AlignItems !== undefined &&
            lgSectionColumns3AlignItems !== undefined) {
            lgSectionColumns3AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--lgSectionColumn3AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn3AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn3AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xlSectionColumns3AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-3-align-items"]');
          if (xlSectionColumns3AlignItems.length !== 0 &&
            xlSectionColumns3AlignItems !== undefined &&
            xlSectionColumns3AlignItems !== undefined) {
            xlSectionColumns3AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xlSectionColumn3AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn3AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn3AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumns3AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-3-align-items"]');
          if (xxlSectionColumns3AlignItems.length !== 0 &&
            xxlSectionColumns3AlignItems !== undefined &&
            xxlSectionColumns3AlignItems !== undefined) {
            xxlSectionColumns3AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xxlSectionColumn3AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn3AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn3AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }
        
          /** COLUMN 4 **/
          // Background color
          const sectionColumn4BackgroundColor = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-columns-column-4-background-color"]');
          const customSectionColumn4BackgroundColor = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-columns-column-4-background-custom-color"]');

          if (sectionColumn4BackgroundColor.length !== 0 &&
            sectionColumn4BackgroundColor !== undefined &&
            customSectionColumn4BackgroundColor !== undefined) {
            sectionColumn4BackgroundColor[0].addEventListener("change", (event) => {
              if (event.target.value !== 'customColor' && event.target.value !== 'default') {
                sectionElement[0].style.setProperty('--sectionColumn4BackgroundColor', `var(--bt--${event.target.value})`);
              } else if (event.target.value === 'customColor'){
                sectionElement[0].style.setProperty('--sectionColumn4BackgroundColor', customSectionColumn4BackgroundColor[0].value );
              }
              if (event.target.value === 'default') {
                sectionElement[0].style.removeProperty('--sectionColumn4BackgroundColor');
              }
            });
      
            customSectionColumn4BackgroundColor[0].addEventListener("change", (event) => {
              sectionElement[0].style.setProperty('--sectionColumn4BackgroundColor', event.target.value );
            });
          }

          // Order
          const xsSectionColumn4Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-4-order"]');
          if (xsSectionColumn4Order.length !== 0 &&
            xsSectionColumn4Order !== undefined &&
            xsSectionColumn4Order !== undefined) {
            xsSectionColumn4Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xsSectionColumn4Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn4Order');
                sectionElement[0].style.removeProperty('--sectionColumn4Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumn4Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-4-order"]');
          if (smSectionColumn4Order.length !== 0 &&
            smSectionColumn4Order !== undefined &&
            smSectionColumn4Order !== undefined) {
            smSectionColumn4Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--smSectionColumn4Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn4Order');
                sectionElement[0].style.removeProperty('--sectionColumn4Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumn4Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-4-order"]');
          if (mdSectionColumn4Order.length !== 0 &&
            mdSectionColumn4Order !== undefined &&
            mdSectionColumn4Order !== undefined) {
            mdSectionColumn4Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--mdSectionColumn4Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn4Order');
                sectionElement[0].style.removeProperty('--sectionColumn4Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumn4Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-4-order"]');
          if (lgSectionColumn4Order.length !== 0 &&
            lgSectionColumn4Order !== undefined &&
            lgSectionColumn4Order !== undefined) {
            lgSectionColumn4Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--lgSectionColumn4Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn4Order');
                sectionElement[0].style.removeProperty('--sectionColumn4Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xlSectionColumn4Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-4-order"]');
          if (xlSectionColumn4Order.length !== 0 &&
            xlSectionColumn4Order !== undefined &&
            xlSectionColumn4Order !== undefined) {
            xlSectionColumn4Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xlSectionColumn4Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn4Order');
                sectionElement[0].style.removeProperty('--sectionColumn4Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumn4Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-4-order"]');
          if (xxlSectionColumn4Order.length !== 0 &&
            xxlSectionColumn4Order !== undefined &&
            xxlSectionColumn4Order !== undefined) {
            xxlSectionColumn4Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xxlSectionColumn4Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn4Order');
                sectionElement[0].style.removeProperty('--sectionColumn4Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          // Grid row
          const xsSectionColumns4GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-4-grid-row"]');
          if (xsSectionColumns4GridRow.length !== 0 &&
            xsSectionColumns4GridRow !== undefined &&
            xsSectionColumns4GridRow !== undefined) {
            xsSectionColumns4GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xsSectionColumn4GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn4GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn4GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumns4GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-4-grid-row"]');
          if (smSectionColumns4GridRow.length !== 0 &&
            smSectionColumns4GridRow !== undefined &&
            smSectionColumns4GridRow !== undefined) {       
            smSectionColumns4GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--smSectionColumn4GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn4GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn4GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumns4GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-4-grid-row"]');
          if (mdSectionColumns4GridRow.length !== 0 &&
            mdSectionColumns4GridRow !== undefined &&
            mdSectionColumns4GridRow !== undefined) {
            mdSectionColumns4GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--mdSectionColumn4GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn4GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn4GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumns4GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-4-grid-row"]');
          if (lgSectionColumns4GridRow.length !== 0 &&
            lgSectionColumns4GridRow !== undefined &&
            lgSectionColumns4GridRow !== undefined) {
            lgSectionColumns4GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--lgSectionColumn4GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn4GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn4GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }
          
          const xlSectionColumns4GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-4-grid-row"]');
          if (xlSectionColumns4GridRow.length !== 0 &&
            xlSectionColumns4GridRow !== undefined &&
            xlSectionColumns4GridRow !== undefined) {
            xlSectionColumns4GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xlSectionColumn4GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn4GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn4GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumns4GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-4-grid-row"]');
          if (xxlSectionColumns4GridRow.length !== 0 &&
            xxlSectionColumns4GridRow !== undefined &&
            xxlSectionColumns4GridRow !== undefined) {
            xxlSectionColumns4GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xxlSectionColumn4GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn4GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn4GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          // Align items
          const xsSectionColumns4AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-4-align-items"]');
          if (xsSectionColumns4AlignItems.length !== 0 &&
            xsSectionColumns4AlignItems !== undefined &&
            xsSectionColumns4AlignItems !== undefined) {
            xsSectionColumns4AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xsSectionColumn4AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn4AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn4AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumns4AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-4-align-items"]');
          if (smSectionColumns4AlignItems.length !== 0 &&
            smSectionColumns4AlignItems !== undefined &&
            smSectionColumns4AlignItems !== undefined) {
            smSectionColumns4AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--smSectionColumn4AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn4AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn4AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumns4AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-4-align-items"]');
          if (mdSectionColumns4AlignItems.length !== 0 &&
            mdSectionColumns4AlignItems !== undefined &&
            mdSectionColumns4AlignItems !== undefined) {
            mdSectionColumns4AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--mdSectionColumn4AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn4AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn4AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumns4AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-4-align-items"]');
          if (lgSectionColumns4AlignItems.length !== 0 &&
            lgSectionColumns4AlignItems !== undefined &&
            lgSectionColumns4AlignItems !== undefined) {
            lgSectionColumns4AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--lgSectionColumn4AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn4AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn4AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xlSectionColumns4AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-4-align-items"]');
          if (xlSectionColumns4AlignItems.length !== 0 &&
            xlSectionColumns4AlignItems !== undefined &&
            xlSectionColumns4AlignItems !== undefined) {
            xlSectionColumns4AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xlSectionColumn4AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn4AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn4AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumns4AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-4-align-items"]');
          if (xxlSectionColumns4AlignItems.length !== 0 &&
            xxlSectionColumns4AlignItems !== undefined &&
            xxlSectionColumns4AlignItems !== undefined) {
            xxlSectionColumns4AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xxlSectionColumn4AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn4AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn4AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          /** COLUMN 5 **/
          // Background color
          const sectionColumn5BackgroundColor = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-columns-column-5-background-color"]');
          const customSectionColumn5BackgroundColor = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-columns-column-5-background-custom-color"]');

          if (sectionColumn5BackgroundColor.length !== 0 &&
            sectionColumn5BackgroundColor !== undefined &&
            customSectionColumn5BackgroundColor !== undefined) {
            sectionColumn5BackgroundColor[0].addEventListener("change", (event) => {
              if (event.target.value !== 'customColor' && event.target.value !== 'default') {
                sectionElement[0].style.setProperty('--sectionColumn5BackgroundColor', `var(--bt--${event.target.value})`);
              } else if (event.target.value === 'customColor'){
                sectionElement[0].style.setProperty('--sectionColumn5BackgroundColor', customSectionColumn5BackgroundColor[0].value );
              }
              if (event.target.value === 'default') {
                sectionElement[0].style.removeProperty('--sectionColumn5BackgroundColor');
              }
            });
      
            customSectionColumn5BackgroundColor[0].addEventListener("change", (event) => {
              sectionElement[0].style.setProperty('--sectionColumn5BackgroundColor', event.target.value );
            });
          }

          // Order
          const xsSectionColumn5Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-5-order"]');
          if (xsSectionColumn5Order.length !== 0 &&
            xsSectionColumn5Order !== undefined &&
            xsSectionColumn5Order !== undefined) {
            xsSectionColumn5Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xsSectionColumn5Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn5Order');
                sectionElement[0].style.removeProperty('--sectionColumn5Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumn5Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-5-order"]');
          if (smSectionColumn5Order.length !== 0 &&
            smSectionColumn5Order !== undefined &&
            smSectionColumn5Order !== undefined) {
            smSectionColumn5Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--smSectionColumn5Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn5Order');
                sectionElement[0].style.removeProperty('--sectionColumn5Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumn5Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-5-order"]');
          if (mdSectionColumn5Order.length !== 0 &&
            mdSectionColumn5Order !== undefined &&
            mdSectionColumn5Order !== undefined) {
            mdSectionColumn5Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--mdSectionColumn5Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn5Order');
                sectionElement[0].style.removeProperty('--sectionColumn5Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumn5Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-5-order"]');
          if (lgSectionColumn5Order.length !== 0 &&
            lgSectionColumn5Order !== undefined &&
            lgSectionColumn5Order !== undefined) {
            lgSectionColumn5Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--lgSectionColumn5Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn5Order');
                sectionElement[0].style.removeProperty('--sectionColumn5Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xlSectionColumn5Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-5-order"]');
          if (xlSectionColumn5Order.length !== 0 &&
            xlSectionColumn5Order !== undefined &&
            xlSectionColumn5Order !== undefined) {
            xlSectionColumn5Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xlSectionColumn5Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn5Order');
                sectionElement[0].style.removeProperty('--sectionColumn5Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumn5Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-5-order"]');
          if (xxlSectionColumn5Order.length !== 0 &&
            xxlSectionColumn5Order !== undefined &&
            xxlSectionColumn5Order !== undefined) {
            xxlSectionColumn5Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xxlSectionColumn5Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn5Order');
                sectionElement[0].style.removeProperty('--sectionColumn5Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          // Grid row
          const xsSectionColumns5GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-5-grid-row"]');
          if (xsSectionColumns5GridRow.length !== 0 &&
            xsSectionColumns5GridRow !== undefined &&
            xsSectionColumns5GridRow !== undefined) {
            xsSectionColumns5GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xsSectionColumn5GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn5GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn5GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumns5GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-5-grid-row"]');
          if (smSectionColumns5GridRow.length !== 0 &&
            smSectionColumns5GridRow !== undefined &&
            smSectionColumns5GridRow !== undefined) {       
            smSectionColumns5GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--smSectionColumn5GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn5GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn5GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumns5GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-5-grid-row"]');
          if (mdSectionColumns5GridRow.length !== 0 &&
            mdSectionColumns5GridRow !== undefined &&
            mdSectionColumns5GridRow !== undefined) {
            mdSectionColumns5GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--mdSectionColumn5GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn5GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn5GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumns5GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-5-grid-row"]');
          if (lgSectionColumns5GridRow.length !== 0 &&
            lgSectionColumns5GridRow !== undefined &&
            lgSectionColumns5GridRow !== undefined) {
            lgSectionColumns5GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--lgSectionColumn5GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn5GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn5GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }
          
          const xlSectionColumns5GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-5-grid-row"]');
          if (xlSectionColumns5GridRow.length !== 0 &&
            xlSectionColumns5GridRow !== undefined &&
            xlSectionColumns5GridRow !== undefined) {
            xlSectionColumns5GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xlSectionColumn5GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn5GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn5GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumns5GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-5-grid-row"]');
          if (xxlSectionColumns5GridRow.length !== 0 &&
            xxlSectionColumns5GridRow !== undefined &&
            xxlSectionColumns5GridRow !== undefined) {
            xxlSectionColumns5GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xxlSectionColumn5GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn5GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn5GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          // Align items
          const xsSectionColumns5AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-5-align-items"]');
          if (xsSectionColumns5AlignItems.length !== 0 &&
            xsSectionColumns5AlignItems !== undefined &&
            xsSectionColumns5AlignItems !== undefined) {
            xsSectionColumns5AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xsSectionColumn5AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn5AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn5AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumns5AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-5-align-items"]');
          if (smSectionColumns5AlignItems.length !== 0 &&
            smSectionColumns5AlignItems !== undefined &&
            smSectionColumns5AlignItems !== undefined) {
            smSectionColumns5AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--smSectionColumn5AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn5AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn5AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumns5AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-5-align-items"]');
          if (mdSectionColumns5AlignItems.length !== 0 &&
            mdSectionColumns5AlignItems !== undefined &&
            mdSectionColumns5AlignItems !== undefined) {
            mdSectionColumns5AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--mdSectionColumn5AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn5AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn5AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumns5AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-5-align-items"]');
          if (lgSectionColumns5AlignItems.length !== 0 &&
            lgSectionColumns5AlignItems !== undefined &&
            lgSectionColumns5AlignItems !== undefined) {
            lgSectionColumns5AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--lgSectionColumn5AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn5AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn5AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xlSectionColumns5AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-5-align-items"]');
          if (xlSectionColumns5AlignItems.length !== 0 &&
            xlSectionColumns5AlignItems !== undefined &&
            xlSectionColumns5AlignItems !== undefined) {
            xlSectionColumns5AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xlSectionColumn5AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn5AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn5AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumns5AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-5-align-items"]');
          if (xxlSectionColumns5AlignItems.length !== 0 &&
            xxlSectionColumns5AlignItems !== undefined &&
            xxlSectionColumns5AlignItems !== undefined) {
            xxlSectionColumns5AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xxlSectionColumn5AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn5AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn5AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          /** COLUMN 6 **/
          // Background color
          const sectionColumn6BackgroundColor = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-columns-column-6-background-color"]');
          const customSectionColumn6BackgroundColor = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-columns-column-6-background-custom-color"]');

          if (sectionColumn6BackgroundColor.length !== 0 &&
            sectionColumn6BackgroundColor !== undefined &&
            customSectionColumn6BackgroundColor !== undefined) {
            sectionColumn6BackgroundColor[0].addEventListener("change", (event) => {
              if (event.target.value !== 'customColor' && event.target.value !== 'default') {
                sectionElement[0].style.setProperty('--sectionColumn6BackgroundColor', `var(--bt--${event.target.value})`);
              } else if (event.target.value === 'customColor'){
                sectionElement[0].style.setProperty('--sectionColumn6BackgroundColor', customSectionColumn6BackgroundColor[0].value );
              }
              if (event.target.value === 'default') {
                sectionElement[0].style.removeProperty('--sectionColumn6BackgroundColor');
              }
            });
      
            customSectionColumn6BackgroundColor[0].addEventListener("change", (event) => {
              sectionElement[0].style.setProperty('--sectionColumn6BackgroundColor', event.target.value );
            });
          }

          // Order
          const xsSectionColumn6Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-6-order"]');
          if (xsSectionColumn6Order.length !== 0 &&
            xsSectionColumn6Order !== undefined &&
            xsSectionColumn6Order !== undefined) {
            xsSectionColumn6Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xsSectionColumn6Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn6Order');
                sectionElement[0].style.removeProperty('--sectionColumn6Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumn6Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-6-order"]');
          if (smSectionColumn6Order.length !== 0 &&
            smSectionColumn6Order !== undefined &&
            smSectionColumn6Order !== undefined) {
            smSectionColumn6Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--smSectionColumn6Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn6Order');
                sectionElement[0].style.removeProperty('--sectionColumn6Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumn6Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-6-order"]');
          if (mdSectionColumn6Order.length !== 0 &&
            mdSectionColumn6Order !== undefined &&
            mdSectionColumn6Order !== undefined) {
            mdSectionColumn6Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--mdSectionColumn6Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn6Order');
                sectionElement[0].style.removeProperty('--sectionColumn6Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumn6Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-6-order"]');
          if (lgSectionColumn6Order.length !== 0 &&
            lgSectionColumn6Order !== undefined &&
            lgSectionColumn6Order !== undefined) {
            lgSectionColumn6Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--lgSectionColumn6Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn6Order');
                sectionElement[0].style.removeProperty('--sectionColumn6Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xlSectionColumn6Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-6-order"]');
          if (xlSectionColumn6Order.length !== 0 &&
            xlSectionColumn6Order !== undefined &&
            xlSectionColumn6Order !== undefined) {
            xlSectionColumn6Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xlSectionColumn6Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn6Order');
                sectionElement[0].style.removeProperty('--sectionColumn6Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumn6Order = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-6-order"]');
          if (xxlSectionColumn6Order.length !== 0 &&
            xxlSectionColumn6Order !== undefined &&
            xxlSectionColumn6Order !== undefined) {
            xxlSectionColumn6Order[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xxlSectionColumn6Order', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn6Order');
                sectionElement[0].style.removeProperty('--sectionColumn6Order');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          // Grid row
          const xsSectionColumns6GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-6-grid-row"]');
          if (xsSectionColumns6GridRow.length !== 0 &&
            xsSectionColumns6GridRow !== undefined &&
            xsSectionColumns6GridRow !== undefined) {
            xsSectionColumns6GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xsSectionColumn6GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn6GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn6GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumns6GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-6-grid-row"]');
          if (smSectionColumns6GridRow.length !== 0 &&
            smSectionColumns6GridRow !== undefined &&
            smSectionColumns6GridRow !== undefined) {       
            smSectionColumns6GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--smSectionColumn6GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn6GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn6GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumns6GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-6-grid-row"]');
          if (mdSectionColumns6GridRow.length !== 0 &&
            mdSectionColumns6GridRow !== undefined &&
            mdSectionColumns6GridRow !== undefined) {
            mdSectionColumns6GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--mdSectionColumn6GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn6GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn6GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumns6GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-6-grid-row"]');
          if (lgSectionColumns6GridRow.length !== 0 &&
            lgSectionColumns6GridRow !== undefined &&
            lgSectionColumns6GridRow !== undefined) {
            lgSectionColumns6GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--lgSectionColumn6GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn6GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn6GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }
          
          const xlSectionColumns6GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-6-grid-row"]');
          if (xlSectionColumns6GridRow.length !== 0 &&
            xlSectionColumns6GridRow !== undefined &&
            xlSectionColumns6GridRow !== undefined) {
            xlSectionColumns6GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xlSectionColumn6GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn6GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn6GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumns6GridRow = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-6-grid-row"]');
          if (xxlSectionColumns6GridRow.length !== 0 &&
            xxlSectionColumns6GridRow !== undefined &&
            xxlSectionColumns6GridRow !== undefined) {
            xxlSectionColumns6GridRow[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].style.setProperty('--xxlSectionColumn6GridRow', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn6GridRow');
                sectionElement[0].style.removeProperty('--sectionColumn6GridRow');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          // Align items
          const xsSectionColumns6AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xs-columns-column-6-align-items"]');
          if (xsSectionColumns6AlignItems.length !== 0 &&
            xsSectionColumns6AlignItems !== undefined &&
            xsSectionColumns6AlignItems !== undefined) {
            xsSectionColumns6AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xsSectionColumn6AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xsSectionColumn6AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn6AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const smSectionColumns6AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-sm-columns-column-6-align-items"]');
          if (smSectionColumns6AlignItems.length !== 0 &&
            smSectionColumns6AlignItems !== undefined &&
            smSectionColumns6AlignItems !== undefined) {
            smSectionColumns6AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--smSectionColumn6AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--smSectionColumn6AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn6AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const mdSectionColumns6AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-md-columns-column-6-align-items"]');
          if (mdSectionColumns6AlignItems.length !== 0 &&
            mdSectionColumns6AlignItems !== undefined &&
            mdSectionColumns6AlignItems !== undefined) {
            mdSectionColumns6AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--mdSectionColumn6AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--mdSectionColumn6AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn6AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const lgSectionColumns6AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-lg-columns-column-6-align-items"]');
          if (lgSectionColumns6AlignItems.length !== 0 &&
            lgSectionColumns6AlignItems !== undefined &&
            lgSectionColumns6AlignItems !== undefined) {
            lgSectionColumns6AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--lgSectionColumn6AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--lgSectionColumn6AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn6AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xlSectionColumns6AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xl-columns-column-6-align-items"]');
          if (xlSectionColumns6AlignItems.length !== 0 &&
            xlSectionColumns6AlignItems !== undefined &&
            xlSectionColumns6AlignItems !== undefined) {
            xlSectionColumns6AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xlSectionColumn6AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xlSectionColumn6AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn6AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          const xxlSectionColumns6AlignItems = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-breakpoints-xxl-columns-column-6-align-items"]');
          if (xxlSectionColumns6AlignItems.length !== 0 &&
            xxlSectionColumns6AlignItems !== undefined &&
            xxlSectionColumns6AlignItems !== undefined) {
            xxlSectionColumns6AlignItems[0].addEventListener("change", (event) => {
              if (event.target.value !== "default") {
                sectionElement[0].style.setProperty('--xxlSectionColumn6AlignItems', event.target.value);
              } else {
                sectionElement[0].style.removeProperty('--xxlSectionColumn6AlignItems');
                sectionElement[0].style.removeProperty('--sectionColumn6AlignItems');
              }
              ResponsiveLayout.layoutsCallback();
            });
          }

          // CSS ID
          const SectionId = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-css-id"]');
          if (SectionId.length !== 0 &&
            SectionId !== undefined &&
            SectionId !== undefined) {

            currentSectionId = SectionId[0].value;
            SectionId[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                sectionElement[0].removeAttribute('id');
                sectionElement[0].setAttribute('id', event.target.value)
              } else {
                sectionElement[0].removeAttribute('id');
              }
            });
          }

          // CSS CLASSES
          const SectionClasses = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-css-classes"]');
          if (SectionClasses.length !== 0 &&
            SectionClasses !== undefined &&
            SectionClasses !== undefined) {

            currentSectionClasses = SectionClasses[0].value;
            SectionClasses[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                if (currentSectionClasses !== "") {
                  classes = currentSectionClasses.split(" ");
                  classes.forEach(element => {
                    sectionElement[0].classList.remove(element);                
                  });
                }

                classes = event.target.value.split(" ");
                classes.forEach(element => {
                  sectionElement[0].classList.add(element);
                })
                currentSectionClasses = event.target.value;
              } else if (currentSectionClasses !== "") {
                classes = currentSectionClasses.split(" ");
                classes.forEach(element => {
                  sectionElement[0].classList.remove(element);                
                });
              }
            });
          }
          
          /** CONTENT **/
          // Title
          const Title = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-title"]');
          if (Title.length !== 0 &&
            Title !== undefined &&
            Title !== undefined) {
            
            SectionChildrens = sectionElement[0].children;
            TitleElement = SectionChildrens[0];
            currentTitle = Title[0].value;
            Title[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                TitleElement.innerHTML = event.target.value;
              } else {
                TitleElement.innerHTML = "";
              }
            });
          }

          const HideTitle = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-title-hide"]');
          if (HideTitle.length !== 0 &&
            HideTitle !== undefined &&
            HideTitle !== undefined) {
            
            SectionChildrens = sectionElement[0].children;
            TitleElement = SectionChildrens[0];
            HideTitle[0].addEventListener("change", (event) => {
              if (event.target.checked === true) {
                TitleElement.classList.add('visually-hidden');
              } else {
                TitleElement.classList.remove('visually-hidden');
              }
            });
          }

          // TITLE CSS CLASSES
          const SectionTitleClasses = document.querySelectorAll('[data-drupal-selector="edit-layout-settings-section-title-css-classes"]');
          if (SectionTitleClasses.length !== 0 &&
            SectionTitleClasses !== undefined &&
            SectionTitleClasses !== undefined) {

            SectionChildrens = sectionElement[0].children;
            TitleElement = SectionChildrens[0];
            currentSectionTitleClasses = SectionTitleClasses[0].value;
            SectionTitleClasses[0].addEventListener("change", (event) => {
              if (event.target.value !== "") {
                if (currentSectionTitleClasses !== "") {
                  classes = currentSectionTitleClasses.split(" ");
                  classes.forEach(element => {
                    TitleElement.classList.remove(element);                
                  });
                }

                classes = event.target.value.split(" ");
                classes.forEach(element => {
                  TitleElement.classList.add(element);
                })
                currentSectionTitleClasses = event.target.value;
              } else if (currentSectionTitleClasses !== "") {
                classes = currentSectionTitleClasses.split(" ");
                classes.forEach(element => {
                  TitleElement.classList.remove(element);                
                });
              }
            });
          }
        }     

      }
    }
  };
})(ResponsiveLayout)