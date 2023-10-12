<?php

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Config\FileStorage;
use LukaPeharda\TailwindCssColorPaletteGenerator\Color;
use LukaPeharda\TailwindCssColorPaletteGenerator\PaletteGenerator;

function camaleon_form_system_theme_settings_alter(&$form, FormStateInterface $form_state) {
  // Add custom submit.
  $theme_file = drupal_get_path('theme', 'camaleon') . '/camaleon.theme';
  $build_info = $form_state->getBuildInfo();
  if (!in_array($theme_file, $build_info['files'])) {
    $build_info['files'][] = $theme_file;
  }
  $form_state->setBuildInfo($build_info);

  $form['#submit'][] = 'camaleon_form_system_theme_settings_submit';

  $color_options = [
    'default' => t('Default'),
    'bs-primary' => t('Primary'),
    'bs-primary-050' => t('Primary 50'),
    'bs-primary-100' => t('Primary 100'),
    'bs-primary-200' => t('Primary 200'),
    'bs-primary-300' => t('Primary 300'),
    'bs-primary-400' => t('Primary 400'),
    'bs-primary-500' => t('Primary 500'),
    'bs-primary-600' => t('Primary 600'),
    'bs-primary-700' => t('Primary 700'),
    'bs-primary-800' => t('Primary 800'),
    'bs-primary-900' => t('Primary 900'),
    'bs-secondary' => t('Secondary'),
    'bs-secondary-050' => t('Secondary 50'),
    'bs-secondary-100' => t('Secondary 100'),
    'bs-secondary-200' => t('Secondary 200'),
    'bs-secondary-300' => t('Secondary 300'),
    'bs-secondary-400' => t('Secondary 400'),
    'bs-secondary-500' => t('Secondary 500'),
    'bs-secondary-600' => t('Secondary 600'),
    'bs-secondary-700' => t('Secondary 700'),
    'bs-secondary-800' => t('Secondary 800'),
    'bs-secondary-900' => t('Secondary 900'),
    'bs-accent' => t('Accent'),
    'bs-accent-050' => t('Accent 50'),
    'bs-accent-100' => t('Accent 100'),
    'bs-accent-200' => t('Accent 200'),
    'bs-accent-300' => t('Accent 300'),
    'bs-accent-400' => t('Accent 400'),
    'bs-accent-500' => t('Accent 500'),
    'bs-accent-600' => t('Accent 600'),
    'bs-accent-700' => t('Accent 700'),
    'bs-accent-800' => t('Accent 800'),
    'bs-accent-900' => t('Accent 900'),
    'bs-success' => t('Success'),
    'bs-info' => t('Info'),
    'bs-warning' => t('Warning'),
    'bs-danger' => t('Danger'),
    'bs-light' => t('Light'),
    'bs-dark' => t('Dark'),
    'bs-blue' => t('Blue'),
    'bs-indigo' => t('Indigo'),
    'bs-purple' => t('Purple'),
    'bs-pink' => t('Pink'),
    'bs-red' => t('Red'),
    'bs-orange' => t('Orange'),
    'bs-yellow' => t('Yellow'),
    'bs-green' => t('Green'),
    'bs-teal' => t('Teal'),
    'bs-cyan' => t('Cyan'),
    'bs-white' => t('White'),
    'bs-gray-dark' => t('Gray Dark'),
    'bs-gray-100' => t('Gray 100'),
    'bs-gray-200' => t('Gray 200'),
    'bs-gray-300' => t('Gray 300'),
    'bs-gray-400' => t('Gray 400'),
    'bs-gray-500' => t('Gray 500'),
    'bs-gray-600' => t('Gray 600'),
    'bs-gray-700' => t('Gray 700'),
    'bs-gray-800' => t('Gray 800'),
    'bs-gray-900' => t('Gray 900'),
    'customColor' => t('Custom Color'),
  ];

  $color_items = [
    '_color',
    '_color_custom',
    '_color_hover',
    '_color_custom_hover',
  ];


  #### FONTS ####
  $form['fonts'] = [
    '#type' => 'details',
    '#title' => t('Fuentes'),
    '#tree' => TRUE,
  ];

  #### DEFAULT FONT ####  
  $form['fonts']['default_font'] = [
    '#type' => 'select',
    '#options' => _get_font_select(),
    '#title' => t('Default font'),
    '#description' => t("Select a default font. See https://fonts.google.com/."),
    '#default_value' => theme_get_setting('fonts.default_font'),
  ];

  #### HEADERS FONTS ####  
  $form['fonts']['headers_font'] = [
    '#type' => 'select',
    '#options' => _get_font_select(),
    '#title' => t('Headers font'),
    '#description' => t("Select a default headers font. See https://fonts.google.com/."),
    '#default_value' => theme_get_setting('fonts.headers_font'),
  ];

  #### Theme Color ####
  $entity_type_manager = \Drupal::entityTypeManager();
  $theme_colors = $entity_type_manager->getStorage('theme_colors')->loadMultiple();
  $options = _get_theme_color_select();

  foreach ($theme_colors as $theme_color) {
    $options[$theme_color->id()] = $theme_color->label(); 
  }

  $form['theme_color'] = [
    '#type' => 'select',
    '#options' => $options,
    '#title' => t('Theme Color'),
    '#description' => t("Select a default theme color palette. You can add more color palettes on /theme-colors/add."),
    '#default_value' => theme_get_setting('theme_color'),
  ];

  #### BUTTONS ####
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
      '#title' => t(ucfirst($type)),
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

  #### REGIONS ####
  $form['regions'] = [
    '#type' => 'details',
    '#title' => t('Regions'),
    '#tree' => TRUE,
  ];

  $other_regions = [
    'sidebar_first' => 'Sidebar Firts',
    'content' => 'Content',
    'sidebar_second' => 'Sidebar Second'
  ];

  foreach ($other_regions as $region_id => $region_name) {
    $form['regions']['region_' . $region_id] = [
      '#type' => 'details',
      '#title' => t($region_name . ' region'),
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
      '#title' => t($region_name . ' region'),
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
        'full' => 'Full',
        'box' => 'Box'
      ],
      '#title' => t('Container Type'),
      '#description' => t("Select a container type for the width."),
      '#default_value' => theme_get_setting('regions.region_' . $region_id . '.width.container_select'),
    ];

    $form['regions']['region_' . $region_id]['width']['full_select'] = [
      '#type' => 'select',
      '#options' => [
        '0' => '100%',
        '5%' => '90%',
        '10%' => '80%',
        '15%' => '70%',
        '20%' => '60%',
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
        '100%' => '100%',
        '90%' => '90%',
        '80%' => '80%',
        '70%' => '70%',
        '60%' => '60%',
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
    _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options));
  }

  // Navbar positions
  $form['regions']['region_navbar']['position_select'] = [
    '#type' => 'select',
    '#options' => [
      'inherit' => t('Inherit'),
      'initial' => t('Initial'),
      'revert' => t('Revert'),
      'revert-layer' => t('Revert Layer'),
      'static' => t('Static'),
      'relative' => t('Relative'),
      'absolute' => t('Absolute'),
      'fixed' => t('Fixed'),
      'sticky' => t('Sticky'),
    ],
    '#title' => t('Position'),
    '#description' => t("Select css position."),
    '#default_value' => theme_get_setting('regions.navbar.position'),
  ];

  // Navbar inner container classes
  $form['regions']['region_navbar']['inner_container_classes'] = [
    '#type' => 'textfield',
    '#title' => t('Inner Container Classes'),
    '#description' => t("Separe the classes with an espace."),
    '#default_value' => theme_get_setting('regions.region_navbar.inner_container_classes'),
  ]; 

  // Toggler classes
  $form['regions']['region_navbar']['toggler_classes'] = [
    '#type' => 'textfield',
    '#title' => t('Toggler Classes'),
    '#description' => t("Separe the classes with an espace."),
    '#default_value' => theme_get_setting('regions.region_navbar.toggler_classes'),
  ]; 

  // Navbar toggler
  $default_value_prefix = 'regions.region_navbar.toggler';
  $state_input_prefix = 'regions[region_navbar][toggler';
  $style = 'toggler';
  $form['regions']['region_navbar'] = array_merge($form['regions']['region_navbar'],
  _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options));

  // Sidebar first
  $default_value_prefix = 'regions.region_sidebar_first.background';
  $state_input_prefix = 'regions[region_sidebar_first][background';
  $style = 'background';
  $form['regions']['region_sidebar_first'] = array_merge($form['regions']['region_sidebar_first'],
  _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options));

  // Content
  $default_value_prefix = 'regions.region_content.background';
  $state_input_prefix = 'regions[region_content][background';
  $style = 'background';
  $form['regions']['region_content'] = array_merge($form['regions']['region_content'],
  _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options));

  // Sidebar second
  $default_value_prefix = 'regions.region_sidebar_second.background';
  $state_input_prefix = 'regions[region_sidebar_second][background';
  $style = 'background';
  $form['regions']['region_sidebar_second'] = array_merge($form['regions']['region_sidebar_second'],
  _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options));
}

