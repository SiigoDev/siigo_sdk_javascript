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

import ApiClient from '../ApiClient';

/**
 * The SendInvoiceByEmailCommand model module.
 * @module model/SendInvoiceByEmailCommand
 * @version v1
 */
class SendInvoiceByEmailCommand {
    /**
     * Constructs a new <code>SendInvoiceByEmailCommand</code>.
     * @alias module:model/SendInvoiceByEmailCommand
     */
    constructor() { 
        
        SendInvoiceByEmailCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendInvoiceByEmailCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendInvoiceByEmailCommand} obj Optional instance to populate.
     * @return {module:model/SendInvoiceByEmailCommand} The populated <code>SendInvoiceByEmailCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendInvoiceByEmailCommand();

            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('mail_to')) {
                obj['mail_to'] = ApiClient.convertToType(data['mail_to'], 'String');
            }
            if (data.hasOwnProperty('copy_to')) {
                obj['copy_to'] = ApiClient.convertToType(data['copy_to'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Guid of the invoice.
 * @member {String} guid
 */
SendInvoiceByEmailCommand.prototype['guid'] = undefined;

/**
 * Email address to send the invoice.
 * @member {String} mail_to
 */
SendInvoiceByEmailCommand.prototype['mail_to'] = undefined;

/**
 * Email addresses to send copies of the invoice, maximum 5 email addresses are allowed.
 * @member {String} copy_to
 */
SendInvoiceByEmailCommand.prototype['copy_to'] = undefined;






export default SendInvoiceByEmailCommand;

