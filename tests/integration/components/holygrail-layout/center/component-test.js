import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('holygrail-layout/center', 'Integration | Component | holygrail layout/center', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{holygrail-layout/center}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#holygrail-layout/center}}
      template block text
    {{/holygrail-layout/center}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
