"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient.js"));
var _AccountGroupViewModel = _interopRequireDefault(require("../model/AccountGroupViewModel.js"));
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
* AccountGroup service.
* @module api/AccountGroupApi
* @version v1
*/
var AccountGroupApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new AccountGroupApi. 
  * @alias module:api/AccountGroupApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AccountGroupApi(apiClient) {
    (0, _classCallCheck2["default"])(this, AccountGroupApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Returns a list of account groups.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AccountGroupViewModel>} and HTTP response
   */
  (0, _createClass2["default"])(AccountGroupApi, [{
    key: "getAccountGroupsWithHttpInfo",
    value: function getAccountGroupsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = [_AccountGroupViewModel["default"]];
      return this.apiClient.callApi('/v1/account-groups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns a list of account groups.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AccountGroupViewModel>}
     */
  }, {
    key: "getAccountGroups",
    value: function getAccountGroups() {
      return this.getAccountGroupsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return AccountGroupApi;
}();