"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSlides = createSlides;
exports.IMAGE_URL = void 0;

/**
 * The function for sample images.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

/**
 * URL to a sample image.
 *
 * @type {string}
 */
var IMAGE_URL = 'https://source.unsplash.com/random/800x450';
/**
 * Return an object containing data of sample images.
 *
 * @param {number} length - Optional. A number of slides.
 * @param {number} sig    - Optional. The signature for getting a different image.
 *
 * @return {Object} - An object containing data of sample images.
 */

exports.IMAGE_URL = IMAGE_URL;

function createSlides() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var sig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Array.from({
    length: length
  }).map(function (value, index) {
    index = sig || index;
    return {
      src: "".concat(IMAGE_URL, "?sig=").concat(index),
      alt: "Image ".concat(index)
    };
  });
}