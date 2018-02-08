# ember-holygrail-layout

The ["holy grail" layout](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/) as described in the linked to article includes a page header and footer, but this is more of a holy grail lite. It provides a component which yields an object with three blocks which can be used for a three column layout in which the left and right columns are a fixed width as determined by their content and the middle column is flexible based on the remaining pixels.

This provides some simple markup and bundles some CSS into your app.

## Usage

```handlebars
{{#holygrail-layout as |g|}}

  {{#g.left}}
    left side, width determined by content
  {{/g.left}}
  
  {{#g.center}}
    middle, width determined by leftover space
  {{/g.center}}

  {{#g.right}}
    right side, width determined by content
  {{/g.right}}

{{/holygrail-layout}}
```

## Included CSS

```CSS
.ember-holygrail {
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
}

.ember-holygrail .ember-holygrail-middle {
  flex-direction: row;
  flex: 1;
}


.ember-holygrail .ember-holygrail-centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ember-holygrail .ember-holygrail-right,
.ember-holygrail .ember-holygrail-left {
  display: flex;
  flex: 0 0 auto;
}
```

Ember's build process will run these rules through whatever pre-processors your app is using. You should extend these selectors based on your app's specific use-cases.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-holygrail-layout`
* `yarn install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `yarn test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
