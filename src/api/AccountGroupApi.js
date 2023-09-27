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


import ApiClient from "../ApiClient.js";
import AccountGroupViewModel from '../model/AccountGroupViewModel.js';

/**
* AccountGroup service.
* @module api/AccountGroupApi
* @version v1
*/
export default class AccountGroupApi {

    /**
    * Constructs a new AccountGroupApi. 
    * @alias module:api/AccountGroupApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns a list of account groups.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AccountGroupViewModel>} and HTTP response
     */
    getAccountGroupsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = [AccountGroupViewModel];
      return this.apiClient.callApi(
        '/v1/account-groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of account groups.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AccountGroupViewModel>}
     */
    getAccountGroups() {
      return this.getAccountGroupsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
