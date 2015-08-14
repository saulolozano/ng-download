# ngDownload
Simple AngularJS Directive used to trigger an asynchronous-like file download


### Usage:

- Install: `bower install ng-download`
- Add `ngDownload` to your code:

```html
<script src="bower_components/ng-download.js"></script>
```

- Add `ngDownload` as a dependency of your application.

```js
angular.module('app', ['ngDownload']);
```

- Implement the directive in your html:


Draggable usage:
```html
<button ng-download="{{urlToPublicFile}}" params="optionalParameters">Download</button>
```

* `urlToPublicFile` has to be an url to a public file
* `params` (object) is optional. You can add all the query strings parameters you wish to add to the url