function camaleon_form_system_theme_settings_submit(&$form, \Drupal\Core\Form\FormStateInterface $form_state) {
  $theme_defaults = [
    'alicia',
    'eco-wave',
    'harmonious-blooms',
    'mystic-aura',
    'royal-radiance',
    'serene-harmony',
    'sunset-meadows',
    'vibrant-sky',
  ];
 
  $values = $form_state->getValues();
  if (in_array($values['theme_color'], $theme_defaults)) {
    $config_factory = \Drupal::configFactory();
    $config_name = 'cssvars.bt';
    $config_factory->getEditable($config_name)->delete();
    $file_conf_name = $values['theme_color'];
    $config_path = drupal_get_path('theme', 'camaleon') . '/includes/palettes';
    $source = new FileStorage($config_path);
    $config_storage = \Drupal::service('config.storage');
    $config_storage->write($config_name, $source->read($file_conf_name));
  } elseif ($values['theme_color'] != 'default') {
    $config_factory = \Drupal::configFactory();
    $config_name = 'cssvars.bt';
    $config = $config_factory->getEditable($config_name);

    $entity_type_manager = \Drupal::entityTypeManager();
    $theme_color = $entity_type_manager->getStorage('theme_colors')->load($values['theme_color']);

    $hex_colors = [
      'body_bg',
      'body_bg_light',
      'body_bg_dark',
      'body_color',
      'block_bg_color',
      'block_text_color',
      'caption_text_color',
      'intro_text_color',
      'page_title_color',
      'section_title_color',
      'block_title_color',
      'article_title_color',
      'blog_title_color',
      'link_color',
      'link_hover_color',
      'button_link_color',
    ];

    foreach ($hex_colors as $hex_color) {
      $color = $theme_color->get('field_bt_' . $hex_color)->getValue()[0]['color'];
      $config->set($hex_color, $color);
    }
    $config->save();

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

      $paletteGenerator = new PaletteGenerator;
      $paletteGenerator->setBaseColor($colorObject);
    
      if ($hex_rgb_shades_color == 'gray') {
        $paletteGenerator->setColorSteps([100, 200, 300, 400, 500, 600, 700, 800, 900]);
      }
      $palette = $paletteGenerator->getPalette();
      foreach ($palette as $shade => $palette_color) {
        $config->set($hex_rgb_shades_color . '_' . $shade, '#' . $palette_color->getHex());
        if ($shade == '50') {
          $config->set($hex_rgb_shades_color . '_0' . $shade, '#' . $palette_color->getHex());
        }
        $rgb = $palette_color->getRgb();
        $config->set($hex_rgb_shades_color . '_' . $shade . '_rgb', $rgb[0] . ', ' . $rgb[1] . ', ' . $rgb[2]);
      }
    }
    $config->save();
  }
}

