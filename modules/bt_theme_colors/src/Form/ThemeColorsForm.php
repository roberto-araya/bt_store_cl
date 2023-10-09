<?php

namespace Drupal\bt_theme_colors\Form;

use Drupal\Core\Entity\ContentEntityForm;
use Drupal\Core\Form\FormStateInterface;

/**
 * Form controller for the theme colors entity edit forms.
 */
class ThemeColorsForm extends ContentEntityForm {

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    $result = parent::save($form, $form_state);

    $entity = $this->getEntity();

    $message_arguments = ['%label' => $entity->toLink()->toString()];
    $logger_arguments = [
      '%label' => $entity->label(),
      'link' => $entity->toLink($this->t('View'))->toString(),
    ];

    switch ($result) {
      case SAVED_NEW:
        $this->messenger()->addStatus($this->t('New theme colors %label has been created.', $message_arguments));
        $this->logger('bt_theme_colors')->notice('Created new theme colors %label', $logger_arguments);
        break;

      case SAVED_UPDATED:
        $this->messenger()->addStatus($this->t('The theme colors %label has been updated.', $message_arguments));
        $this->logger('bt_theme_colors')->notice('Updated theme colors %label.', $logger_arguments);
        break;
    }

    $form_state->setRedirect('entity.theme_colors.canonical', ['theme_colors' => $entity->id()]);

    return $result;
  }

}
