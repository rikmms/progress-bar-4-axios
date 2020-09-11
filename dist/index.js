(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"));
	else if(typeof define === 'function' && define.amd)
		define(["axios"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("axios")) : factory(root["axios"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadProgressBar = loadProgressBar;

__webpack_require__(2);

var _accessibleNprogress = __webpack_require__(3);

var _accessibleNprogress2 = _interopRequireDefault(_accessibleNprogress);

var _axios = __webpack_require__(4);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calculatePercentage = function calculatePercentage(loaded, total) {
  return Math.floor(loaded * 1.0) / total;
};

function loadProgressBar(config) {
  var instance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _axios2.default;

  var requestsCounter = 0;

  var setupStartProgress = function setupStartProgress() {
    instance.interceptors.request.use(function (config) {
      requestsCounter++;
      _accessibleNprogress2.default.start();
      return config;
    });
  };

  var setupUpdateProgress = function setupUpdateProgress() {
    var update = function update(e) {
      return _accessibleNprogress2.default.inc(calculatePercentage(e.loaded, e.total));
    };
    instance.defaults.onDownloadProgress = update;
    instance.defaults.onUploadProgress = update;
  };

  var setupStopProgress = function setupStopProgress() {
    var responseFunc = function responseFunc(response) {
      if (--requestsCounter === 0) {
        _accessibleNprogress2.default.done();
      }
      return response;
    };

    var errorFunc = function errorFunc(error) {
      if (--requestsCounter === 0) {
        _accessibleNprogress2.default.done();
      }
      return Promise.reject(error);
    };

    instance.interceptors.response.use(responseFunc, errorFunc);
  };

  _accessibleNprogress2.default.configure(config);
  setupStartProgress();
  setupUpdateProgress();
  setupStopProgress();
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *   Thu Aug 22 2019 21:41:42 GMT-0500 (CDT)
 *   Accessible NProgress, (c) 2019 Nicholas Mackey - http://nmackey.com/accessible-nprogress
 *   @license MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("NProgress", [], factory);
	else if(typeof exports === 'object')
		exports["NProgress"] = factory();
	else
		root["NProgress"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1);

__webpack_require__(2);

var DEFAULTS = {
  minimum: 0.08,
  easing: 'linear',
  speed: 200,
  trickle: true,
  trickleSpeed: 200,
  showSpinner: true,
  barSelector: 'div.bar',
  spinnerSelector: 'div.spinner',
  parent: 'body',
  template: '\n    <div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="1">\n      <div class="peg"></div>\n    </div>\n    <div class="spinner" role="progressbar" aria-valuemin="0" aria-valuemax="1">\n      <div class="spinner-icon"></div>\n    </div>\n  '
};

var NProgress = function NProgress() {
  var localSettings = DEFAULTS;
  var localStatus = null;
  var initialPromises = 0;
  var currentPromises = 0;

  /**
   * @return {boolean} If the progress bar is rendered.
   */
  function isRendered() {
    return !!document.getElementById('nprogress');
  }

  /**
   * @return {boolean} If there is curent progress.
   */
  function isStarted() {
    return typeof localStatus === 'number';
  }

  /**
   * Renders the progress bar markup based on the `template` setting.
   *
   * @return {HTMLElement} The element rendered.
   */
  function render() {
    if (isRendered()) {
      return document.getElementById('nprogress');
    }

    document.documentElement.classList.add('nprogress-busy');

    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = localSettings.template;

    var perc = isStarted() ? '-100' : (0, _util.toBarPerc)(localStatus || 0);
    var bar = progress.querySelector(localSettings.barSelector);
    bar.style.transform = 'translate3d(' + perc + '%,0,0)';
    bar.style.transition = 'all 0 linear';

    if (!localSettings.showSpinner) {
      var spinner = progress.querySelector(localSettings.spinnerSelector);
      if (spinner) {
        (0, _util.removeElement)(spinner);
      }
    }

    var parent = document.querySelector(localSettings.parent);
    if (parent) {
      if (parent !== document.body) {
        parent.classList.add('nprogress-custom-parent');
      }

      parent.appendChild(progress);
    }
    return progress;
  }

  return {
    /**
     * Updates configuration.
     *
     * @param {object} options - options to override/set
     * @return {object} The NProgress object.
     */
    configure: function configure(options) {
      (0, _util.assign)(localSettings, options);
      return this;
    },


    /**
     * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
     *
     * @param {number} value - progress to set
     * @return {object} The NProgress object.
     */
    set: function set(value) {
      var _this = this;

      var clamppedValue = (0, _util.clamp)(value, localSettings.minimum, 1);
      localStatus = clamppedValue === 1 ? null : clamppedValue;

      var progress = render();

      // Repaint
      progress.offsetWidth; // eslint-disable-line no-unused-expressions

      (0, _util.queue)(function (next) {
        // Add transition
        var speed = localSettings.speed,
            easing = localSettings.easing;

        var bar = progress.querySelector(localSettings.barSelector);
        bar.setAttribute('aria-valuenow', clamppedValue);
        bar.style.transform = 'translate3d(' + (0, _util.toBarPerc)(clamppedValue) + '%,0,0)';
        bar.style.transition = 'all ' + speed + 'ms ' + easing;

        if (clamppedValue === 1) {
          // Fade out
          progress.style.transition = 'none';
          progress.style.opacity = 1;

          // Repaint
          progress.offsetWidth; // eslint-disable-line no-unused-expressions

          setTimeout(function () {
            progress.style.transition = 'all ' + speed + 'ms linear';
            progress.style.opacity = 0;
            setTimeout(function () {
              _this.remove();
              next();
            }, speed);
          }, speed);
        } else {
          setTimeout(next, speed);
        }
      });

      return this;
    },


    /**
     * Shows the progress bar.
     * This is the same as setting the status to 0%, except that it doesn't go backwards.
     *
     * @return {object} The NProgress object.
     */
    start: function start() {
      var _this2 = this;

      if (!localStatus) {
        this.set(0);
      }

      var work = function work() {
        setTimeout(function () {
          if (!localStatus) {
            return;
          }
          _this2.inc();
          work();
        }, localSettings.trickleSpeed);
      };

      if (localSettings.trickle) {
        work();
      }

      return this;
    },


    /**
     * Hides the progress bar.
     * This is the *sort of* the same as setting the status to 100%, with the
     * difference being `done()` makes some placebo effect of some realistic motion.
     *
     * @param {boolean} force - show the progress bar complete even if its hidden
     * @return {object} The NProgress object.
     */
    done: function done(force) {
      if (!force && !localStatus) {
        return this;
      }

      var halfRandom = 0.5 * Math.random();
      return this.inc(0.3 + halfRandom).set(1);
    },


    /**
     * Increments progress bar by given amount.
     *
     * @param {number} [amount] - amount to increment the progress bar by
     * @return {object} The NProgress object.
     */
    inc: function inc() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _util.randomInc)(localStatus);

      if (!localStatus) {
        return this.start();
      }

      var clamppedStatus = (0, _util.clamp)(localStatus + amount, 0, 0.994);
      return this.set(clamppedStatus);
    },


    /**
     * Removes the element. Opposite of render().
     */
    remove: function remove() {
      document.documentElement.classList.remove('nprogress-busy');
      document.querySelector(localSettings.parent).classList.remove('nprogress-custom-parent');
      var progress = document.getElementById('nprogress');
      if (progress) {
        (0, _util.removeElement)(progress);
      }
    },


    /**
     * Waits for all supplied promises and increases the progress as the promises resolve.
     *
     * @param $promise Promise
     * @return {object} The NProgress object.
     */
    promise: function promise($promise) {
      var _this3 = this;

      if (currentPromises === 0) {
        this.start();
      }

      initialPromises += 1;
      currentPromises += 1;

      var promiseResolution = function promiseResolution() {
        currentPromises -= 1;
        if (currentPromises === 0) {
          initialPromises = 0;
          _this3.done();
        } else {
          _this3.set((initialPromises - currentPromises) / initialPromises);
        }
      };

      $promise.then(promiseResolution).catch(promiseResolution);

      return this;
    },


    get status() {
      return localStatus;
    },

    get settings() {
      return localSettings;
    }
  };
};

exports.default = NProgress();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assign = assign;
exports.clamp = clamp;
exports.toBarPerc = toBarPerc;
exports.randomInc = randomInc;
exports.removeElement = removeElement;
/**
 * Substitute for Object.assign()
 * Modified from: https://stackoverflow.com/a/30498430
 *
 * @param {object} target - target object to merge to
 * @param {...object} objectsToMerge - arbitrary number of objects to merge into 'target'
 * @return {object} target merged object
 */
function assign(target) {
  var retTarget = Object(target);
  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i += 1) {
    var obj = arguments.length <= i + 1 ? undefined : arguments[i + 1];
    var keys = Object.keys(obj);
    for (var j = 0; j < keys.length; j += 1) {
      retTarget[keys[j]] = obj[keys[j]];
    }
  }
  return retTarget;
}

/**
 * Ensure n is between min & max
 *
 * @param {number} value - number to clamp
 * @param {number} min - minimum
 * @param {number} max - maximum
 * @return {number} clampped value
 */
function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

/**
 * Converts a percentage (`0..1`) to a bar translateX
 * percentage (`-100%..0%`).
 *
 * @param {number} value - percentage to convert
 * @return {number} percentage
 */
function toBarPerc(value) {
  return (-1 + value) * 100;
}

/**
 * Gets an increment to use based on status
 *
 * @param {number} status - current status of the progress bar
 * @return {number} increment
 */
function randomInc(status) {
  if (status >= 0 && status < 0.2) {
    return 0.1;
  } else if (status >= 0.2 && status < 0.5) {
    return 0.04;
  } else if (status >= 0.5 && status < 0.8) {
    return 0.02;
  } else if (status >= 0.8 && status < 0.99) {
    return 0.005;
  }
  return 0;
}

/**
 * Removes an element from the DOM.
 *
 * @param {HTMLElement} element - element to remove
 */
function removeElement(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

/**
 * Queues a function to be executed.
 *
 * @return {function}
 */
var queue = exports.queue = function () {
  var functionQueue = [];

  function next() {
    var fn = functionQueue.shift();
    if (fn) {
      fn(next);
    }
  }

  return function (fn) {
    functionQueue.push(fn);
    if (functionQueue.length === 1) {
      next();
    }
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ])["default"];
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ]);
});