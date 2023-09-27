"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ApiClient = _interopRequireDefault(require("../ApiClient.js"));
var _DeliveryOrderModel = _interopRequireDefault(require("./DeliveryOrderModel.js"));
var _PursacheOrderModel = _interopRequireDefault(require("./PursacheOrderModel.js"));
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
 * The AdditionalFieldsModel model module.
 * @module model/AdditionalFieldsModel
 * @version v1
 */
var AdditionalFieldsModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AdditionalFieldsModel</code>.
   * @alias module:model/AdditionalFieldsModel
   */
  function AdditionalFieldsModel() {
    (0, _classCallCheck2["default"])(this, AdditionalFieldsModel);
    AdditionalFieldsModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  (0, _createClass2["default"])(AdditionalFieldsModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>AdditionalFieldsModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdditionalFieldsModel} obj Optional instance to populate.
     * @return {module:model/AdditionalFieldsModel} The populated <code>AdditionalFieldsModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AdditionalFieldsModel();
        if (data.hasOwnProperty('purchase_order')) {
          obj['purchase_order'] = _PursacheOrderModel["default"].constructFromObject(data['purchase_order']);
        }
        if (data.hasOwnProperty('delivery_order')) {
          obj['delivery_order'] = _DeliveryOrderModel["default"].constructFromObject(data['delivery_order']);
        }
      }
      return obj;
    }
  }]);
  return AdditionalFieldsModel;
}();
/**
 * @member {module:model/PursacheOrderModel} purchase_order
 */
AdditionalFieldsModel.prototype['purchase_order'] = undefined;

/**
 * @member {module:model/DeliveryOrderModel} delivery_order
 */
AdditionalFieldsModel.prototype['delivery_order'] = undefined;
var _default = exports["default"] = AdditionalFieldsModel;