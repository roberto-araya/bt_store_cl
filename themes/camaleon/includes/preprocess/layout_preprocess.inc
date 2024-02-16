<?php

/**
 * @file
 * Layouts preprocess functions.
 */

/**
 * Implements hook_preprocess_HOOK() for page layout.
 */
function camaleon_preprocess_page(&$variables) {
  $moduleHandler = \Drupal::service('module_handler');
  if ($moduleHandler->moduleExists('components')) {
    $variables['has_components_module'] = TRUE;
  }
}
