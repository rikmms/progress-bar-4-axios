# Axios Progress Bar

This module provides a simple usage of a progress bar for the HTTP requests made by Web applications that use the library [axios](https://www.npmjs.com/package/axios). It's high inspired in the module [angular-loading-bar](https://www.npmjs.com/package/angular-loading-bar) and uses the awesome [nprogress](https://www.npmjs.com/package/nprogress) module to display the loading bar in the Browser.

**Attention:** This module is not bound to any framework. You can use it in any Web application that uses axios.

### Demo
![demo](https://github.com/rikmms/progress-bar-4-axios/blob/master/demo_axios_progress_bar.gif?raw=true)

### Installation
It's available through the NPM package:

    npm install --save axios (peer dependency)
    npm install --save axios-progress-bar

Or via CDN:

    <script src="https://cdn.rawgit.com/rikmms/progress-bar-4-axios/master/dist/index.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

### Usage
Simple as invoke (only one time) the function: `loadProgressBar(config)`, where the config argument is the configuration object for the [nprogress](https://www.npmjs.com/package/nprogress) and is not required. Its properties can be seen [here](https://www.npmjs.com/package/nprogress#configuration).

#### An example in ES6 using the new import statement
```js
    import { loadProgressBar } from 'axios-progress-bar'

    loadProgressBar(configs)
    ...
````

#### An example using plain HTML and Javascript in the Browser
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        ...
    </head>
    <body>
        ...
    </body>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.rawgit.com/rikmms/progress-bar-4-axios/master/dist/index.js"></script>
    
    <script type="text/javascript">
        loadProgressBar()
        ...
    </script>
    
</html>
```

### Tip
By default, the minimal CSS ([nprogress.css](https://www.npmjs.com/package/nprogress#customization)) is automatically imported into the HTML. However, It's possible to override the properties or set new ones with a custom CSS.

In the next example, the custom CSS only changes the color of the progress bar and the spinner to red (It's necessary to use the !import keyword, to override the default value).
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <style type="text/css">
            #nprogress .bar {
                background: red !important;
            }

            #nprogress .peg {
                box-shadow: 0 0 10px red, 0 0 5px red !important;
            }

            #nprogress .spinner-icon {
                border-top-color: red !important;
                border-left-color: red !important;
            }
        </style>
    </head>
    <body>
        ...
    </body>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.rawgit.com/rikmms/progress-bar-4-axios/master/dist/index.js"></script>
    
    <script type="text/javascript">
        loadProgressBar()
        ...
    </script>
    
</html>
```
![demo-red](https://github.com/rikmms/progress-bar-4-axios/blob/master/demo_axios_progress_bar.gif?raw=true)


### Bugs/Requests
Write them in the repository [issues](https://github.com/rikmms/progress-bar-4-axios/issues).
