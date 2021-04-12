"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = noop;
exports.classNames = classNames;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Utility functions.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * No operation.
 */
function noop() {}
/**
 * Join class names with/without condition.
 *
 * @param {string|Object} args - A class name itself or { className: condition } object.
 */


function classNames() {
  var names = [];

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (className) {
    if (!className) {
      return;
    }

    if (typeof className === 'string') {
      names.push(className);
    } else if (_typeof(className) === 'object') {
      Object.keys(className).forEach(function (key) {
        if (className[key]) {
          names.push(key);
        }
      });
    }
  });
  return names.join(' ');
}