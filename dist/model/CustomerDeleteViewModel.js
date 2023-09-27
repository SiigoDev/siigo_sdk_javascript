"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient.js"));
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
 * The CustomerDeleteViewModel model module.
 * @module model/CustomerDeleteViewModel
 * @version v1
 */
var CustomerDeleteViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerDeleteViewModel</code>.
   * @alias module:model/CustomerDeleteViewModel
   */
  function CustomerDeleteViewModel() {
    (0, _classCallCheck2["default"])(this, CustomerDeleteViewModel);
    CustomerDeleteViewModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(CustomerDeleteViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CustomerDeleteViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerDeleteViewModel} obj Optional instance to populate.
     * @return {module:model/CustomerDeleteViewModel} The populated <code>CustomerDeleteViewModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerDeleteViewModel();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
  return CustomerDeleteViewModel;
}();
/**
 * Represents the unique Id of customer, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
 * @member {String} id
 */
CustomerDeleteViewModel.prototype['id'] = undefined;

/**
 * Represent the deleted status of customer.
 * @member {Boolean} deleted
 */
CustomerDeleteViewModel.prototype['deleted'] = undefined;
var _default = exports["default"] = CustomerDeleteViewModel;