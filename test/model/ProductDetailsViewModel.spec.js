/**
 * Siigo API
 * Siigo Api v1
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SiigoApi);
  }
}(this, function(expect, SiigoApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SiigoApi.ProductDetailsViewModel();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProductDetailsViewModel', function() {
    it('should create an instance of ProductDetailsViewModel', function() {
      // uncomment below and update the code to test ProductDetailsViewModel
      var instance = new SiigoApi.ProductDetailsViewModel();
      expect(instance).to.be.a(SiigoApi.ProductDetailsViewModel);
    });

    it('should have the property productId (base name: "product_id")', function() {
      // uncomment below and update the code to test the property productId
      var instance = new SiigoApi.ProductDetailsViewModel();
      expect(instance.product_id).to.be(undefined);
    });

    it('should have the property productName (base name: "product_name")', function() {
      // uncomment below and update the code to test the property productName
      var instance = new SiigoApi.ProductDetailsViewModel();
      expect(instance.product_name).to.be(undefined);
    });

    it('should have the property productDescription (base name: "product_description")', function() {
      // uncomment below and update the code to test the property productDescription
      var instance = new SiigoApi.ProductDetailsViewModel();
      expect(instance.product_description).to.be(undefined);
    });

    it('should have the property productPrice (base name: "product_price")', function() {
      // uncomment below and update the code to test the property productPrice
      var instance = new SiigoApi.ProductDetailsViewModel();
      expect(instance.product_price).to.be(undefined);
    });

    it('should have the property productDetails (base name: "product_details")', function() {
      // uncomment below and update the code to test the property productDetails
      var instance = new SiigoApi.ProductDetailsViewModel();
      expect(instance.product_details).to.be(undefined);
    });

  });

}));
