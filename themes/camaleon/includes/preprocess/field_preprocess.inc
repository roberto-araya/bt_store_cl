<?php

/**
 * Return custom variables for fields.
 */
function _field_preprocess(&$variables) {
  $entity_type = $variables['element']['#entity_type'];

  if ($entity_type == 'commerce_product') {
    $entity_type = 'product';
  }

  if ($entity_type == 'commerce_product_variation') {
    $entity_type = 'variation';
  }

  $bundle = $variables['element']['#bundle'];
  $bundle = strpos($bundle, 'bt_cb_') === 0 ? $bundle = substr($bundle, 6) : $bundle;
  $bundle = strpos($bundle, 'bt_') === 0 ? $bundle = substr($bundle, 3) : $bundle;

  $bundle_parts = str_contains($bundle, '_') ? explode('_', $bundle) : [$bundle];
  $bundle_parts = str_contains($bundle, '-') ? explode('-', $bundle) : $bundle_parts;
  $bundle = '';
  foreach($bundle_parts as $part) {
    $bundle = $bundle . ucfirst($part); 
  }

  $entity_type = $entity_type == 'block_content' ? 'block' : $entity_type;

  $view_mode = $variables['element']['#view_mode'];
  $view_mode = strpos($view_mode, 'bt_') === 0 ? substr($view_mode, 3) : $view_mode;
  $field_name = $variables['element']['#field_name'];
  $field_name = strpos($field_name, 'field_bt_') === 0 ? substr(($field_name), 9) : $field_name;
  
  $field_name = $field_name == 'epigrafe' ? 'caption' : $field_name;
  $field_name = $field_name == 'paragraph' ? 'text' : $field_name;

  $variables['entity_type'] = $entity_type;
  $variables['bundle'] = $bundle;
  $variables['view_mode'] = $view_mode;
  $variables['field_name'] = strtr($field_name, '_', '-');

  if (array_key_exists('#object', $variables['element'])) {
    $variables['parent_id'] = $variables['element']['#object']->id();
  }
}
