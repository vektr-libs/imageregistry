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
