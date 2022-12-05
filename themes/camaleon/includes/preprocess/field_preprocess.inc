<?php

/**
 * Return custom variables for fields.
 */
function _field_preprocess(&$variables) {
  $bundle = $variables['element']['#bundle'];
  $bundle = strpos($bundle, 'bt_cb_') === 0 ? $bundle = substr($bundle, 6) : $bundle;
  $bundle = strpos($bundle, 'bt_') === 0 ? $bundle = substr($bundle, 3) : $bundle;
  $view_mode = $variables['element']['#view_mode'];
  $view_mode = strpos($view_mode, 'bt_') === 0 ? substr($view_mode, 3) : $view_mode;
  $field_name = $variables['element']['#field_name'];
  $field_name = strpos($field_name, 'field_bt_') === 0 ? substr(($field_name), 9) : $field_name;
  $variables['bundle'] = $bundle;
  $variables['view_mode'] = $view_mode;
  $variables['field_name'] = strtr($field_name, '_', '-');
}
