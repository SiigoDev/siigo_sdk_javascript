"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PriceListItemViewModel = _interopRequireDefault(require("./PriceListItemViewModel"));

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
 * The PriceListViewModel model module.
 * @module model/PriceListViewModel
 * @version v1
 */
var PriceListViewModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PriceListViewModel</code>.
   * @alias module:model/PriceListViewModel
   */
  function PriceListViewModel() {
    (0, _classCallCheck2["default"])(this, PriceListViewModel);
    PriceListViewModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  (0, _createClass2["default"])(PriceListViewModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PriceListViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceListViewModel} obj Optional instance to populate.
     * @return {module:model/PriceListViewModel} The populated <code>PriceListViewModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PriceListViewModel();

        if (data.hasOwnProperty('currency_code')) {
          obj['currency_code'] = _ApiClient["default"].convertToType(data['currency_code'], 'String');
        }

        if (data.hasOwnProperty('price_list')) {
          obj['price_list'] = _ApiClient["default"].convertToType(data['price_list'], [_PriceListItemViewModel["default"]]);
        }
      }

      return obj;
    }
  }]);
  return PriceListViewModel;
}();
/**
 * @member {String} currency_code
 */


PriceListViewModel.prototype['currency_code'] = undefined;
/**
 * @member {Array.<module:model/PriceListItemViewModel>} price_list
 */

PriceListViewModel.prototype['price_list'] = undefined;
var _default = PriceListViewModel;
exports["default"] = _default;