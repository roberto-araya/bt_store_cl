<?php

/**
 * @file
 * Functions to support theming navigation in the theme.
 */

/**
 *
 */
function _breadcrumb_preprocess(&$variables) {
  if (($node = \Drupal::routeMatch()->getParameter('node')) && $variables['breadcrumb']) {
    $variables['breadcrumb'][] = [
      'node-title' => $node->getTitle(),
    ];
  }
}
