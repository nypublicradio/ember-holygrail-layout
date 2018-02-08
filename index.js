'use strict';

module.exports = {
  name: 'ember-holygrail-layout',
  
  included: function(app) {
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }
    
    app.import('vendor/ember-holygrail.css');
  }
};
