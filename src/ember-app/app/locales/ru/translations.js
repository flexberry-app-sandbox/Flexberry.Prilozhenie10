import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Prilozhenie10',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie10',
          title: 'Prilozhenie10'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-prilozhenie10-справ-дол-l': IISPrilozhenie10СправДолLForm,
    'i-i-s-prilozhenie10-справ-сотр-l': IISPrilozhenie10СправСотрLForm,
    'i-i-s-prilozhenie10-справ-дол-e': IISPrilozhenie10СправДолEForm,
    'i-i-s-prilozhenie10-справ-сотр-e': IISPrilozhenie10СправСотрEForm
  },

});

export default translations;
