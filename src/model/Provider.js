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
 * The Provider model module.
 * @module model/Provider
 * @version v1
 */
class Provider {
    /**
     * Constructs a new <code>Provider</code>.
     * @alias module:model/Provider
     */
    constructor() { 
        
        Provider.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Provider</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Provider} obj Optional instance to populate.
     * @return {module:model/Provider} The populated <code>Provider</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Provider();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('identification')) {
                obj['identification'] = ApiClient.convertToType(data['identification'], 'String');
            }
            if (data.hasOwnProperty('branch_office')) {
                obj['branch_office'] = ApiClient.convertToType(data['branch_office'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Provider.prototype['id'] = undefined;

/**
 * @member {String} identification
 */
Provider.prototype['identification'] = undefined;

/**
 * @member {Number} branch_office
 */
Provider.prototype['branch_office'] = undefined;

/**
 * @member {String} name
 */
Provider.prototype['name'] = undefined;






export default Provider;

