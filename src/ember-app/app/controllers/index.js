import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya-rabota.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya-rabota.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-должность-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota.i-i-s-kursovaya-rabota-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota.i-i-s-kursovaya-rabota-должность-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})