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
import CurrencyModel from './CurrencyModel.js';
import DocumentModel from './DocumentModel.js';
import InvoiceCustomerModel from './InvoiceCustomerModel.js';
import InvoiceModel from './InvoiceModel.js';
import ItemsModel from './ItemsModel.js';
import Metadata from './Metadata.js';
import PaymentsModel from './PaymentsModel.js';
import RetentionsOutModel from './RetentionsOutModel.js';
import StampViewModel from './StampViewModel.js';

/**
 * The CreditNoteViewModel model module.
 * @module model/CreditNoteViewModel
 * @version v1
 */
class CreditNoteViewModel {
    /**
     * Constructs a new <code>CreditNoteViewModel</code>.
     * Viewmodel Specifically made for the clients, based on the data returned by the queries.
     * @alias module:model/CreditNoteViewModel
     */
    constructor() { 
        
        CreditNoteViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreditNoteViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditNoteViewModel} obj Optional instance to populate.
     * @return {module:model/CreditNoteViewModel} The populated <code>CreditNoteViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreditNoteViewModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('document')) {
                obj['document'] = DocumentModel.constructFromObject(data['document']);
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('invoice')) {
                obj['invoice'] = InvoiceModel.constructFromObject(data['invoice']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = InvoiceCustomerModel.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('cost_center')) {
                obj['cost_center'] = ApiClient.convertToType(data['cost_center'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = CurrencyModel.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('seller')) {
                obj['seller'] = ApiClient.convertToType(data['seller'], 'Number');
            }
            if (data.hasOwnProperty('retentions')) {
                obj['retentions'] = ApiClient.convertToType(data['retentions'], [RetentionsOutModel]);
            }
            if (data.hasOwnProperty('advance_payment')) {
                obj['advance_payment'] = ApiClient.convertToType(data['advance_payment'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('observations')) {
                obj['observations'] = ApiClient.convertToType(data['observations'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ItemsModel]);
            }
            if (data.hasOwnProperty('payments')) {
                obj['payments'] = ApiClient.convertToType(data['payments'], [PaymentsModel]);
            }
            if (data.hasOwnProperty('stamp')) {
                obj['stamp'] = StampViewModel.constructFromObject(data['stamp']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = Metadata.constructFromObject(data['metadata']);
            }
        }
        return obj;
    }


}

/**
 * Represents the unique Id of credit note, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
 * @member {String} id
 */
CreditNoteViewModel.prototype['id'] = undefined;

/**
 * @member {module:model/DocumentModel} document
 */
CreditNoteViewModel.prototype['document'] = undefined;

/**
 * Represents the sequential number of the document,   this number is required depending of document type.
 * @member {Number} number
 */
CreditNoteViewModel.prototype['number'] = undefined;

/**
 * Contains information about document type,   document type Id, and the sequential number of the document.  For example 'NC-2-22' indicates that its document type is a 'Credit note',  its document type id is '2' and its sequential number is '22'.
 * @member {String} name
 */
CreditNoteViewModel.prototype['name'] = undefined;

/**
 * Represents the date of the document. This format must be 'yyyy-MM-dd'.  For example, '2021-10-31' to indicate the date 'October 31st, 2021'.
 * @member {String} date
 */
CreditNoteViewModel.prototype['date'] = undefined;

/**
 * @member {module:model/InvoiceModel} invoice
 */
CreditNoteViewModel.prototype['invoice'] = undefined;

/**
 * @member {module:model/InvoiceCustomerModel} customer
 */
CreditNoteViewModel.prototype['customer'] = undefined;

/**
 * Represents the id of the cost center, the value of this field must be an integer  number that represents the unique id of the cost center.
 * @member {Number} cost_center
 */
CreditNoteViewModel.prototype['cost_center'] = undefined;

/**
 * @member {module:model/CurrencyModel} currency
 */
CreditNoteViewModel.prototype['currency'] = undefined;

/**
 * Represents the Id of the seller associated with the invoice.   For example, the id '629' can represent a seller called 'Mike'.
 * @member {Number} seller
 */
CreditNoteViewModel.prototype['seller'] = undefined;

/**
 * Contains a list of information about every Retention associated to the invoice.
 * @member {Array.<module:model/RetentionsOutModel>} retentions
 */
CreditNoteViewModel.prototype['retentions'] = undefined;

/**
 * Represent the Advance Payment. For example, an advance payment of 33.3 dollars  for a product of 40 dollars.
 * @member {Number} advance_payment
 */
CreditNoteViewModel.prototype['advance_payment'] = undefined;

/**
 * Represent the total value of document. For example, 25.5 dollars.
 * @member {Number} total
 */
CreditNoteViewModel.prototype['total'] = undefined;

/**
 * Represent additional comments in document.
 * @member {String} observations
 */
CreditNoteViewModel.prototype['observations'] = undefined;

/**
 * Contains a list with items associated to invoice.
 * @member {Array.<module:model/ItemsModel>} items
 */
CreditNoteViewModel.prototype['items'] = undefined;

/**
 * Contains a list with payments types associated to invoice.
 * @member {Array.<module:model/PaymentsModel>} payments
 */
CreditNoteViewModel.prototype['payments'] = undefined;

/**
 * @member {module:model/StampViewModel} stamp
 */
CreditNoteViewModel.prototype['stamp'] = undefined;

/**
 * @member {module:model/Metadata} metadata
 */
CreditNoteViewModel.prototype['metadata'] = undefined;






export default CreditNoteViewModel;

