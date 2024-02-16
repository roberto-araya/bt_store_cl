<?php

/**
 * @file
 * Block core preprocess functions.
 */

/**
 * Return variables for core blocks.
 */
function _block_core_preprocess(&$variables) {
  // Powered.
  if ($variables['plugin_id'] == "system_powered_by_block") {
    $variables['attributes']['class'] = "c-powered-by";
    $markup = '<span>Desarrollador por <a href="https://www.btester.cl">Roberto Araya</a></span>';
    $variables['content']['#markup'] = $markup;
  }

  // Breadcrumb.
  if ($variables['elements']['#base_plugin_id'] == "system_breadcrumb_block") {
    $variables['bundle'] = "breadcrumb";
  }

  // Views.
  if ($variables['elements']['#base_plugin_id'] == "views_block" && array_key_exists('#type', $variables['content'])) {
    $variables['bundle'] = $variables['content']['#type'];
  }

  return $variables;
}
