<?php

use Drupal\Core\Form\FormStateInterface;

function camaleon_form_system_theme_settings_alter(&$form, FormStateInterface $form_state) {
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

  #### FONT ####  
  $form['font'] = [
    '#type' => 'select',
    '#options' => _get_font_select(),
    '#title' => t('Default font'),
    '#description' => t("Select a default font. See https://fonts.google.com/."),
    '#default_value' => theme_get_setting('font'),
  ];

  #### MENUS ####   
  $form['menus'] = [
    '#type' => 'details',
    '#title' => t('Menus'),
    '#tree' => TRUE,
  ];

  $menu_type_select = [
    'default' => 'Default',
    'one' => 'Variant 1',
    'two' => 'Variant 2'
  ];

  foreach (['main', 'footer'] as $menu_type) {
    ## Menu ##
    $form['menus']['menu_' . $menu_type] = [
      '#type' => 'details',
      '#title' => t(ucfirst($menu_type) . ' Menu'),
      '#tree' => TRUE,
    ];
    // Menu type
    $form['menus']['menu_' . $menu_type]['type'] = [
      '#type' => 'select',
      '#options' => $menu_type_select,
      '#title' => t('Menu Type'),
      '#description' => t("Select a type of presentation."),
      '#default_value' => theme_get_setting('menus.menu_' . $menu_type . '.type'),
    ];

    // Item
    $form['menus']['menu_' . $menu_type]['item'] = [
      '#type' => 'details',
      '#title' => t('Item'),
      '#weight' => 100,
      '#tree' => TRUE,
    ];
    // padding
    $form['menus']['menu_' . $menu_type]['item']['padding'] = [
      '#type' => 'textfield',
      '#title' => 'Item Padding',
      '#description' => t("CSS Property. Example: 1rem;"),
      '#default_value' => theme_get_setting('menus.menu_' . $menu_type . '.item.padding'),
      '#weight' => 60,
    ];
  }

  #### BLOCKS ####
  $form['blocks'] = [
    '#type' => 'details',
    '#title' => t('Blocks'),
    '#tree' => TRUE,
  ];

  ## Branding ##
  $form['blocks']['branding'] = [
    '#type' => 'details',
    '#title' => t('Branding'),
    '#tree' => TRUE,
  ];
  // branding_type
  $form['blocks']['branding']['branding_type'] = [
    '#type' => 'select',
    '#options' => [
      'horizontal' => t('Horizontal'),
      'vertical' => t('Vertical'),
      'horizontal_inverted' => t('Horizontal Inverted'),
      'vertical_inverted' => t('Vertical Inverted'),
    ],
    '#title' => t('Branding Presentation'),
    '#description' => t("Select a type of presentation."),
    '#default_value' => theme_get_setting('blocks.branding.branding_type'),
  ];
  // logo_size
  $form['blocks']['branding']['logo_size'] = [
    '#type' => 'textfield',
    '#title' => t('Logo Size'),
    '#description' => t("CSS Property. Examples: 100px; 10vh; 30%;"),
    '#default_value' => theme_get_setting('blocks.branding.logo_size'),
  ];
  // name_font_size
  $form['blocks']['branding']['name_font_size'] = [
    '#type' => 'textfield',
    '#title' => t('Name Font Size'),
    '#description' => t("CSS Property. Examples: 2rem; 32px;"),
    '#default_value' => theme_get_setting('blocks.branding.name_font_size'),
  ];
  // slogan_font_size
  $form['blocks']['branding']['slogan_font_size'] = [
    '#type' => 'textfield',
    '#title' => t('Slogan Font Size'),
    '#description' => t("CSS Property. Examples: 2rem; 32px;"),
    '#default_value' => theme_get_setting('blocks.branding.slogan_font_size'),
  ];

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
  }

  #### COLORS ELEMENTS ####
  $color_items = [
    '_color',
    '_color_custom',
    '_color_opacity',
    '_color_custom_opacity',
    '_color_hover',
    '_color_custom_hover',
    '_color_opacity_hover',
    '_color_custom_opacity_hover',
  ];

  # Blocks
  // Main menu
  $mainmenu_background_colors = _get_color_form_select('menus.menu_main.background', 'menus[menu_main][background', 'background', $color_options);
  $mainmenu_items_colors = _get_color_form_select('menus.menu_main.item.item', 'menus[menu_main][item][item', 'item', $color_options);
  $mainmenu_item_bg_colors = _get_color_form_select('menus.menu_main.item.item_background', 'menus[menu_main][item][item_background', 'item_background', $color_options);

  // Footer menu
  $footermenu_background_colors = _get_color_form_select('menus.menu_footer.background', 'menus[menu_footer][background', 'background', $color_options);
  $footermenu_items_colors = _get_color_form_select('menus.menu_footer.item.item', 'menus[menu_footer][item][item', 'item', $color_options);
  $footermenu_item_bg_colors = _get_color_form_select('menus.menu_footer.item.item_background', 'menus[menu_footer][item][item_background', 'item_background', $color_options);

  // Branding
  $branding_colors = _get_color_form_select('blocks.branding.background', 'blocks[branding][background', 'background', $color_options);
  $branding_name_colors = _get_color_form_select('blocks.branding.name', 'blocks[branding][name', 'name', $color_options);
  $branding_slogan_colors = _get_color_form_select('blocks.branding.slogan', 'blocks[branding][slogan', 'slogan', $color_options);

  # Regions
  // Top
  $default_value_prefix = 'regions.region_top.background';
  $state_input_prefix = 'regions[region_top][background';
  $style = 'background';

  $top_region_colors = _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options);

  // Pre-header
  $default_value_prefix = 'regions.region_pre_header.background';
  $state_input_prefix = 'regions[region_pre_header][background';
  $style = 'background';

  $pre_header_region_colors = _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options);

  // Navbar Background
  $default_value_prefix = 'regions.region_navbar.background';
  $state_input_prefix = 'regions[region_navbar][background';
  $style = 'background';

  $navbar_region_colors = _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options);

  // Navbar Toggler
  $default_value_prefix = 'regions.region_navbar.toggler';
  $state_input_prefix = 'regions[region_navbar][toggler';
  $style = 'toggler';

  $navbar_toggler_colors = _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options);

  // Header
  $default_value_prefix = 'regions.region_header.background';
  $state_input_prefix = 'regions[region_header][background';
  $style = 'background';

  $header_region_colors = _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options);

  // Primary menu
  $default_value_prefix = 'regions.region_primary_menu.background';
  $state_input_prefix = 'regions[region_primary_menu][background';
  $style = 'background';

  $primary_menu_region_colors = _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options);

  // Secondary menu
  $default_value_prefix = 'regions.region_secondary_menu.background';
  $state_input_prefix = 'regions[region_secondary_menu][background';
  $style = 'background';

  $secondary_menu_region_colors = _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options);

  // Breadcrumb
  $default_value_prefix = 'regions.region_breadcrumb.background';
  $state_input_prefix = 'regions[region_breadcrumb][background';
  $style = 'background';

  $breadcrumb_region_colors = _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options);

  // Highlighted
  $default_value_prefix = 'regions.region_highlighted.background';
  $state_input_prefix = 'regions[region_highlighted][background';
  $style = 'background';

  $highlighted_region_colors = _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options);

  // Sidebar first
  $default_value_prefix = 'regions.region_sidebar_first.background';
  $state_input_prefix = 'regions[region_sidebar_first][background';
  $style = 'background';

  $sidebar_first_region_colors = _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options);

  // Content
  $default_value_prefix = 'regions.region_content.background';
  $state_input_prefix = 'regions[region_content][background';
  $style = 'background';

  $content_region_colors = _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options);

  // Sidebar second
  $default_value_prefix = 'regions.region_sidebar_second.background';
  $state_input_prefix = 'regions[region_sidebar_second][background';
  $style = 'background';

  $sidebar_second_region_colors = _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options);

  // Footer
  $default_value_prefix = 'regions.region_footer.background';
  $state_input_prefix = 'regions[region_footer][background';
  $style = 'background';

  $footer_region_colors = _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options);

  // Bottom
  $default_value_prefix = 'regions.region_bottom.background';
  $state_input_prefix = 'regions[region_bottom][background';
  $style = 'background';

  $bottom_region_colors = _get_color_form_select($default_value_prefix, $state_input_prefix, $style, $color_options);

  $weight = 0;
  foreach ($color_items as $item) {
    #### MENUS ####
    # Main
    // background_color
    $form['menus']['menu_main']['background' . $item] = $mainmenu_background_colors['background' . $item];
    $form['menus']['menu_main']['background' . $item]['#weight'] = 10 + $weight;
    // item_color
    $form['menus']['menu_main']['item']['item' . $item] = $mainmenu_items_colors['item' . $item];
    $form['menus']['menu_main']['item']['item' . $item]['#weight'] = 20 + $weight;
    // item_background_color
    $form['menus']['menu_main']['item']['item_background' . $item] = $mainmenu_item_bg_colors['item_background' . $item];
    $form['menus']['menu_main']['item']['item_background' . $item]['#weight'] = 30 + $weight;
    # Footer
    // background_color
    $form['menus']['menu_footer']['background' . $item] = $footermenu_background_colors['background' . $item];
    $form['menus']['menu_footer']['background' . $item]['#weight'] = 10 + $weight;
    // item_color
    $form['menus']['menu_footer']['item']['item' . $item] = $footermenu_items_colors['item' . $item];
    $form['menus']['menu_footer']['item']['item' . $item]['#weight'] = 20 + $weight;
    // item_background_color
    $form['menus']['menu_footer']['item']['item_background' . $item] = $footermenu_item_bg_colors['item_background' . $item];
    $form['menus']['menu_fotoer']['item']['item_background' . $item]['#weight'] = 30 + $weight;

    #### BLOCKS ####
    //// branding ////
    // background_color
    $form['blocks']['branding']['background' . $item] = $branding_colors['background' . $item];
    $form['blocks']['branding']['background' . $item]['#weight'] = 10 + $weight;
    // name_color
    $form['blocks']['branding']['name' . $item] = $branding_name_colors['name' . $item];
    $form['blocks']['branding']['name' . $item]['#weight'] = 20 + $weight;
    // slogan_color
    $form['blocks']['branding']['slogan'. $item] = $branding_slogan_colors['slogan'. $item];
    $form['blocks']['branding']['slogan'. $item]['#weight'] = 30 + $weight;

    #### REGIONS #####
    // Top
    $form['regions']['region_top']['background' . $item] = $top_region_colors['background' . $item];
    // Pre-header
    $form['regions']['region_pre_header']['background' . $item] = $pre_header_region_colors['background' . $item];
    // Navbar
    $form['regions']['region_navbar']['background' . $item] = $navbar_region_colors['background' . $item];
    $form['regions']['region_navbar']['toggler' . $item] = $navbar_toggler_colors['toggler' . $item];
    // Header
    $form['regions']['region_header']['background' . $item] = $header_region_colors['background' . $item];
    // Primary Menu
    $form['regions']['region_primary_menu']['background' . $item] = $primary_menu_region_colors['background' . $item];
    // Secondary Menu
    $form['regions']['region_secondary_menu']['background' . $item] = $secondary_menu_region_colors['background' . $item];
    // Breadcrumb
    $form['regions']['region_breadcrumb']['background' . $item] = $breadcrumb_region_colors['background' . $item];
    // Highlighted
    $form['regions']['region_highlighted']['background' . $item] = $highlighted_region_colors['background' . $item];
    // Sidebar First
    $form['regions']['region_sidebar_first']['background' . $item] = $sidebar_first_region_colors['background' . $item];
    // Content
    $form['regions']['region_content']['background' . $item] = $content_region_colors['background' . $item];
    // Sidebar Second
    $form['regions']['region_sidebar_second']['background' . $item] = $sidebar_second_region_colors['background' . $item];
    // Footer
    $form['regions']['region_footer']['background' . $item] = $footer_region_colors['background' . $item];
    // Bottom
    $form['regions']['region_bottom']['background' . $item] = $bottom_region_colors['background' . $item];
    $weight++;
  }
}

