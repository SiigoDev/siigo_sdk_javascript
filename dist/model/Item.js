"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient.js"));
var _Account = _interopRequireDefault(require("./Account.js"));
var _ItemDue = _interopRequireDefault(require("./ItemDue.js"));
var _TaxesCommand = _interopRequireDefault(require("./TaxesCommand.js"));
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
 * The Item model module.
 * @module model/Item
 * @version v1
 */
var Item = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Item</code>.
   * @alias module:model/Item
   */
  function Item() {
    (0, _classCallCheck2["default"])(this, Item);
    Item.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(Item, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Item} obj Optional instance to populate.
     * @return {module:model/Item} The populated <code>Item</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Item();
        if (data.hasOwnProperty('account')) {
          obj['account'] = _Account["default"].constructFromObject(data['account']);
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('due')) {
          obj['due'] = _ItemDue["default"].constructFromObject(data['due']);
        }
        if (data.hasOwnProperty('tax')) {
          obj['tax'] = _TaxesCommand["default"].constructFromObject(data['tax']);
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return Item;
}();
/**
 * @member {module:model/Account} account
 */
Item.prototype['account'] = undefined;

/**
 * Represents product description.
 * @member {String} description
 */
Item.prototype['description'] = undefined;

/**
 * @member {module:model/ItemDue} due
 */
Item.prototype['due'] = undefined;

/**
 * @member {module:model/TaxesCommand} tax
 */
Item.prototype['tax'] = undefined;

/**
 * Represents the price of item.  For example, '119000'.
 * @member {Number} value
 */
Item.prototype['value'] = undefined;
var _default = exports["default"] = Item;