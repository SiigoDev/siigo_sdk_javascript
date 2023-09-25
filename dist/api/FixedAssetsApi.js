"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AssetGroupsViewModel = _interopRequireDefault(require("../model/AssetGroupsViewModel"));
var _FixedAssetsViewModel = _interopRequireDefault(require("../model/FixedAssetsViewModel"));
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
* FixedAssets service.
* @module api/FixedAssetsApi
* @version v1
*/
var FixedAssetsApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new FixedAssetsApi. 
  * @alias module:api/FixedAssetsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FixedAssetsApi(apiClient) {
    (0, _classCallCheck2["default"])(this, FixedAssetsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Returns a list of asset groups.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AssetGroupsViewModel>} and HTTP response
   */
  (0, _createClass2["default"])(FixedAssetsApi, [{
    key: "getAssetGroupsWithHttpInfo",
    value: function getAssetGroupsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = [_AssetGroupsViewModel["default"]];
      return this.apiClient.callApi('/v1/asset-groups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns a list of asset groups.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AssetGroupsViewModel>}
     */
  }, {
    key: "getAssetGroups",
    value: function getAssetGroups() {
      return this.getAssetGroupsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a list of fixed assets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/FixedAssetsViewModel>} and HTTP response
     */
  }, {
    key: "getFixedAssetsWithHttpInfo",
    value: function getFixedAssetsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = [_FixedAssetsViewModel["default"]];
      return this.apiClient.callApi('/v1/fixed-assets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Returns a list of fixed assets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/FixedAssetsViewModel>}
     */
  }, {
    key: "getFixedAssets",
    value: function getFixedAssets() {
      return this.getFixedAssetsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return FixedAssetsApi;
}();