function _get_opacity_options($type) {
  if ($type == 'hexadecimal') {
    return [
      'FF' => "100%",
      'F2' => "95%",
      'E6' => "90%",
      'D9' => "85%",
      'CC' => "80%",
      'BF' => "75%",
      'B3' => "70%",
      'A6' => "65%",
      '99' => "60%",
      '8C' => "55%",
      '80' => "50%",
      '73' => "45%",
      '66' => "40%",
      '59' => "35%",
      '4D' => "30%",
      '40' => "25%",
      '33' => "20%",
      '26' => "15%",
      '1A' => "10%",
      '0D' => "5%",
      '00' => "0%",
    ];
  } elseif ($type == 'decimal') {
    return [
      '1.00' => "100%",
      '0.95' => "95%",
      '0.90' => "90%",
      '0.85' => "85%",
      '0.80' => "80%",
      '0.75' => "75%",
      '0.70' => "70%",
      '0.65' => "65%",
      '0.60' => "60%",
      '0.55' => "55%",
      '0.50' => "50%",
      '0.45' => "45%",
      '0.40' => "40%",
      '0.35' => "35%",
      '0.30' => "30%",
      '0.25' => "25%",
      '0.20' => "20%",
      '0.15' => "15%",
      '0.10' => "10%",
      '0.05' => "5%",
      '0.00' => "0%",
    ];
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

    $style . '_color_opacity' => [
      '#type' => 'select',
      '#options' => _get_opacity_options('decimal'),
      '#title' => ucfirst($style) . ' Color Opacity',
      '#description' => t("Select an opacity for " . $style . " color."),
      '#default_value' => theme_get_setting($default_value_prefix . '_color_opacity'),
      '#states' => [
        'invisible' => [
          ':input[name="' . $state_input_prefix . '_color]"]' => ['value' => 'customColor'],
        ],
      ],
    ],

    $style . '_color_custom_opacity' => [
      '#type' => 'select',
      '#options' => _get_opacity_options('hexadecimal'),
      '#title' => ucfirst($style) . ' Color Opacity',
      '#description' => t("Select an opacity for " . $style . " color."),
      '#default_value' => theme_get_setting($default_value_prefix . '_color_custom_opacity'),
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

    $style . '_color_opacity_hover' => [
      '#type' => 'select',
      '#options' => _get_opacity_options('decimal'),
      '#title' => ucfirst($style) . ' Color Opacity Hover',
      '#description' => t("Select an opacity for " . $style . " hover color."),
      '#default_value' => theme_get_setting($default_value_prefix . '_color_opacity_hover'),
      '#states' => [
        'invisible' => [
          ':input[name="' . $state_input_prefix . '_color_hover]"]' => ['value' => 'customColor'],
        ],
      ],
    ],

    $style . '_color_custom_opacity_hover' => [
      '#type' => 'select',
      '#options' => _get_opacity_options('hexadecimal'),
      '#title' => ucfirst($style) . ' Color Opacity Hover',
      '#description' => t("Select an opacity for " . $style . " hover color."),
      '#default_value' => theme_get_setting($default_value_prefix . '_color_custom_opacity_hover'),
      '#states' => [
        'visible' => [
          ':input[name="' . $state_input_prefix . '_color_hover]"]' => ['value' => 'customColor'],
        ],
      ],
    ],
  ];
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