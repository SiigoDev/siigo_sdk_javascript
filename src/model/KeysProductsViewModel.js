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

/**
 * The KeysProductsViewModel model module.
 * @module model/KeysProductsViewModel
 * @version v1
 */
class KeysProductsViewModel {
    /**
     * Constructs a new <code>KeysProductsViewModel</code>.
     * @alias module:model/KeysProductsViewModel
     */
    constructor() { 
        
        KeysProductsViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KeysProductsViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeysProductsViewModel} obj Optional instance to populate.
     * @return {module:model/KeysProductsViewModel} The populated <code>KeysProductsViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KeysProductsViewModel();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
KeysProductsViewModel.prototype['code'] = undefined;

/**
 * @member {String} name
 */
KeysProductsViewModel.prototype['name'] = undefined;






export default KeysProductsViewModel;

