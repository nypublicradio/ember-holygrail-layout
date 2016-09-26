# ember-holygrail-layout

A component and CSS for generating ["holy grail" layouts](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/) in your ember app.

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

## Installation

* `git clone <repository-url>` this repository
* `cd ember-holygrail-layout`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
