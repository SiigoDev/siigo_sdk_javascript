"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient.js"));
var _TaxViewModel = _interopRequireDefault(require("../model/TaxViewModel.js"));
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
* Tax service.
* @module api/TaxApi
* @version v1
*/
var TaxApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new TaxApi. 
  * @alias module:api/TaxApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TaxApi(apiClient) {
    (0, _classCallCheck2["default"])(this, TaxApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Returns a list of taxes.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TaxViewModel>} and HTTP response
   */
  (0, _createClass2["default"])(TaxApi, [{
    key: "getTaxesWithHttpInfo",
    value: function getTaxesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = [_TaxViewModel["default"]];
      return this.apiClient.callApi('/v1/taxes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns a list of taxes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TaxViewModel>}
     */
  }, {
    key: "getTaxes",
    value: function getTaxes() {
      return this.getTaxesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return TaxApi;
}();