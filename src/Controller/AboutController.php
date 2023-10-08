<?php

namespace Drupal\bt_store_cl\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * About page controller.
 */
class AboutController extends ControllerBase {

  /**
   * Returns a render-able array for the about project page.
   */
  public function content() {
    return [
      '#markup' => '<p class="text-align-center"><strong>TiendaParaMiPyMe</strong> es una distribución <a href="https://www.drupal.org">Drupal</a> de comercio electrónico específica para Chile, para más información, ayuda y soporte visite nuestro sitio web <a href="https://www.tiendaparamipyme.cl"><strong>www.tiendaparamipyme.cl</strong></a>.</p>'
    ];
  }

}
