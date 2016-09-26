import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('holygrail-layout', 'Integration | Component | holygrail layout', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{holygrail-layout}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#holygrail-layout}}
      template block text
    {{/holygrail-layout}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
