<?php

use Drupal\Core\Template\Attribute;

/**
 * Return variables for core blocks.
 */
function _block_core_preprocess(&$variables) {
  // Branding
  if ($variables['plugin_id'] == "system_branding_block") {
    // background color
    $variables['theme_settings']['branding_bg_color'] = theme_get_setting('blocks.branding.background_color');
    $variables['theme_settings']['branding_bg_color_custom'] = theme_get_setting('blocks.branding.background_color_custom');
    $variables['theme_settings']['branding_bg_color_opacity'] = theme_get_setting('blocks.branding.background_color_opacity');
    $variables['theme_settings']['branding_bg_color_custom_opacity'] = theme_get_setting('blocks.branding.background_color_custom_opacity');
    $variables['theme_settings']['branding_bg_color_hover'] = theme_get_setting('blocks.branding.background_color_hover');
    $variables['theme_settings']['branding_bg_color_custom_hover'] = theme_get_setting('blocks.branding.background_color_custom_hover');
    $variables['theme_settings']['branding_bg_color_opacity_hover'] = theme_get_setting('blocks.branding.background_color_opacity_hover');
    $variables['theme_settings']['branding_bg_color_custom_opacity_hover'] = theme_get_setting('blocks.branding.background_color_custom_opacity_hover');
    // site name color
    $variables['theme_settings']['branding_name_color'] = theme_get_setting('blocks.branding.name_color');
    $variables['theme_settings']['branding_name_color_custom'] = theme_get_setting('blocks.branding.name_color_custom');
    $variables['theme_settings']['branding_name_color_opacity'] = theme_get_setting('blocks.branding.name_color_opacity');
    $variables['theme_settings']['branding_name_color_custom_opacity'] = theme_get_setting('blocks.branding.name_color_custom_opacity');
    $variables['theme_settings']['branding_name_color_hover'] = theme_get_setting('blocks.branding.name_color_hover');
    $variables['theme_settings']['branding_name_color_custom_hover'] = theme_get_setting('blocks.branding.name_color_custom_hover');
    $variables['theme_settings']['branding_name_color_opacity_hover'] = theme_get_setting('blocks.branding.name_color_opacity_hover');
    $variables['theme_settings']['branding_name_color_custom_opacity_hover'] = theme_get_setting('blocks.branding.name_color_custom_opacity_hover');
    // site slogan color
    $variables['theme_settings']['branding_slogan_color'] = theme_get_setting('blocks.branding.slogan_color');
    $variables['theme_settings']['branding_slogan_color_custom'] = theme_get_setting('blocks.branding.slogan_color_custom');
    $variables['theme_settings']['branding_slogan_color_opacity'] = theme_get_setting('blocks.branding.slogan_color_opacity');
    $variables['theme_settings']['branding_slogan_color_custom_opacity'] = theme_get_setting('blocks.branding.slogan_color_custom_opacity');
    $variables['theme_settings']['branding_slogan_color_hover'] = theme_get_setting('blocks.branding.slogan_color_hover');
    $variables['theme_settings']['branding_slogan_color_custom_hover'] = theme_get_setting('blocks.branding.slogan_color_custom_hover');
    $variables['theme_settings']['branding_slogan_color_opacity_hover'] = theme_get_setting('blocks.branding.slogan_color_opacity_hover');
    $variables['theme_settings']['branding_slogan_color_custom_opacity_hover'] = theme_get_setting('blocks.branding.slogan_color_custom_opacity_hover');
    
    $variables['theme_settings']['branding_logo_size'] = theme_get_setting('blocks.branding.logo_size');
    $variables['theme_settings']['branding_name_font_size'] = theme_get_setting('blocks.branding.name_font_size');
    $variables['theme_settings']['branding_slogan_font_size'] = theme_get_setting('blocks.branding.slogan_font_size');
    $variables['theme_settings']['branding_type'] = theme_get_setting('blocks.branding.branding_type');
  }

  // Powered.
  if ($variables['plugin_id'] == "system_powered_by_block") {
    $variables['attributes']['class'] = "c-powered-by";
    $markup = '<span>Desarrollador por <a href="https://www.btester.cl">Roberto Araya</a></span>';
    $variables['content']['#markup'] = $markup;
  }

  // Page Title.
  if ($variables['elements']['#base_plugin_id'] == "page_title_block") {
    $variables['bundle'] = "page-title";
  }

  // Breadcrumb.
  if ($variables['elements']['#base_plugin_id'] == "system_breadcrumb_block") {
    $variables['bundle'] = "breadcrumb";
  }

  // Views.
  if ($variables['elements']['#base_plugin_id'] == "views_block" && array_key_exists('#type', $variables['content'])) {
    $variables['bundle'] = $variables['content']['#type'];
  }

  // Menu.
  $base = $variables['elements']['#base_plugin_id'];
  $derivative = $variables['elements']['#derivative_plugin_id'];

  return $variables;
}
