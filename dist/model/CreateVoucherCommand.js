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
var _Customer = _interopRequireDefault(require("./Customer.js"));
var _DocumentCommand = _interopRequireDefault(require("./DocumentCommand.js"));
var _Item = _interopRequireDefault(require("./Item.js"));
var _Payment = _interopRequireDefault(require("./Payment.js"));
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
 * The CreateVoucherCommand model module.
 * @module model/CreateVoucherCommand
 * @version v1
 */
var CreateVoucherCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateVoucherCommand</code>.
   * @alias module:model/CreateVoucherCommand
   */
  function CreateVoucherCommand() {
    (0, _classCallCheck2["default"])(this, CreateVoucherCommand);
    CreateVoucherCommand.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(CreateVoucherCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CreateVoucherCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVoucherCommand} obj Optional instance to populate.
     * @return {module:model/CreateVoucherCommand} The populated <code>CreateVoucherCommand</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateVoucherCommand();
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
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('customer')) {
          obj['customer'] = _Customer["default"].constructFromObject(data['customer']);
        }
        if (data.hasOwnProperty('cost_center')) {
          obj['cost_center'] = _ApiClient["default"].convertToType(data['cost_center'], 'Number');
        }
        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _CurrencyCommand["default"].constructFromObject(data['currency']);
        }
        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_Item["default"]]);
        }
        if (data.hasOwnProperty('payment')) {
          obj['payment'] = _Payment["default"].constructFromObject(data['payment']);
        }
        if (data.hasOwnProperty('observations')) {
          obj['observations'] = _ApiClient["default"].convertToType(data['observations'], 'String');
        }
      }
      return obj;
    }
  }]);
  return CreateVoucherCommand;
}();
/**
 * @member {module:model/DocumentCommand} document
 */
CreateVoucherCommand.prototype['document'] = undefined;

/**
 * Represents the sequential number of the document,   this number is required depending of document type.
 * @member {Number} number
 */
CreateVoucherCommand.prototype['number'] = undefined;

/**
 * Contains information about document type,   document type Id and the sequential number of the document.  For example, 'RC-2-22' indicates that its document type is a 'voucher',  its document type id is '2' and its sequential number is '22'.
 * @member {String} name
 */
CreateVoucherCommand.prototype['name'] = undefined;

/**
 * Represents the date of the document. This format must be 'yyyy-MM-dd'.  For example, '2021-10-31' to indicate the date 'October 31st, 2021'.
 * @member {String} date
 */
CreateVoucherCommand.prototype['date'] = undefined;

/**
 * Represents the voucher type, this type will be 'DebtPayment', 'AdvancePayment' or 'Detailed'.
 * @member {String} type
 */
CreateVoucherCommand.prototype['type'] = undefined;

/**
 * @member {module:model/Customer} customer
 */
CreateVoucherCommand.prototype['customer'] = undefined;

/**
 * Represents the id of the cost center, the value of this field must be an integer  number that represents the unique id of the cost center.
 * @member {Number} cost_center
 */
CreateVoucherCommand.prototype['cost_center'] = undefined;

/**
 * @member {module:model/CurrencyCommand} currency
 */
CreateVoucherCommand.prototype['currency'] = undefined;

/**
 * Contains a list with items associated withvoucher.
 * @member {Array.<module:model/Item>} items
 */
CreateVoucherCommand.prototype['items'] = undefined;

/**
 * @member {module:model/Payment} payment
 */
CreateVoucherCommand.prototype['payment'] = undefined;

/**
 * Represent additional comments in document.
 * @member {String} observations
 */
CreateVoucherCommand.prototype['observations'] = undefined;
var _default = exports["default"] = CreateVoucherCommand;