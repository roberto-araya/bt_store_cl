<?php

/**
 * @file
 * Theme settings form.
 */

use Drupal\Core\Config\FileStorage;
use Drupal\Core\Form\FormStateInterface;
use LukaPeharda\TailwindCssColorPaletteGenerator\Color;
use LukaPeharda\TailwindCssColorPaletteGenerator\PaletteGenerator;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function camaleon_form_system_theme_settings_alter(&$form, FormStateInterface $form_state) {
  $theme_file = drupal_get_path('theme', 'camaleon') . '/camaleon.theme';
  $build_info = $form_state->getBuildInfo();
  if (!in_array($theme_file, $build_info['files'])) {
    $build_info['files'][] = $theme_file;
  }
  $form_state->setBuildInfo($build_info);
  // Add custom submit.
  $form['#submit'][] = 'camaleon_form_system_theme_settings_submit';

  $color_options = [
    'default' => t('Default'),
    'primary' => t('Primary'),
    'primary-050' => t('Primary 50'),
    'primary-100' => t('Primary 100'),
    'primary-200' => t('Primary 200'),
    'primary-300' => t('Primary 300'),
    'primary-400' => t('Primary 400'),
    'primary-500' => t('Primary 500'),
    'primary-600' => t('Primary 600'),
    'primary-700' => t('Primary 700'),
    'primary-800' => t('Primary 800'),
    'primary-900' => t('Primary 900'),
    'secondary' => t('Secondary'),
    'secondary-050' => t('Secondary 50'),
    'secondary-100' => t('Secondary 100'),
    'secondary-200' => t('Secondary 200'),
    'secondary-300' => t('Secondary 300'),
    'secondary-400' => t('Secondary 400'),
    'secondary-500' => t('Secondary 500'),
    'secondary-600' => t('Secondary 600'),
    'secondary-700' => t('Secondary 700'),
    'secondary-800' => t('Secondary 800'),
    'secondary-900' => t('Secondary 900'),
    'accent' => t('Accent'),
    'accent-050' => t('Accent 50'),
    'accent-100' => t('Accent 100'),
    'accent-200' => t('Accent 200'),
    'accent-300' => t('Accent 300'),
    'accent-400' => t('Accent 400'),
    'accent-500' => t('Accent 500'),
    'accent-600' => t('Accent 600'),
    'accent-700' => t('Accent 700'),
    'accent-800' => t('Accent 800'),
    'accent-900' => t('Accent 900'),
    'success' => t('Success'),
    'info' => t('Info'),
    'warning' => t('Warning'),
    'danger' => t('Danger'),
    'light' => t('Light'),
    'dark' => t('Dark'),
    'blue' => t('Blue'),
    'indigo' => t('Indigo'),
    'purple' => t('Purple'),
    'pink' => t('Pink'),
    'red' => t('Red'),
    'orange' => t('Orange'),
    'yellow' => t('Yellow'),
    'green' => t('Green'),
    'teal' => t('Teal'),
    'cyan' => t('Cyan'),
    'white' => t('White'),
    'gray-050' => t('Gray 050'),
    'gray-100' => t('Gray 100'),
    'gray-200' => t('Gray 200'),
    'gray-300' => t('Gray 300'),
    'gray-400' => t('Gray 400'),
    'gray-500' => t('Gray 500'),
    'gray-600' => t('Gray 600'),
    'gray-700' => t('Gray 700'),
    'gray-800' => t('Gray 800'),
    'gray-900' => t('Gray 900'),
    'customColor' => t('Custom Color'),
  ];

  // DEFAULT COLORS.
  $form['default_colors'] = [
    '#type' => 'details',
    '#title' => t('Default Colors'),
    '#tree' => TRUE,
  ];

  // Theme Color.
  $form['default_colors']['theme_color'] = [
    '#type' => 'select',
    '#options' => _get_theme_color_select(),
    '#title' => t('Theme Color Palette'),
    '#description' => t("Select a default theme color palette. You can add more color palettes on /theme-colors/add."),
    '#default_value' => theme_get_setting('default_colors.theme_color'),
  ];

  // Titles color.
  $default_value_prefix = 'default_colors.titles';
  $state_input_prefix = 'default_colors[titles';
  $style = 'titles';
  $form['default_colors'] = array_merge($form['default_colors'],
  _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options, FALSE));

  // Body color.
  $default_value_prefix = 'default_colors.body';
  $state_input_prefix = 'default_colors[body';
  $style = 'body';
  $form['default_colors'] = array_merge($form['default_colors'],
  _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options, FALSE));

  // Body background color.
  $form['default_colors']['body_bg'] = [
    '#type' => 'select',
    '#options' => $color_options,
    '#title' => t('Body Background Color'),
    '#description' => t("Select a default body background color."),
    '#default_value' => theme_get_setting('default_colors.body_bg'),
  ];

  $form['default_colors']['body_bg_custom'] = [
    '#type' => 'color',
    '#title' => 'Body Background Custom Color',
    '#description' => t("Select a custom color as body background color."),
    '#default_value' => theme_get_setting('default_colors.body_bg_custom'),
    '#states' => [
      'visible' => [
        ':input[name="default_colors[body_bg]"]' => ['value' => 'customColor'],
      ],
    ],
  ];

  // Link color.
  $default_value_prefix = 'default_colors.link';
  $state_input_prefix = 'default_colors[link';
  $style = 'link';
  $form['default_colors'] = array_merge($form['default_colors'],
  _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options, FALSE));

  // Link hover color.
  $default_value_prefix = 'default_colors.link_hover';
  $state_input_prefix = 'default_colors[link_hover';
  $style = 'link_hover';
  $form['default_colors'] = array_merge($form['default_colors'],
  _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options, FALSE));
  // Rename Link hover titles.
  $form['default_colors']['link_hover_color']['#title'] = 'Link Hover Color';
  $form['default_colors']['link_hover_color_custom']['#title'] = 'Link Hover Custom Color';

  // Border color.
  $default_value_prefix = 'default_colors.border';
  $state_input_prefix = 'default_colors[border';
  $style = 'border';
  $form['default_colors'] = array_merge($form['default_colors'],
  _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options, FALSE));

  // FONTS.
  $form['fonts'] = [
    '#type' => 'details',
    '#title' => t('Fuentes'),
    '#tree' => TRUE,
  ];

  // Default font.
  $form['fonts']['default_font'] = [
    '#type' => 'select',
    '#options' => _get_font_select(),
    '#title' => t('Default font'),
    '#description' => t("Select a default font. See https://fonts.google.com/."),
    '#default_value' => theme_get_setting('fonts.default_font'),
  ];

  // Headers font.
  $form['fonts']['headers_font'] = [
    '#type' => 'select',
    '#options' => _get_font_select(),
    '#title' => t('Headers font'),
    '#description' => t("Select a default headers font. See https://fonts.google.com/."),
    '#default_value' => theme_get_setting('fonts.headers_font'),
  ];

  // BUTTONS.
  $buttons = [
    'primary',
    'secondary',
    'accent',
  ];

  $form['buttons'] = [
    '#type' => 'details',
    '#title' => t('Buttons'),
    '#tree' => TRUE,
  ];

  foreach ($buttons as $type) {
    $form['buttons']['button_' . $type] = [
      '#type' => 'details',
      '#title' => t("@title", ["@title" => ucfirst($type)]),
      '#tree' => TRUE,
    ];

    // Link.
    $default_value_prefix = 'buttons.button_' . $type . '.link';
    $state_input_prefix = 'buttons[button_' . $type . '][link';
    $style = 'link';
    $form['buttons']['button_' . $type] = array_merge($form['buttons']['button_' . $type],
    _get_button_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options));

    // Background.
    $default_value_prefix = 'buttons.button_' . $type . '.background';
    $state_input_prefix = 'buttons[button_' . $type . '][background';
    $style = 'background';
    $form['buttons']['button_' . $type] = array_merge($form['buttons']['button_' . $type],
    _get_button_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options));

    // Border.
    $default_value_prefix = 'buttons.button_' . $type . '.border';
    $state_input_prefix = 'buttons[button_' . $type . '][border';
    $style = 'border';
    $form['buttons']['button_' . $type] = array_merge($form['buttons']['button_' . $type],
    _get_button_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options));
  }

  // REGIONS.
  $form['regions'] = [
    '#type' => 'details',
    '#title' => t('Regions'),
    '#tree' => TRUE,
  ];

  $other_regions = [
    'sidebar_first' => 'Sidebar Firts',
    'content' => 'Content',
    'sidebar_second' => 'Sidebar Second',
  ];

  foreach ($other_regions as $region_id => $region_name) {
    $form['regions']['region_' . $region_id] = [
      '#type' => 'details',
      '#title' => t("@region_name", ["@region_name" => $region_name . ' region']),
      '#tree' => TRUE,
    ];
  }

  $regions = [
    'top' => 'Page top',
    'pre_header' => 'Pre header',
    'navbar' => 'Navbar',
    'header' => 'Header',
    'primary_menu' => 'Primary menu',
    'secondary_menu' => 'Secondary menu',
    'breadcrumb' => 'Breadcrumb',
    'highlighted' => 'Highlighted',
    'help' => 'Help',
    'footer' => 'Footer',
    'bottom' => 'Page bottom',
  ];

  foreach ($regions as $region_id => $region_name) {
    $form['regions']['region_' . $region_id] = [
      '#type' => 'details',
      '#title' => t("@region_name", ["@region_name" => $region_name . ' region']),
      '#tree' => TRUE,
    ];

    $form['regions']['region_' . $region_id]['justify_content'] = [
      '#type' => 'select',
      '#options' => [
        'center' => t('Center'),
        'end' => t('End'),
        'flex-end' => t('Flex End'),
        'flex-start' => t('Flex Start'),
        'inherit' => t('Inherit'),
        'initial' => t('Initial'),
        'left' => t('Left'),
        'normal' => t('Normal'),
        'revert' => t('Revert'),
        'revert-layer' => t('Revert Layer'),
        'right' => t('Right'),
        'safe' => t('Safe'),
        'space-around' => t('Space Around'),
        'space-between' => t('Space Between'),
        'space-evenly' => t('Space Evenly'),
        'start' => t('Start'),
        'stretch' => t('Stretch'),
        'unsafe' => t('Unsafe'),
      ],
      '#title' => t('Justify Content'),
      '#description' => t("Flex CSS property."),
      '#default_value' => theme_get_setting('regions.region_' . $region_id . '.justify_content'),
    ];

    $form['regions']['region_' . $region_id]['align_items'] = [
      '#type' => 'select',
      '#options' => [
        'baseline' => t('Baseline'),
        'center' => t('Center'),
        'end' => t('End'),
        'first-baseline' => t('First Baseline'),
        'flex-end' => t('Flex End'),
        'flex-start' => t('Flex Start'),
        'inherit' => t('Inherit'),
        'initial' => t('Initial'),
        'last-baseline' => t('Last Baseline'),
        'normal' => t('Normal'),
        'revert' => t('Revert'),
        'revert-layer' => t('Revert Layer'),
        'safe' => t('Safe'),
        'self-end' => t('Self End'),
        'self-start' => t('Self Start'),
        'start' => t('Start'),
        'stretch' => t('Stretch'),
        'unsafe' => t('Unsafe'),
        'unset' => t('Unset'),
      ],
      '#title' => t('Align Items'),
      '#description' => t("Flex CSS property."),
      '#default_value' => theme_get_setting('regions.region_' . $region_id . '.align_items'),
    ];

    $form['regions']['region_' . $region_id]['height'] = [
      '#type' => 'textfield',
      '#title' => t('Height'),
      '#description' => t("CSS Property. Examples: 100px; 10vh; 30%;"),
      '#default_value' => theme_get_setting('regions.region_' . $region_id . '.height'),
    ];

    $form['regions']['region_' . $region_id]['width'] = [
      '#type' => 'details',
      '#title' => t('Region Width'),
    ];

    $form['regions']['region_' . $region_id]['width']['container_select'] = [
      '#type' => 'select',
      '#options' => [
        'full' => t('Full'),
        'box' => t('Box'),
      ],
      '#title' => t('Container Type'),
      '#description' => t("Select a container type for the width."),
      '#default_value' => theme_get_setting('regions.region_' . $region_id . '.width.container_select'),
    ];

    $form['regions']['region_' . $region_id]['width']['full_select'] = [
      '#type' => 'select',
      '#options' => [
        '0' => t('100%'),
        '5%' => t('90%'),
        '10%' => t('80%'),
        '15%' => t('70%'),
        '20%' => t('60%'),
      ],
      '#title' => t('Full Container Width'),
      '#description' => t("Select a width."),
      '#default_value' => theme_get_setting('regions.region_' . $region_id . '.width.full_select'),
      '#states' => [
        'visible' => [
          ':input[name="regions[region_' . $region_id . '][width][container_select]"]' => ['value' => 'full'],
        ],
      ],
    ];

    $form['regions']['region_' . $region_id]['width']['box_select'] = [
      '#type' => 'select',
      '#options' => [
        '100%' => t('100%'),
        '90%' => t('90%'),
        '80%' => t('80%'),
        '70%' => t('70%'),
        '60%' => t('60%'),
      ],
      '#title' => t('Box Container Width'),
      '#description' => t("Select a width."),
      '#default_value' => theme_get_setting('regions.region_' . $region_id . '.width.box_select'),
      '#states' => [
        'visible' => [
          ':input[name="regions[region_' . $region_id . '][width][container_select]"]' => ['value' => 'box'],
        ],
      ],
    ];

    $default_value_prefix = 'regions.region_' . $region_id . '.background';
    $state_input_prefix = 'regions[region_' . $region_id . '][background';
    $style = 'background';
    $form['regions']['region_' . $region_id] = array_merge($form['regions']['region_' . $region_id],
    _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options, FALSE));
  }

  // Navbar style.
  $form['regions']['region_navbar']['style'] = [
    '#type' => 'select',
    '#options' => [
      'default' => t('Default'),
      //'intro' => t('Intro'),
      'sticky' => t('Sticky'),
      'sticky-shrink' => t('Sticky Shrink'),
      //'intro-sticky' => t('Intro Sticky'),
    ],
    '#title' => t('Style'),
    '#description' => t("Select a navbar style."),
    '#default_value' => theme_get_setting('regions.region_navbar.style'),
  ];

  // Navbar classes.
  $form['regions']['region_navbar']['classes'] = [
    '#type' => 'textfield',
    '#title' => t('Navbar CSS Classes'),
    '#description' => t("Separe the classes with an espace."),
    '#default_value' => theme_get_setting('regions.region_navbar.classes'),
  ];

  // Navbar inner container classes.
  $form['regions']['region_navbar']['inner_container_classes'] = [
    '#type' => 'textfield',
    '#title' => t('Inner Container CSS Classes'),
    '#description' => t("Separe the classes with an espace."),
    '#default_value' => theme_get_setting('regions.region_navbar.inner_container_classes'),
  ];

  // Toggler classes.
  $form['regions']['region_navbar']['toggler_classes'] = [
    '#type' => 'textfield',
    '#title' => t('Toggler CSS Classes'),
    '#description' => t("Separe the classes with an espace."),
    '#default_value' => theme_get_setting('regions.region_navbar.toggler_classes'),
  ];

  // Navbar toggler.
  $default_value_prefix = 'regions.region_navbar.toggler';
  $state_input_prefix = 'regions[region_navbar][toggler';
  $style = 'toggler';
  $form['regions']['region_navbar'] = array_merge($form['regions']['region_navbar'],
  _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options, FALSE));

  // Sidebar first.
  $default_value_prefix = 'regions.region_sidebar_first.background';
  $state_input_prefix = 'regions[region_sidebar_first][background';
  $style = 'background';
  $form['regions']['region_sidebar_first'] = array_merge($form['regions']['region_sidebar_first'],
  _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options, FALSE));

  // Content.
  $default_value_prefix = 'regions.region_content.background';
  $state_input_prefix = 'regions[region_content][background';
  $style = 'background';
  $form['regions']['region_content'] = array_merge($form['regions']['region_content'],
  _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options, FALSE));

  // Sidebar second.
  $default_value_prefix = 'regions.region_sidebar_second.background';
  $state_input_prefix = 'regions[region_sidebar_second][background';
  $style = 'background';
  $form['regions']['region_sidebar_second'] = array_merge($form['regions']['region_sidebar_second'],
  _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options, FALSE));

}

