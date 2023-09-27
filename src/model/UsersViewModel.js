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

import ApiClient from '../ApiClient.js';
import PageListModel from './PageListModel.js';
import UsersModel from './UsersModel.js';

/**
 * The UsersViewModel model module.
 * @module model/UsersViewModel
 * @version v1
 */
class UsersViewModel {
    /**
     * Constructs a new <code>UsersViewModel</code>.
     * Class that contain the jsons that the client will see after request  a user list with pagination that came from msusers.
     * @alias module:model/UsersViewModel
     */
    constructor() { 
        
        UsersViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UsersViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsersViewModel} obj Optional instance to populate.
     * @return {module:model/UsersViewModel} The populated <code>UsersViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsersViewModel();

            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = PageListModel.constructFromObject(data['pagination']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [UsersModel]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PageListModel} pagination
 */
UsersViewModel.prototype['pagination'] = undefined;

/**
 * Contains the Results, this results will be a list of users.
 * @member {Array.<module:model/UsersModel>} results
 */
UsersViewModel.prototype['results'] = undefined;






export default UsersViewModel;

