(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var lR = ALLEX.execSuite.libRegistry;
lR.register('vektr_imageregistrylib', require('./libindex')(ALLEX, lR.get('allex_imageregistrylib')));

},{"./libindex":2}],2:[function(require,module,exports){
function createLib (execlib, ImageRegistry) {
  'use strict';

  var lib = execlib.lib;

  function SVGImageRegistry () {
    ImageRegistry.call(this);
  }
  lib.inherit (SVGImageRegistry, ImageRegistry);
  SVGImageRegistry.prototype.__cleanUp = function () {
    ImageRegistry.prototype.__cleanUp.call(this);
  };

  SVGImageRegistry.prototype.storeFromGroup = function (image, animation, group, regexp) {
    if (!group) {
      this.recordEmptyAnimation(image, animation);
      return;
    }
    this.storeFromArray(image, animation, group.getIndexedChildren(regexp));
  };

  SVGImageRegistry.prototype.recordEmptyAnimation = function (image, animation) {
    var s = this._createNewImagePos(image);
    s.recordEmptyAnimation (image, animation);
  };

  SVGImageRegistry.prototype.storeFromArray = function (image, animation, arr) {
    for (var i = 0; i < arr.length; i++) {
      this.storeImage (image, animation, i, arr[i]);
    }
  };

  return SVGImageRegistry;
}

module.exports = createLib;

},{}]},{},[1]);