/**
 * Custom theme settigs submit.
 */
function camaleon_form_system_theme_settings_submit(&$form, FormStateInterface $form_state) {
  $values = $form_state->getValues();

  $config_factory = \Drupal::configFactory();
  $config_name = 'cssvars.bt';
  $config = $config_factory->getEditable($config_name);

  $entity_type_manager = \Drupal::entityTypeManager();
  $theme_color = $entity_type_manager->getStorage('theme_colors')->load($values['default_colors']['theme_color']);

  $hex_rgb_colors = [
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
    'blue',
    'indigo',
    'purple',
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'cyan',
    'white'
  ];

  foreach ($hex_rgb_colors as $hex_rgb_color) {
    $color = $theme_color->get('field_bt_' . $hex_rgb_color)->getValue()[0]['color'];
    $config->set($hex_rgb_color, $color);

    $colorObject = Color::fromHex($color);
    $rgb = $colorObject->getRgb();
    $config->set($hex_rgb_color . '_rgb', $rgb[0] . ', ' . $rgb[1] . ', ' . $rgb[2]);
  }
  $config->save();

  $hex_rgb_shades_colors = [
    'primary',
    'secondary',
    'accent',
    'gray',
  ];

  foreach ($hex_rgb_shades_colors as $hex_rgb_shades_color) {
    $color = $theme_color->get('field_bt_' . $hex_rgb_shades_color)->getValue()[0]['color'];
    $config->set($hex_rgb_shades_color, $color);

    $colorObject = Color::fromHex($color);
    $rgb = $colorObject->getRgb();
    $config->set($hex_rgb_shades_color . '_rgb', $rgb[0] . ', ' . $rgb[1] . ', ' . $rgb[2]);

    foreach (['050', '100', '200', '300','400', '500', '600', '700', '800', '900'] as $shade) {
      $color = $theme_color->get('field_bt_' . $hex_rgb_shades_color . '_' . $shade)->getValue()[0]['color'];
      $config->set($hex_rgb_shades_color . '_' . $shade, $color);

      $colorObject = Color::fromHex($color);
      $rgb = $colorObject->getRgb();
      $config->set($hex_rgb_shades_color . '_' . $shade . '_rgb', $rgb[0] . ', ' . $rgb[1] . ', ' . $rgb[2]);
    }
  }

  // Add titles color.
  $value = $values['default_colors']['titles_color'];
  switch ($value) {
    case 'default':
      $color = $theme_color->get('field_bt_primary')->getValue()[0]['color'];
      break;
    case 'customColor':
      $color = $values['default_values']['titles_color_custom'];;
      break;
    default:
      $color = $theme_color->get('field_bt_' . str_replace('-', '_', $value))->getValue()[0]['color'];
      break; 
  }
  $config->set('titles_color', $color);

  // Add body color.
  $value = $values['default_colors']['body_color'];
  switch ($value) {
    case 'default':
      $color = $theme_color->get('field_bt_primary')->getValue()[0]['color'];
      break;
    case 'customColor':
      $color = $values['default_colors']['body_color_custom'];;
      break;
    default:
      $color = $theme_color->get('field_bt_' . str_replace('-', '_', $value))->getValue()[0]['color'];
      break; 
  }
  $config->set('body_color', $color);

  // Add bg color.
  $value = $values['default_colors']['body_bg'];
  switch ($value) {
    case 'default':
      $color = $theme_color->get('field_bt_white')->getValue()[0]['color'];
      break;
    case 'customColor':
      $color = $values['default_colors']['body_bg_custom'];;
      break;
    default:
      $color = $theme_color->get('field_bt_' . str_replace('-', '_', $value))->getValue()[0]['color'];
      break; 
  }
  $config->set('body_bg', $color);

  // Add link color.
  $value = $values['default_colors']['link_color'];
  switch ($value) {
    case 'default':
      $color = $theme_color->get('field_bt_accent')->getValue()[0]['color'];
      break;
    case 'customColor':
      $color = $values['default_colors']['link_color_custom'];;
      break;
    default:
      $color = $theme_color->get('field_bt_' . str_replace('-', '_', $value))->getValue()[0]['color'];
      break; 
  }
  $config->set('link_color', $color);

  // Add link hover color.
  $value = $values['default_colors']['link_hover_color'];
  switch ($value) {
    case 'default':
      $color = $theme_color->get('field_bt_accent_600')->getValue()[0]['color'];
      break;
    case 'customColor':
      $color = $values['default_colors']['link_hover_color_custom'];;
      break;
    default:
      $color = $theme_color->get('field_bt_' . str_replace('-', '_', $value))->getValue()[0]['color'];
      break; 
  }
  $config->set('link_hover_color', $color);

  // Border color.
  $value = $values['default_colors']['border_color'];
  switch ($value) {
    case 'default':
      $color = $theme_color->get('field_bt_primary')->getValue()[0]['color'];
      break;
    case 'customColor':
      $color = $values['default_colors']['border_color_custom'];;
      break;
    default:
      $color = $theme_color->get('field_bt_' . str_replace('-', '_', $value))->getValue()[0]['color'];
      break; 
  }
  $config->set('border_color', $color);

  // Border color RGB.
  $colorObject = Color::fromHex($color);
  $rgb = $colorObject->getRgb();
  $config->set('border_color_rgb', $rgb[0] . ', ' . $rgb[1] . ', ' . $rgb[2]);

  // Clean config.
  $config->clear('_core');
  $config->clear('langcode');

  $config->save();
}

