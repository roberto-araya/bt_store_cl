<?php

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */

use Drupal\block\Entity\Block;

function _block_suggestions(&$suggestions, $variables) {
  // Add theme suggestion 'block__[block_type]_[view_mode]'
  // to every block_content.
  $plugin_id = $variables['elements']['#base_plugin_id'];
  
  if ($plugin_id == 'field_block') {
    $field_name = $variables['elements']['content']['#field_name'];
    if ( $field_name == 'title') {
      $s1 = array_shift($suggestions);
      $s2 = array_shift($suggestions);
      array_unshift($suggestions, "block__field_block__title");
      array_unshift($suggestions, $s2);
      array_unshift($suggestions, $s1);
    }
    if ($field_name == 'field_bt_title_foot') {
      $s1 = array_shift($suggestions);
      $s2 = array_shift($suggestions);
      array_unshift($suggestions, "block__field_block__caption");
      array_unshift($suggestions, $s2);
      array_unshift($suggestions, $s1);
    }

    if ($field_name == 'field_bt_intro') {
      $s1 = array_shift($suggestions);
      $s2 = array_shift($suggestions);
      array_unshift($suggestions, "block__field_block__intro");
      array_unshift($suggestions, $s2);
      array_unshift($suggestions, $s1);
    }
  }

  if ($plugin_id == 'block_content' || $plugin_id == 'inline_block') {
    if (strpos($variables['elements']['content']['#block_content']->bundle(), 'bt_cb_') === 0) {
      $bundle = substr($variables['elements']['content']['#block_content']->bundle(), 6);
    }
    elseif (strpos($variables['elements']['content']['#block_content']->bundle(), 'bt_') === 0) {
      $bundle = substr($variables['elements']['content']['#block_content']->bundle(), 3);
    }
    else {
      $bundle = $variables['elements']['content']['#block_content']->bundle();
    }

    if(strpos($variables['elements']['#configuration']['view_mode'], 'bt_') === 0) {
      $view_mode = substr($variables['elements']['#configuration']['view_mode'], 3);
    }
    else {
      $view_mode = $variables['elements']['#configuration']['view_mode'];
    }

    $last = array_pop($suggestions);
    if ($plugin_id == 'block_content') {
      $suggestions[] = "block__block_content";
    }

    if ($plugin_id == 'inline_block') {
      $suggestions[] = "block__block_content";
      $suggestions[] = "block__inline_block";
    }
    
    $suggestions[] = "block__" . $bundle;
    $suggestions[] = "block__" . $bundle . '_' . $view_mode;

    if ($variables['elements']['content']['#block_content']->id()) {
      $block_id = $variables['elements']['content']['#block_content']->id();
      $suggestions[] = "block__" . $bundle . '_' . $view_mode . '_id_' . $block_id;
    }

    $suggestions[] = $last;
  }

  // Region suggestion for blocks in Drupal.
  if (isset($variables['elements']['#id'])) {
    if ($block = Block::load($variables["elements"]["#id"])) {
      $region = $block->getRegion();
      $suggestions[] = 'block__' . $region;
      $suggestions[] = 'block__' . $region . '__' . $variables['elements']['#base_plugin_id'];
      $suggestions[] = 'block__' . $region . '__' . $variables['elements']['#id'];
      $suggestions[] = 'block__' . $region . '__' . $variables['elements']['#base_plugin_id'] . '__' . $variables['elements']['#id'];
    }
  }
}

function _select_suggestions(&$suggestions, $variables) {
  if (strpos($variables['element']['#id'], 'edit-settings-background-color') !== FALSE ||
    strpos($variables['element']['#id'], 'edit-settings-title-color') !== FALSE ||
    strpos($variables['element']['#id'], 'edit-settings-text-color') !== FALSE) {
    array_unshift($suggestions, "select__block_content_settings_color");
  }
}

