"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
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
 * The JournalEntryProductCommand model module.
 * @module model/JournalEntryProductCommand
 * @version v1
 */
var JournalEntryProductCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JournalEntryProductCommand</code>.
   * @alias module:model/JournalEntryProductCommand
   */
  function JournalEntryProductCommand() {
    (0, _classCallCheck2["default"])(this, JournalEntryProductCommand);
    JournalEntryProductCommand.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(JournalEntryProductCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>JournalEntryProductCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JournalEntryProductCommand} obj Optional instance to populate.
     * @return {module:model/JournalEntryProductCommand} The populated <code>JournalEntryProductCommand</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JournalEntryProductCommand();
        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }
        if (data.hasOwnProperty('warehouse')) {
          obj['warehouse'] = _ApiClient["default"].convertToType(data['warehouse'], 'Number');
        }
        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return JournalEntryProductCommand;
}();
/**
 * Represents the unique code of the item. This value can be an alphanumeric  code that will represent the code id of the item.  For example,'item-1' or 'toy-007'.
 * @member {String} code
 */
JournalEntryProductCommand.prototype['code'] = undefined;

/**
 * Represents the id of the Warehouse, the value of this field must be an integer  number that represents the unique id of the warehouse.
 * @member {Number} warehouse
 */
JournalEntryProductCommand.prototype['warehouse'] = undefined;

/**
 * Represents product quantity.  For example, '2' quantities of the 'item-01'.
 * @member {Number} quantity
 */
JournalEntryProductCommand.prototype['quantity'] = undefined;
var _default = exports["default"] = JournalEntryProductCommand;