/**
 * Color form select builder.
 */
function _get_color_form_select($default_value_prefix, $state_input_prefix, $style, &$color_options, $hover = TRUE) {
  $select = [
    $style . '_color' => [
      '#type' => 'select',
      '#options' => $color_options,
      '#title' => ucfirst($style) . ' Color',
      '#description' => t("Select a theme color as @style.", ["@style" => $style]),
      '#default_value' => theme_get_setting($default_value_prefix . '_color'),
    ],

    $style . '_color_custom' => [
      '#type' => 'color',
      '#title' => ucfirst($style) . ' Custom Color',
      '#description' => t("Select a custom color as @style.", ["@style" => $style]),
      '#default_value' => theme_get_setting($default_value_prefix . '_color_custom'),
      '#states' => [
        'visible' => [
          ':input[name="' . $state_input_prefix . '_color]"]' => ['value' => 'customColor'],
        ],
      ],
    ],
  ];

  if ($hover) {
    $select[$style . '_color_hover'] = [
      '#type' => 'select',
      '#options' => $color_options,
      '#title' => ucfirst($style) . ' Color Hover',
      '#description' => t("Select a theme color as hover @style.", ["@style" => $style]),
      '#default_value' => theme_get_setting($default_value_prefix . '_color_hover'),
    ];

    $select[$style . '_color_custom_hover'] = [
      '#type' => 'color',
      '#title' => ucfirst($style) . ' Custom Color Hover',
      '#description' => t("Select a custom color as hover @style.", ["@style" => $style]),
      '#default_value' => theme_get_setting($default_value_prefix . '_color_custom_hover'),
      '#states' => [
        'visible' => [
          ':input[name="' . $state_input_prefix . '_color_hover]"]' => ['value' => 'customColor'],
        ],
      ],
    ];
  }

  return $select;
}

