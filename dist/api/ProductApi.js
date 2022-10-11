"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateProductCommand = _interopRequireDefault(require("../model/CreateProductCommand"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _ProductDeleteViewModel = _interopRequireDefault(require("../model/ProductDeleteViewModel"));

var _ProductModel = _interopRequireDefault(require("../model/ProductModel"));

var _ProductModelGetAllModel = _interopRequireDefault(require("../model/ProductModelGetAllModel"));

var _UpdateProductCommand = _interopRequireDefault(require("../model/UpdateProductCommand"));

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

/**
* Product service.
* @module api/ProductApi
* @version v1
*/
var ProductApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProductApi. 
  * @alias module:api/ProductApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProductApi(apiClient) {
    (0, _classCallCheck2["default"])(this, ProductApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Creates a product.
   * @param {Object} opts Optional parameters
   * @param {module:model/CreateProductCommand} opts.createProductCommand Represents the request with the product information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductModel} and HTTP response
   */


  (0, _createClass2["default"])(ProductApi, [{
    key: "createProductWithHttpInfo",
    value: function createProductWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProductModel["default"];
      return this.apiClient.callApi('/v1/products', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates a product.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateProductCommand} opts.createProductCommand Represents the request with the product information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductModel}
     */

  }, {
    key: "createProduct",
    value: function createProduct(opts) {
      return this.createProductWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Deletes the product by GUID.
     * @param {String} id Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductDeleteViewModel} and HTTP response
     */

  }, {
    key: "deleteProductWithHttpInfo",
    value: function deleteProductWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteProduct");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProductDeleteViewModel["default"];
      return this.apiClient.callApi('/v1/products/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Deletes the product by GUID.
     * @param {String} id Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductDeleteViewModel}
     */

  }, {
    key: "deleteProduct",
    value: function deleteProduct(id) {
      return this.deleteProductWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Gets the product by GUID.
     * @param {String} id Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductModel} and HTTP response
     */

  }, {
    key: "getProductWithHttpInfo",
    value: function getProductWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProduct");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProductModel["default"];
      return this.apiClient.callApi('/v1/products/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets the product by GUID.
     * @param {String} id Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductModel}
     */

  }, {
    key: "getProduct",
    value: function getProduct(id) {
      return this.getProductWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Returns a paginated list of products.
     * @param {Object} opts Optional parameters
     * @param {String} opts.code Represents the identification code of the product. This value can be an alphanumeric  code that will represent the code id of the cost center.  For example, this name can be 'Item-1' or 'toy007'.
     * @param {String} opts.accountGroup Represents the id of inventory classification
     * @param {String} opts.type Represents the type of product. This product could be of type 'Product', 'Service' or 'Consumer Good',  by the default this field will be Product.
     * @param {String} opts.stockControl Represents the inventory control, by the fault this field will be false.
     * @param {String} opts.active Represents the status of product, by default this field will be true.
     * @param {String} opts.ids Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.  Up to 20 id can be filtered at a time:  https://api.siigo.com/v1/products?ids={GUID},{GUID}
     * @param {Date} opts.createdStart Returns results where the \"created\" field is greater or equal than the entered date
     * @param {Date} opts.createdEnd Returns results where the \"created\" field is less or equal than the entered date
     * @param {Date} opts.dateStart Returns results with date greater or equal than the \"date_start\" date
     * @param {Date} opts.dateEnd Returns results with date less or equal than the \"date_end\" date
     * @param {Date} opts.updatedStart Returns results where the \"last_updated\" field is greater or equal than the entered date
     * @param {Date} opts.updatedEnd Returns results where the \"last_updated\" field is less or equal than the entered date
     * @param {Number} opts.page Represents the current page
     * @param {Number} opts.pageSize Represents the number of results per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductModelGetAllModel} and HTTP response
     */

  }, {
    key: "getProductsWithHttpInfo",
    value: function getProductsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'code': opts['code'],
        'account_group': opts['accountGroup'],
        'type': opts['type'],
        'stock_control': opts['stockControl'],
        'active': opts['active'],
        'ids': opts['ids'],
        'created_start': opts['createdStart'],
        'created_end': opts['createdEnd'],
        'date_start': opts['dateStart'],
        'date_end': opts['dateEnd'],
        'updated_start': opts['updatedStart'],
        'updated_end': opts['updatedEnd'],
        'page': opts['page'],
        'page_size': opts['pageSize']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProductModelGetAllModel["default"];
      return this.apiClient.callApi('/v1/products', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Returns a paginated list of products.
     * @param {Object} opts Optional parameters
     * @param {String} opts.code Represents the identification code of the product. This value can be an alphanumeric  code that will represent the code id of the cost center.  For example, this name can be 'Item-1' or 'toy007'.
     * @param {String} opts.accountGroup Represents the id of inventory classification
     * @param {String} opts.type Represents the type of product. This product could be of type 'Product', 'Service' or 'Consumer Good',  by the default this field will be Product.
     * @param {String} opts.stockControl Represents the inventory control, by the fault this field will be false.
     * @param {String} opts.active Represents the status of product, by default this field will be true.
     * @param {String} opts.ids Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.  Up to 20 id can be filtered at a time:  https://api.siigo.com/v1/products?ids={GUID},{GUID}
     * @param {Date} opts.createdStart Returns results where the \"created\" field is greater or equal than the entered date
     * @param {Date} opts.createdEnd Returns results where the \"created\" field is less or equal than the entered date
     * @param {Date} opts.dateStart Returns results with date greater or equal than the \"date_start\" date
     * @param {Date} opts.dateEnd Returns results with date less or equal than the \"date_end\" date
     * @param {Date} opts.updatedStart Returns results where the \"last_updated\" field is greater or equal than the entered date
     * @param {Date} opts.updatedEnd Returns results where the \"last_updated\" field is less or equal than the entered date
     * @param {Number} opts.page Represents the current page
     * @param {Number} opts.pageSize Represents the number of results per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductModelGetAllModel}
     */

  }, {
    key: "getProducts",
    value: function getProducts(opts) {
      return this.getProductsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Updates the product by GUID.
     * @param {String} id Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateProductCommand} opts.updateProductCommand Represents the request with the product information to update.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductModel} and HTTP response
     */

  }, {
    key: "updateProductWithHttpInfo",
    value: function updateProductWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateProduct");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/*+json'];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _ProductModel["default"];
      return this.apiClient.callApi('/v1/products/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Updates the product by GUID.
     * @param {String} id Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateProductCommand} opts.updateProductCommand Represents the request with the product information to update.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductModel}
     */

  }, {
    key: "updateProduct",
    value: function updateProduct(id, opts) {
      return this.updateProductWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return ProductApi;
}();

exports["default"] = ProductApi;