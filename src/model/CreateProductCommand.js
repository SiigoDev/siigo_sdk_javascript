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
import AdditionalFieldsProducts from './AdditionalFieldsProducts.js';
import PricesProducts from './PricesProducts.js';
import ProductTaxesCommand from './ProductTaxesCommand.js';

/**
 * The CreateProductCommand model module.
 * @module model/CreateProductCommand
 * @version v1
 */
class CreateProductCommand {
    /**
     * Constructs a new <code>CreateProductCommand</code>.
     * @alias module:model/CreateProductCommand
     */
    constructor() { 
        
        CreateProductCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateProductCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateProductCommand} obj Optional instance to populate.
     * @return {module:model/CreateProductCommand} The populated <code>CreateProductCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateProductCommand();

            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('account_group')) {
                obj['account_group'] = ApiClient.convertToType(data['account_group'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('stock_control')) {
                obj['stock_control'] = ApiClient.convertToType(data['stock_control'], 'Boolean');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('tax_classification')) {
                obj['tax_classification'] = ApiClient.convertToType(data['tax_classification'], 'String');
            }
            if (data.hasOwnProperty('tax_included')) {
                obj['tax_included'] = ApiClient.convertToType(data['tax_included'], 'Boolean');
            }
            if (data.hasOwnProperty('tax_consumption_value')) {
                obj['tax_consumption_value'] = ApiClient.convertToType(data['tax_consumption_value'], 'Number');
            }
            if (data.hasOwnProperty('taxes')) {
                obj['taxes'] = ApiClient.convertToType(data['taxes'], [ProductTaxesCommand]);
            }
            if (data.hasOwnProperty('prices')) {
                obj['prices'] = ApiClient.convertToType(data['prices'], [PricesProducts]);
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('unit_label')) {
                obj['unit_label'] = ApiClient.convertToType(data['unit_label'], 'String');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('additional_fields')) {
                obj['additional_fields'] = AdditionalFieldsProducts.constructFromObject(data['additional_fields']);
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the unique Id of product, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
 * @member {String} product_id
 */
CreateProductCommand.prototype['product_id'] = undefined;

/**
 * Represents the identification code of the product. This value can be an alphanumeric  code that will represent the code id of the cost center.  For example, this name can be 'Item-1' or 'toy007'.
 * @member {String} code
 */
CreateProductCommand.prototype['code'] = undefined;

/**
 * Represents the name of product or service.
 * @member {String} name
 */
CreateProductCommand.prototype['name'] = undefined;

/**
 * Represents the id of inventory classification.
 * @member {Number} account_group
 */
CreateProductCommand.prototype['account_group'] = undefined;

/**
 * Represents the type of product. This product could be of type 'Product', 'Service' or 'Consumer Good',  by the default this field will be 'Product'.
 * @member {String} type
 */
CreateProductCommand.prototype['type'] = undefined;

/**
 * Represents the inventory control.  This field can be 'true' or 'false', by the fault this field will be false.
 * @member {Boolean} stock_control
 */
CreateProductCommand.prototype['stock_control'] = undefined;

/**
 * Represents the status of product.  This field can be 'true' or 'false', by default this field will be true.
 * @member {Boolean} active
 */
CreateProductCommand.prototype['active'] = undefined;

/**
 * Represent the tax classification, this field could be 'Taxed', 'Exempt' or 'Excluded'.
 * @member {String} tax_classification
 */
CreateProductCommand.prototype['tax_classification'] = undefined;

/**
 * Represents whether this product has VAT included.  This field can be 'true' or 'false'.
 * @member {Boolean} tax_included
 */
CreateProductCommand.prototype['tax_included'] = undefined;

/**
 * Represents value of consumption tax.
 * @member {Number} tax_consumption_value
 */
CreateProductCommand.prototype['tax_consumption_value'] = undefined;

/**
 * Contains a list with ids of taxes associated with item.
 * @member {Array.<module:model/ProductTaxesCommand>} taxes
 */
CreateProductCommand.prototype['taxes'] = undefined;

/**
 * Contains a list with 'prices list' of product. Every product can have up to 12 price list.
 * @member {Array.<module:model/PricesProducts>} prices
 */
CreateProductCommand.prototype['prices'] = undefined;

/**
 * Represents the id of an unit of measurement, by default this field will be 94 only in Colombia
 * @member {String} unit
 */
CreateProductCommand.prototype['unit'] = undefined;

/**
 * Represents Unit of measure for invoice printing.
 * @member {String} unit_label
 */
CreateProductCommand.prototype['unit_label'] = undefined;

/**
 * Represents the Reference or factory code of the product or service.
 * @member {String} reference
 */
CreateProductCommand.prototype['reference'] = undefined;

/**
 * Represents product description.
 * @member {String} description
 */
CreateProductCommand.prototype['description'] = undefined;

/**
 * @member {module:model/AdditionalFieldsProducts} additional_fields
 */
CreateProductCommand.prototype['additional_fields'] = undefined;

/**
 * Represents the key of the product, mandatory only in Mexico
 * @member {String} key
 */
CreateProductCommand.prototype['key'] = undefined;






export default CreateProductCommand;

