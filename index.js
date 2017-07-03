/* jshint node: true */
'use strict';

var path = require('path');
var util = require('util');
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

var extend = util._extend;

var defaultOptions = {
  importBootstrapSliderCSS: true,
  importAddonCss: true
};

module.exports = {
  name: 'ui-slider',
  description: 'A flexible UI slider for ambitious Ember apps',

  treeForVendor: function(tree) {
    var packagePath = path.dirname(require.resolve('bootstrap-slider'));
    var packageTree = new Funnel(packagePath);
    return mergeTrees([tree, packageTree]);
  },

  included: function(app) {
    this._super.included.apply(this, arguments);
    var parentApp = (typeof app.import !== 'function' && app.app) ? app.app : app;
    var options = extend(defaultOptions, app.options['ui-slider']);

    this.import('vendor/bootstrap-slider.js');

    if (options.importBootstrapSliderCSS) {
      parentApp.import('vendor/css/bootstrap-slider.css');
    }
    if (options.importAddonCss) {
      parentApp.import('vendor/ui-slider/ui-slider.css');
    }
  }
};