/**
 * Button color form select builder.
 */
function _get_button_color_form_select($default_value_prefix, $state_input_prefix, $style, &$color_options) {
  $button_color = [
    $style . '_color_active' => [
      '#type' => 'select',
      '#options' => $color_options,
      '#title' => ucfirst($style) . ' Color Active',
      '#description' => t("Select a theme color as active button color"),
      '#default_value' => theme_get_setting($default_value_prefix . '_color_active'),
    ],

    $style . '_color_custom_active' => [
      '#type' => 'color',
      '#title' => ucfirst($style) . ' Custom Color Active',
      '#description' => t("Select a custom color as active button color"),
      '#default_value' => theme_get_setting($default_value_prefix . '_color_custom_active'),
      '#states' => [
        'visible' => [
          ':input[name="' . $state_input_prefix . '_color_active]"]' => ['value' => 'customColor'],
        ],
      ],
    ],

    $style . '_color_disabled' => [
      '#type' => 'select',
      '#options' => $color_options,
      '#title' => ucfirst($style) . ' Color Disabled',
      '#description' => t("Select a theme color as disabled button color"),
      '#default_value' => theme_get_setting($default_value_prefix . '_color_disabled'),
    ],

    $style . '_color_custom_disabled' => [
      '#type' => 'color',
      '#title' => ucfirst($style) . ' Custom Color Disabled',
      '#description' => t("Select a custom color as disabled button color"),
      '#default_value' => theme_get_setting($default_value_prefix . '_color_custom_disabled'),
      '#states' => [
        'visible' => [
          ':input[name="' . $state_input_prefix . '_color_disabled]"]' => ['value' => 'customColor'],
        ],
      ],
    ],
  ];

  return array_merge(
    _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options),
    $button_color
  );
}

