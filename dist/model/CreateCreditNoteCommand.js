"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient.js"));
var _CurrencyCommand = _interopRequireDefault(require("./CurrencyCommand.js"));
var _DianReason = _interopRequireDefault(require("./DianReason.js"));
var _DocumentCommand = _interopRequireDefault(require("./DocumentCommand.js"));
var _ItemsCommand = _interopRequireDefault(require("./ItemsCommand.js"));
var _PaymentsCommand = _interopRequireDefault(require("./PaymentsCommand.js"));
var _RetentionsCommand = _interopRequireDefault(require("./RetentionsCommand.js"));
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
 * The CreateCreditNoteCommand model module.
 * @module model/CreateCreditNoteCommand
 * @version v1
 */
var CreateCreditNoteCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCreditNoteCommand</code>.
   * @alias module:model/CreateCreditNoteCommand
   */
  function CreateCreditNoteCommand() {
    (0, _classCallCheck2["default"])(this, CreateCreditNoteCommand);
    CreateCreditNoteCommand.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(CreateCreditNoteCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CreateCreditNoteCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCreditNoteCommand} obj Optional instance to populate.
     * @return {module:model/CreateCreditNoteCommand} The populated <code>CreateCreditNoteCommand</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCreditNoteCommand();
        if (data.hasOwnProperty('document')) {
          obj['document'] = _DocumentCommand["default"].constructFromObject(data['document']);
        }
        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }
        if (data.hasOwnProperty('invoice')) {
          obj['invoice'] = _ApiClient["default"].convertToType(data['invoice'], 'String');
        }
        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _DianReason["default"].constructFromObject(data['reason']);
        }
        if (data.hasOwnProperty('seller')) {
          obj['seller'] = _ApiClient["default"].convertToType(data['seller'], 'Number');
        }
        if (data.hasOwnProperty('cost_center')) {
          obj['cost_center'] = _ApiClient["default"].convertToType(data['cost_center'], 'Number');
        }
        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _CurrencyCommand["default"].constructFromObject(data['currency']);
        }
        if (data.hasOwnProperty('retentions')) {
          obj['retentions'] = _ApiClient["default"].convertToType(data['retentions'], [_RetentionsCommand["default"]]);
        }
        if (data.hasOwnProperty('advance_payment')) {
          obj['advance_payment'] = _ApiClient["default"].convertToType(data['advance_payment'], 'Number');
        }
        if (data.hasOwnProperty('observations')) {
          obj['observations'] = _ApiClient["default"].convertToType(data['observations'], 'String');
        }
        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_ItemsCommand["default"]]);
        }
        if (data.hasOwnProperty('payments')) {
          obj['payments'] = _ApiClient["default"].convertToType(data['payments'], [_PaymentsCommand["default"]]);
        }
      }
      return obj;
    }
  }]);
  return CreateCreditNoteCommand;
}();
/**
 * @member {module:model/DocumentCommand} document
 */
CreateCreditNoteCommand.prototype['document'] = undefined;

/**
 * Represents the sequential number of the document,   this number is required depending of document type.
 * @member {Number} number
 */
CreateCreditNoteCommand.prototype['number'] = undefined;

/**
 * Represents information about document type,   document type Id, and the sequential number of the document.  For example 'NC-2-22' indicates that its document type is a 'Credit note',  its document type id is '2' and its sequential number is '22'.
 * @member {String} name
 */
CreateCreditNoteCommand.prototype['name'] = undefined;

/**
 * Represents the date of the document. This format must be 'yyyy-MM-dd'  for example, '2021-10-31' to indicate the date 'October 31st, 2021'.
 * @member {String} date
 */
CreateCreditNoteCommand.prototype['date'] = undefined;

/**
 * Represents the GUID of invoice to which the credit note was applied.
 * @member {String} invoice
 */
CreateCreditNoteCommand.prototype['invoice'] = undefined;

/**
 * @member {module:model/DianReason} reason
 */
CreateCreditNoteCommand.prototype['reason'] = undefined;

/**
 * Represents the Id of the seller associated with the invoice,   for example, the id '629' can represent a seller called 'Micke'.
 * @member {Number} seller
 */
CreateCreditNoteCommand.prototype['seller'] = undefined;

/**
 * Represents the id of the cost center, the value of this field must be an integer  number that represents the unique id of the cost center.
 * @member {Number} cost_center
 */
CreateCreditNoteCommand.prototype['cost_center'] = undefined;

/**
 * @member {module:model/CurrencyCommand} currency
 */
CreateCreditNoteCommand.prototype['currency'] = undefined;

/**
 * Contains a list of information about every Retention associated to the invoice.
 * @member {Array.<module:model/RetentionsCommand>} retentions
 */
CreateCreditNoteCommand.prototype['retentions'] = undefined;

/**
 * Represent the Advance Payment. For example, an advance payment of 33.3 dollars  for a product of 40 dollars.
 * @member {Number} advance_payment
 */
CreateCreditNoteCommand.prototype['advance_payment'] = undefined;

/**
 * Represent additional comments in document.
 * @member {String} observations
 */
CreateCreditNoteCommand.prototype['observations'] = undefined;

/**
 * Contains a list with items associated to invoice.
 * @member {Array.<module:model/ItemsCommand>} items
 */
CreateCreditNoteCommand.prototype['items'] = undefined;

/**
 * Contains a list with payments types associated to invoice.
 * @member {Array.<module:model/PaymentsCommand>} payments
 */
CreateCreditNoteCommand.prototype['payments'] = undefined;
var _default = exports["default"] = CreateCreditNoteCommand;