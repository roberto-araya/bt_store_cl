<?php

/**
 * Return variables for contrib blocks.
 */
function _block_contrib_preprocess(&$variables) {
  // Webform.
  if ($variables['elements']['#base_plugin_id'] == "webform_block") {
    $id = $variables['content']['#webform']->id();
    $variables['bundle'] = "form-" . $id;
  }

  return $variables;
}
