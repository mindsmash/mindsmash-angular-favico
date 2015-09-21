# mindsmash-angular-favico

A simple AngularJS wrapper for [favico.js](http://lab.ejci.net/favico.js). Make use of your favicon with badges, images or videos.

### Table of Contents

   - [Installation](#1-installation)
   - [Configuration](#2-configuration)
   - [API](#3-api)

### 1. Installation:

   1. Download the [latest release](https://github.com/mindsmash/mindsmash-angular-favico/releases) or the [current master](https://github.com/mindsmash/mindsmash-angular-favico/archive/master.zip) from GitHub. You can also use [Bower](http://bower.io) to install the latest version:
   ```
   $ bower install mindsmash-angular-favico --save
   ```
   
   2. Include the library in your website (please use either the minified or unminified file in the `dist` directory):
   ```
   <script src="mindsmash-angular-favico/mindsmash-angular-favico.min.js"></script>
   ```
   
   3. Add favico as a dependency to your app:
   ```
   angular.module('your-app', ['mindsmash.favico']);
   ```

**[Back to top](#table-of-contents)**

### 2. Configuration

You may configure the ```Favicon``` by injecting the ```FaviconProvider``` into the config function.

```
myApp.config(["FaviconProvider", function(FaviconProvider) {
  FaviconProvider.setOptions({
      animation:'fade',
      bgColor: '#f00',
   });
}]);
```

**[Back to top](#table-of-contents)**

### 3. API

After injecting the ```Favicon``` into your application, it supports the same API as [favico.js](http://lab.ejci.net/favico.js).
Please see the [favico.js](http://lab.ejci.net/favico.js) documentation for more details.

```
Favicon.badge(...)
Favicon.image(...)
Favicon.video(...)
Favicon.webcam(...)
Favicon.reset(...)
```

**[Back to top](#table-of-contents)**

## Contributors

   * Fynn Feldpausch @ [mindsmash GmbH](https://www.mindsmash.com/)