function _field_suggestions(&$suggestions, $variables) {
  $suggestions = [];
  $entity_type = $variables['element']['#entity_type'];
  $bundle = $variables['element']['#bundle'];
  $view_mode = $variables['element']['#view_mode'];
  $field_name = $variables['element']['#field_name'];

  $bundle = strpos($bundle, 'bt_cb_') === 0 ? $bundle = substr($bundle, 6) : $bundle;
  $bundle = strpos($bundle, 'bt_') === 0 ? $bundle = substr($bundle, 3) : $bundle;
  $bundle = strpos($bundle, 'prg_') === 0 ? $bundle = substr($bundle, 4) : $bundle;
  $bundle = strpos($bundle, 'field_bt_') === 0 ? substr(($bundle), 9) : $bundle;
  $view_mode = strpos($view_mode, 'bt_') === 0 ? substr($view_mode, 3) : $view_mode;
  $field_name = strpos($field_name, 'field_bt_') === 0 ? substr(($field_name), 9) : $field_name;

  $entities = [
    'block_content' => 'bc',
    'media' => 'm',
    'node' => 'n',
    'field_collection_item' => 'fc',
    'paragraph' => 'p',
    'commerce_product' => 'cp',
    'commerce_product_variation' => 'cpv',
    'commerce_order' => 'co',
    'profile' => 'pro',
    'taxonomy_term' => 'tax',
    'user' => 'user',
    'comment' => 'comment',
    'multifield' => 'mf',
  ];

  if ($entity_type == 'paragraph') {
    $suggestions[] = 'field__' . $entities[$entity_type] . '__' . $bundle . '__' . $field_name;
  }
  else {
    $suggestions[] = 'field__' . $entities[$entity_type];
    $suggestions[] = 'field__' . $entities[$entity_type] . '__' . $field_name;
    $suggestions[] = 'field__' . $entities[$entity_type] . '__' . $bundle;
    $suggestions[] = 'field__' . $entities[$entity_type] . '__' . $bundle . '__' . $field_name;
    $suggestions[] = 'field__' . $entities[$entity_type] . '__' . $bundle . '__' . $view_mode . '__' . $field_name;
  }
}

function _form_suggestions(&$suggestions, $variables) {
  if (is_array($variables['element']['#theme']) && array_key_exists(1, $variables['element']['#theme'])) {
    $theme = str_replace('-', '_', $variables['element']['#theme'][1]);  
    $suggestions[] = 'form__' . $theme;
  }
  $id = str_replace('-', '_', $variables['element']['#id']);
  $suggestions[] = 'form__' . $id;
}

function _image_suggestions(&$suggestions, $variables) {
  $node = \Drupal::request()->attributes->get('node');
  if (!empty($node)) {
      $suggestions[] = 'image__' . $node->getType();
  }
  $suggestions[] = 'image__' . $variables['style_name'];
}

function _node_suggestions(&$suggestions, $variables) {
  $suggestions = [];
  $id = $variables['elements']['#node']->id();
  $bundle = $variables['elements']['#node']->getType();
  $view_mode = $variables['elements']['#view_mode'];

  if (strpos($bundle, 'bt_') === 0) {
    $bundle = substr($bundle, 3);
  }

  if(strpos($view_mode, 'bt_') === 0) {
    $view_mode = substr($view_mode, 3);
  }

  //$last = array_pop($suggestions);
  $suggestions[] = "node__" . $bundle;
  $suggestions[] = "node__" . $bundle . '__' . $view_mode;
  $suggestions[] = "node__" . $id;
}

function _paragraph_suggestions(&$suggestions, $variables) {
  $suggestions = [];
  $id = $variables['elements']['#paragraph']->id();
  $bundle = $variables['elements']['#paragraph']->bundle();
  $bundle = strpos($bundle, 'bt_prg_') === 0 ? $bundle = substr($bundle, 7) : $bundle;
  $view_mode = $variables['elements']['#view_mode'];

  $suggestions[] = "paragraph__" . $bundle;
  $suggestions[] = "paragraph__" . $bundle . '__' . $view_mode;
  $suggestions[] = "paragraph__" . $id;
}

function _media_suggestions(&$suggestions, $variables) {
    $suggestions = [];
    $id = $variables['elements']['#media']->id();
    $bundle = $variables['elements']['#media']->bundle();
    $bundle = strpos($bundle, 'bt_') === 0 ? $bundle = substr($bundle, 3) : $bundle;
    $view_mode = $variables['elements']['#view_mode'];
    $view_mode = strpos($view_mode, 'bt_') === 0 ? $view_mode = substr($view_mode, 3) : $view_mode;
    $suggestions[] = "media__" . $bundle;
    $suggestions[] = "media__" . $bundle . '__' . $view_mode;
    $suggestions[] = "media__" . $id;
}

function _field_collection_suggestions(&$suggestions, &$variables) {
  $id = $variables['item']['#field_collection_item']->id();
  $bundle = $variables['item']['#field_collection_item']->bundle();
  $bundle = strpos($bundle, 'field_bt_') === 0 ? $bundle = substr($bundle, 9) : $bundle;
  $view_mode = $variables['item']['#view_mode'];

  $suggestions[] = 'fc_item__' . $bundle; 
  $suggestions[] = 'fc_item__' . $bundle . '__' . $view_mode;
  $suggestions[] = 'fc_item__' . $bundle . '__' . $view_mode . '__' . $id;
}