/**
 * Border items builder.
 */
function _get_border_form_items($type, $name, $default_value_prefix, $state_input_prefix, $color_options) {
  $borders = [
    'border_top' => t('Border Top'),
    'border_right' => t('Border Right'),
    'border_bottom' => t('Border Bottom'),
    'border_left' => t('Border Left'),
  ];

  $return = [];

  foreach ($borders as $border => $title) {
    $return[$border] = [
      '#type' => 'details',
      '#title' => $title,
    ];

    $return[$border][$border . '_select'] = [
      '#type' => 'select',
      '#options' => [
        'none' => t('None'),
        'custom' => t('Custom'),
      ],
      '#title' => $title,
      '#description' => t("Select custom to apply the border."),
      '#default_value' => theme_get_setting($default_value_prefix . '.' . $border . '.' . $border . '_select'),
    ];

    $return[$border][$border . '_style'] = [
      '#type' => 'select',
      '#options' => [
        'dotted' => t('Dotted'),
        'dashed' => t('Dashed'),
        'solid' => t('Solid'),
        'double' => t('Double'),
        'groove' => t('Groove'),
        'ridge' => t('Ridge'),
        'inset' => t('Inset'),
        'outset' => t('Outset'),
        'none' => t('None'),
        'hidden' => t('Hidden'),
      ],
      '#title' => $title . ' Style',
      '#description' => t("Select the style to apply the border."),
      '#default_value' => theme_get_setting($default_value_prefix . '.' . $border . '.' . $border . '_style'),
      '#states' => [
        'visible' => [
          ':input[name="' . $state_input_prefix . '][' . $border . '][' . $border . '_select]"]' => ['value' => 'custom'],
        ],
      ],
    ];

    $return[$border][$border . '_size'] = [
      '#type' => 'textfield',
      '#title' => $title . ' Size',
      '#description' => t("CSS Property. Example: 1px;"),
      '#default_value' => theme_get_setting($default_value_prefix . '.' . $border . '.' . $border . '_size'),
      '#states' => [
        'visible' => [
          ':input[name="' . $state_input_prefix . '][' . $border . '][' . $border . '_select]"]' => ['value' => 'custom'],
        ],
      ],
    ];

    $border_default_value_prefix = $default_value_prefix . '.' . $border;
    $border_state_input_prefix = $state_input_prefix . '][' . $border . '][' . $border;

    $border_colors = _get_color_form_select($border_default_value_prefix, $border_state_input_prefix, $border, $color_options);
    foreach ($border_colors as $item => $data) {
      $return[$border][$item] = $data;
    }
    $return[$border][$border . '_color']['#states']['visible'] = [':input[name="' . $state_input_prefix . '][' . $border . '][' . $border . '_select]"]' => ['value' => 'custom']];
    $return[$border][$border . '_color_hover']['#states']['visible'] = [':input[name="' . $state_input_prefix . '][' . $border . '][' . $border . '_select]"]' => ['value' => 'custom']];
    $return[$border][$border . '_color_opacity']['#states']['visible'] = [':input[name="' . $state_input_prefix . '][' . $border . '][' . $border . '_select]"]' => ['value' => 'none']];
    $return[$border][$border . '_color_opacity_hover']['#states']['visible'] = [':input[name="' . $state_input_prefix . '][' . $border . '][' . $border . '_select]"]' => ['value' => 'custom']];
  }

  return $return;
}

