"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient.js"));
var _PaymentTypeViewModel = _interopRequireDefault(require("../model/PaymentTypeViewModel.js"));
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
* PaymentType service.
* @module api/PaymentTypeApi
* @version v1
*/
var PaymentTypeApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new PaymentTypeApi. 
  * @alias module:api/PaymentTypeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentTypeApi(apiClient) {
    (0, _classCallCheck2["default"])(this, PaymentTypeApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Returns a list of payment types.
   * @param {Object} opts Optional parameters
   * @param {String} opts.documentType Returns the payment method by the document type associated. For example, 'FV' to invoices, 'NC' to credit notes, or 'RC' to vouchers.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PaymentTypeViewModel>} and HTTP response
   */
  (0, _createClass2["default"])(PaymentTypeApi, [{
    key: "getPaymentTypesWithHttpInfo",
    value: function getPaymentTypesWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'document_type': opts['documentType']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = [_PaymentTypeViewModel["default"]];
      return this.apiClient.callApi('/v1/payment-types', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns a list of payment types.
     * @param {Object} opts Optional parameters
     * @param {String} opts.documentType Returns the payment method by the document type associated. For example, 'FV' to invoices, 'NC' to credit notes, or 'RC' to vouchers.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PaymentTypeViewModel>}
     */
  }, {
    key: "getPaymentTypes",
    value: function getPaymentTypes(opts) {
      return this.getPaymentTypesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return PaymentTypeApi;
}();