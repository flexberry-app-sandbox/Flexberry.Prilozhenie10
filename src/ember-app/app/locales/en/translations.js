import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenie10СправДолLForm from './forms/i-i-s-prilozhenie10-справ-дол-l';
import IISPrilozhenie10СправСотрLForm from './forms/i-i-s-prilozhenie10-справ-сотр-l';
import IISPrilozhenie10СправДолEForm from './forms/i-i-s-prilozhenie10-справ-дол-e';
import IISPrilozhenie10СправСотрEForm from './forms/i-i-s-prilozhenie10-справ-сотр-e';
import IISPrilozhenie10СправДолModel from './models/i-i-s-prilozhenie10-справ-дол';
import IISPrilozhenie10СправСотрModel from './models/i-i-s-prilozhenie10-справ-сотр';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie10-справ-дол': IISPrilozhenie10СправДолModel,
    'i-i-s-prilozhenie10-справ-сотр': IISPrilozhenie10СправСотрModel
  },

  'application-name': 'Prilozhenie10',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Prilozhenie10',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie10',
          title: 'Prilozhenie10'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        prilozhenie10: {
          caption: 'Prilozhenie10',
          title: 'Prilozhenie10',
          'i-i-s-prilozhenie10-справ-дол-l': {
            caption: 'Справ дол',
            title: ''
          },
          'i-i-s-prilozhenie10-справ-сотр-l': {
            caption: 'Справочник Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-prilozhenie10-справ-дол-l': IISPrilozhenie10СправДолLForm,
    'i-i-s-prilozhenie10-справ-сотр-l': IISPrilozhenie10СправСотрLForm,
    'i-i-s-prilozhenie10-справ-дол-e': IISPrilozhenie10СправДолEForm,
    'i-i-s-prilozhenie10-справ-сотр-e': IISPrilozhenie10СправСотрEForm
  },

});

export default translations;
