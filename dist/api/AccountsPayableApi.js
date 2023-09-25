"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AccountsPayableViewModelGetAllModel = _interopRequireDefault(require("../model/AccountsPayableViewModelGetAllModel"));
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
* AccountsPayable service.
* @module api/AccountsPayableApi
* @version v1
*/
var AccountsPayableApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new AccountsPayableApi. 
  * @alias module:api/AccountsPayableApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AccountsPayableApi(apiClient) {
    (0, _classCallCheck2["default"])(this, AccountsPayableApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Returns a list of document types.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page 
   * @param {Number} opts.pageSize 
   * @param {String} opts.providerIdentification 
   * @param {Number} opts.providerBranchOffice 
   * @param {Date} opts.dueDateStart 
   * @param {Date} opts.dueDateEnd 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountsPayableViewModelGetAllModel} and HTTP response
   */
  (0, _createClass2["default"])(AccountsPayableApi, [{
    key: "getAccountsPayableWithHttpInfo",
    value: function getAccountsPayableWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'provider_identification': opts['providerIdentification'],
        'provider_branch_office': opts['providerBranchOffice'],
        'due_date_start': opts['dueDateStart'],
        'due_date_end': opts['dueDateEnd']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _AccountsPayableViewModelGetAllModel["default"];
      return this.apiClient.callApi('/v1/accounts-payable', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns a list of document types.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.pageSize 
     * @param {String} opts.providerIdentification 
     * @param {Number} opts.providerBranchOffice 
     * @param {Date} opts.dueDateStart 
     * @param {Date} opts.dueDateEnd 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountsPayableViewModelGetAllModel}
     */
  }, {
    key: "getAccountsPayable",
    value: function getAccountsPayable(opts) {
      return this.getAccountsPayableWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return AccountsPayableApi;
}();