function _get_color_form_select($default_value_prefix, $state_input_prefix, $style, &$color_options) {
  return [
    $style . '_color' => [
      '#type' => 'select',
      '#options' => $color_options,
      '#title' => ucfirst($style) . ' Color',
      '#description' => t("Select a theme color as " . $style . "."),
      '#default_value' => theme_get_setting($default_value_prefix . '_color'),
    ],

    $style . '_color_custom' => [
      '#type' => 'color',
      '#title' => ucfirst($style) . ' Custom Color',
      '#description' => t("Select a custom color as " . $style . "."),
      '#default_value' => theme_get_setting($default_value_prefix . '_color_custom'),
      '#states' => [
        'visible' => [
          ':input[name="' . $state_input_prefix . '_color]"]' => ['value' => 'customColor'],
        ],
      ],
    ],
    $style . '_color_hover' => [
      '#type' => 'select',
      '#options' => $color_options,
      '#title' => ucfirst($style) . ' Color Hover',
      '#description' => t("Select a theme color as hover " . $style . "."),
      '#default_value' => theme_get_setting($default_value_prefix . '_color_hover'),
    ],

    $style . '_color_custom_hover' => [
      '#type' => 'color',
      '#title' => ucfirst($style) . ' Custom Color Hover',
      '#description' => t("Select a custom color as hover " . $style . "."),
      '#default_value' => theme_get_setting($default_value_prefix . '_color_custom_hover'),
      '#states' => [
        'visible' => [
          ':input[name="' . $state_input_prefix . '_color_hover]"]' => ['value' => 'customColor'],
        ],
      ],
    ],
  ];
}

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

function _get_border_form_items($type, $name, $default_value_prefix, $state_input_prefix, $color_options) {
  $borders = [
    'border_top' => 'Border Top',
    'border_right' => 'Border Right',
    'border_bottom' => 'Border Bottom',
    'border_left' => 'Border Left',
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
        'none' => 'None',
        'custom' => 'Custom'
      ],
      '#title' => $title,
      '#description' => t("Select custom to apply the border."),
      '#default_value' => theme_get_setting($default_value_prefix . '.' . $border . '.' . $border . '_select'),
    ];

    $return[$border][$border . '_style'] = [
      '#type' => 'select',
      '#options' => [
        'dotted' => 'Dotted',
        'dashed' => 'Dashed',
        'solid' => 'Solid',
        'double' => 'Double',
        'groove' => 'Groove',
        'ridge' => 'Ridge',
        'inset' => 'Inset',
        'outset' => 'Outset',
        'none' => 'None',
        'hidden' => 'Hidden'
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
    $border_state_input_prefix = $state_input_prefix . '][' . $border . '][' . $border ;
    
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

function _get_theme_color_select() {
  $options = [
    'default' => 'Default',
    'alicia' => 'Alicia',
    'eco-wave' => 'Eco Wave',
    'harmonious-blooms' => 'Harmonious Blooms',
    'mystic-aura' => 'Mystic Aura',
    'royal-radiance' => 'Royal Radiance',
    'serene-harmony' => 'Serene Harmony',
    'sunset-meadows' => 'Sunset Meadows',
    'vibrant-sky' => 'Vibrant Sky',
  ];
  return $options;
}