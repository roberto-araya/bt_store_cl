<?php

/**
 * @file
 * Layouts preprocess functions.
 */

use Drupal\bt_layouts\SectionResponsiveBackgroundImage;

/**
 * Implements hook_preprocess_HOOK() for page layout.
 */
function camaleon_preprocess_page(&$variables) {
  $moduleHandler = \Drupal::service('module_handler');
  if ($moduleHandler->moduleExists('components')) {
    $variables['has_components_module'] = TRUE;
  }
}

function camaleon_preprocess_bt_one(&$variables) {
  _section_background_image($variables);
}

function camaleon_preprocess_bt_two(&$variables) {
  _section_background_image($variables);
}

function camaleon_preprocess_bt_three(&$variables) {
  _section_background_image($variables);
}

function camaleon_preprocess_bt_four(&$variables) {
  _section_background_image($variables);
}

function camaleon_preprocess_bt_five(&$variables) {
  _section_background_image($variables);
}

function camaleon_preprocess_bt_six(&$variables) {
  _section_background_image($variables);
}

function _section_background_image(&$variables) {
  if ($variables['settings']['use_background_image'] == 1 &&
  $variables['settings']['background_image'] != NULL &&
  !empty($variables['settings']['css_id'])) {
    $css_selector = '#' . $variables['settings']['css_id'];
    $image_id = $variables['settings']['background_image'];
    $style_tag = SectionResponsiveBackgroundImage::generateMediaQueries($css_selector, $image_id, 'bt_hero');

    if ($style_tag) {
      $variables['#attached']['html_head'][] = $style_tag;
    }
  }
}