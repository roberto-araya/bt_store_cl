<?php

namespace Drupal\bt_theme_colors;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityChangedInterface;
use Drupal\user\EntityOwnerInterface;

/**
 * Provides an interface defining a theme colors entity type.
 */
interface ThemeColorsInterface extends ContentEntityInterface, EntityOwnerInterface, EntityChangedInterface {

}
