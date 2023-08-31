<?php

use Drupal\responsive_background_image\ResponsiveBackgroundImage;

/**
 * Return variables for custom content blocks.
 */
function _block_content_preprocess(&$variables) {
  $plugin_id = $variables['elements']['#base_plugin_id'];
  if ($plugin_id == "block_content" || $plugin_id == "inline_block") {
    $variables['bundle'] = $variables['elements']['content']['#block_content']->bundle();
    $variables['bundle'] = strpos($variables['bundle'], 'bt_cb_') === 0 ? $variables['bundle'] = substr($variables['bundle'], 6) : $variables['bundle'];
    $variables['bundle'] = strpos($variables['bundle'], 'bt_') === 0 ? $variables['bundle'] = substr($variables['bundle'], 3) : $variables['bundle'];

    // Add responsive image background to specific content blocks
    // example (https://git.drupalcode.org/project/responsive_background_image/-/tree/2.x)
    $block = $variables['elements']['content']['#block_content'];
    $block_type = $variables['bundle'];
    $block_id = $variables['elements']['content']['#block_content']->id();;

    if ($block_type == 'hero' && 
    !empty($block->get('field_bt_img')->getValue()[0]['target_id'])){
      $css_selector = '#blockHero--' . $block_id;
    $style_tag = ResponsiveBackgroundImage::generateMediaQueries($css_selector, $block, 'field_bt_img', 'bt_full_viewport', 'field_bt_image');
      if ($style_tag) {
        $variables['#attached']['html_head'][] = $style_tag;
      }
    }  
      
    if ($block_type == 'highlighted_text_image' &&
    !empty($block->get('field_bt_add_image')->getValue()[0]['target_id'])) {
      $css_selector = '#blockHighlightedTextImage--' . $block_id;
      $style_tag = ResponsiveBackgroundImage::generateMediaQueries($css_selector, $block, 'field_bt_add_image', 'bt_full_viewport', 'field_bt_image');  
      if ($style_tag) {
        $variables['#attached']['html_head'][] = $style_tag;
      }
    }

    $bundle_parts = str_contains($block_type, '_') ? explode('_', $block_type) : [$block_type];
    $bundle_parts = str_contains($block_type, '-') ? explode('-', $block_type) : $bundle_parts;
    $bundle = '';
    foreach($bundle_parts as $part) {
      $bundle = $bundle . ucfirst($part); 
    }
    
    $variables['bundle'] = $bundle;
    $variables['view_mode'] = $variables['elements']['#configuration']['view_mode'];    
    $variables['view_mode'] = strpos($variables['view_mode'], 'bt_') === 0 ? substr($variables['view_mode'], 3) : $variables['view_mode'];
    $variables['id'] = $block_id;

    // Contact info.
    if ($variables['bundle'] == 'contact_info') {
      _contact_info_block_preprocess($variables);
    }
  }
}

/**
 * Contact info block preprocess.
 * @param $variables
 */
function _contact_info_block_preprocess(&$variables) {
  $bundle = $variables['bundle'];
  $view_mode = $variables['view_mode'];

  $items = array();
  // Field field_bt_address_collection.
  if (isset($variables['elements']['content']['field_bt_address_collection']['0']['#field_collection_item'])
    && $variables['elements']['content']['field_bt_address_collection']['0']['#field_collection_item']->hasField('field_bt_address')) {

    $address = [
      "content" => $variables['elements']['content']['field_bt_address_collection'],
      "icon" => "location",
    ];

    $items[] = $address;
  }
  // Field field_bt_phones_collection.
  if (isset($variables['elements']['content']['field_bt_phones_collection']['0']['#field_collection_item'])
    && $variables['elements']['content']['field_bt_phones_collection']['0']['#field_collection_item']->hasField('field_bt_phone_collection')) {

    $phones = [
      "content" => $variables['elements']['content']['field_bt_phones_collection'],
      "icon" => "phone",
    ];
    $items[] = $phones;
  }
  // Field field_bt_email_collection.
  if (isset($variables['elements']['content']['field_bt_email_collection']['0']['#field_collection_item'])
    && $variables['elements']['content']['field_bt_email_collection']['0']['#field_collection_item']->hasField('field_bt_email')) {

    $emails = [
      "content" => $variables['elements']['content']['field_bt_email_collection'],
      "icon" => "mail",
    ];
    $items[] = $emails;
  }
  // Field field_bt_schedule_collection.
  if (isset($variables['elements']['content']['field_bt_schedule_collection']['0']['#field_collection_item'])
    && $variables['elements']['content']['field_bt_schedule_collection']['0']['#field_collection_item']->hasField('field_bt_days_hours_collection')) {

    $schedule = [
      "content" => $variables['elements']['content']['field_bt_schedule_collection'],
      "icon" => "clock",
    ];
    $items[] = $schedule;
  }
  $variables['items'] = $items;
}