/**
 * Font select builder.
 */
function _get_font_select() {

  $options = [
    'default' => 'Default',
    'roboto' => 'Roboto',
    'jolly-lodger' => 'Jolly Lodger',
    'oswald' => 'Oswald',
    'zen-antique' => 'Zen Antique',
    'amatic-sc' => 'Amatic SC',
    'kalam' => 'Kalam',
    'russo-one' => 'Russo One',
    'archivo-black' => 'Archivo Black',
    'el-messiri' => 'El Messiri',
    'akaya-telivigala' => 'Akaya Telivigala',
    'baloo-2' => 'Baloo 2',
    'noticia-text' => 'Noticia Text',
    'kaushan-script' => 'Kaushan Script',
    'titan-one' => 'Titan One',
    'montserrat' => 'Montserrat',
    'ubuntu' => 'Ubuntu',
    'merriweather' => 'Merriweather',
    'playfair-display' => 'Playfair Display',
    'kanit' => 'Kanit',
    'lora' => 'Lora',
    'fira-sans' => 'Fira Sans',
    'quicksand' => 'Quicksand',
    'barlow' => 'Barlow',
    'titillium-web' => 'Titillium Web',
    'trispace' => 'Trispace',
    'josefin-sans' => 'Josefin Sans',
    'shalimar' => 'Shalimar',
    'anton' => 'Anton',
    'dancing-script' => 'Dancing Script',
    'secular-one' => 'Secular One',
    'lobster' => 'Lobster',
    'fjalla-one' => 'Fjalla One',
    'exo-2' => 'Exo 2',
    'caveat' => 'Caveat',
  ];

  return $options;
}

/**
 * Theme color select builder.
 */
function _get_theme_color_select() {
  $options = [];
  $entity_type_manager = \Drupal::entityTypeManager();
  $theme_colors = $entity_type_manager->getStorage('theme_colors')->loadMultiple();

  foreach ($theme_colors as $theme_color) {
    $options[$theme_color->id()] = $theme_color->label();
  }
  return $options;
}
