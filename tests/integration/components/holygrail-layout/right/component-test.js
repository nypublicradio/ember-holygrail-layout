import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('holygrail-layout/right', 'Integration | Component | holygrail layout/right', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{holygrail-layout/right}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#holygrail-layout/right}}
      template block text
    {{/holygrail-layout/right}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
