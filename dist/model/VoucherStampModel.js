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
 * The VoucherStampModel model module.
 * @module model/VoucherStampModel
 * @version v1
 */
var VoucherStampModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VoucherStampModel</code>.
   * @alias module:model/VoucherStampModel
   */
  function VoucherStampModel() {
    (0, _classCallCheck2["default"])(this, VoucherStampModel);
    VoucherStampModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(VoucherStampModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VoucherStampModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VoucherStampModel} obj Optional instance to populate.
     * @return {module:model/VoucherStampModel} The populated <code>VoucherStampModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VoucherStampModel();
        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('observations')) {
          obj['observations'] = _ApiClient["default"].convertToType(data['observations'], 'String');
        }
        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], 'String');
        }
      }
      return obj;
    }
  }]);
  return VoucherStampModel;
}();
/**
 * @member {String} uuid
 */
VoucherStampModel.prototype['uuid'] = undefined;

/**
 * @member {String} status
 */
VoucherStampModel.prototype['status'] = undefined;

/**
 * @member {String} observations
 */
VoucherStampModel.prototype['observations'] = undefined;

/**
 * @member {String} errors
 */
VoucherStampModel.prototype['errors'] = undefined;
var _default = exports["default"] = VoucherStampModel;