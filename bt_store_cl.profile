<?php

/**
 * @file
 * Enables modules and site configuration for a standard site installation.
 */

/*use Drupal\contact\Entity\ContactForm;*/
use Drupal\Core\Form\FormStateInterface;
use Drupal\user\UserInterface;
use Drupal\user\Entity\User;
use CommerceGuys\Addressing\Subdivision\SubdivisionRepository;

/**
 * Implements hook_form_FORM_ID_alter() for install_configure_form().
 *
 * Allows the profile to alter the site configuration form.
 */
function bt_store_cl_form_install_configure_form_alter(&$form, FormStateInterface $form_state) {
  $form['site_information']['#type'] = 'fieldset';
  $form['admin_account']['#type'] = 'fieldset';
  
  $form['regional_settings']['#type'] = 'hidden';
  
  $form['regional_settings']['site_default_country'] = [
    '#type' => 'hidden',
    '#value' => "CL",
  ];

  $form['regional_settings']['date_default_timezone'] = [
    '#type' => 'hidden',
    '#value' => "America/Santiago",
  ];

  $form['update_notifications']['#type'] = 'hidden';

  $form['update_notifications']['enable_update_status_module'] = [
    '#type' => 'hidden',
    '#value' => 0,
  ];

  $form['update_notifications']['enable_update_status_emails'] = [
    '#type' => 'hidden',
    '#value' => 0,
  ];
    
  $form['store_information'] = [
    '#type' => 'fieldset',
    '#title' => t('Información de la tienda'),
    '#collapsible' => FALSE,
    '#weight' => -10,
  ];

  $form['store_information']['store_name'] = [
    '#type' => 'textfield',
    '#title' => t('Nombre de la tienda'),
    '#required' => TRUE,
    '#weight' => -20,
  ];

  $form['store_information']['store_mail'] = [
    '#type' => 'textfield',
    '#title' => t('Dirección de correo electrónico de la tienda'),
    '#default_value' => ini_get('sendmail_from'),
    '#description' => t("The <em>From</em> address in automated e-mails sent during registration and new password requests, and other notifications. (Use an address ending in your site's domain to help prevent this e-mail being flagged as spam.)"),
    '#required' => TRUE,
    '#weight' => -15,
  ];

  $subdivisions = new SubdivisionRepository();

  $form['store_information']['address'] = [
    '#type' => 'textfield',
    '#title' => t('Dirección'),
    '#required' => TRUE,
    '#weight' => -10,
  ];

  $form['store_information']['region'] = [
    '#type' => 'select',
    '#options' => $subdivisions->getList(['CL'], NULL),
    '#default-value' => 'Región Metropolitana',
    '#title' => t('Region'),
    '#collapsible' => FALSE,
    '#weight' => -9,
  ];

  $form['store_information']['comuna'] = [
    '#type' => 'select',
    '#title' => t('Comuna'),
    '#collapsible' => FALSE,
    '#weight' => -8,
    '#validated' => TRUE,
  ];

  $form['#submit'][] = 'bt_store_cl_form_install_configure_submit';
  $form['#attached']['library'][] = 'bt_store_cl/comunas';
}

/**
 * Submission handler to sync the contact.form.feedback recipient.
 */
function bt_store_cl_form_install_configure_submit($form, FormStateInterface $form_state) {
  // ContactForm::load('contacto_del_sitio')->setRecipients([$site_mail])->trustData()->save();
    
  $address = [
    'country_code' => 'CL',
    'address_line1' => $form_state->getValue('address'),
    'locality' => $form_state->getValue('comuna'),
    'administrative_area' => $form_state->getValue('region'),
    'postal_code' => '',
  ];

  // If needed, this will import the currency.
  $currency_importer = \Drupal::service('commerce_price.currency_importer');
  $currency_importer->import('CLP');

  $store = \Drupal\commerce_store\Entity\Store::create([
    'type' => 'online',
    'uid' => 1,
    'name' => $form_state->getValue('store_name'),
    'mail' => $form_state->getValue('store_mail'),
    'address' => $address,
    'default_currency' => 'CLP',
    'billing_countries' => ['CL'],
  ]);
  $store->save();

  // If needed, this sets the store as the default store.
  $store_storage = \Drupal::service('entity_type.manager')->getStorage('commerce_store');
  $store_storage->markAsDefault($store);
}

function bt_store_cl_install_tasks_alter(&$tasks, $install_state) {
  // Hide install verify requirements task of the tasks list.
  $tasks['install_verify_requirements']['display_name'] = FALSE;
  // Hide select language.
  $tasks['install_select_language']['display_name'] = FALSE;
  // Hide database form.
  $tasks['install_settings_form']['display_name'] = FALSE;
  $tasks['install_finished']['function'] = '_bt_store_cl_post_install_tasks';
}

/**
 * Create the user for the client and redirect to /wca after installation.
 *
 * @param array $install_state
 *   The current install state.
 *
 * @return array
 *   A renderable array with a success message and a redirect header, if the
 *   extender is configured with one.
 */
function _bt_store_cl_post_install_tasks(array &$install_state) {
  $redirect = '/app';
  $output = [
    '#title' => t('Tu tienda ha sido instalada!'),
    'info' => [
      '#markup' => t('Pronto serás redirigido a tu tienda. Gracias por escogernos.', [
        '@url' => $redirect,
      ]),
    ],
    '#attached' => [
      'http_header' => [
        ['Cache-Control', 'no-cache'],
      ],
    ],
  ];

  // The installer doesn't make it easy (possible?) to return a redirect
  // response, so set a redirection META tag in the output.
  $meta_redirect = [
    '#tag' => 'meta',
    '#attributes' => [
      'http-equiv' => 'refresh',
      'content' => '5;url=' . $redirect,
    ],
  ];
  $output['#attached']['html_head'][] = [$meta_redirect, 'meta_redirect'];

  // Flush all cache.
  drupal_flush_all_caches();

  // Delete unused views.
  \Drupal::configFactory()->getEditable('views.view.content')->delete();
  \Drupal::configFactory()->getEditable('views.view.files')->delete();
  \Drupal::configFactory()->getEditable('views.view.block_content')->delete();
  \Drupal::configFactory()->getEditable('views.view.poll_admin')->delete();

  // Disable bt_install_theme.
  $theme_installer = Drupal::service('theme_installer');
  $theme_installer->uninstall(['bt_install_theme']);

  // Log with new user.
  $log_user = User::load('1');
  user_login_finalize($log_user);

  return $output;
}
