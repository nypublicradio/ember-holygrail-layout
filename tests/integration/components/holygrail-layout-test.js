import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | holygrail layout', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{holygrail-layout}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#holygrail-layout}}
        template block text
      {{/holygrail-layout}}
    `);

    assert.dom(this.element).hasText('template block text');

    // Template block usage:
    await render(hbs`
      {{#holygrail-layout as |g|}}
        {{#g.center}}
          center text
        {{/g.center}}
        {{#g.left}}
          left text
        {{/g.left}}
        {{#g.right}}
          right text
        {{/g.right}}
      {{/holygrail-layout}}
    `);
    assert.dom('.ember-holygrail-centered').hasText('center text');
    assert.dom('.ember-holygrail-left').hasText('left text');
    assert.dom('.ember-holygrail-right').hasText('right text');
  });
});
