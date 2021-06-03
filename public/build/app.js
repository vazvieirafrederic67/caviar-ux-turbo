(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./datepicker_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/datepicker_controller.js",
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js",
	"./product_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/product_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-turbo--turbo-core': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-turbo/dist/turbo_controller.js */ "./vendor/symfony/ux-turbo/Resources/assets/dist/turbo_controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/datepicker_controller.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/datepicker_controller.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      $(function () {
        $(".datepicker").datepicker({
          changeMonth: true,
          changeYear: true,
          yearRange: "-100:+0",
          dateFormat: 'dd-mm-yy'
        }, $.datepicker.regional['fr']);
      });
      $.datepicker.regional['fr'] = {
        clearText: 'Effacer',
        clearStatus: '',
        closeText: 'Fermer',
        closeStatus: 'Fermer sans modifier',
        prevText: '&lt;Préc',
        prevStatus: 'Voir le mois précédent',
        nextText: 'Suiv&gt;',
        nextStatus: 'Voir le mois suivant',
        currentText: 'Courant',
        currentStatus: 'Voir le mois courant',
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthNamesShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
        monthStatus: 'Voir un autre mois',
        yearStatus: 'Voir un autre année',
        weekHeader: 'Sm',
        weekStatus: '',
        dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
        dayStatus: 'Utiliser DD comme premier jour de la semaine',
        dateStatus: 'Choisir le DD, MM d',
        dateFormat: 'dd-mm-yy',
        firstDay: 0,
        initStatus: 'Choisir la date',
        isRTL: false
      };
      $.datepicker.setDefaults($.datepicker.regional['fr']);
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/product_controller.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/product_controller.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var caviarsElement = this.element.querySelectorAll('.container > .row');
      /*caviarsElement.forEach(element => console.log(element));*/

      for (var _i = 0, _Object$entries = Object.entries(caviarsElement); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (isOdd(key)) {
          var colMdPush = "".concat(value.firstElementChild.classList.remove("col-md-push-6"));
          var colMdPuull = "".concat(value.lastElementChild.classList.remove("col-md-pull-6"));
        }
      }

      function isOdd(value) {
        if (value % 2 == 0) return false;else return true;
      }
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_17__.Controller);



/***/ }),

/***/ "./assets/all.js":
/*!***********************!*\
  !*** ./assets/all.js ***!
  \***********************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

/*--------------------------------------------------------*/

/* TABLE OF CONTENTS: */

/*--------------------------------------------------------*/

/* 01 - VARIABLES */

/* 02 - SWIPER SLIDER */

/* 03 - WINDOW LOAD */

/* 04 - MENU */

/* 05 - WINDOW SCROLL */

/* 06 - ISOTOPE */

/* 07 - GOOGLE MAP */

/* 08 - VIDEO YOUTUBE - VIMEO */

/* 09 - ACCORDEON  */

/* 10 - CLICK AND HOVER  */

/* 11 - SLIDER RANGE  */

/* 12 - COLORPICKER  */

/* 13 - TIMER */

/* 14 - TABS*/

/* 15 - COPLE SWIPER  */

/* 16 - CHECKOUT  */

/* 17 - SHOP MENU FILTER  */

/* 18 - CHOOSE ANIMATION  */
// require jQuery normally
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var swiper = new Swiper();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {
  /*});
  jquery(function($) { "use strict";*/

  /*============================*/

  /* 01 - VARIABLES */

  /*============================*/
  var swipers = [],
      winW,
      winH,
      winScr,
      _isresponsive,
      xsPoint = 480,
      smPoint = 768,
      mdPoint = 992,
      lgPoint = 1200,
      addPoint = 1600,
      _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i),
      footerHeight = $('.footer').height();

  function pageCalculations() {
    winW = $(window).width();
    winH = $(window).height();

    if ($(window).width() > 992) {
      $('.main-content').css({
        "margin-bottom": footerHeight - 1
      });
    } else {
      $('.main-content').css({
        "margin-bottom": "0"
      });
    }
  }

  pageCalculations();

  if (_ismobile) {
    $('body').addClass('mobile');
    $('.bg').removeClass('data-jarallax');
  }

  if ($(window).width() < 1200) {
    $('.swiper-container').each(function () {
      $(this).removeAttr('data-parallax');
    });
  }

  initSwiper();

  if ($('.map-wrapper').length) {
    setTimeout(function () {
      initialize();
    }, 1000);
  }

  $('.preloader').fadeOut();
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    $('.bg.ready').removeAttr('data-jarallax').addClass('fix');
  }

  function updateSlidesPerView(swiperContainer) {
    if (winW >= addPoint) return parseInt(swiperContainer.attr('data-add-slides'), 10);else if (winW >= lgPoint) return parseInt(swiperContainer.attr('data-lg-slides'), 10);else if (winW >= mdPoint) return parseInt(swiperContainer.attr('data-md-slides'), 10);else if (winW >= smPoint) return parseInt(swiperContainer.attr('data-sm-slides'), 10);else return parseInt(swiperContainer.attr('data-xs-slides'), 10);
  }

  function resizeCall() {
    pageCalculations();
    $('.swiper-container.initialized[data-slides-per-view="responsive"]').each(function () {
      var thisSwiper = swipers['swiper-' + $(this).attr('id')],
          $t = $(this),
          slidesPerViewVar = updateSlidesPerView($t),
          centerVar = thisSwiper.params.centeredSlides;
      thisSwiper.params.slidesPerView = slidesPerViewVar;
      thisSwiper.update();

      if (!centerVar) {
        var paginationSpan = $t.find('.pagination span');
        var paginationSlice = paginationSpan.hide().slice(0, paginationSpan.length + 1 - slidesPerViewVar);
        if (paginationSlice.length <= 1 || slidesPerViewVar >= $t.find('.swiper-slide').length) $t.addClass('pagination-hidden');else $t.removeClass('pagination-hidden');
        paginationSlice.show();
      }
    });
  }

  if (!_ismobile) {
    $(window).resize(function () {
      resizeCall();
    });
  } else {
    window.addEventListener("orientationchange", function () {
      resizeCall();
    }, false);
  }
  /*============================*/

  /* 02 - SWIPER SLIDER */

  /*============================*/


  function initSwiper() {
    var initIterator = 0;
    $('.swiper-container').each(function () {
      var $t = $(this);
      var index = 'swiper-unique-id-' + initIterator;
      $t.addClass('swiper-' + index + ' initialized').attr('id', index);
      $t.find('.pagination').addClass('pagination-' + index);
      var autoPlayVar = parseInt($t.attr('data-autoplay'), 10);
      var slideEffect = $t.attr('data-effect');
      var slidesPerViewVar = $t.attr('data-slides-per-view');

      if (slidesPerViewVar == 'responsive') {
        slidesPerViewVar = updateSlidesPerView($t);
      }

      var directMode = $t.attr('data-mode');
      var loopVar = parseInt($t.attr('data-loop'), 10);
      var parallaxVal = parseInt($t.attr('data-parallax'), 10);
      var speedVar = parseInt($t.attr('data-speed'), 10);
      var centerVar = parseInt($t.attr('data-center'), 10);
      var freeMode = parseInt($t.attr('data-freemode'), 10);
      var space = parseInt($t.attr('space-between'), 10);
      swipers['swiper-' + index] = new Swiper('.swiper-' + index, {
        speed: speedVar,
        pagination: '.pagination-' + index,
        paginationHide: false,
        loop: loopVar,
        paginationClickable: true,
        autoplay: autoPlayVar,
        slidesPerView: slidesPerViewVar,
        keyboardControl: true,
        simulateTouch: true,
        centeredSlides: centerVar,
        effect: slideEffect,
        coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        },
        direction: directMode,
        freeMode: freeMode,
        updateTranslate: true,
        observer: true,
        parallax: parallaxVal,
        preventClicks: true,
        longSwipesRatio: 0.1,
        spaceBetween: $t.is('[data-space]') ? parseInt($t.data('space'), 10) : 0,
        onSlideChangeStart: function onSlideChangeStart(swiper) {
          var activeIndex = loopVar === 1 ? swiper.activeLoopIndex : swiper.activeIndex;

          if ($t.closest('.slider-swiching').length) {
            swipers['swiper-' + $t.closest('.slider-swiching').find('.swich-parent').attr('id')].slideTo(swiper.activeIndex);
            $t.closest('.slider-swiching').find('.slide-swich').removeClass('active');
            $t.closest('.slider-swiching').find('.slide-swich').eq(activeIndex).addClass('active');
          }

          if ($t.hasClass('swiper-control-top')) {
            var activeIndex = swiper.activeIndex,
                slidersWrapper = $t.closest('.swipers-wrapper');
            swipers['swiper-' + slidersWrapper.find('.swiper-control-bottom').attr('id')].slideTo(activeIndex);
            slidersWrapper.find('.swiper-control-bottom').find('.active').removeClass('active');
            slidersWrapper.find('.swiper-control-bottom').find('.swiper-slide').eq(activeIndex).addClass('active');
          }
        },
        onClick: function onClick(swiper) {
          var activeIndex1 = swiper.clickedIndex;

          if ($t.closest('.checkbox-wrapp').length) {
            swiper.slideTo(activeIndex1);
          }
        }
      });
      swipers['swiper-' + index].update();
      initIterator++;
    });
    $('.swiper-container.swiper-control-top').each(function () {
      swipers['swiper-' + $(this).attr('id')].params.control = swipers['swiper-' + $(this).parent().find('.swiper-control-bottom').attr('id')];
    });
    $('.swiper-container.swiper-control-bottom').each(function () {
      swipers['swiper-' + $(this).attr('id')].params.control = swipers['swiper-' + $(this).parent().find('.swiper-control-top').attr('id')];
    });
  }

  $(document).on('click', '.slide-swich', function () {
    var swichIndex = $(this).closest('.slider-swiching').find('.slide-swich').index(this);
    $(this).closest('.slider-swiching').find('.slide-swich').removeClass('active');
    $(this).addClass('active');
    swipers['swiper-' + $(this).closest('.slider-swiching').find('.container-swich').attr('id')].slideTo(swichIndex);
    return false;
  });
  $(document).on('click', '.swiper-arrow-left', function () {
    swipers['swiper-' + $(this).closest('.arrow-closest').find('.swiper-container').attr('id')].slidePrev();
  });
  $(document).on('click', '.swiper-arrow-right', function () {
    swipers['swiper-' + $(this).closest('.arrow-closest').find('.swiper-container').attr('id')].slideNext();
  });
  /*============================*/

  /* 03 - WINDOW LOAD */

  /*============================*/

  $(window).on(function () {
    izotopInit();

    if ($('.data-jarallax').length) {
      $('.data-jarallax').on({
        speed: 0.7
      });
    }
  });
  /*============================*/

  /* 04 - MENU */

  /*============================*/

  $('.burger-menu').on('click', function () {
    if ($(this).hasClass('open-menu')) {
      $(this).removeClass('open-menu');
      $('.nav').removeClass('active');
      $('body').removeClass('overflow');
      $('.header').removeClass('open-search');
    } else {
      $(this).addClass('open-menu');
      $('.nav').addClass('active');
      $('body').addClass('overflow');
    }
  });
  $('.menu-arr').on('click', function () {
    $(this).parent().parent().find('ul').first().slideToggle(300);
    return false;
  });
  $('.search-open').on('click', function () {
    $('.header').toggleClass('open-search');
  });
  $('.close-search').on('click', function () {
    $('.header').removeClass('open-search');
  });
  /*============================*/

  /* 05 - WINDOW SCROLL */

  /*============================*/

  $(window).scroll(function () {
    headerScroll();
    headerFixed();
    animateItem();
  });

  function headerFixed() {
    if ($(window).scrollTop() >= $('.full-height-slider').height() - 138) {
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }
  }

  function headerScroll() {
    if ($(window).scrollTop() >= $('.header').height()) {
      $('header').addClass('scrol');
    } else {
      $('header').removeClass('scrol');
    }
  }

  $('.up-button').on('click', function () {
    $('body, html').animate({
      'scrollTop': '0'
    });
    return false;
  });

  function animateItem() {
    if ($('.item-animation').length) {
      $('.item-animation').not('.animated').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 1.1) {
          $(this).addClass('animated');
        }
      });
    }
  }
  /*============================*/

  /* 06 - ISOTOPE */

  /*============================*/


  function izotopInit() {
    if ($('.izotope-container').length) {
      var $container = $('.izotope-container');
      $container.isotope({
        itemSelector: '.item',
        layoutMode: 'masonry',
        masonry: {
          columnWidth: '.grid-sizer'
        }
      });
      $('.filter-list li').click(function () {
        $('.izotope-container').each(function () {
          $(this).find('.item').removeClass('animated');
        });
        $('.filter-list li').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $container.isotope({
          filter: filterValue
        });
      });
    }
  }
  /*============================*/

  /* 07 - GOOGLE MAP */

  /*============================*/


  var marker = [],
      infowindow = [],
      map,
      image = $('.map-wrapper').attr('data-marker');

  function addMarker(location, name, contentstr) {
    marker[name] = new google.maps.Marker({
      position: location,
      map: map,
      icon: image
    });
    marker[name].setMap(map);
    infowindow[name] = new google.maps.InfoWindow({
      content: contentstr
    });
    google.maps.event.addListener(marker[name], 'click', function () {
      infowindow[name].open(map, marker[name]);
    });
  }

  function initialize() {
    var lat = $('#map-canvas').attr("data-lat");
    var lng = $('#map-canvas').attr("data-lng");
    var mapStyle = $('#map-canvas').attr("data-style");
    var myLatlng = new google.maps.LatLng(lat, lng);
    var setZoom = parseInt($('#map-canvas').attr("data-zoom"), 10);
    var styles = "";

    if (mapStyle == "1") {
      styles = [{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        }, {
          "color": "#000000"
        }, {
          "lightness": 40
        }]
      }, {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#000000"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 17
        }, {
          "weight": 1.2
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 21
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 29
        }, {
          "weight": 0.2
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 19
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }, {
          "lightness": 17
        }]
      }];
    }

    var styledMap = new google.maps.StyledMapType(styles, {
      name: "Styled Map"
    });
    var draggMap;

    if (!_ismobile) {
      draggMap = true;
    } else {
      draggMap = false;
    }

    var mapOptions = {
      zoom: setZoom,
      disableDefaultUI: false,
      scrollwheel: false,
      zoomControl: true,
      streetViewControl: true,
      center: myLatlng,
      draggable: draggMap
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    $('.addresses-block a').each(function () {
      var mark_lat = $(this).attr('data-lat');
      var mark_lng = $(this).attr('data-lng');
      var this_index = $('.addresses-block a').index(this);
      var mark_name = 'template_marker_' + this_index;
      var mark_locat = new google.maps.LatLng(mark_lat, mark_lng);
      var mark_str = $(this).attr('data-string');
      addMarker(mark_locat, mark_name, mark_str);
    });
  }
  /*============================*/

  /* 08 - VIDEO YOUTUBE - VIMEO */

  /*============================*/


  $(document).on('click', '.play-button', function () {
    var videoLink = $(this).attr('data-video'),
        thisAppend = $(this).closest('.video-open').find('.video-iframe');
    $(this).closest('.video-open').find('.video-item').addClass('act');
    $('.video-open').addClass('over');
    $('<iframe>').attr('src', videoLink).appendTo(thisAppend);
    return false;
  });
  $(document).on('click', '.close-video', function () {
    var videoClose = $(this).parent().find('.video-iframe');
    $(this).closest('.video-open').find('.video-item').removeClass('act');
    $('.video-open').removeClass('over');
    videoClose.find('iframe').remove();
    return false;
  });
  /*============================*/

  /* 09 - ACCORDEON  */

  /*============================*/

  $('.accordeon-triger').on('click', function () {
    var $this = $(this),
        item = $this.closest('.accordeon-item'),
        list = $this.closest('.accordeon-list'),
        items = list.find('.accordeon-item'),
        content = item.find('.accordeon-inner'),
        otherContent = list.find('.accordeon-inner'),
        times = 300;

    if (!item.hasClass('active')) {
      items.removeClass('active');
      item.addClass('active');
      otherContent.stop(true, true).slideUp(times);
      content.stop(true, true).slideDown(times);
    } else {
      item.removeClass('active');
      content.stop(true, true).slideUp(times);
    }

    return false;
  });
  /*============================*/

  /* 10 - CLICK AND HOVER  */

  /*============================*/

  $('.like-item').on('click', function () {
    $(this).toggleClass('active');
  });
  $(document).on('click', '.custom-input-number .cin-increment', function (e) {
    var $input = $(this).siblings('.cin-input'),
        val = parseInt($input.val()),
        max = parseInt($input.attr('max')),
        step = parseInt($input.attr('step'));
    var temp = val + step;
    $input.val(temp <= max ? temp : max);
  });
  $(document).on('click', '.custom-input-number .cin-decrement', function (e) {
    var $input = $(this).siblings('.cin-input'),
        val = parseInt($input.val()),
        min = parseInt($input.attr('min')),
        step = parseInt($input.attr('step'));
    var temp = val - step;
    $input.val(temp >= min ? temp : min);
  });
  $('.open-popup').on('click', function () {
    var indexPopup = $(this).attr('data-open');
    $('.index-' + indexPopup).addClass('active');
    $('body').addClass('overflow');
    return false;
  });
  $('.close-popup').on('click', function () {
    $('.popup').removeClass('active');
    $('body').removeClass('overflow');
  });
  $('.close-item').on('click', function () {
    $(this).parent().remove();
  });
  $('.shop-icon').on('click', function () {
    $('.shop-card-list').toggleClass('active');
  });
  $('.close-card-mobile').on('click', function () {
    $('.shop-card-list').removeClass('active');
  });
  $('.select-open').on('click', function () {
    $(this).toggleClass('active').next().slideToggle();
  });

  if ($(window).width() < 992) {
    $('.mobile-select ul li').on('click', function () {
      $(this).closest('.mobile-select').find('.select-open .txt').text($(this).text());
      $(this).closest('.mobile-select').find('.select-open').removeClass('active');
      $(this).closest('.mobile-select').find('ul').slideUp(300);
      return false;
    });
  }
  /*============================*/

  /* 11 - SLIDER RANGE  */

  /*============================*/


  $('.slider-range').each(function (index) {
    var counter = $(this).data('counter');
    var position = $(this).data('position');
    var from = parseInt($(this).data('from'), 10);
    var to = parseInt($(this).data('to'), 10);
    var min = parseInt($(this).data('min'), 10);
    var max = parseInt($(this).data('max'), 10);
    $(this).find('.range').attr('id', 'slider-range-' + index);
    $(this).find('.amount-start').attr('id', 'amount-start-' + index);
    $(this).find('.amount-end').attr('id', 'amount-end-' + index);
    $('#slider-range-' + index).slider({
      range: true,
      min: min,
      max: max,
      values: [from, to],
      slide: function slide(event, ui) {
        if (position == 'start') {
          $('#amount-start-' + index).text(counter + ui.values[0]);
          $('#amount-end-' + index).text(counter + ui.values[1]);
        } else {
          $('#amount-start-' + index).text(ui.values[0] + counter);
          $('#amount-end-' + index).text(ui.values[1] + counter);
        }
      }
    });

    if (position == 'start') {
      $('#amount-start-' + index).text(counter + $('#slider-range-' + index).slider('values', 0));
      $('#amount-end-' + index).text(counter + $('#slider-range-' + index).slider('values', 1));
    } else {
      $('#amount-start-' + index).text($('#slider-range-' + index).slider('values', 0) + counter);
      $('#amount-end-' + index).text($('#slider-range-' + index).slider('values', 1) + counter);
    }
  });
  /*============================*/

  /* 12 - COLORPICKER  */

  /*============================*/

  $('.piker-open').on('click', function () {
    $('.color-piker').toggleClass('active');
  });
  /*============================*/

  /* 13 - TIMER */

  /*============================*/

  function initCounter() {
    if (!$('.countdown').length) return false;
    $('.countdown').not('.initialized').each(function () {
      $(this).addClass('initialized').ClassyCountdown({
        end: $.now() + parseInt($(this).data('end')),
        labels: true,
        style: {
          element: "",
          days: {
            gauge: {
              thickness: $(this).data('line'),
              fgColor: $(this).data('fgcolor'),
              bgColor: $(this).data('bgcolor')
            }
          },
          hours: {
            gauge: {
              thickness: $(this).data('line'),
              fgColor: $(this).data('fgcolor'),
              bgColor: $(this).data('bgcolor')
            }
          },
          minutes: {
            gauge: {
              thickness: $(this).data('line'),
              fgColor: $(this).data('fgcolor'),
              bgColor: $(this).data('bgcolor')
            }
          },
          seconds: {
            gauge: {
              thickness: $(this).data('line'),
              fgColor: $(this).data('fgcolor'),
              bgColor: $(this).data('bgcolor')
            }
          }
        }
      });
    });
  }

  initCounter();
  /*============================*/

  /* 14 - TABS*/

  /*============================*/

  $('.item-tabs li').on('click', function () {
    var indexSlTab = $('.item-tabs li').index(this);
    $('.item-tabs li').removeClass('active');
    $(this).addClass('active');
    $('.tab-container-item').fadeOut(200).removeClass('active');
    $('.tab-container-item').eq(indexSlTab).fadeIn(200).addClass('active');

    if ($('.tab-container-item').eq(indexSlTab).find('.swiper-container').length) {
      setTimeout(function () {
        initSwiper();
      }, 100);
    }

    return false;
  });
  /*============================*/

  /* 15 - COPLE SWIPER  */

  /*============================*/

  $('.controlTopSwiper').on('click', function () {
    var index = $(this).closest('.swiper-container').find('.swiper-slide').index($(this).parent());
    swipers['swiper-' + $(this).closest('.swipers-wrapper').find('.swiper-control-top').attr('id')].slideTo(index);
  });
  /*============================*/

  /* 16 - CHECKOUT  */

  /*============================*/

  $('.delivery').on('click', function (e) {
    var $input = $(this).find('input');
    $(this).parent().find('.delivery-form').slideToggle(350);

    if ($input.is(":checked")) {
      $input.prop("checked", false);
    } else {
      $input.prop("checked", true);
    }

    e.preventDefault();
  });
  /*============================*/

  /* 17 - SHOP MENU FILTER  */

  /*============================*/

  $('.filter-open').on('click', function () {
    $('.menu-filter').toggleClass('active');
  });
  $('.close-filter').on('click', function () {
    $('.menu-filter').removeClass('active');
  });
  /*============================*/

  /* 18 - CHOOSE ANIMATION  	*/

  /*============================*/

  $('.choose-animation input').on('change', function (e) {
    var $value = $('input[name=1]:checked').val();

    if ($value == "animation") {
      $('body').removeClass('no-animated');
    } else {
      $('body').addClass('no-animated');
    }

    e.preventDefault();
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var jquery_ui_themes_base_core_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-ui/themes/base/core.css */ "./node_modules/jquery-ui/themes/base/core.css");
/* harmony import */ var jquery_ui_themes_base_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery-ui/themes/base/theme.css */ "./node_modules/jquery-ui/themes/base/theme.css");
/* harmony import */ var jquery_ui_themes_base_selectable_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery-ui/themes/base/selectable.css */ "./node_modules/jquery-ui/themes/base/selectable.css");
/* harmony import */ var jquery_ui_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery-ui/ui/core */ "./node_modules/jquery-ui/ui/core.js");
/* harmony import */ var jquery_ui_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery_ui_ui_widgets_selectable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery-ui/ui/widgets/selectable */ "./node_modules/jquery-ui/ui/widgets/selectable.js");
/* harmony import */ var jquery_ui_ui_widgets_selectable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_selectable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/swiper-bundle.css */ "./node_modules/swiper/swiper-bundle.css");
/* harmony import */ var _jqueryui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jqueryui */ "./assets/jqueryui.js");
/* harmony import */ var _jqueryui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_jqueryui__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./swiper */ "./assets/swiper.js");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_swiper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./all */ "./assets/all.js");
/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_all__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _jscolor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jscolor */ "./assets/jscolor.js");
/* harmony import */ var _jscolor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_jscolor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _jquery_knob__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jquery.knob */ "./assets/jquery.knob.js");
/* harmony import */ var _jquery_knob__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_jquery_knob__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _jquery_throttle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./jquery.throttle */ "./assets/jquery.throttle.js");
/* harmony import */ var _jquery_throttle__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_jquery_throttle__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _jquery_classycountdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./jquery.classycountdown */ "./assets/jquery.classycountdown.js");
/* harmony import */ var _jquery_classycountdown__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_jquery_classycountdown__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _jarallax__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./jarallax */ "./assets/jarallax.js");
/* harmony import */ var _jarallax__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_jarallax__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _color_picker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./color.picker */ "./assets/color.picker.js");
/* harmony import */ var _color_picker__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_color_picker__WEBPACK_IMPORTED_MODULE_16__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application

 // app.js
// require jQuery normally

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // create global $ and jQuery variables


__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;




 // import Swiper styles












/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/color.picker.js":
/*!********************************!*\
  !*** ./assets/color.picker.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

var updateCss;

function colorpicker() {
  $(function () {
    function convertHex(hex, opacity) {
      hex = hex.toString().replace('#', '');
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
      var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
      return result;
    }

    ;

    updateScheme = function updateScheme(color) {
      $('img.color-overlay').each(function () {
        this.src = changeIconColor(this, '#' + color, '1', this.naturalWidth, this.naturalHeight);
      });
      $('#dynamic-css').html('.page-style-5 .title,  .header-menu > li > ul li:hover > a,  .login-item a:hover,  .button-style-3:not(.type-2),  .button-style-4:not(.type-2),  .button-style-1.type-2,  .checkbox-entry-wrap .checkbox-entry input:checked + span p,  .page-navigation a:hover,  .copyright span a,  .link-hover:hover,  .f-twitt a,  .caption-inst a span, .link-hover-line:hover, .main-col, .button-style-1.type-4:hover,  .countdown-type .ClassyCountdown-value div, .page-color-style-1 .item-tabs li.active .link-hover-line, .page-color-style-6 .item-tabs li.active .link-hover-line, .checkbox-entry-wrap .checkbox-entry input:checked + .content-check .simple-text p, .page-color-style-6 .button-style-1.type-3, .blog-info li a:hover, .text-block-wrapp .title-blog:hover, .post-navigation .h5.color-2 a:hover, .popup .forgot a:hover, .popup .reg-now a:hover, .item-tabs li.active .link-hover-line {color: #' + color + '!important;}  .button-style-1:before,  .header-menu > li > a:before,  .header-style-2 .header-menu > li:before,  .header-style-2 .header-menu > li:after,  .shop-number,  .button-style-3:not(.type-2):before,  .button-style-3:not(.type-2):after,  .button-style-3:not(.type-2) i:after,  .button-style-3:not(.type-2) i:before,  .button-style-4:not(.type-2) i:before,  .button-style-4:not(.type-2) i:after,  .checkbox-entry i:before,  .subscribe-form:not(.form-type-2) .sub-submit,  .form-type-2 .sub-submit:hover,  .ui-slider .ui-slider-range,  .ui-slider .ui-slider-handle:before,  .link-hover-line:before, .page-style-1 .page-span-1:before, .page-style-1 .page-span-1:after, .page-style-1 .page-span-2:before, .page-style-1 .page-span-2:after,  .list-style-4 li:hover:before,  .page-span:before,  .page-span:after, .page-style-2 .simple-item-style-2.color-type-1, .swiper-container-horizontal> .swiper-pagination-2.swiper-pagination-bullets .swiper-pagination-bullet:after, .post-navigation .prev:hover:before, .post-navigation .next:hover:after, .item-tabs.type-2 li.active span, .item-tabs.type-2 li.active span:before, .item-tabs.type-2 li.active span:after, .item-tabs.type-2 li:hover span, .item-tabs.type-2 li:hover span:before, .item-tabs.type-2 li:hover span:after {background: #' + color + '!important;}  .follow a:hover path,  .search-open:hover path,  .close-search:hover path,  .submit-search:hover path,  .header .right-block .like-item.active path,  .header .right-block .like-item:hover path,  .page-navigation a:hover path,  .f-twitt path, .main-fill-col path, .main-fill-hover:hover path, .contact-icon path, .coming-address li path, .blog-info .icon a:hover path, .close-popup.type-2:hover path, .main-fill-col * {fill: #' + color + '!important;}  .button-style-4:not(.type-2):before,  .button-style-4:not(.type-2):after,  .button-style-1.type-2,  .checkbox-entry input:checked + span i,  .page-navigation a:before,  .ui-slider .ui-slider-handle,  .page-style-2 .simple-item-style-1.color-type-2,  .button-style-1.type-4:after,  .button-style-1.type-2:after, .cin-input.input-field:focus, .checkbox-entry-wrap .checkbox-entry .content-check:after, .focus, .sideBarSwiper .swiper-slide .content:after, .button-style-1.type-3:after, .subscribe-form .input-field:focus, .page-color-style-7 .focus, .input-field-icon .input-field:focus {border-color: #' + color + '!important;} .page-style-2 .testimonials-item .text:after {border-color: #' + color + ' transparent transparent transparent!important;} .page-style-2 .testimonials-item .text:before {box-shadow: 0 0 0 20px #' + color + '!important;} @media (max-width: 480px) {.page-style-2 .testimonials-item .text:before {box-shadow: 0 0 0 10px #' + color + '!important;}}');
    };

    var changeIconColor = function changeIconColor(iconElement, color, alpha, width, height) {
      var canvas = document.createElement("canvas"),
          context = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      context.drawImage(iconElement, 0, 0, width, height);
      context.globalCompositeOperation = "source-atop";
      context.globalAlpha = alpha;
      context.fillStyle = color;
      context.fillRect(0, 0, width, height);
      context.globalAlpha = 1.0;
      return canvas.toDataURL("image/png", 1);
    };
  });
}

module.exports = colorpicker();

/***/ }),

/***/ "./assets/jarallax.js":
/*!****************************!*\
  !*** ./assets/jarallax.js ***!
  \****************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.1.0
 * Author  : _nK http://nkdev.info
 * GitHub  : https://github.com/nk-o/jarallax
 */
function jarallax() {
  (function (factory) {
    'use strict';

    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
  })(function ($) {
    // Adapted from https://gist.github.com/paulirish/1579671
    if (!Date.now) Date.now = function () {
      return new Date().getTime();
    };
    if (!window.requestAnimationFrame) (function () {
      'use strict';

      var vendors = ['webkit', 'moz'];

      for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
      }

      if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
      || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;

        window.requestAnimationFrame = function (callback) {
          var now = Date.now();
          var nextTime = Math.max(lastTime + 16, now);
          return setTimeout(function () {
            callback(lastTime = nextTime);
          }, nextTime - now);
        };

        window.cancelAnimationFrame = clearTimeout;
      }
    })();

    var supportTransform = function () {
      var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
      var div = document.createElement('div');

      for (var i = 0; i < prefixes.length; i++) {
        if (div && div.style[prefixes[i]] !== undefined) {
          return prefixes[i];
        }
      }

      return false;
    }();

    var support3dtransform = function () {
      if (!window.getComputedStyle) {
        return false;
      }

      var el = document.createElement('p'),
          has3d,
          transforms = {
        'webkitTransform': '-webkit-transform',
        'OTransform': '-o-transform',
        'msTransform': '-ms-transform',
        'MozTransform': '-moz-transform',
        'transform': 'transform'
      }; // Add it to the body to get the computed style.

      (document.body || document.documentElement).insertBefore(el, null);

      for (var t in transforms) {
        if (el.style[t] !== undefined) {
          el.style[t] = "translate3d(1px,1px,1px)";
          has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
        }
      }

      (document.body || document.documentElement).removeChild(el);
      return has3d !== undefined && has3d.length > 0 && has3d !== "none";
    }();

    var isAndroid = navigator.userAgent.toLowerCase().indexOf('android') > -1;
    var isOperaOld = !!window.opera; // list with all jarallax instances
    // need to render all in one scroll/resize event

    var jarallaxList = []; // Jarallax instance

    var Jarallax = function () {
      var instanceID = 0;

      function Jarallax(item, userOptions) {
        var _this = this,
            dataOptions;

        _this.$item = $(item);
        _this.defaults = {
          speed: 0.5,
          imgSrc: null,
          imgWidth: null,
          imgHeight: null,
          enableTransform: true,
          zIndex: -100
        };
        dataOptions = _this.$item.data('jarallax') || {};
        _this.options = $.extend({}, _this.defaults, dataOptions, userOptions); // fix speed option [0.0, 1.0]

        _this.options.speed = Math.min(1, Math.max(0, parseFloat(_this.options.speed)));
        _this.instanceID = instanceID++;
        _this.image = {
          src: _this.options.imgSrc || null,
          $container: null,
          $item: null,
          width: _this.options.imgWidth || null,
          height: _this.options.imgHeight || null,
          // fix for Android devices
          // use <img> instead background image - more smoothly
          useImgTag: isAndroid || isOperaOld
        };

        if (_this.initImg()) {
          _this.init();

          jarallaxList.push(_this);
        }
      }

      return Jarallax;
    }();

    Jarallax.prototype.initImg = function () {
      var _this = this; // get image src


      if (_this.image.src === null) {
        _this.image.src = _this.$item.css('background-image').replace(/^url\(['"]?/g, '').replace(/['"]?\)$/g, '');
      }

      if (!_this.image.src || _this.image.src === 'none') {
        return false;
      }

      return true;
    };

    Jarallax.prototype.init = function () {
      var _this = this,
          containerStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        'pointer-events': 'none',
        'transition': 'transform linear -1ms, -webkit-transform linear -1ms'
      },
          imageStyles = {
        position: 'fixed'
      }; // container for parallax image


      _this.image.$container = $('<div>').css(containerStyles).css({
        visibility: 'hidden',
        'z-index': _this.options.zIndex
      }).attr('id', 'jarallax-container-' + _this.instanceID).prependTo(_this.$item); // use img tag

      if (_this.image.useImgTag && supportTransform) {
        _this.image.$item = $('<img>').attr('src', _this.image.src);
        imageStyles = $.extend({
          'max-width': 'none'
        }, containerStyles, imageStyles);
      } // use div with background image
      else {
          _this.image.$item = $('<div>');
          imageStyles = $.extend({
            'background-position': '50% 50%',
            'background-repeat': 'no-repeat no-repeat',
            'background-image': 'url("' + _this.image.src + '")'
          }, containerStyles, imageStyles);
        } // parallax image


      _this.image.$item.css(imageStyles).prependTo(_this.image.$container); // cover image if width and height is ready


      function initAfterReady() {
        _this.coverImage();

        _this.clipContainer();

        _this.onScroll(true); // save default user styles


        _this.$item.data('jarallax-original-styles', _this.$item.attr('style')); // timeout to fix IE blinking


        setTimeout(function () {
          // remove default user background
          _this.$item.css({
            'background-image': 'none',
            'background-attachment': 'scroll',
            'background-size': 'auto'
          });
        }, 0);
      }

      if (_this.image.width && _this.image.height) {
        // init if width and height already exists
        initAfterReady();
      } else {
        // load image and get width and height
        _this.getImageSize(_this.image.src, function (width, height) {
          _this.image.width = width;
          _this.image.height = height;
          initAfterReady();
        });
      }
    };

    Jarallax.prototype.destroy = function () {
      var _this = this; // remove from instances list


      for (var k = 0, len = jarallaxList.length; k < len; k++) {
        if (jarallaxList[k].instanceID === _this.instanceID) {
          jarallaxList.splice(k, 1);
          break;
        }
      } // remove additional styles for clip


      $('head #jarallax-clip-' + _this.instanceID).remove();

      _this.$item.attr('style', _this.$item.data('jarallax-original-styles'));

      _this.$item.removeData('jarallax-original-styles');

      _this.image.$container.remove();

      delete _this.$item[0].jarallax;
    }; // round to 2 decimals


    Jarallax.prototype.round = function (num) {
      return Math.floor(num * 100) / 100;
    };

    Jarallax.prototype.getImageSize = function (src, callback) {
      if (!src || !callback) {
        return false;
      }

      var tempImg = new Image();

      tempImg.onload = function () {
        callback(tempImg.width, tempImg.height);
      };

      tempImg.src = src;
    }; // it will remove some image overlapping
    // overlapping occur due to an image position fixed inside absolute possition element (webkit based browsers works without any fix)


    Jarallax.prototype.clipContainer = function () {
      var _this = this,
          width = _this.image.$container.outerWidth(true),
          height = _this.image.$container.outerHeight(true);

      var $styles = $('head #jarallax-clip-' + _this.instanceID);

      if (!$styles.length) {
        $('head').append('<style type="text/css" id="jarallax-clip-' + _this.instanceID + '"></style>');
        $styles = $('head #jarallax-clip-' + _this.instanceID);
      }

      var css = ['#jarallax-container-' + _this.instanceID + ' {', '   clip: rect(0px ' + width + 'px ' + height + 'px 0);', '   clip: rect(0px, ' + width + 'px, ' + height + 'px, 0);', '}'].join('\n'); // add clip styles inline (this method need for support IE8 and less browsers)

      if ($styles[0].styleSheet) {
        $styles[0].styleSheet.cssText = css;
      } else {
        $styles.html(css);
      }
    };

    Jarallax.prototype.coverImage = function () {
      var _this = this;

      if (!_this.image.width || !_this.image.height) {
        return;
      }

      var contW = _this.image.$container.outerWidth(true),
          contH = _this.image.$container.outerHeight(true),
          wndW = $(window).outerWidth(true),
          whdH = $(window).outerHeight(true),
          imgW = _this.image.width,
          imgH = _this.image.height,
          resultWidth,
          resultHeight;

      var css = {
        width: Math.max(wndW, contW) * Math.max(_this.options.speed, 1),
        height: Math.max(whdH, contH) * Math.max(_this.options.speed, 1)
      }; // cover by width

      if (css.width / css.height > imgW / imgH) {
        resultWidth = css.width;
        resultHeight = css.width * imgH / imgW;
      } // cover by height
      else {
          resultWidth = css.height * imgW / imgH;
          resultHeight = css.height;
        } // for img tag


      if (_this.image.useImgTag && supportTransform) {
        css.width = _this.round(resultWidth);
        css.height = _this.round(resultHeight);
        css.marginLeft = _this.round(-(resultWidth - contW) / 2);
        css.marginTop = _this.round(-(resultHeight - contH) / 2);
      } // for div with background image
      else {
          css.backgroundSize = _this.round(resultWidth) + 'px ' + _this.round(resultHeight) + 'px';
        } // apply to item


      _this.image.$item.css(css);
    };

    Jarallax.prototype.onScroll = function (force) {
      var _this = this;

      if (!_this.image.width || !_this.image.height) {
        return;
      }

      var scrollTop = $(window).scrollTop(),
          scrollLeft = $(window).scrollLeft(),
          wndWidth = $(window).width(),
          wndHeight = $(window).height(),
          // starting position of each element to have parallax applied to it
      sectionTop = _this.$item.offset().top,
          sectionLeft = _this.$item.offset().left,
          sectionHeight = _this.$item.outerHeight(true),
          css = {
        visibility: 'visible',
        backgroundPosition: '50% 50%'
      }; // Check if totally above or totally below viewport


      var check = force ? false : sectionTop + sectionHeight < scrollTop || sectionTop > scrollTop + wndHeight;

      if (check) {
        return;
      } // calculate parallax


      var positionY = -(scrollTop - sectionTop) * _this.options.speed;
      var positionX = -(scrollLeft - sectionLeft) * _this.options.speed;
      positionY = _this.round(positionY);
      positionX = _this.round(positionX);

      if (supportTransform && _this.options.enableTransform) {
        css.transform = 'translateY(' + positionY + 'px) translateX(' + positionX + 'px)';

        if (support3dtransform) {
          css.transform = 'translate3d(' + positionX + 'px, ' + positionY + 'px, 0)';
        }
      } else {
        css.backgroundPosition = positionX + 'px ' + positionY + 'px';
      }

      _this.image.$item.css(css);
    }; // init events


    (function () {
      $(window).on('scroll.jarallax', function () {
        window.requestAnimationFrame(function () {
          for (var k = 0, len = jarallaxList.length; k < len; k++) {
            jarallaxList[k].onScroll();
          }
        });
      });
      var timeout;
      $(window).on('resize.jarallax orientationchange.jarallax load.jarallax', function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          window.requestAnimationFrame(function () {
            for (var k = 0, len = jarallaxList.length; k < len; k++) {
              var _this = jarallaxList[k];

              _this.coverImage();

              _this.clipContainer();

              _this.onScroll();
            }
          });
        }, 100);
      });
    })();

    var oldJarallax = $.fn.jarallax;

    $.fn.jarallax = function () {
      var items = this,
          options = arguments[0],
          args = Array.prototype.slice.call(arguments, 1),
          len = items.length,
          k = 0,
          ret;

      for (k; k < len; k++) {
        if (_typeof(options) === 'object' || typeof options === 'undefined') {
          if (!items[k].jarallax) {
            items[k].jarallax = new Jarallax(items[k], options);
          }
        } else {
          ret = items[k].jarallax ? items[k].jarallax[options].apply(items[k].jarallax, args) : undefined;
        }

        if (typeof ret !== 'undefined') {
          return ret;
        }
      }

      return this;
    }; // no conflict


    $.fn.jarallax.noConflict = function () {
      $.fn.jarallax = oldJarallax;
      return this;
    }; // data-jarallax initialization


    $(document).on('ready.data-jarallax', function () {
      /*        $('[data-jarallax]').jarallax();*/
    });
  });
}

;
module.exports = jarallax();

/***/ }),

/***/ "./assets/jquery.classycountdown.js":
/*!******************************************!*\
  !*** ./assets/jquery.classycountdown.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

/*!
 * jQuery ClassyCountdown
 * www.class.pm
 *
 * Written by Marius Stanciu - Sergiu <marius@class.pm>
 * Licensed under the MIT license www.class.pm/LICENSE-MIT
 * Version 1.0.0
 *
 */
function classy() {
  (function ($) {
    $.fn.ClassyCountdown = function (options, callback) {
      var element = $(this);
      var DaysLeft, HoursLeft, MinutesLeft, SecondsLeft;
      var secondsLeft;
      var isFired = false;
      var settings = {
        end: undefined,
        now: $.now(),
        labels: true,
        labelsOptions: {
          lang: {
            days: 'Days',
            hours: 'Hours',
            minutes: 'Minutes',
            seconds: 'Seconds'
          },
          style: 'font-size: 0.5em;'
        },
        style: {
          element: '',
          labels: false,
          textResponsive: 0.5,
          days: {
            gauge: {
              thickness: 0.02,
              bgColor: 'rgba(0, 0, 0, 0)',
              fgColor: 'rgba(0, 0, 0, 1)',
              lineCap: 'butt'
            },
            textCSS: ''
          },
          hours: {
            gauge: {
              thickness: 0.02,
              bgColor: 'rgba(0, 0, 0, 0)',
              fgColor: 'rgba(0, 0, 0, 1)',
              lineCap: 'butt'
            },
            textCSS: ''
          },
          minutes: {
            gauge: {
              thickness: 0.02,
              bgColor: 'rgba(0, 0, 0, 0)',
              fgColor: 'rgba(0, 0, 0, 1)',
              lineCap: 'butt'
            },
            textCSS: ''
          },
          seconds: {
            gauge: {
              thickness: 0.02,
              bgColor: 'rgba(0, 0, 0, 0)',
              fgColor: 'rgba(0, 0, 0, 1)',
              lineCap: 'butt'
            },
            textCSS: ''
          }
        },
        onEndCallback: function onEndCallback() {}
      };

      if (options.theme) {
        settings = $.extend(true, settings, getPreset(options.theme));
      }

      settings = $.extend(true, settings, options);
      prepare();
      doTick();
      setInterval(doTick, 1000);
      doResponsive();

      function prepare() {
        element.append('<div class="ClassyCountdown-wrapper">' + '<div class="ClassyCountdown-days">' + '<input type="text" />' + '<span class="ClassyCountdown-value"><div></div><span></span></span>' + '</div>' + '<div class="ClassyCountdown-hours">' + '<input type="text" />' + '<span class="ClassyCountdown-value"><div></div><span></span></span>' + '</div>' + '<div class="ClassyCountdown-minutes">' + '<input type="text" />' + '<span class="ClassyCountdown-value"><div></div><span></span></span>' + '</div>' + '<div class="ClassyCountdown-seconds">' + '<input type="text" />' + '<span class="ClassyCountdown-value"><div></div><span></span></span>' + '</div>' + '</div>');
        element.find('.ClassyCountdown-days input').knob($.extend({
          width: '100%',
          displayInput: false,
          readOnly: true,
          max: 365
        }, settings.style.days.gauge));
        element.find('.ClassyCountdown-hours input').knob($.extend({
          width: '100%',
          displayInput: false,
          readOnly: true,
          max: 24
        }, settings.style.hours.gauge));
        element.find('.ClassyCountdown-minutes input').knob($.extend({
          width: '100%',
          displayInput: false,
          readOnly: true,
          max: 60
        }, settings.style.minutes.gauge));
        element.find('.ClassyCountdown-seconds input').knob($.extend({
          width: '100%',
          displayInput: false,
          readOnly: true,
          max: 60
        }, settings.style.seconds.gauge));
        element.find('.ClassyCountdown-wrapper > div').attr("style", settings.style.element);
        element.find('.ClassyCountdown-days .ClassyCountdown-value').attr('style', settings.style.days.textCSS);
        element.find('.ClassyCountdown-hours .ClassyCountdown-value').attr('style', settings.style.hours.textCSS);
        element.find('.ClassyCountdown-minutes .ClassyCountdown-value').attr('style', settings.style.minutes.textCSS);
        element.find('.ClassyCountdown-seconds .ClassyCountdown-value').attr('style', settings.style.seconds.textCSS);
        element.find('.ClassyCountdown-value').each(function () {
          $(this).css('margin-top', Math.floor(0 - parseInt($(this).height()) / 2) + 'px');
        });

        if (settings.labels) {
          element.find(".ClassyCountdown-days .ClassyCountdown-value > span").html(settings.labelsOptions.lang.days);
          element.find(".ClassyCountdown-hours .ClassyCountdown-value > span").html(settings.labelsOptions.lang.hours);
          element.find(".ClassyCountdown-minutes .ClassyCountdown-value > span").html(settings.labelsOptions.lang.minutes);
          element.find(".ClassyCountdown-seconds .ClassyCountdown-value > span").html(settings.labelsOptions.lang.seconds);
          element.find(".ClassyCountdown-value > span").attr("style", settings.labelsOptions.style);
        }

        secondsLeft = settings.end - settings.now;
        secondsToDHMS();
      }

      function secondsToDHMS() {
        DaysLeft = Math.floor(secondsLeft / 86400);
        HoursLeft = Math.floor(secondsLeft % 86400 / 3600);
        MinutesLeft = Math.floor(secondsLeft % 86400 % 3600 / 60);
        SecondsLeft = Math.floor(secondsLeft % 86400 % 3600 % 60 % 60);
      }

      function doTick() {
        secondsLeft--;
        secondsToDHMS();

        if (secondsLeft <= 0) {
          if (!isFired) {
            isFired = true;
            settings.onEndCallback();
          }

          DaysLeft = 0;
          HoursLeft = 0;
          MinutesLeft = 0;
          SecondsLeft = 0;
        }

        element.find('.ClassyCountdown-days input').val(365 - DaysLeft).trigger('change');
        element.find('.ClassyCountdown-hours input').val(24 - HoursLeft).trigger('change');
        element.find('.ClassyCountdown-minutes input').val(60 - MinutesLeft).trigger('change');
        element.find('.ClassyCountdown-seconds input').val(60 - SecondsLeft).trigger('change');
        element.find('.ClassyCountdown-days .ClassyCountdown-value > div').html(DaysLeft);
        element.find('.ClassyCountdown-hours .ClassyCountdown-value > div').html(HoursLeft);
        element.find('.ClassyCountdown-minutes .ClassyCountdown-value > div').html(MinutesLeft);
        element.find('.ClassyCountdown-seconds .ClassyCountdown-value > div').html(SecondsLeft);
      }

      function doResponsive() {
        element.find('.ClassyCountdown-wrapper > div').each(function () {
          $(this).css('height', $(this).width() + 'px');
        });

        if (settings.style.textResponsive) {
          element.find('.ClassyCountdown-value').css('font-size', Math.floor(element.find('> div').eq(0).width() * settings.style.textResponsive / 10) + 'px');
          element.find('.ClassyCountdown-value').each(function () {
            $(this).css('margin-top', Math.floor(0 - parseInt($(this).height()) / 2) + 'px');
          });
        }

        $(window).trigger('resize');
        $(window).resize($.throttle(50, onResize));
      }

      function onResize() {
        element.find('.ClassyCountdown-wrapper > div').each(function () {
          $(this).css('height', $(this).width() + 'px');
        });

        if (settings.style.textResponsive) {
          element.find('.ClassyCountdown-value').css('font-size', Math.floor(element.find('> div').eq(0).width() * settings.style.textResponsive / 10) + 'px');
        }

        element.find('.ClassyCountdown-value').each(function () {
          $(this).css("margin-top", Math.floor(0 - parseInt($(this).height()) / 2) + 'px');
        });
        element.find('.ClassyCountdown-days input').trigger('change');
        element.find('.ClassyCountdown-hours input').trigger('change');
        element.find('.ClassyCountdown-minutes input').trigger('change');
        element.find('.ClassyCountdown-seconds input').trigger('change');
      }

      function getPreset(theme) {
        switch (theme) {
          case 'flat-colors':
            return {
              labels: true,
              style: {
                element: '',
                textResponsive: 0.5,
                days: {
                  gauge: {
                    thickness: 0.01,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#1abc9c"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                hours: {
                  gauge: {
                    thickness: 0.01,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#2980b9"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                minutes: {
                  gauge: {
                    thickness: 0.01,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#8e44ad"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                seconds: {
                  gauge: {
                    thickness: 0.01,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#f39c12"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                }
              }
            };

          case 'flat-colors-wide':
            return {
              labels: true,
              style: {
                element: '',
                textResponsive: 0.5,
                days: {
                  gauge: {
                    thickness: 0.03,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#1abc9c"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                hours: {
                  gauge: {
                    thickness: 0.03,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#2980b9"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                minutes: {
                  gauge: {
                    thickness: 0.03,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#8e44ad"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                seconds: {
                  gauge: {
                    thickness: 0.03,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#f39c12"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                }
              }
            };

          case 'flat-colors-very-wide':
            return {
              labels: true,
              style: {
                element: '',
                textResponsive: 0.5,
                days: {
                  gauge: {
                    thickness: 0.12,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#1abc9c"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                hours: {
                  gauge: {
                    thickness: 0.12,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#2980b9"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                minutes: {
                  gauge: {
                    thickness: 0.12,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#8e44ad"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                seconds: {
                  gauge: {
                    thickness: 0.12,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#f39c12"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                }
              }
            };

          case 'flat-colors-black':
            return {
              labels: true,
              style: {
                element: '',
                textResponsive: 0.5,
                days: {
                  gauge: {
                    thickness: 0.25,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#1abc9c",
                    lineCap: 'round'
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                hours: {
                  gauge: {
                    thickness: 0.25,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#2980b9",
                    lineCap: 'round'
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                minutes: {
                  gauge: {
                    thickness: 0.25,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#8e44ad",
                    lineCap: 'round'
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                seconds: {
                  gauge: {
                    thickness: 0.25,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#f39c12",
                    lineCap: 'round'
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                }
              }
            };

          case 'black':
            return {
              labels: true,
              style: {
                element: '',
                textResponsive: 0.5,
                days: {
                  gauge: {
                    thickness: 0.01,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#222"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                hours: {
                  gauge: {
                    thickness: 0.01,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#222"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                minutes: {
                  gauge: {
                    thickness: 0.01,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#222"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                seconds: {
                  gauge: {
                    thickness: 0.01,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#222"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                }
              }
            };

          case 'black-wide':
            return {
              labels: true,
              style: {
                element: '',
                textResponsive: 0.5,
                days: {
                  gauge: {
                    thickness: 0.03,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#222"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                hours: {
                  gauge: {
                    thickness: 0.03,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#222"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                minutes: {
                  gauge: {
                    thickness: 0.03,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#222"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                seconds: {
                  gauge: {
                    thickness: 0.03,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#222"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                }
              }
            };

          case 'black-very-wide':
            return {
              labels: true,
              style: {
                element: '',
                textResponsive: 0.5,
                days: {
                  gauge: {
                    thickness: 0.17,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#222"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                hours: {
                  gauge: {
                    thickness: 0.17,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#222"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                minutes: {
                  gauge: {
                    thickness: 0.17,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#222"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                seconds: {
                  gauge: {
                    thickness: 0.17,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#222"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                }
              }
            };

          case 'black-black':
            return {
              labels: true,
              style: {
                element: '',
                textResponsive: 0.5,
                days: {
                  gauge: {
                    thickness: 0.25,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#222",
                    lineCap: 'round'
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                hours: {
                  gauge: {
                    thickness: 0.25,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#222",
                    lineCap: 'round'
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                minutes: {
                  gauge: {
                    thickness: 0.25,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#222",
                    lineCap: 'round'
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                },
                seconds: {
                  gauge: {
                    thickness: 0.25,
                    bgColor: "rgba(0,0,0,0.05)",
                    fgColor: "#222",
                    lineCap: 'round'
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#34495e;'
                }
              }
            };

          case 'white':
            return {
              labels: true,
              style: {
                element: '',
                textResponsive: 0.5,
                days: {
                  gauge: {
                    thickness: 0.03,
                    bgColor: "rgba(255,255,255,0.05)",
                    fgColor: "#fff"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                },
                hours: {
                  gauge: {
                    thickness: 0.03,
                    bgColor: "rgba(255,255,255,0.05)",
                    fgColor: "#fff"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                },
                minutes: {
                  gauge: {
                    thickness: 0.03,
                    bgColor: "rgba(255,255,255,0.05)",
                    fgColor: "#fff"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                },
                seconds: {
                  gauge: {
                    thickness: 0.03,
                    bgColor: "rgba(255,255,255,0.05)",
                    fgColor: "#fff"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                }
              }
            };

          case 'white-wide':
            return {
              labels: true,
              style: {
                element: '',
                textResponsive: 0.5,
                days: {
                  gauge: {
                    thickness: 0.06,
                    bgColor: "rgba(255,255,255,0.05)",
                    fgColor: "#fff"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                },
                hours: {
                  gauge: {
                    thickness: 0.06,
                    bgColor: "rgba(255,255,255,0.05)",
                    fgColor: "#fff"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                },
                minutes: {
                  gauge: {
                    thickness: 0.06,
                    bgColor: "rgba(255,255,255,0.05)",
                    fgColor: "#fff"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                },
                seconds: {
                  gauge: {
                    thickness: 0.06,
                    bgColor: "rgba(255,255,255,0.05)",
                    fgColor: "#fff"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                }
              }
            };

          case 'white-very-wide':
            return {
              labels: true,
              style: {
                element: '',
                textResponsive: 0.5,
                days: {
                  gauge: {
                    thickness: 0.16,
                    bgColor: "rgba(255,255,255,0.05)",
                    fgColor: "#fff"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                },
                hours: {
                  gauge: {
                    thickness: 0.16,
                    bgColor: "rgba(255,255,255,0.05)",
                    fgColor: "#fff"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                },
                minutes: {
                  gauge: {
                    thickness: 0.16,
                    bgColor: "rgba(255,255,255,0.05)",
                    fgColor: "#fff"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                },
                seconds: {
                  gauge: {
                    thickness: 0.16,
                    bgColor: "rgba(255,255,255,0.05)",
                    fgColor: "#fff"
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                }
              }
            };

          case 'white-black':
            return {
              labels: true,
              style: {
                element: '',
                textResponsive: 0.5,
                days: {
                  gauge: {
                    thickness: 0.25,
                    bgColor: "rgba(255,255,255,0.05)",
                    fgColor: "#fff",
                    lineCap: 'round'
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                },
                hours: {
                  gauge: {
                    thickness: 0.25,
                    bgColor: "rgba(255,255,255,0.05)",
                    fgColor: "#fff",
                    lineCap: 'round'
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                },
                minutes: {
                  gauge: {
                    thickness: 0.25,
                    bgColor: "rgba(255,255,255,0.05)",
                    fgColor: "#fff",
                    lineCap: 'round'
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                },
                seconds: {
                  gauge: {
                    thickness: 0.25,
                    bgColor: "rgba(255,255,255,0.05)",
                    fgColor: "#fff",
                    lineCap: 'round'
                  },
                  textCSS: 'font-family:\'Open Sans\';font-weight:300;color:#fff;'
                }
              }
            };
        }
      }
    };
  })(jQuery);
}

module.exports = classy();

/***/ }),

/***/ "./assets/jquery.knob.js":
/*!*******************************!*\
  !*** ./assets/jquery.knob.js ***!
  \*******************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.11
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
function knob() {
  (function (e) {
    if (( false ? 0 : _typeof(exports)) === "object") {
      module.exports = e(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"));
    } else if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
  })(function (e) {
    "use strict";

    var t = {},
        n = Math.max,
        r = Math.min;
    t.c = {};
    t.c.d = e(document);

    t.c.t = function (e) {
      return e.originalEvent.touches.length - 1;
    };

    t.o = function () {
      var n = this;
      this.o = null;
      this.$ = null;
      this.i = null;
      this.g = null;
      this.v = null;
      this.cv = null;
      this.x = 0;
      this.y = 0;
      this.w = 0;
      this.h = 0;
      this.$c = null;
      this.c = null;
      this.t = 0;
      this.isInit = false;
      this.fgColor = null;
      this.pColor = null;
      this.dH = null;
      this.cH = null;
      this.eH = null;
      this.rH = null;
      this.scale = 1;
      this.relative = false;
      this.relativeWidth = false;
      this.relativeHeight = false;
      this.$div = null;

      this.run = function () {
        var t = function t(e, _t) {
          var r;

          for (r in _t) {
            n.o[r] = _t[r];
          }

          n._carve().init();

          n._configure()._draw();
        };

        if (this.$.data("kontroled")) return;
        this.$.data("kontroled", true);
        this.extend();
        this.o = e.extend({
          min: this.$.data("min") !== undefined ? this.$.data("min") : 0,
          max: this.$.data("max") !== undefined ? this.$.data("max") : 100,
          stopper: true,
          readOnly: this.$.data("readonly") || this.$.attr("readonly") === "readonly",
          cursor: this.$.data("cursor") === true && 30 || this.$.data("cursor") || 0,
          thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), .01) || .35,
          lineCap: this.$.data("linecap") || "butt",
          width: this.$.data("width") || 200,
          height: this.$.data("height") || 200,
          displayInput: this.$.data("displayinput") == null || this.$.data("displayinput"),
          displayPrevious: this.$.data("displayprevious"),
          fgColor: this.$.data("fgcolor") || "#87CEEB",
          inputColor: this.$.data("inputcolor"),
          font: this.$.data("font") || "Arial",
          fontWeight: this.$.data("font-weight") || "bold",
          inline: false,
          step: this.$.data("step") || 1,
          rotation: this.$.data("rotation"),
          draw: null,
          change: null,
          cancel: null,
          release: null,
          format: function format(e) {
            return e;
          },
          parse: function parse(e) {
            return parseFloat(e);
          }
        }, this.o);
        this.o.flip = this.o.rotation === "anticlockwise" || this.o.rotation === "acw";

        if (!this.o.inputColor) {
          this.o.inputColor = this.o.fgColor;
        }

        if (this.$.is("fieldset")) {
          this.v = {};
          this.i = this.$.find("input");
          this.i.each(function (t) {
            var r = e(this);
            n.i[t] = r;
            n.v[t] = n.o.parse(r.val());
            r.bind("change blur", function () {
              var e = {};
              e[t] = r.val();
              n.val(n._validate(e));
            });
          });
          this.$.find("legend").remove();
        } else {
          this.i = this.$;
          this.v = this.o.parse(this.$.val());
          this.v === "" && (this.v = this.o.min);
          this.$.bind("change blur", function () {
            n.val(n._validate(n.o.parse(n.$.val())));
          });
        }

        !this.o.displayInput && this.$.hide();
        this.$c = e(document.createElement("canvas")).attr({
          width: this.o.width,
          height: this.o.height
        });
        this.$div = e('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + "px;" + '"></div>');
        this.$.wrap(this.$div).before(this.$c);
        this.$div = this.$.parent();

        if (typeof G_vmlCanvasManager !== "undefined") {
          G_vmlCanvasManager.initElement(this.$c[0]);
        }

        this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null;

        if (!this.c) {
          throw {
            name: "CanvasNotSupportedException",
            message: "Canvas not supported. Please use excanvas on IE8.0.",
            toString: function toString() {
              return this.name + ": " + this.message;
            }
          };
        }

        this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1);
        this.relativeWidth = this.o.width % 1 !== 0 && this.o.width.indexOf("%");
        this.relativeHeight = this.o.height % 1 !== 0 && this.o.height.indexOf("%");
        this.relative = this.relativeWidth || this.relativeHeight;

        this._carve();

        if (this.v instanceof Object) {
          this.cv = {};
          this.copy(this.v, this.cv);
        } else {
          this.cv = this.v;
        }

        this.$.bind("configure", t).parent().bind("configure", t);

        this._listen()._configure()._xy().init();

        this.isInit = true;
        this.$.val(this.o.format(this.v));

        this._draw();

        return this;
      };

      this._carve = function () {
        if (this.relative) {
          var e = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width(),
              t = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
          this.w = this.h = Math.min(e, t);
        } else {
          this.w = this.o.width;
          this.h = this.o.height;
        }

        this.$div.css({
          width: this.w + "px",
          height: this.h + "px"
        });
        this.$c.attr({
          width: this.w,
          height: this.h
        });

        if (this.scale !== 1) {
          this.$c[0].width = this.$c[0].width * this.scale;
          this.$c[0].height = this.$c[0].height * this.scale;
          this.$c.width(this.w);
          this.$c.height(this.h);
        }

        return this;
      };

      this._draw = function () {
        var e = true;
        n.g = n.c;
        n.clear();
        n.dH && (e = n.dH());
        e !== false && n.draw();
      };

      this._touch = function (e) {
        var r = function r(e) {
          var t = n.xy2val(e.originalEvent.touches[n.t].pageX, e.originalEvent.touches[n.t].pageY);
          if (t == n.cv) return;
          if (n.cH && n.cH(t) === false) return;
          n.change(n._validate(t));

          n._draw();
        };

        this.t = t.c.t(e);
        r(e);
        t.c.d.bind("touchmove.k", r).bind("touchend.k", function () {
          t.c.d.unbind("touchmove.k touchend.k");
          n.val(n.cv);
        });
        return this;
      };

      this._mouse = function (e) {
        var r = function r(e) {
          var t = n.xy2val(e.pageX, e.pageY);
          if (t == n.cv) return;
          if (n.cH && n.cH(t) === false) return;
          n.change(n._validate(t));

          n._draw();
        };

        r(e);
        t.c.d.bind("mousemove.k", r).bind("keyup.k", function (e) {
          if (e.keyCode === 27) {
            t.c.d.unbind("mouseup.k mousemove.k keyup.k");
            if (n.eH && n.eH() === false) return;
            n.cancel();
          }
        }).bind("mouseup.k", function (e) {
          t.c.d.unbind("mousemove.k mouseup.k keyup.k");
          n.val(n.cv);
        });
        return this;
      };

      this._xy = function () {
        var e = this.$c.offset();
        this.x = e.left;
        this.y = e.top;
        return this;
      };

      this._listen = function () {
        if (!this.o.readOnly) {
          this.$c.bind("mousedown", function (e) {
            e.preventDefault();

            n._xy()._mouse(e);
          }).bind("touchstart", function (e) {
            e.preventDefault();

            n._xy()._touch(e);
          });
          this.listen();
        } else {
          this.$.attr("readonly", "readonly");
        }

        if (this.relative) {
          e(window).resize(e.debounce(50, function () {
            n._carve().init();

            n._draw();
          }));
        }

        return this;
      };

      this._configure = function () {
        if (this.o.draw) this.dH = this.o.draw;
        if (this.o.change) this.cH = this.o.change;
        if (this.o.cancel) this.eH = this.o.cancel;
        if (this.o.release) this.rH = this.o.release;

        if (this.o.displayPrevious) {
          this.pColor = this.h2rgba(this.o.fgColor, "0.4");
          this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
        } else {
          this.fgColor = this.o.fgColor;
        }

        return this;
      };

      this._clear = function () {
        this.$c[0].width = this.$c[0].width;
      };

      this._validate = function (e) {
        var t = ~~((e < 0 ? -.5 : .5) + e / this.o.step) * this.o.step;
        return Math.round(t * 100) / 100;
      };

      this.listen = function () {};

      this.extend = function () {};

      this.init = function () {};

      this.change = function (e) {};

      this.val = function (e) {};

      this.xy2val = function (e, t) {};

      this.draw = function () {};

      this.clear = function () {
        this._clear();
      };

      this.h2rgba = function (e, t) {
        var n;
        e = e.substring(1, 7);
        n = [parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16)];
        return "rgba(" + n[0] + "," + n[1] + "," + n[2] + "," + t + ")";
      };

      this.copy = function (e, t) {
        for (var n in e) {
          t[n] = e[n];
        }
      };
    };

    t.Dial = function () {
      t.o.call(this);
      this.startAngle = null;
      this.xy = null;
      this.radius = null;
      this.lineWidth = null;
      this.cursorExt = null;
      this.w2 = null;
      this.PI2 = 2 * Math.PI;

      this.extend = function () {
        this.o = e.extend({
          bgColor: this.$.data("bgcolor") || "#EEEEEE",
          angleOffset: this.$.data("angleoffset") || 0,
          angleArc: this.$.data("anglearc") || 360,
          inline: true
        }, this.o);
      };

      this.val = function (e, t) {
        if (null != e) {
          e = this.o.parse(e);

          if (t !== false && e != this.v && this.rH && this.rH(e) === false) {
            return;
          }

          this.cv = this.o.stopper ? n(r(e, this.o.max), this.o.min) : e;
          this.v = this.cv;
          this.$.val(this.o.format(this.v));

          this._draw();
        } else {
          return this.v;
        }
      };

      this.xy2val = function (e, t) {
        var i, s;
        i = Math.atan2(e - (this.x + this.w2), -(t - this.y - this.w2)) - this.angleOffset;

        if (this.o.flip) {
          i = this.angleArc - i - this.PI2;
        }

        if (this.angleArc != this.PI2 && i < 0 && i > -.5) {
          i = 0;
        } else if (i < 0) {
          i += this.PI2;
        }

        s = i * (this.o.max - this.o.min) / this.angleArc + this.o.min;
        this.o.stopper && (s = n(r(s, this.o.max), this.o.min));
        return s;
      };

      this.listen = function () {
        var t = this,
            i,
            s,
            o = function o(e) {
          e.preventDefault();
          var o = e.originalEvent,
              u = o.detail || o.wheelDeltaX,
              a = o.detail || o.wheelDeltaY,
              f = t._validate(t.o.parse(t.$.val())) + (u > 0 || a > 0 ? t.o.step : u < 0 || a < 0 ? -t.o.step : 0);
          f = n(r(f, t.o.max), t.o.min);
          t.val(f, false);

          if (t.rH) {
            clearTimeout(i);
            i = setTimeout(function () {
              t.rH(f);
              i = null;
            }, 100);

            if (!s) {
              s = setTimeout(function () {
                if (i) t.rH(f);
                s = null;
              }, 200);
            }
          }
        },
            u,
            a,
            f = 1,
            l = {
          37: -t.o.step,
          38: t.o.step,
          39: t.o.step,
          40: -t.o.step
        };

        this.$.bind("keydown", function (i) {
          var s = i.keyCode;

          if (s >= 96 && s <= 105) {
            s = i.keyCode = s - 48;
          }

          u = parseInt(String.fromCharCode(s));

          if (isNaN(u)) {
            s !== 13 && s !== 8 && s !== 9 && s !== 189 && (s !== 190 || t.$.val().match(/\./)) && i.preventDefault();

            if (e.inArray(s, [37, 38, 39, 40]) > -1) {
              i.preventDefault();
              var o = t.o.parse(t.$.val()) + l[s] * f;
              t.o.stopper && (o = n(r(o, t.o.max), t.o.min));
              t.change(t._validate(o));

              t._draw();

              a = window.setTimeout(function () {
                f *= 2;
              }, 30);
            }
          }
        }).bind("keyup", function (e) {
          if (isNaN(u)) {
            if (a) {
              window.clearTimeout(a);
              a = null;
              f = 1;
              t.val(t.$.val());
            }
          } else {
            t.$.val() > t.o.max && t.$.val(t.o.max) || t.$.val() < t.o.min && t.$.val(t.o.min);
          }
        });
        this.$c.bind("mousewheel DOMMouseScroll", o);
        this.$.bind("mousewheel DOMMouseScroll", o);
      };

      this.init = function () {
        if (this.v < this.o.min || this.v > this.o.max) {
          this.v = this.o.min;
        }

        this.$.val(this.v);
        this.w2 = this.w / 2;
        this.cursorExt = this.o.cursor / 100;
        this.xy = this.w2 * this.scale;
        this.lineWidth = this.xy * this.o.thickness;
        this.lineCap = this.o.lineCap;
        this.radius = this.xy - this.lineWidth / 2;
        this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);
        this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);
        this.angleOffset = this.o.angleOffset * Math.PI / 180;
        this.angleArc = this.o.angleArc * Math.PI / 180;
        this.startAngle = 1.5 * Math.PI + this.angleOffset;
        this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
        var e = n(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
        this.o.displayInput && this.i.css({
          width: (this.w / 2 + 4 >> 0) + "px",
          height: (this.w / 3 >> 0) + "px",
          position: "absolute",
          "vertical-align": "middle",
          "margin-top": (this.w / 3 >> 0) + "px",
          "margin-left": "-" + (this.w * 3 / 4 + 2 >> 0) + "px",
          border: 0,
          background: "none",
          font: this.o.fontWeight + " " + (this.w / e >> 0) + "px " + this.o.font,
          "text-align": "center",
          color: this.o.inputColor || this.o.fgColor,
          padding: "0px",
          "-webkit-appearance": "none"
        }) || this.i.css({
          width: "0px",
          visibility: "hidden"
        });
      };

      this.change = function (e) {
        this.cv = e;
        this.$.val(this.o.format(e));
      };

      this.angle = function (e) {
        return (e - this.o.min) * this.angleArc / (this.o.max - this.o.min);
      };

      this.arc = function (e) {
        var t, n;
        e = this.angle(e);

        if (this.o.flip) {
          t = this.endAngle + 1e-5;
          n = t - e - 1e-5;
        } else {
          t = this.startAngle - 1e-5;
          n = t + e + 1e-5;
        }

        this.o.cursor && (t = n - this.cursorExt) && (n = n + this.cursorExt);
        return {
          s: t,
          e: n,
          d: this.o.flip && !this.o.cursor
        };
      };

      this.draw = function () {
        var e = this.g,
            t = this.arc(this.cv),
            n,
            r = 1;
        e.lineWidth = this.lineWidth;
        e.lineCap = this.lineCap;

        if (this.o.bgColor !== "none") {
          e.beginPath();
          e.strokeStyle = this.o.bgColor;
          e.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, true);
          e.stroke();
        }

        if (this.o.displayPrevious) {
          n = this.arc(this.v);
          e.beginPath();
          e.strokeStyle = this.pColor;
          e.arc(this.xy, this.xy, this.radius, n.s, n.e, n.d);
          e.stroke();
          r = this.cv == this.v;
        }

        e.beginPath();
        e.strokeStyle = r ? this.o.fgColor : this.fgColor;
        e.arc(this.xy, this.xy, this.radius, t.s, t.e, t.d);
        e.stroke();
      };

      this.cancel = function () {
        this.val(this.v);
      };
    };

    e.fn.dial = e.fn.knob = function (n) {
      return this.each(function () {
        var r = new t.Dial();
        r.o = n;
        r.$ = e(this);
        r.run();
      }).parent();
    };
  });
}

;
module.exports = knob();

/***/ }),

/***/ "./assets/jquery.throttle.js":
/*!***********************************!*\
  !*** ./assets/jquery.throttle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
function throttle() {
  (function (b, c) {
    var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}),
        a;

    $.throttle = a = function a(e, f, j, i) {
      var h,
          d = 0;

      if (typeof f !== "boolean") {
        i = j;
        j = f;
        f = c;
      }

      function g() {
        var o = this,
            m = +new Date() - d,
            n = arguments;

        function l() {
          d = +new Date();
          j.apply(o, n);
        }

        function k() {
          h = c;
        }

        if (i && !h) {
          l();
        }

        h && clearTimeout(h);

        if (i === c && m > e) {
          l();
        } else {
          if (f !== true) {
            h = setTimeout(i ? k : l, i === c ? e - m : e);
          }
        }
      }

      if ($.guid) {
        g.guid = j.guid = j.guid || $.guid++;
      }

      return g;
    };

    $.debounce = function (d, e, f) {
      return f === c ? a(d, e, false) : a(d, f, e !== false);
    };
  })(this);
}

;
module.exports = throttle();

/***/ }),

/***/ "./assets/jqueryui.js":
/*!****************************!*\
  !*** ./assets/jqueryui.js ***!
  \****************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

/*! jQuery UI - v1.11.4 - 2015-09-06
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, datepicker.js, slider.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
function jqueryui() {
  (function (e) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
  })(function (e) {
    function t(t, s) {
      var a,
          n,
          r,
          o = t.nodeName.toLowerCase();
      return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap='#" + n + "']")[0], !!r && i(r)) : !1) : (/^(input|select|textarea|button|object)$/.test(o) ? !t.disabled : "a" === o ? t.href || s : s) && i(t);
    }

    function i(t) {
      return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
        return "hidden" === e.css(this, "visibility");
      }).length;
    }

    function s(e) {
      for (var t, i; e.length && e[0] !== document;) {
        if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
        e = e.parent();
      }

      return 0;
    }

    function a() {
      this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
      }, this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1
      }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = n(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }

    function n(t) {
      var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return t.delegate(i, "mouseout", function () {
        e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover");
      }).delegate(i, "mouseover", r);
    }

    function r() {
      e.datepicker._isDisabledDatepicker(d.inline ? d.dpDiv.parent()[0] : d.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"));
    }

    function o(t, i) {
      e.extend(t, i);

      for (var s in i) {
        null == i[s] && (t[s] = i[s]);
      }

      return t;
    }

    e.ui = e.ui || {}, e.extend(e.ui, {
      version: "1.11.4",
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
      }
    }), e.fn.extend({
      scrollParent: function scrollParent(t) {
        var i = this.css("position"),
            s = "absolute" === i,
            a = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            n = this.parents().filter(function () {
          var t = e(this);
          return s && "static" === t.css("position") ? !1 : a.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
        }).eq(0);
        return "fixed" !== i && n.length ? n : e(this[0].ownerDocument || document);
      },
      uniqueId: function () {
        var e = 0;
        return function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++e);
          });
        };
      }(),
      removeUniqueId: function removeUniqueId() {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
        });
      }
    }), e.extend(e.expr[":"], {
      data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
        return function (i) {
          return !!e.data(i, t);
        };
      }) : function (t, i, s) {
        return !!e.data(t, s[3]);
      },
      focusable: function focusable(i) {
        return t(i, !isNaN(e.attr(i, "tabindex")));
      },
      tabbable: function tabbable(i) {
        var s = e.attr(i, "tabindex"),
            a = isNaN(s);
        return (a || s >= 0) && t(i, !a);
      }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
      function s(t, i, s, n) {
        return e.each(a, function () {
          i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), n && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
        }), i;
      }

      var a = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
          n = i.toLowerCase(),
          r = {
        innerWidth: e.fn.innerWidth,
        innerHeight: e.fn.innerHeight,
        outerWidth: e.fn.outerWidth,
        outerHeight: e.fn.outerHeight
      };
      e.fn["inner" + i] = function (t) {
        return void 0 === t ? r["inner" + i].call(this) : this.each(function () {
          e(this).css(n, s(this, t) + "px");
        });
      }, e.fn["outer" + i] = function (t, a) {
        return "number" != typeof t ? r["outer" + i].call(this, t) : this.each(function () {
          e(this).css(n, s(this, t, !0, a) + "px");
        });
      };
    }), e.fn.addBack || (e.fn.addBack = function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
      return function (i) {
        return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
      };
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
      focus: function (t) {
        return function (i, s) {
          return "number" == typeof i ? this.each(function () {
            var t = this;
            setTimeout(function () {
              e(t).focus(), s && s.call(t);
            }, i);
          }) : t.apply(this, arguments);
        };
      }(e.fn.focus),
      disableSelection: function () {
        var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
        return function () {
          return this.bind(e + ".ui-disableSelection", function (e) {
            e.preventDefault();
          });
        };
      }(),
      enableSelection: function enableSelection() {
        return this.unbind(".ui-disableSelection");
      },
      zIndex: function zIndex(t) {
        if (void 0 !== t) return this.css("zIndex", t);
        if (this.length) for (var i, s, a = e(this[0]); a.length && a[0] !== document;) {
          if (i = a.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
          a = a.parent();
        }
        return 0;
      }
    }), e.ui.plugin = {
      add: function add(t, i, s) {
        var a,
            n = e.ui[t].prototype;

        for (a in s) {
          n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]]);
        }
      },
      call: function call(e, t, i, s) {
        var a,
            n = e.plugins[t];
        if (n && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (a = 0; n.length > a; a++) {
          e.options[n[a][0]] && n[a][1].apply(e.element, i);
        }
      }
    };
    var h = 0,
        l = Array.prototype.slice;
    e.cleanData = function (t) {
      return function (i) {
        var s, a, n;

        for (n = 0; null != (a = i[n]); n++) {
          try {
            s = e._data(a, "events"), s && s.remove && e(a).triggerHandler("remove");
          } catch (r) {}
        }

        t(i);
      };
    }(e.cleanData), e.widget = function (t, i, s) {
      var a,
          n,
          r,
          o,
          h = {},
          l = t.split(".")[0];
      return t = t.split(".")[1], a = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][a.toLowerCase()] = function (t) {
        return !!e.data(t, a);
      }, e[l] = e[l] || {}, n = e[l][t], r = e[l][t] = function (e, t) {
        return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new r(e, t);
      }, e.extend(r, n, {
        version: s.version,
        _proto: e.extend({}, s),
        _childConstructors: []
      }), o = new i(), o.options = e.widget.extend({}, o.options), e.each(s, function (t, s) {
        return e.isFunction(s) ? (h[t] = function () {
          var e = function e() {
            return i.prototype[t].apply(this, arguments);
          },
              a = function a(e) {
            return i.prototype[t].apply(this, e);
          };

          return function () {
            var t,
                i = this._super,
                n = this._superApply;
            return this._super = e, this._superApply = a, t = s.apply(this, arguments), this._super = i, this._superApply = n, t;
          };
        }(), void 0) : (h[t] = s, void 0);
      }), r.prototype = e.widget.extend(o, {
        widgetEventPrefix: n ? o.widgetEventPrefix || t : t
      }, h, {
        constructor: r,
        namespace: l,
        widgetName: t,
        widgetFullName: a
      }), n ? (e.each(n._childConstructors, function (t, i) {
        var s = i.prototype;
        e.widget(s.namespace + "." + s.widgetName, r, i._proto);
      }), delete n._childConstructors) : i._childConstructors.push(r), e.widget.bridge(t, r), r;
    }, e.widget.extend = function (t) {
      for (var i, s, a = l.call(arguments, 1), n = 0, r = a.length; r > n; n++) {
        for (i in a[n]) {
          s = a[n][i], a[n].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
        }
      }

      return t;
    }, e.widget.bridge = function (t, i) {
      var s = i.prototype.widgetFullName || t;

      e.fn[t] = function (a) {
        var n = "string" == typeof a,
            r = l.call(arguments, 1),
            o = this;
        return n ? this.each(function () {
          var i,
              n = e.data(this, s);
          return "instance" === a ? (o = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (o = i && i.jquery ? o.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + a + "'");
        }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function () {
          var t = e.data(this, s);
          t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this));
        })), o;
      };
    }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: {
        disabled: !1,
        create: null
      },
      _createWidget: function _createWidget(t, i) {
        i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
          remove: function remove(e) {
            e.target === i && this.destroy();
          }
        }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
      },
      _getCreateOptions: e.noop,
      _getCreateEventData: e.noop,
      _create: e.noop,
      _init: e.noop,
      destroy: function destroy() {
        this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
      },
      _destroy: e.noop,
      widget: function widget() {
        return this.element;
      },
      option: function option(t, i) {
        var s,
            a,
            n,
            r = t;
        if (0 === arguments.length) return e.widget.extend({}, this.options);
        if ("string" == typeof t) if (r = {}, s = t.split("."), t = s.shift(), s.length) {
          for (a = r[t] = e.widget.extend({}, this.options[t]), n = 0; s.length - 1 > n; n++) {
            a[s[n]] = a[s[n]] || {}, a = a[s[n]];
          }

          if (t = s.pop(), 1 === arguments.length) return void 0 === a[t] ? null : a[t];
          a[t] = i;
        } else {
          if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
          r[t] = i;
        }
        return this._setOptions(r), this;
      },
      _setOptions: function _setOptions(e) {
        var t;

        for (t in e) {
          this._setOption(t, e[t]);
        }

        return this;
      },
      _setOption: function _setOption(e, t) {
        return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this;
      },
      enable: function enable() {
        return this._setOptions({
          disabled: !1
        });
      },
      disable: function disable() {
        return this._setOptions({
          disabled: !0
        });
      },
      _on: function _on(t, i, s) {
        var a,
            n = this;
        "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = a = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, a = this.widget()), e.each(s, function (s, r) {
          function o() {
            return t || n.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? n[r] : r).apply(n, arguments) : void 0;
          }

          "string" != typeof r && (o.guid = r.guid = r.guid || o.guid || e.guid++);
          var h = s.match(/^([\w:-]*)\s*(.*)$/),
              l = h[1] + n.eventNamespace,
              u = h[2];
          u ? a.delegate(u, l, o) : i.bind(l, o);
        });
      },
      _off: function _off(t, i) {
        i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get());
      },
      _delay: function _delay(e, t) {
        function i() {
          return ("string" == typeof e ? s[e] : e).apply(s, arguments);
        }

        var s = this;
        return setTimeout(i, t || 0);
      },
      _hoverable: function _hoverable(t) {
        this.hoverable = this.hoverable.add(t), this._on(t, {
          mouseenter: function mouseenter(t) {
            e(t.currentTarget).addClass("ui-state-hover");
          },
          mouseleave: function mouseleave(t) {
            e(t.currentTarget).removeClass("ui-state-hover");
          }
        });
      },
      _focusable: function _focusable(t) {
        this.focusable = this.focusable.add(t), this._on(t, {
          focusin: function focusin(t) {
            e(t.currentTarget).addClass("ui-state-focus");
          },
          focusout: function focusout(t) {
            e(t.currentTarget).removeClass("ui-state-focus");
          }
        });
      },
      _trigger: function _trigger(t, i, s) {
        var a,
            n,
            r = this.options[t];
        if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], n = i.originalEvent) for (a in n) {
          a in i || (i[a] = n[a]);
        }
        return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
      }
    }, e.each({
      show: "fadeIn",
      hide: "fadeOut"
    }, function (t, i) {
      e.Widget.prototype["_" + t] = function (s, a, n) {
        "string" == typeof a && (a = {
          effect: a
        });
        var r,
            o = a ? a === !0 || "number" == typeof a ? i : a.effect || i : t;
        a = a || {}, "number" == typeof a && (a = {
          duration: a
        }), r = !e.isEmptyObject(a), a.complete = n, a.delay && s.delay(a.delay), r && e.effects && e.effects.effect[o] ? s[t](a) : o !== t && s[o] ? s[o](a.duration, a.easing, n) : s.queue(function (i) {
          e(this)[t](), n && n.call(s[0]), i();
        });
      };
    }), e.widget;
    var u = !1;
    e(document).mouseup(function () {
      u = !1;
    }), e.widget("ui.mouse", {
      version: "1.11.4",
      options: {
        cancel: "input,textarea,button,select,option",
        distance: 1,
        delay: 0
      },
      _mouseInit: function _mouseInit() {
        var t = this;
        this.element.bind("mousedown." + this.widgetName, function (e) {
          return t._mouseDown(e);
        }).bind("click." + this.widgetName, function (i) {
          return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0;
        }), this.started = !1;
      },
      _mouseDestroy: function _mouseDestroy() {
        this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function _mouseDown(t) {
        if (!u) {
          this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
          var i = this,
              s = 1 === t.which,
              a = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
          return s && !a && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
            i.mouseDelayMet = !0;
          }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
            return i._mouseMove(e);
          }, this._mouseUpDelegate = function (e) {
            return i._mouseUp(e);
          }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), u = !0, !0)) : !0;
        }
      },
      _mouseMove: function _mouseMove(t) {
        if (this._mouseMoved) {
          if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
          if (!t.which) return this._mouseUp(t);
        }

        return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
      },
      _mouseUp: function _mouseUp(t) {
        return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), u = !1, !1;
      },
      _mouseDistanceMet: function _mouseDistanceMet(e) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
      },
      _mouseDelayMet: function _mouseDelayMet() {
        return this.mouseDelayMet;
      },
      _mouseStart: function _mouseStart() {},
      _mouseDrag: function _mouseDrag() {},
      _mouseStop: function _mouseStop() {},
      _mouseCapture: function _mouseCapture() {
        return !0;
      }
    }), function () {
      function t(e, t, i) {
        return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)];
      }

      function i(t, i) {
        return parseInt(e.css(t, i), 10) || 0;
      }

      function s(t) {
        var i = t[0];
        return 9 === i.nodeType ? {
          width: t.width(),
          height: t.height(),
          offset: {
            top: 0,
            left: 0
          }
        } : e.isWindow(i) ? {
          width: t.width(),
          height: t.height(),
          offset: {
            top: t.scrollTop(),
            left: t.scrollLeft()
          }
        } : i.preventDefault ? {
          width: 0,
          height: 0,
          offset: {
            top: i.pageY,
            left: i.pageX
          }
        } : {
          width: t.outerWidth(),
          height: t.outerHeight(),
          offset: t.offset()
        };
      }

      e.ui = e.ui || {};
      var a,
          n,
          r = Math.max,
          o = Math.abs,
          h = Math.round,
          l = /left|center|right/,
          u = /top|center|bottom/,
          d = /[\+\-]\d+(\.[\d]+)?%?/,
          c = /^\w+/,
          p = /%$/,
          m = e.fn.position;
      e.position = {
        scrollbarWidth: function scrollbarWidth() {
          if (void 0 !== a) return a;
          var t,
              i,
              s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
              n = s.children()[0];
          return e("body").append(s), t = n.offsetWidth, s.css("overflow", "scroll"), i = n.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), a = t - i;
        },
        getScrollInfo: function getScrollInfo(t) {
          var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
              s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
              a = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
              n = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
          return {
            width: n ? e.position.scrollbarWidth() : 0,
            height: a ? e.position.scrollbarWidth() : 0
          };
        },
        getWithinInfo: function getWithinInfo(t) {
          var i = e(t || window),
              s = e.isWindow(i[0]),
              a = !!i[0] && 9 === i[0].nodeType;
          return {
            element: i,
            isWindow: s,
            isDocument: a,
            offset: i.offset() || {
              left: 0,
              top: 0
            },
            scrollLeft: i.scrollLeft(),
            scrollTop: i.scrollTop(),
            width: s || a ? i.width() : i.outerWidth(),
            height: s || a ? i.height() : i.outerHeight()
          };
        }
      }, e.fn.position = function (a) {
        if (!a || !a.of) return m.apply(this, arguments);
        a = e.extend({}, a);

        var p,
            f,
            g,
            v,
            y,
            b,
            _ = e(a.of),
            x = e.position.getWithinInfo(a.within),
            w = e.position.getScrollInfo(x),
            k = (a.collision || "flip").split(" "),
            T = {};

        return b = s(_), _[0].preventDefault && (a.at = "left top"), f = b.width, g = b.height, v = b.offset, y = e.extend({}, v), e.each(["my", "at"], function () {
          var e,
              t,
              i = (a[this] || "").split(" ");
          1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], a[this] = [c.exec(i[0])[0], c.exec(i[1])[0]];
        }), 1 === k.length && (k[1] = k[0]), "right" === a.at[0] ? y.left += f : "center" === a.at[0] && (y.left += f / 2), "bottom" === a.at[1] ? y.top += g : "center" === a.at[1] && (y.top += g / 2), p = t(T.at, f, g), y.left += p[0], y.top += p[1], this.each(function () {
          var s,
              l,
              u = e(this),
              d = u.outerWidth(),
              c = u.outerHeight(),
              m = i(this, "marginLeft"),
              b = i(this, "marginTop"),
              D = d + m + i(this, "marginRight") + w.width,
              S = c + b + i(this, "marginBottom") + w.height,
              N = e.extend({}, y),
              M = t(T.my, u.outerWidth(), u.outerHeight());
          "right" === a.my[0] ? N.left -= d : "center" === a.my[0] && (N.left -= d / 2), "bottom" === a.my[1] ? N.top -= c : "center" === a.my[1] && (N.top -= c / 2), N.left += M[0], N.top += M[1], n || (N.left = h(N.left), N.top = h(N.top)), s = {
            marginLeft: m,
            marginTop: b
          }, e.each(["left", "top"], function (t, i) {
            e.ui.position[k[t]] && e.ui.position[k[t]][i](N, {
              targetWidth: f,
              targetHeight: g,
              elemWidth: d,
              elemHeight: c,
              collisionPosition: s,
              collisionWidth: D,
              collisionHeight: S,
              offset: [p[0] + M[0], p[1] + M[1]],
              my: a.my,
              at: a.at,
              within: x,
              elem: u
            });
          }), a.using && (l = function l(e) {
            var t = v.left - N.left,
                i = t + f - d,
                s = v.top - N.top,
                n = s + g - c,
                h = {
              target: {
                element: _,
                left: v.left,
                top: v.top,
                width: f,
                height: g
              },
              element: {
                element: u,
                left: N.left,
                top: N.top,
                width: d,
                height: c
              },
              horizontal: 0 > i ? "left" : t > 0 ? "right" : "center",
              vertical: 0 > n ? "top" : s > 0 ? "bottom" : "middle"
            };
            d > f && f > o(t + i) && (h.horizontal = "center"), c > g && g > o(s + n) && (h.vertical = "middle"), h.important = r(o(t), o(i)) > r(o(s), o(n)) ? "horizontal" : "vertical", a.using.call(this, e, h);
          }), u.offset(e.extend(N, {
            using: l
          }));
        });
      }, e.ui.position = {
        fit: {
          left: function left(e, t) {
            var i,
                s = t.within,
                a = s.isWindow ? s.scrollLeft : s.offset.left,
                n = s.width,
                o = e.left - t.collisionPosition.marginLeft,
                h = a - o,
                l = o + t.collisionWidth - n - a;
            t.collisionWidth > n ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - n - a, e.left += h - i) : e.left = l > 0 && 0 >= h ? a : h > l ? a + n - t.collisionWidth : a : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = r(e.left - o, e.left);
          },
          top: function top(e, t) {
            var i,
                s = t.within,
                a = s.isWindow ? s.scrollTop : s.offset.top,
                n = t.within.height,
                o = e.top - t.collisionPosition.marginTop,
                h = a - o,
                l = o + t.collisionHeight - n - a;
            t.collisionHeight > n ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - n - a, e.top += h - i) : e.top = l > 0 && 0 >= h ? a : h > l ? a + n - t.collisionHeight : a : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = r(e.top - o, e.top);
          }
        },
        flip: {
          left: function left(e, t) {
            var i,
                s,
                a = t.within,
                n = a.offset.left + a.scrollLeft,
                r = a.width,
                h = a.isWindow ? a.scrollLeft : a.offset.left,
                l = e.left - t.collisionPosition.marginLeft,
                u = l - h,
                d = l + t.collisionWidth - r - h,
                c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                m = -2 * t.offset[0];
            0 > u ? (i = e.left + c + p + m + t.collisionWidth - r - n, (0 > i || o(u) > i) && (e.left += c + p + m)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + m - h, (s > 0 || d > o(s)) && (e.left += c + p + m));
          },
          top: function top(e, t) {
            var i,
                s,
                a = t.within,
                n = a.offset.top + a.scrollTop,
                r = a.height,
                h = a.isWindow ? a.scrollTop : a.offset.top,
                l = e.top - t.collisionPosition.marginTop,
                u = l - h,
                d = l + t.collisionHeight - r - h,
                c = "top" === t.my[1],
                p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                m = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                f = -2 * t.offset[1];
            0 > u ? (s = e.top + p + m + f + t.collisionHeight - r - n, (0 > s || o(u) > s) && (e.top += p + m + f)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + m + f - h, (i > 0 || d > o(i)) && (e.top += p + m + f));
          }
        },
        flipfit: {
          left: function left() {
            e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments);
          },
          top: function top() {
            e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments);
          }
        }
      }, function () {
        var t,
            i,
            s,
            a,
            r,
            o = document.getElementsByTagName("body")[0],
            h = document.createElement("div");
        t = document.createElement(o ? "div" : "body"), s = {
          visibility: "hidden",
          width: 0,
          height: 0,
          border: 0,
          margin: 0,
          background: "none"
        }, o && e.extend(s, {
          position: "absolute",
          left: "-1000px",
          top: "-1000px"
        });

        for (r in s) {
          t.style[r] = s[r];
        }

        t.appendChild(h), i = o || document.documentElement, i.insertBefore(t, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", a = e(h).offset().left, n = a > 10 && 11 > a, t.innerHTML = "", i.removeChild(t);
      }();
    }(), e.ui.position, e.extend(e.ui, {
      datepicker: {
        version: "1.11.4"
      }
    });
    var d;
    e.extend(a.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      _widgetDatepicker: function _widgetDatepicker() {
        return this.dpDiv;
      },
      setDefaults: function setDefaults(e) {
        return o(this._defaults, e || {}), this;
      },
      _attachDatepicker: function _attachDatepicker(t, i) {
        var s, a, n;
        s = t.nodeName.toLowerCase(), a = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), n = this._newInst(e(t), a), n.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, n) : a && this._inlineDatepicker(t, n);
      },
      _newInst: function _newInst(t, i) {
        var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
        return {
          id: s,
          input: t,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: i,
          dpDiv: i ? n(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
        };
      },
      _connectDatepicker: function _connectDatepicker(t, i) {
        var s = e(t);
        i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t));
      },
      _attachments: function _attachments(t, i) {
        var s,
            a,
            n,
            r = this._get(i, "appendText"),
            o = this._get(i, "isRTL");

        i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (a = this._get(i, "buttonText"), n = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
          src: n,
          alt: a,
          title: a
        }) : e("<button type='button'></button>").addClass(this._triggerClass).html(n ? e("<img/>").attr({
          src: n,
          alt: a,
          title: a
        }) : a)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function () {
          return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1;
        }));
      },
      _autoSize: function _autoSize(e) {
        if (this._get(e, "autoSize") && !e.inline) {
          var t,
              i,
              s,
              a,
              n = new Date(2009, 11, 20),
              r = this._get(e, "dateFormat");

          r.match(/[DM]/) && (t = function t(e) {
            for (i = 0, s = 0, a = 0; e.length > a; a++) {
              e[a].length > i && (i = e[a].length, s = a);
            }

            return s;
          }, n.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), e.input.attr("size", this._formatDate(e, n).length);
        }
      },
      _inlineDatepicker: function _inlineDatepicker(t, i) {
        var s = e(t);
        s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"));
      },
      _dialogDatepicker: function _dialogDatepicker(t, i, s, a, n) {
        var r,
            h,
            l,
            u,
            d,
            c = this._dialogInst;
        return c || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, e.data(this._dialogInput[0], "datepicker", c)), o(c.settings, a || {}), i = i && i.constructor === Date ? this._formatDate(c, i) : i, this._dialogInput.val(i), this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", c), this;
      },
      _destroyDatepicker: function _destroyDatepicker(t) {
        var i,
            s = e(t),
            a = e.data(t, "datepicker");
        s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (a.append.remove(), a.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), d === a && (d = null));
      },
      _enableDatepicker: function _enableDatepicker(t) {
        var i,
            s,
            a = e(t),
            n = e.data(t, "datepicker");
        a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, n.trigger.filter("button").each(function () {
          this.disabled = !1;
        }).end().filter("img").css({
          opacity: "1.0",
          cursor: ""
        })) : ("div" === i || "span" === i) && (s = a.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
          return e === t ? null : e;
        }));
      },
      _disableDatepicker: function _disableDatepicker(t) {
        var i,
            s,
            a = e(t),
            n = e.data(t, "datepicker");
        a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, n.trigger.filter("button").each(function () {
          this.disabled = !0;
        }).end().filter("img").css({
          opacity: "0.5",
          cursor: "default"
        })) : ("div" === i || "span" === i) && (s = a.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
          return e === t ? null : e;
        }), this._disabledInputs[this._disabledInputs.length] = t);
      },
      _isDisabledDatepicker: function _isDisabledDatepicker(e) {
        if (!e) return !1;

        for (var t = 0; this._disabledInputs.length > t; t++) {
          if (this._disabledInputs[t] === e) return !0;
        }

        return !1;
      },
      _getInst: function _getInst(t) {
        try {
          return e.data(t, "datepicker");
        } catch (i) {
          throw "Missing instance data for this datepicker";
        }
      },
      _optionDatepicker: function _optionDatepicker(t, i, s) {
        var a,
            n,
            r,
            h,
            l = this._getInst(t);

        return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (a = i || {}, "string" == typeof i && (a = {}, a[i] = s), l && (this._curInst === l && this._hideDatepicker(), n = this._getDateDatepicker(t, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), o(l.settings, a), null !== r && void 0 !== a.dateFormat && void 0 === a.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== h && void 0 !== a.dateFormat && void 0 === a.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in a && (a.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, n), this._updateAlternate(l), this._updateDatepicker(l)), void 0);
      },
      _changeDatepicker: function _changeDatepicker(e, t, i) {
        this._optionDatepicker(e, t, i);
      },
      _refreshDatepicker: function _refreshDatepicker(e) {
        var t = this._getInst(e);

        t && this._updateDatepicker(t);
      },
      _setDateDatepicker: function _setDateDatepicker(e, t) {
        var i = this._getInst(e);

        i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i));
      },
      _getDateDatepicker: function _getDateDatepicker(e, t) {
        var i = this._getInst(e);

        return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null;
      },
      _doKeyDown: function _doKeyDown(t) {
        var i,
            s,
            a,
            n = e.datepicker._getInst(t.target),
            r = !0,
            o = n.dpDiv.is(".ui-datepicker-rtl");

        if (n._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
          case 9:
            e.datepicker._hideDatepicker(), r = !1;
            break;

          case 13:
            return a = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", n.dpDiv), a[0] && e.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, a[0]), i = e.datepicker._get(n, "onSelect"), i ? (s = e.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [s, n])) : e.datepicker._hideDatepicker(), !1;

          case 27:
            e.datepicker._hideDatepicker();

            break;

          case 33:
            e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");

            break;

          case 34:
            e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");

            break;

          case 35:
            (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
            break;

          case 36:
            (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
            break;

          case 37:
            (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
            break;

          case 38:
            (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
            break;

          case 39:
            (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
            break;

          case 40:
            (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
            break;

          default:
            r = !1;
        } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
        r && (t.preventDefault(), t.stopPropagation());
      },
      _doKeyPress: function _doKeyPress(t) {
        var i,
            s,
            a = e.datepicker._getInst(t.target);

        return e.datepicker._get(a, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(a, "dateFormat")), s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0;
      },
      _doKeyUp: function _doKeyUp(t) {
        var i,
            s = e.datepicker._getInst(t.target);

        if (s.input.val() !== s.lastVal) try {
          i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s));
        } catch (a) {}
        return !0;
      },
      _showDatepicker: function _showDatepicker(t) {
        if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
          var i, a, n, r, h, l, u;
          i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), a = e.datepicker._get(i, "beforeShow"), n = a ? a.apply(t, [t, i]) : {}, n !== !1 && (o(i.settings, n), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function () {
            return r |= "fixed" === e(this).css("position"), !r;
          }), h = {
            left: e.datepicker._pos[0],
            top: e.datepicker._pos[1]
          }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
            position: "absolute",
            display: "block",
            top: "-1000px"
          }), e.datepicker._updateDatepicker(i), h = e.datepicker._checkOffset(i, h, r), i.dpDiv.css({
            position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute",
            display: "none",
            left: h.left + "px",
            top: h.top + "px"
          }), i.inline || (l = e.datepicker._get(i, "showAnim"), u = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", s(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i));
        }
      },
      _updateDatepicker: function _updateDatepicker(t) {
        this.maxRows = 4, d = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);

        var i,
            s = this._getNumberOfMonths(t),
            a = s[1],
            n = 17,
            o = t.dpDiv.find("." + this._dayOverClass + " a");

        o.length > 0 && r.apply(o.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), a > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + a).css("width", n * a + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
          i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null;
        }, 0));
      },
      _shouldFocusInput: function _shouldFocusInput(e) {
        return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus");
      },
      _checkOffset: function _checkOffset(t, i, s) {
        var a = t.dpDiv.outerWidth(),
            n = t.dpDiv.outerHeight(),
            r = t.input ? t.input.outerWidth() : 0,
            o = t.input ? t.input.outerHeight() : 0,
            h = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()),
            l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop());
        return i.left -= this._get(t, "isRTL") ? a - r : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + a > h && h > a ? Math.abs(i.left + a - h) : 0), i.top -= Math.min(i.top, i.top + n > l && l > n ? Math.abs(n + o) : 0), i;
      },
      _findPos: function _findPos(t) {
        for (var i, s = this._getInst(t), a = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) {
          t = t[a ? "previousSibling" : "nextSibling"];
        }

        return i = e(t).offset(), [i.left, i.top];
      },
      _hideDatepicker: function _hideDatepicker(t) {
        var i,
            s,
            a,
            n,
            r = this._curInst;
        !r || t && r !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), s = this._get(r, "duration"), a = function a() {
          e.datepicker._tidyDialog(r);
        }, e.effects && (e.effects.effect[i] || e.effects[i]) ? r.dpDiv.hide(i, e.datepicker._get(r, "showOptions"), s, a) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, a), i || a(), this._datepickerShowing = !1, n = this._get(r, "onClose"), n && n.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
          position: "absolute",
          left: "0",
          top: "-100px"
        }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1);
      },
      _tidyDialog: function _tidyDialog(e) {
        e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
      },
      _checkExternalClick: function _checkExternalClick(t) {
        if (e.datepicker._curInst) {
          var i = e(t.target),
              s = e.datepicker._getInst(i[0]);

          (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker();
        }
      },
      _adjustDate: function _adjustDate(t, i, s) {
        var a = e(t),
            n = this._getInst(a[0]);

        this._isDisabledDatepicker(a[0]) || (this._adjustInstDate(n, i + ("M" === s ? this._get(n, "showCurrentAtPos") : 0), s), this._updateDatepicker(n));
      },
      _gotoToday: function _gotoToday(t) {
        var i,
            s = e(t),
            a = this._getInst(s[0]);

        this._get(a, "gotoCurrent") && a.currentDay ? (a.selectedDay = a.currentDay, a.drawMonth = a.selectedMonth = a.currentMonth, a.drawYear = a.selectedYear = a.currentYear) : (i = new Date(), a.selectedDay = i.getDate(), a.drawMonth = a.selectedMonth = i.getMonth(), a.drawYear = a.selectedYear = i.getFullYear()), this._notifyChange(a), this._adjustDate(s);
      },
      _selectMonthYear: function _selectMonthYear(t, i, s) {
        var a = e(t),
            n = this._getInst(a[0]);

        n["selected" + ("M" === s ? "Month" : "Year")] = n["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(a);
      },
      _selectDay: function _selectDay(t, i, s, a) {
        var n,
            r = e(t);
        e(a).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (n = this._getInst(r[0]), n.selectedDay = n.currentDay = e("a", a).html(), n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = s, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)));
      },
      _clearDate: function _clearDate(t) {
        var i = e(t);

        this._selectDate(i, "");
      },
      _selectDate: function _selectDate(t, i) {
        var s,
            a = e(t),
            n = this._getInst(a[0]);

        i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), s = this._get(n, "onSelect"), s ? s.apply(n.input ? n.input[0] : null, [i, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != _typeof(n.input[0]) && n.input.focus(), this._lastInput = null);
      },
      _updateAlternate: function _updateAlternate(t) {
        var i,
            s,
            a,
            n = this._get(t, "altField");

        n && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), a = this.formatDate(i, s, this._getFormatConfig(t)), e(n).each(function () {
          e(this).val(a);
        }));
      },
      noWeekends: function noWeekends(e) {
        var t = e.getDay();
        return [t > 0 && 6 > t, ""];
      },
      iso8601Week: function iso8601Week(e) {
        var t,
            i = new Date(e.getTime());
        return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1;
      },
      parseDate: function parseDate(t, i, s) {
        if (null == t || null == i) throw "Invalid arguments";
        if (i = "object" == _typeof(i) ? "" + i : i + "", "" === i) return null;

        var a,
            n,
            r,
            o,
            h = 0,
            l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
            u = "string" != typeof l ? l : new Date().getFullYear() % 100 + parseInt(l, 10),
            d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
            c = (s ? s.dayNames : null) || this._defaults.dayNames,
            p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
            m = (s ? s.monthNames : null) || this._defaults.monthNames,
            f = -1,
            g = -1,
            v = -1,
            y = -1,
            b = !1,
            _ = function _(e) {
          var i = t.length > a + 1 && t.charAt(a + 1) === e;
          return i && a++, i;
        },
            x = function x(e) {
          var t = _(e),
              s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
              a = "y" === e ? s : 1,
              n = RegExp("^\\d{" + a + "," + s + "}"),
              r = i.substring(h).match(n);

          if (!r) throw "Missing number at position " + h;
          return h += r[0].length, parseInt(r[0], 10);
        },
            w = function w(t, s, a) {
          var n = -1,
              r = e.map(_(t) ? a : s, function (e, t) {
            return [[t, e]];
          }).sort(function (e, t) {
            return -(e[1].length - t[1].length);
          });
          if (e.each(r, function (e, t) {
            var s = t[1];
            return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (n = t[0], h += s.length, !1) : void 0;
          }), -1 !== n) return n + 1;
          throw "Unknown name at position " + h;
        },
            k = function k() {
          if (i.charAt(h) !== t.charAt(a)) throw "Unexpected literal at position " + h;
          h++;
        };

        for (a = 0; t.length > a; a++) {
          if (b) "'" !== t.charAt(a) || _("'") ? k() : b = !1;else switch (t.charAt(a)) {
            case "d":
              v = x("d");
              break;

            case "D":
              w("D", d, c);
              break;

            case "o":
              y = x("o");
              break;

            case "m":
              g = x("m");
              break;

            case "M":
              g = w("M", p, m);
              break;

            case "y":
              f = x("y");
              break;

            case "@":
              o = new Date(x("@")), f = o.getFullYear(), g = o.getMonth() + 1, v = o.getDate();
              break;

            case "!":
              o = new Date((x("!") - this._ticksTo1970) / 1e4), f = o.getFullYear(), g = o.getMonth() + 1, v = o.getDate();
              break;

            case "'":
              _("'") ? k() : b = !0;
              break;

            default:
              k();
          }
        }

        if (i.length > h && (r = i.substr(h), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
        if (-1 === f ? f = new Date().getFullYear() : 100 > f && (f += new Date().getFullYear() - new Date().getFullYear() % 100 + (u >= f ? 0 : -100)), y > -1) for (g = 1, v = y;;) {
          if (n = this._getDaysInMonth(f, g - 1), n >= v) break;
          g++, v -= n;
        }
        if (o = this._daylightSavingAdjust(new Date(f, g - 1, v)), o.getFullYear() !== f || o.getMonth() + 1 !== g || o.getDate() !== v) throw "Invalid date";
        return o;
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
      formatDate: function formatDate(e, t, i) {
        if (!t) return "";

        var s,
            a = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
            n = (i ? i.dayNames : null) || this._defaults.dayNames,
            r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
            o = (i ? i.monthNames : null) || this._defaults.monthNames,
            h = function h(t) {
          var i = e.length > s + 1 && e.charAt(s + 1) === t;
          return i && s++, i;
        },
            l = function l(e, t, i) {
          var s = "" + t;
          if (h(e)) for (; i > s.length;) {
            s = "0" + s;
          }
          return s;
        },
            u = function u(e, t, i, s) {
          return h(e) ? s[t] : i[t];
        },
            d = "",
            c = !1;

        if (t) for (s = 0; e.length > s; s++) {
          if (c) "'" !== e.charAt(s) || h("'") ? d += e.charAt(s) : c = !1;else switch (e.charAt(s)) {
            case "d":
              d += l("d", t.getDate(), 2);
              break;

            case "D":
              d += u("D", t.getDay(), a, n);
              break;

            case "o":
              d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;

            case "m":
              d += l("m", t.getMonth() + 1, 2);
              break;

            case "M":
              d += u("M", t.getMonth(), r, o);
              break;

            case "y":
              d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
              break;

            case "@":
              d += t.getTime();
              break;

            case "!":
              d += 1e4 * t.getTime() + this._ticksTo1970;
              break;

            case "'":
              h("'") ? d += "'" : c = !0;
              break;

            default:
              d += e.charAt(s);
          }
        }
        return d;
      },
      _possibleChars: function _possibleChars(e) {
        var t,
            i = "",
            s = !1,
            a = function a(i) {
          var s = e.length > t + 1 && e.charAt(t + 1) === i;
          return s && t++, s;
        };

        for (t = 0; e.length > t; t++) {
          if (s) "'" !== e.charAt(t) || a("'") ? i += e.charAt(t) : s = !1;else switch (e.charAt(t)) {
            case "d":
            case "m":
            case "y":
            case "@":
              i += "0123456789";
              break;

            case "D":
            case "M":
              return null;

            case "'":
              a("'") ? i += "'" : s = !0;
              break;

            default:
              i += e.charAt(t);
          }
        }

        return i;
      },
      _get: function _get(e, t) {
        return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t];
      },
      _setDateFromField: function _setDateFromField(e, t) {
        if (e.input.val() !== e.lastVal) {
          var i = this._get(e, "dateFormat"),
              s = e.lastVal = e.input ? e.input.val() : null,
              a = this._getDefaultDate(e),
              n = a,
              r = this._getFormatConfig(e);

          try {
            n = this.parseDate(i, s, r) || a;
          } catch (o) {
            s = t ? "" : s;
          }

          e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), e.currentDay = s ? n.getDate() : 0, e.currentMonth = s ? n.getMonth() : 0, e.currentYear = s ? n.getFullYear() : 0, this._adjustInstDate(e);
        }
      },
      _getDefaultDate: function _getDefaultDate(e) {
        return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date()));
      },
      _determineDate: function _determineDate(t, i, s) {
        var a = function a(e) {
          var t = new Date();
          return t.setDate(t.getDate() + e), t;
        },
            n = function n(i) {
          try {
            return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t));
          } catch (s) {}

          for (var a = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date(), n = a.getFullYear(), r = a.getMonth(), o = a.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
            switch (l[2] || "d") {
              case "d":
              case "D":
                o += parseInt(l[1], 10);
                break;

              case "w":
              case "W":
                o += 7 * parseInt(l[1], 10);
                break;

              case "m":
              case "M":
                r += parseInt(l[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));
                break;

              case "y":
              case "Y":
                n += parseInt(l[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));
            }

            l = h.exec(i);
          }

          return new Date(n, r, o);
        },
            r = null == i || "" === i ? s : "string" == typeof i ? n(i) : "number" == typeof i ? isNaN(i) ? s : a(i) : new Date(i.getTime());

        return r = r && "Invalid Date" == "" + r ? s : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r);
      },
      _daylightSavingAdjust: function _daylightSavingAdjust(e) {
        return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null;
      },
      _setDate: function _setDate(e, t, i) {
        var s = !t,
            a = e.selectedMonth,
            n = e.selectedYear,
            r = this._restrictMinMax(e, this._determineDate(e, t, new Date()));

        e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), a === e.selectedMonth && n === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e));
      },
      _getDate: function _getDate(e) {
        var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        return t;
      },
      _attachHandlers: function _attachHandlers(t) {
        var i = this._get(t, "stepMonths"),
            s = "#" + t.id.replace(/\\\\/g, "\\");

        t.dpDiv.find("[data-handler]").map(function () {
          var t = {
            prev: function prev() {
              e.datepicker._adjustDate(s, -i, "M");
            },
            next: function next() {
              e.datepicker._adjustDate(s, +i, "M");
            },
            hide: function hide() {
              e.datepicker._hideDatepicker();
            },
            today: function today() {
              e.datepicker._gotoToday(s);
            },
            selectDay: function selectDay() {
              return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
            },
            selectMonth: function selectMonth() {
              return e.datepicker._selectMonthYear(s, this, "M"), !1;
            },
            selectYear: function selectYear() {
              return e.datepicker._selectMonthYear(s, this, "Y"), !1;
            }
          };
          e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]);
        });
      },
      _generateHTML: function _generateHTML(e) {
        var t,
            i,
            s,
            a,
            n,
            r,
            o,
            h,
            l,
            u,
            d,
            c,
            p,
            m,
            f,
            g,
            v,
            y,
            b,
            _,
            x,
            w,
            k,
            T,
            D,
            S,
            N,
            M,
            C,
            A,
            P,
            I,
            H,
            F,
            z,
            E,
            L,
            W,
            O,
            j = new Date(),
            R = this._daylightSavingAdjust(new Date(j.getFullYear(), j.getMonth(), j.getDate())),
            Y = this._get(e, "isRTL"),
            J = this._get(e, "showButtonPanel"),
            B = this._get(e, "hideIfNoPrevNext"),
            K = this._get(e, "navigationAsDateFormat"),
            V = this._getNumberOfMonths(e),
            U = this._get(e, "showCurrentAtPos"),
            q = this._get(e, "stepMonths"),
            G = 1 !== V[0] || 1 !== V[1],
            X = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
            Q = this._getMinMaxDate(e, "min"),
            $ = this._getMinMaxDate(e, "max"),
            Z = e.drawMonth - U,
            et = e.drawYear;

        if (0 > Z && (Z += 12, et--), $) for (t = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - V[0] * V[1] + 1, $.getDate())), t = Q && Q > t ? Q : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) {
          Z--, 0 > Z && (Z = 11, et--);
        }

        for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - q, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", a = this._get(e, "nextText"), a = K ? this.formatDate(a, this._daylightSavingAdjust(new Date(et, Z + q, 1)), this._getFormatConfig(e)) : a, n = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + a + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + a + "</span></a>", r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? X : R, r = K ? this.formatDate(r, o, this._getFormatConfig(e)) : r, h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = J ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), c = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), m = this._get(e, "monthNames"), f = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", w = 0; V[0] > w; w++) {
          for (k = "", this.maxRows = 4, T = 0; V[1] > T; T++) {
            if (D = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), S = " ui-corner-all", N = "", G) {
              if (N += "<div class='ui-datepicker-group", V[1] > 1) switch (T) {
                case 0:
                  N += " ui-datepicker-group-first", S = " ui-corner-" + (Y ? "right" : "left");
                  break;

                case V[1] - 1:
                  N += " ui-datepicker-group-last", S = " ui-corner-" + (Y ? "left" : "right");
                  break;

                default:
                  N += " ui-datepicker-group-middle", S = "";
              }
              N += "'>";
            }

            for (N += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === w ? Y ? n : s : "") + (/all|right/.test(S) && 0 === w ? Y ? s : n : "") + this._generateMonthYearHeader(e, Z, et, Q, $, w > 0 || T > 0, m, f) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", M = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) {
              C = (x + u) % 7, M += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[C] + "'>" + p[C] + "</span></th>";
            }

            for (N += M + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), P = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, I = Math.ceil((P + A) / 7), H = G ? this.maxRows > I ? this.maxRows : I : I, this.maxRows = H, F = this._daylightSavingAdjust(new Date(et, Z, 1 - P)), z = 0; H > z; z++) {
              for (N += "<tr>", E = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(F) + "</td>" : "", x = 0; 7 > x; x++) {
                L = g ? g.apply(e.input ? e.input[0] : null, [F]) : [!0, ""], W = F.getMonth() !== Z, O = W && !y || !L[0] || Q && Q > F || $ && F > $, E += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (F.getTime() === D.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === F.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (O ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + L[1] + (F.getTime() === X.getTime() ? " " + this._currentClass : "") + (F.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (O ? "" : " data-handler='selectDay' data-event='click' data-month='" + F.getMonth() + "' data-year='" + F.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : O ? "<span class='ui-state-default'>" + F.getDate() + "</span>" : "<a class='ui-state-default" + (F.getTime() === R.getTime() ? " ui-state-highlight" : "") + (F.getTime() === X.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + F.getDate() + "</a>") + "</td>", F.setDate(F.getDate() + 1), F = this._daylightSavingAdjust(F);
              }

              N += E + "</tr>";
            }

            Z++, Z > 11 && (Z = 0, et++), N += "</tbody></table>" + (G ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += N;
          }

          _ += k;
        }

        return _ += l, e._keyEvent = !1, _;
      },
      _generateMonthYearHeader: function _generateMonthYearHeader(e, t, i, s, a, n, r, o) {
        var h,
            l,
            u,
            d,
            c,
            p,
            m,
            f,
            g = this._get(e, "changeMonth"),
            v = this._get(e, "changeYear"),
            y = this._get(e, "showMonthAfterYear"),
            b = "<div class='ui-datepicker-title'>",
            _ = "";

        if (n || !g) _ += "<span class='ui-datepicker-month'>" + r[t] + "</span>";else {
          for (h = s && s.getFullYear() === i, l = a && a.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++) {
            (!h || u >= s.getMonth()) && (!l || a.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + o[u] + "</option>");
          }

          _ += "</select>";
        }
        if (y || (b += _ + (!n && g && v ? "" : "&#xa0;")), !e.yearshtml) if (e.yearshtml = "", n || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";else {
          for (d = this._get(e, "yearRange").split(":"), c = new Date().getFullYear(), p = function p(e) {
            var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10);
            return isNaN(t) ? c : t;
          }, m = p(d[0]), f = Math.max(m, p(d[1] || "")), m = s ? Math.max(m, s.getFullYear()) : m, f = a ? Math.min(f, a.getFullYear()) : f, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f >= m; m++) {
            e.yearshtml += "<option value='" + m + "'" + (m === i ? " selected='selected'" : "") + ">" + m + "</option>";
          }

          e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null;
        }
        return b += this._get(e, "yearSuffix"), y && (b += (!n && g && v ? "" : "&#xa0;") + _), b += "</div>";
      },
      _adjustInstDate: function _adjustInstDate(e, t, i) {
        var s = e.drawYear + ("Y" === i ? t : 0),
            a = e.drawMonth + ("M" === i ? t : 0),
            n = Math.min(e.selectedDay, this._getDaysInMonth(s, a)) + ("D" === i ? t : 0),
            r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, a, n)));

        e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e);
      },
      _restrictMinMax: function _restrictMinMax(e, t) {
        var i = this._getMinMaxDate(e, "min"),
            s = this._getMinMaxDate(e, "max"),
            a = i && i > t ? i : t;

        return s && a > s ? s : a;
      },
      _notifyChange: function _notifyChange(e) {
        var t = this._get(e, "onChangeMonthYear");

        t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e]);
      },
      _getNumberOfMonths: function _getNumberOfMonths(e) {
        var t = this._get(e, "numberOfMonths");

        return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t;
      },
      _getMinMaxDate: function _getMinMaxDate(e, t) {
        return this._determineDate(e, this._get(e, t + "Date"), null);
      },
      _getDaysInMonth: function _getDaysInMonth(e, t) {
        return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
      },
      _getFirstDayOfMonth: function _getFirstDayOfMonth(e, t) {
        return new Date(e, t, 1).getDay();
      },
      _canAdjustMonth: function _canAdjustMonth(e, t, i, s) {
        var a = this._getNumberOfMonths(e),
            n = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : a[0] * a[1]), 1));

        return 0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n);
      },
      _isInRange: function _isInRange(e, t) {
        var i,
            s,
            a = this._getMinMaxDate(e, "min"),
            n = this._getMinMaxDate(e, "max"),
            r = null,
            o = null,
            h = this._get(e, "yearRange");

        return h && (i = h.split(":"), s = new Date().getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (o += s)), (!a || t.getTime() >= a.getTime()) && (!n || t.getTime() <= n.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear());
      },
      _getFormatConfig: function _getFormatConfig(e) {
        var t = this._get(e, "shortYearCutoff");

        return t = "string" != typeof t ? t : new Date().getFullYear() % 100 + parseInt(t, 10), {
          shortYearCutoff: t,
          dayNamesShort: this._get(e, "dayNamesShort"),
          dayNames: this._get(e, "dayNames"),
          monthNamesShort: this._get(e, "monthNamesShort"),
          monthNames: this._get(e, "monthNames")
        };
      },
      _formatDate: function _formatDate(e, t, i, s) {
        t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
        var a = t ? "object" == _typeof(t) ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        return this.formatDate(this._get(e, "dateFormat"), a, this._getFormatConfig(e));
      }
    }), e.fn.datepicker = function (t) {
      if (!this.length) return this;
      e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
      var i = Array.prototype.slice.call(arguments, 1);
      return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
        "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t);
      }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i));
    }, e.datepicker = new a(), e.datepicker.initialized = !1, e.datepicker.uuid = new Date().getTime(), e.datepicker.version = "1.11.4", e.datepicker, e.widget("ui.slider", e.ui.mouse, {
      version: "1.11.4",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null
      },
      numPages: 5,
      _create: function _create() {
        this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1;
      },
      _refresh: function _refresh() {
        this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
      },
      _createHandles: function _createHandles() {
        var t,
            i,
            s = this.options,
            a = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
            n = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
            r = [];

        for (i = s.values && s.values.length || 1, a.length > i && (a.slice(i).remove(), a = a.slice(0, i)), t = a.length; i > t; t++) {
          r.push(n);
        }

        this.handles = a.add(e(r.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) {
          e(this).data("ui-slider-handle-index", t);
        });
      },
      _createRange: function _createRange() {
        var t = this.options,
            i = "";
        t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
          left: "",
          bottom: ""
        }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null);
      },
      _setupEvents: function _setupEvents() {
        this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
      },
      _destroy: function _destroy() {
        this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy();
      },
      _mouseCapture: function _mouseCapture(t) {
        var i,
            s,
            a,
            n,
            r,
            o,
            h,
            l,
            u = this,
            d = this.options;
        return d.disabled ? !1 : (this.elementSize = {
          width: this.element.outerWidth(),
          height: this.element.outerHeight()
        }, this.elementOffset = this.element.offset(), i = {
          x: t.pageX,
          y: t.pageY
        }, s = this._normValueFromMouse(i), a = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
          var i = Math.abs(s - u.values(t));
          (a > i || a === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (a = i, n = e(this), r = t);
        }), o = this._start(t, r), o === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = r, n.addClass("ui-state-active").focus(), h = n.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
          left: 0,
          top: 0
        } : {
          left: t.pageX - h.left - n.width() / 2,
          top: t.pageY - h.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
        }, this.handles.hasClass("ui-state-hover") || this._slide(t, r, s), this._animateOff = !0, !0));
      },
      _mouseStart: function _mouseStart() {
        return !0;
      },
      _mouseDrag: function _mouseDrag(e) {
        var t = {
          x: e.pageX,
          y: e.pageY
        },
            i = this._normValueFromMouse(t);

        return this._slide(e, this._handleIndex, i), !1;
      },
      _mouseStop: function _mouseStop(e) {
        return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
      },
      _detectOrientation: function _detectOrientation() {
        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function _normValueFromMouse(e) {
        var t, i, s, a, n;
        return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), a = this._valueMax() - this._valueMin(), n = this._valueMin() + s * a, this._trimAlignValue(n);
      },
      _start: function _start(e, t) {
        var i = {
          handle: this.handles[t],
          value: this.value()
        };
        return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i);
      },
      _slide: function _slide(e, t, i) {
        var s, a, n;
        this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (a = this.values(), a[t] = i, n = this._trigger("slide", e, {
          handle: this.handles[t],
          value: i,
          values: a
        }), s = this.values(t ? 0 : 1), n !== !1 && this.values(t, i))) : i !== this.value() && (n = this._trigger("slide", e, {
          handle: this.handles[t],
          value: i
        }), n !== !1 && this.value(i));
      },
      _stop: function _stop(e, t) {
        var i = {
          handle: this.handles[t],
          value: this.value()
        };
        this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i);
      },
      _change: function _change(e, t) {
        if (!this._keySliding && !this._mouseSliding) {
          var i = {
            handle: this.handles[t],
            value: this.value()
          };
          this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i);
        }
      },
      value: function value(e) {
        return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value();
      },
      values: function values(t, i) {
        var s, a, n;
        if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
        if (!arguments.length) return this._values();
        if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();

        for (s = this.options.values, a = arguments[0], n = 0; s.length > n; n += 1) {
          s[n] = this._trimAlignValue(a[n]), this._change(null, n);
        }

        this._refreshValue();
      },
      _setOption: function _setOption(t, i) {
        var s,
            a = 0;

        switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (a = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
          case "orientation":
            this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
            break;

          case "value":
            this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
            break;

          case "values":
            for (this._animateOff = !0, this._refreshValue(), s = 0; a > s; s += 1) {
              this._change(null, s);
            }

            this._animateOff = !1;
            break;

          case "step":
          case "min":
          case "max":
            this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
            break;

          case "range":
            this._animateOff = !0, this._refresh(), this._animateOff = !1;
        }
      },
      _value: function _value() {
        var e = this.options.value;
        return e = this._trimAlignValue(e);
      },
      _values: function _values(e) {
        var t, i, s;
        if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);

        if (this.options.values && this.options.values.length) {
          for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) {
            i[s] = this._trimAlignValue(i[s]);
          }

          return i;
        }

        return [];
      },
      _trimAlignValue: function _trimAlignValue(e) {
        if (this._valueMin() >= e) return this._valueMin();
        if (e >= this._valueMax()) return this._valueMax();
        var t = this.options.step > 0 ? this.options.step : 1,
            i = (e - this._valueMin()) % t,
            s = e - i;
        return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5));
      },
      _calculateNewMax: function _calculateNewMax() {
        var e = this.options.max,
            t = this._valueMin(),
            i = this.options.step,
            s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;

        e = s + t, this.max = parseFloat(e.toFixed(this._precision()));
      },
      _precision: function _precision() {
        var e = this._precisionOf(this.options.step);

        return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e;
      },
      _precisionOf: function _precisionOf(e) {
        var t = "" + e,
            i = t.indexOf(".");
        return -1 === i ? 0 : t.length - i - 1;
      },
      _valueMin: function _valueMin() {
        return this.options.min;
      },
      _valueMax: function _valueMax() {
        return this.max;
      },
      _refreshValue: function _refreshValue() {
        var t,
            i,
            s,
            a,
            n,
            r = this.options.range,
            o = this.options,
            h = this,
            l = this._animateOff ? !1 : o.animate,
            u = {};
        this.options.values && this.options.values.length ? this.handles.each(function (s) {
          i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, o.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
            left: i + "%"
          }, o.animate), 1 === s && h.range[l ? "animate" : "css"]({
            width: i - t + "%"
          }, {
            queue: !1,
            duration: o.animate
          })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
            bottom: i + "%"
          }, o.animate), 1 === s && h.range[l ? "animate" : "css"]({
            height: i - t + "%"
          }, {
            queue: !1,
            duration: o.animate
          }))), t = i;
        }) : (s = this.value(), a = this._valueMin(), n = this._valueMax(), i = n !== a ? 100 * ((s - a) / (n - a)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, o.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
          width: i + "%"
        }, o.animate), "max" === r && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
          width: 100 - i + "%"
        }, {
          queue: !1,
          duration: o.animate
        }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
          height: i + "%"
        }, o.animate), "max" === r && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
          height: 100 - i + "%"
        }, {
          queue: !1,
          duration: o.animate
        }));
      },
      _handleEvents: {
        keydown: function keydown(t) {
          var i,
              s,
              a,
              n,
              r = e(t.target).data("ui-slider-handle-index");

          switch (t.keyCode) {
            case e.ui.keyCode.HOME:
            case e.ui.keyCode.END:
            case e.ui.keyCode.PAGE_UP:
            case e.ui.keyCode.PAGE_DOWN:
            case e.ui.keyCode.UP:
            case e.ui.keyCode.RIGHT:
            case e.ui.keyCode.DOWN:
            case e.ui.keyCode.LEFT:
              if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, r), i === !1)) return;
          }

          switch (n = this.options.step, s = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), t.keyCode) {
            case e.ui.keyCode.HOME:
              a = this._valueMin();
              break;

            case e.ui.keyCode.END:
              a = this._valueMax();
              break;

            case e.ui.keyCode.PAGE_UP:
              a = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
              break;

            case e.ui.keyCode.PAGE_DOWN:
              a = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
              break;

            case e.ui.keyCode.UP:
            case e.ui.keyCode.RIGHT:
              if (s === this._valueMax()) return;
              a = this._trimAlignValue(s + n);
              break;

            case e.ui.keyCode.DOWN:
            case e.ui.keyCode.LEFT:
              if (s === this._valueMin()) return;
              a = this._trimAlignValue(s - n);
          }

          this._slide(t, r, a);
        },
        keyup: function keyup(t) {
          var i = e(t.target).data("ui-slider-handle-index");
          this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"));
        }
      }
    });
  });
}

;
module.exports = jqueryui();

/***/ }),

/***/ "./assets/jscolor.js":
/*!***************************!*\
  !*** ./assets/jscolor.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.string.fixed.js */ "./node_modules/core-js/modules/es.string.fixed.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

/**
 * jscolor - JavaScript Color Picker
 *
 * @link    http://jscolor.com
 * @license For open source use: GPLv3
 *          For commercial use: JSColor Commercial License
 * @author  Jan Odvarko
 *
 * See usage examples at http://jscolor.com/examples/
 */
function jscolor() {
  "use strict";

  window.jscolor || (window.jscolor = function () {
    var e = {
      register: function register() {
        e.attachDOMReadyEvent(e.init), e.attachEvent(document, "mousedown", e.onDocumentMouseDown), e.attachEvent(document, "touchstart", e.onDocumentTouchStart), e.attachEvent(window, "resize", e.onWindowResize);
      },
      init: function init() {
        e.jscolor.lookupClass && e.jscolor.installByClassName(e.jscolor.lookupClass);
      },
      tryInstallOnElements: function tryInstallOnElements(t, n) {
        var r = new RegExp("(^|\\s)(" + n + ")(\\s*(\\{[^}]*\\})|\\s|$)", "i");

        for (var i = 0; i < t.length; i += 1) {
          if (t[i].type !== undefined && t[i].type.toLowerCase() == "color" && e.isColorAttrSupported) continue;
          var s;

          if (!t[i].jscolor && t[i].className && (s = t[i].className.match(r))) {
            var o = t[i],
                u = null,
                a = e.getDataAttr(o, "jscolor");
            a !== null ? u = a : s[4] && (u = s[4]);
            var f = {};
            if (u) try {
              f = new Function("return (" + u + ")")();
            } catch (l) {
              e.warn("Error parsing jscolor options: " + l + ":\n" + u);
            }
            o.jscolor = new e.jscolor(o, f);
          }
        }
      },
      isColorAttrSupported: function () {
        var e = document.createElement("input");

        if (e.setAttribute) {
          e.setAttribute("type", "color");
          if (e.type.toLowerCase() == "color") return !0;
        }

        return !1;
      }(),
      isCanvasSupported: function () {
        var e = document.createElement("canvas");
        return !!e.getContext && !!e.getContext("2d");
      }(),
      fetchElement: function fetchElement(e) {
        return typeof e == "string" ? document.getElementById(e) : e;
      },
      isElementType: function isElementType(e, t) {
        return e.nodeName.toLowerCase() === t.toLowerCase();
      },
      getDataAttr: function getDataAttr(e, t) {
        var n = "data-" + t,
            r = e.getAttribute(n);
        return r !== null ? r : null;
      },
      attachEvent: function attachEvent(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n);
      },
      detachEvent: function detachEvent(e, t, n) {
        e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n);
      },
      _attachedGroupEvents: {},
      attachGroupEvent: function attachGroupEvent(t, n, r, i) {
        e._attachedGroupEvents.hasOwnProperty(t) || (e._attachedGroupEvents[t] = []), e._attachedGroupEvents[t].push([n, r, i]), e.attachEvent(n, r, i);
      },
      detachGroupEvents: function detachGroupEvents(t) {
        if (e._attachedGroupEvents.hasOwnProperty(t)) {
          for (var n = 0; n < e._attachedGroupEvents[t].length; n += 1) {
            var r = e._attachedGroupEvents[t][n];
            e.detachEvent(r[0], r[1], r[2]);
          }

          delete e._attachedGroupEvents[t];
        }
      },
      attachDOMReadyEvent: function attachDOMReadyEvent(e) {
        var t = !1,
            n = function n() {
          t || (t = !0, e());
        };

        if (document.readyState === "complete") {
          setTimeout(n, 1);
          return;
        }

        if (document.addEventListener) document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1);else if (document.attachEvent) {
          document.attachEvent("onreadystatechange", function () {
            document.readyState === "complete" && (document.detachEvent("onreadystatechange", arguments.callee), n());
          }), window.attachEvent("onload", n);

          if (document.documentElement.doScroll && window == window.top) {
            var r = function r() {
              if (!document.body) return;

              try {
                document.documentElement.doScroll("left"), n();
              } catch (e) {
                setTimeout(r, 1);
              }
            };

            r();
          }
        }
      },
      warn: function warn(e) {
        window.console && window.console.warn && window.console.warn(e);
      },
      preventDefault: function preventDefault(e) {
        e.preventDefault && e.preventDefault(), e.returnValue = !1;
      },
      captureTarget: function captureTarget(t) {
        t.setCapture && (e._capturedTarget = t, e._capturedTarget.setCapture());
      },
      releaseTarget: function releaseTarget() {
        e._capturedTarget && (e._capturedTarget.releaseCapture(), e._capturedTarget = null);
      },
      fireEvent: function fireEvent(e, t) {
        if (!e) return;

        if (document.createEvent) {
          var n = document.createEvent("HTMLEvents");
          n.initEvent(t, !0, !0), e.dispatchEvent(n);
        } else if (document.createEventObject) {
          var n = document.createEventObject();
          e.fireEvent("on" + t, n);
        } else e["on" + t] && e["on" + t]();
      },
      classNameToList: function classNameToList(e) {
        return e.replace(/^\s+|\s+$/g, "").split(/\s+/);
      },
      hasClass: function hasClass(e, t) {
        return t ? -1 != (" " + e.className.replace(/\s+/g, " ") + " ").indexOf(" " + t + " ") : !1;
      },
      setClass: function setClass(t, n) {
        var r = e.classNameToList(n);

        for (var i = 0; i < r.length; i += 1) {
          e.hasClass(t, r[i]) || (t.className += (t.className ? " " : "") + r[i]);
        }
      },
      unsetClass: function unsetClass(t, n) {
        var r = e.classNameToList(n);

        for (var i = 0; i < r.length; i += 1) {
          var s = new RegExp("^\\s*" + r[i] + "\\s*|" + "\\s*" + r[i] + "\\s*$|" + "\\s+" + r[i] + "(\\s+)", "g");
          t.className = t.className.replace(s, "$1");
        }
      },
      getStyle: function getStyle(e) {
        return window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
      },
      setStyle: function () {
        var e = document.createElement("div"),
            t = function t(_t) {
          for (var n = 0; n < _t.length; n += 1) {
            if (_t[n] in e.style) return _t[n];
          }
        },
            n = {
          borderRadius: t(["borderRadius", "MozBorderRadius", "webkitBorderRadius"]),
          boxShadow: t(["boxShadow", "MozBoxShadow", "webkitBoxShadow"])
        };

        return function (e, t, r) {
          switch (t.toLowerCase()) {
            case "opacity":
              var i = Math.round(parseFloat(r) * 100);
              e.style.opacity = r, e.style.filter = "alpha(opacity=" + i + ")";
              break;

            default:
              e.style[n[t]] = r;
          }
        };
      }(),
      setBorderRadius: function setBorderRadius(t, n) {
        e.setStyle(t, "borderRadius", n || "0");
      },
      setBoxShadow: function setBoxShadow(t, n) {
        e.setStyle(t, "boxShadow", n || "none");
      },
      getElementPos: function getElementPos(t, n) {
        var r = 0,
            i = 0,
            s = t.getBoundingClientRect();
        r = s.left, i = s.top;

        if (!n) {
          var o = e.getViewPos();
          r += o[0], i += o[1];
        }

        return [r, i];
      },
      getElementSize: function getElementSize(e) {
        return [e.offsetWidth, e.offsetHeight];
      },
      getAbsPointerPos: function getAbsPointerPos(e) {
        e || (e = window.event);
        var t = 0,
            n = 0;
        return typeof e.changedTouches != "undefined" && e.changedTouches.length ? (t = e.changedTouches[0].clientX, n = e.changedTouches[0].clientY) : typeof e.clientX == "number" && (t = e.clientX, n = e.clientY), {
          x: t,
          y: n
        };
      },
      getRelPointerPos: function getRelPointerPos(e) {
        e || (e = window.event);
        var t = e.target || e.srcElement,
            n = t.getBoundingClientRect(),
            r = 0,
            i = 0,
            s = 0,
            o = 0;
        return typeof e.changedTouches != "undefined" && e.changedTouches.length ? (s = e.changedTouches[0].clientX, o = e.changedTouches[0].clientY) : typeof e.clientX == "number" && (s = e.clientX, o = e.clientY), r = s - n.left, i = o - n.top, {
          x: r,
          y: i
        };
      },
      getViewPos: function getViewPos() {
        var e = document.documentElement;
        return [(window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0), (window.pageYOffset || e.scrollTop) - (e.clientTop || 0)];
      },
      getViewSize: function getViewSize() {
        var e = document.documentElement;
        return [window.innerWidth || e.clientWidth, window.innerHeight || e.clientHeight];
      },
      redrawPosition: function redrawPosition() {
        if (e.picker && e.picker.owner) {
          var t = e.picker.owner,
              n,
              r;
          t.fixed ? (n = e.getElementPos(t.targetElement, !0), r = [0, 0]) : (n = e.getElementPos(t.targetElement), r = e.getViewPos());
          var i = e.getElementSize(t.targetElement),
              s = e.getViewSize(),
              o = e.getPickerOuterDims(t),
              u,
              a,
              f;

          switch (t.position.toLowerCase()) {
            case "left":
              u = 1, a = 0, f = -1;
              break;

            case "right":
              u = 1, a = 0, f = 1;
              break;

            case "top":
              u = 0, a = 1, f = -1;
              break;

            default:
              u = 0, a = 1, f = 1;
          }

          var l = (i[a] + o[a]) / 2;
          if (!t.smartPosition) var c = [n[u], n[a] + i[a] - l + l * f];else var c = [-r[u] + n[u] + o[u] > s[u] ? -r[u] + n[u] + i[u] / 2 > s[u] / 2 && n[u] + i[u] - o[u] >= 0 ? n[u] + i[u] - o[u] : n[u] : n[u], -r[a] + n[a] + i[a] + o[a] - l + l * f > s[a] ? -r[a] + n[a] + i[a] / 2 > s[a] / 2 && n[a] + i[a] - l - l * f >= 0 ? n[a] + i[a] - l - l * f : n[a] + i[a] - l + l * f : n[a] + i[a] - l + l * f >= 0 ? n[a] + i[a] - l + l * f : n[a] + i[a] - l - l * f];
          var h = c[u],
              p = c[a],
              d = t.fixed ? "fixed" : "absolute",
              v = (c[0] + o[0] > n[0] || c[0] < n[0] + i[0]) && c[1] + o[1] < n[1] + i[1];

          e._drawPosition(t, h, p, d, v);
        }
      },
      _drawPosition: function _drawPosition(t, n, r, i, s) {
        var o = s ? 0 : t.shadowBlur;
        e.picker.wrap.style.position = i, e.picker.wrap.style.left = n + "px", e.picker.wrap.style.top = r + "px", e.setBoxShadow(e.picker.boxS, t.shadow ? new e.BoxShadow(0, o, t.shadowBlur, 0, t.shadowColor) : null);
      },
      getPickerDims: function getPickerDims(t) {
        var n = !!e.getSliderComponent(t),
            r = [2 * t.insetWidth + 2 * t.padding + t.width + (n ? 2 * t.insetWidth + e.getPadToSliderPadding(t) + t.sliderSize : 0), 2 * t.insetWidth + 2 * t.padding + t.height + (t.closable ? 2 * t.insetWidth + t.padding + t.buttonHeight : 0)];
        return r;
      },
      getPickerOuterDims: function getPickerOuterDims(t) {
        var n = e.getPickerDims(t);
        return [n[0] + 2 * t.borderWidth, n[1] + 2 * t.borderWidth];
      },
      getPadToSliderPadding: function getPadToSliderPadding(e) {
        return Math.max(e.padding, 1.5 * (2 * e.pointerBorderWidth + e.pointerThickness));
      },
      getPadYComponent: function getPadYComponent(e) {
        switch (e.mode.charAt(1).toLowerCase()) {
          case "v":
            return "v";
        }

        return "s";
      },
      getSliderComponent: function getSliderComponent(e) {
        if (e.mode.length > 2) switch (e.mode.charAt(2).toLowerCase()) {
          case "s":
            return "s";

          case "v":
            return "v";
        }
        return null;
      },
      onDocumentMouseDown: function onDocumentMouseDown(t) {
        t || (t = window.event);
        var n = t.target || t.srcElement;
        n._jscLinkedInstance ? n._jscLinkedInstance.showOnClick && n._jscLinkedInstance.show() : n._jscControlName ? e.onControlPointerStart(t, n, n._jscControlName, "mouse") : e.picker && e.picker.owner && e.picker.owner.hide();
      },
      onDocumentTouchStart: function onDocumentTouchStart(t) {
        t || (t = window.event);
        var n = t.target || t.srcElement;
        n._jscLinkedInstance ? n._jscLinkedInstance.showOnClick && n._jscLinkedInstance.show() : n._jscControlName ? e.onControlPointerStart(t, n, n._jscControlName, "touch") : e.picker && e.picker.owner && e.picker.owner.hide();
      },
      onWindowResize: function onWindowResize(t) {
        e.redrawPosition();
      },
      onParentScroll: function onParentScroll(t) {
        e.picker && e.picker.owner && e.picker.owner.hide();
      },
      _pointerMoveEvent: {
        mouse: "mousemove",
        touch: "touchmove"
      },
      _pointerEndEvent: {
        mouse: "mouseup",
        touch: "touchend"
      },
      _pointerOrigin: null,
      _capturedTarget: null,
      onControlPointerStart: function onControlPointerStart(t, n, r, i) {
        var s = n._jscInstance;
        e.preventDefault(t), e.captureTarget(n);

        var o = function o(s, _o) {
          e.attachGroupEvent("drag", s, e._pointerMoveEvent[i], e.onDocumentPointerMove(t, n, r, i, _o)), e.attachGroupEvent("drag", s, e._pointerEndEvent[i], e.onDocumentPointerEnd(t, n, r, i));
        };

        o(document, [0, 0]);

        if (window.parent && window.frameElement) {
          var u = window.frameElement.getBoundingClientRect(),
              a = [-u.left, -u.top];
          o(window.parent.window.document, a);
        }

        var f = e.getAbsPointerPos(t),
            l = e.getRelPointerPos(t);
        e._pointerOrigin = {
          x: f.x - l.x,
          y: f.y - l.y
        };

        switch (r) {
          case "pad":
            switch (e.getSliderComponent(s)) {
              case "s":
                s.hsv[1] === 0 && s.fromHSV(null, 100, null);
                break;

              case "v":
                s.hsv[2] === 0 && s.fromHSV(null, null, 100);
            }

            e.setPad(s, t, 0, 0);
            break;

          case "sld":
            e.setSld(s, t, 0);
        }

        e.dispatchFineChange(s);
      },
      onDocumentPointerMove: function onDocumentPointerMove(t, n, r, i, s) {
        return function (t) {
          var i = n._jscInstance;

          switch (r) {
            case "pad":
              t || (t = window.event), e.setPad(i, t, s[0], s[1]), e.dispatchFineChange(i);
              break;

            case "sld":
              t || (t = window.event), e.setSld(i, t, s[1]), e.dispatchFineChange(i);
          }
        };
      },
      onDocumentPointerEnd: function onDocumentPointerEnd(t, n, r, i) {
        return function (t) {
          var r = n._jscInstance;
          e.detachGroupEvents("drag"), e.releaseTarget(), e.dispatchChange(r);
        };
      },
      dispatchChange: function dispatchChange(t) {
        t.valueElement && e.isElementType(t.valueElement, "input") && e.fireEvent(t.valueElement, "change");
      },
      dispatchFineChange: function dispatchFineChange(e) {
        if (e.onFineChange) {
          var t;
          typeof e.onFineChange == "string" ? t = new Function(e.onFineChange) : t = e.onFineChange, t.call(e);
        }
      },
      setPad: function setPad(t, n, r, i) {
        var s = e.getAbsPointerPos(n),
            o = r + s.x - e._pointerOrigin.x - t.padding - t.insetWidth,
            u = i + s.y - e._pointerOrigin.y - t.padding - t.insetWidth,
            a = o * (360 / (t.width - 1)),
            f = 100 - u * (100 / (t.height - 1));

        switch (e.getPadYComponent(t)) {
          case "s":
            t.fromHSV(a, f, null, e.leaveSld);
            break;

          case "v":
            t.fromHSV(a, null, f, e.leaveSld);
        }
      },
      setSld: function setSld(t, n, r) {
        var i = e.getAbsPointerPos(n),
            s = r + i.y - e._pointerOrigin.y - t.padding - t.insetWidth,
            o = 100 - s * (100 / (t.height - 1));

        switch (e.getSliderComponent(t)) {
          case "s":
            t.fromHSV(null, o, null, e.leavePad);
            break;

          case "v":
            t.fromHSV(null, null, o, e.leavePad);
        }
      },
      _vmlNS: "jsc_vml_",
      _vmlCSS: "jsc_vml_css_",
      _vmlReady: !1,
      initVML: function initVML() {
        if (!e._vmlReady) {
          var t = document;
          t.namespaces[e._vmlNS] || t.namespaces.add(e._vmlNS, "urn:schemas-microsoft-com:vml");

          if (!t.styleSheets[e._vmlCSS]) {
            var n = ["shape", "shapetype", "group", "background", "path", "formulas", "handles", "fill", "stroke", "shadow", "textbox", "textpath", "imagedata", "line", "polyline", "curve", "rect", "roundrect", "oval", "arc", "image"],
                r = t.createStyleSheet();
            r.owningElement.id = e._vmlCSS;

            for (var i = 0; i < n.length; i += 1) {
              r.addRule(e._vmlNS + "\\:" + n[i], "behavior:url(#default#VML);");
            }
          }

          e._vmlReady = !0;
        }
      },
      createPalette: function createPalette() {
        var t = {
          elm: null,
          draw: null
        };

        if (e.isCanvasSupported) {
          var n = document.createElement("canvas"),
              r = n.getContext("2d"),
              i = function i(e, t, _i) {
            n.width = e, n.height = t, r.clearRect(0, 0, n.width, n.height);
            var s = r.createLinearGradient(0, 0, n.width, 0);
            s.addColorStop(0, "#F00"), s.addColorStop(1 / 6, "#FF0"), s.addColorStop(2 / 6, "#0F0"), s.addColorStop(.5, "#0FF"), s.addColorStop(4 / 6, "#00F"), s.addColorStop(5 / 6, "#F0F"), s.addColorStop(1, "#F00"), r.fillStyle = s, r.fillRect(0, 0, n.width, n.height);
            var o = r.createLinearGradient(0, 0, 0, n.height);

            switch (_i.toLowerCase()) {
              case "s":
                o.addColorStop(0, "rgba(255,255,255,0)"), o.addColorStop(1, "rgba(255,255,255,1)");
                break;

              case "v":
                o.addColorStop(0, "rgba(0,0,0,0)"), o.addColorStop(1, "rgba(0,0,0,1)");
            }

            r.fillStyle = o, r.fillRect(0, 0, n.width, n.height);
          };

          t.elm = n, t.draw = i;
        } else {
          e.initVML();
          var s = document.createElement("div");
          s.style.position = "relative", s.style.overflow = "hidden";
          var o = document.createElement(e._vmlNS + ":fill");
          o.type = "gradient", o.method = "linear", o.angle = "90", o.colors = "16.67% #F0F, 33.33% #00F, 50% #0FF, 66.67% #0F0, 83.33% #FF0";
          var u = document.createElement(e._vmlNS + ":rect");
          u.style.position = "absolute", u.style.left = "-1px", u.style.top = "-1px", u.stroked = !1, u.appendChild(o), s.appendChild(u);
          var a = document.createElement(e._vmlNS + ":fill");
          a.type = "gradient", a.method = "linear", a.angle = "180", a.opacity = "0";
          var f = document.createElement(e._vmlNS + ":rect");
          f.style.position = "absolute", f.style.left = "-1px", f.style.top = "-1px", f.stroked = !1, f.appendChild(a), s.appendChild(f);

          var i = function i(e, t, n) {
            s.style.width = e + "px", s.style.height = t + "px", u.style.width = f.style.width = e + 1 + "px", u.style.height = f.style.height = t + 1 + "px", o.color = "#F00", o.color2 = "#F00";

            switch (n.toLowerCase()) {
              case "s":
                a.color = a.color2 = "#FFF";
                break;

              case "v":
                a.color = a.color2 = "#000";
            }
          };

          t.elm = s, t.draw = i;
        }

        return t;
      },
      createSliderGradient: function createSliderGradient() {
        var t = {
          elm: null,
          draw: null
        };

        if (e.isCanvasSupported) {
          var n = document.createElement("canvas"),
              r = n.getContext("2d"),
              i = function i(e, t, _i2, s) {
            n.width = e, n.height = t, r.clearRect(0, 0, n.width, n.height);
            var o = r.createLinearGradient(0, 0, 0, n.height);
            o.addColorStop(0, _i2), o.addColorStop(1, s), r.fillStyle = o, r.fillRect(0, 0, n.width, n.height);
          };

          t.elm = n, t.draw = i;
        } else {
          e.initVML();
          var s = document.createElement("div");
          s.style.position = "relative", s.style.overflow = "hidden";
          var o = document.createElement(e._vmlNS + ":fill");
          o.type = "gradient", o.method = "linear", o.angle = "180";
          var u = document.createElement(e._vmlNS + ":rect");
          u.style.position = "absolute", u.style.left = "-1px", u.style.top = "-1px", u.stroked = !1, u.appendChild(o), s.appendChild(u);

          var i = function i(e, t, n, r) {
            s.style.width = e + "px", s.style.height = t + "px", u.style.width = e + 1 + "px", u.style.height = t + 1 + "px", o.color = n, o.color2 = r;
          };

          t.elm = s, t.draw = i;
        }

        return t;
      },
      leaveValue: 1,
      leaveStyle: 2,
      leavePad: 4,
      leaveSld: 8,
      BoxShadow: function () {
        var e = function e(_e, t, n, r, i, s) {
          this.hShadow = _e, this.vShadow = t, this.blur = n, this.spread = r, this.color = i, this.inset = !!s;
        };

        return e.prototype.toString = function () {
          var e = [Math.round(this.hShadow) + "px", Math.round(this.vShadow) + "px", Math.round(this.blur) + "px", Math.round(this.spread) + "px", this.color];
          return this.inset && e.push("inset"), e.join(" ");
        }, e;
      }(),
      jscolor: function jscolor(t, n) {
        function i(e, t, n) {
          e /= 255, t /= 255, n /= 255;
          var r = Math.min(Math.min(e, t), n),
              i = Math.max(Math.max(e, t), n),
              s = i - r;
          if (s === 0) return [null, 0, 100 * i];
          var o = e === r ? 3 + (n - t) / s : t === r ? 5 + (e - n) / s : 1 + (t - e) / s;
          return [60 * (o === 6 ? 0 : o), 100 * (s / i), 100 * i];
        }

        function s(e, t, n) {
          var r = 255 * (n / 100);
          if (e === null) return [r, r, r];
          e /= 60, t /= 100;
          var i = Math.floor(e),
              s = i % 2 ? e - i : 1 - (e - i),
              o = r * (1 - t),
              u = r * (1 - t * s);

          switch (i) {
            case 6:
            case 0:
              return [r, u, o];

            case 1:
              return [u, r, o];

            case 2:
              return [o, r, u];

            case 3:
              return [o, u, r];

            case 4:
              return [u, o, r];

            case 5:
              return [r, o, u];
          }
        }

        function o() {
          e.unsetClass(d.targetElement, d.activeClass), e.picker.wrap.parentNode.removeChild(e.picker.wrap), delete e.picker.owner;
        }

        function u() {
          function l() {
            var e = d.insetColor.split(/\s+/),
                n = e.length < 2 ? e[0] : e[1] + " " + e[0] + " " + e[0] + " " + e[1];
            t.btn.style.borderColor = n;
          }

          d._processParentElementsInDOM(), e.picker || (e.picker = {
            owner: null,
            wrap: document.createElement("div"),
            box: document.createElement("div"),
            boxS: document.createElement("div"),
            boxB: document.createElement("div"),
            pad: document.createElement("div"),
            padB: document.createElement("div"),
            padM: document.createElement("div"),
            padPal: e.createPalette(),
            cross: document.createElement("div"),
            crossBY: document.createElement("div"),
            crossBX: document.createElement("div"),
            crossLY: document.createElement("div"),
            crossLX: document.createElement("div"),
            sld: document.createElement("div"),
            sldB: document.createElement("div"),
            sldM: document.createElement("div"),
            sldGrad: e.createSliderGradient(),
            sldPtrS: document.createElement("div"),
            sldPtrIB: document.createElement("div"),
            sldPtrMB: document.createElement("div"),
            sldPtrOB: document.createElement("div"),
            btn: document.createElement("div"),
            btnT: document.createElement("span")
          }, e.picker.pad.appendChild(e.picker.padPal.elm), e.picker.padB.appendChild(e.picker.pad), e.picker.cross.appendChild(e.picker.crossBY), e.picker.cross.appendChild(e.picker.crossBX), e.picker.cross.appendChild(e.picker.crossLY), e.picker.cross.appendChild(e.picker.crossLX), e.picker.padB.appendChild(e.picker.cross), e.picker.box.appendChild(e.picker.padB), e.picker.box.appendChild(e.picker.padM), e.picker.sld.appendChild(e.picker.sldGrad.elm), e.picker.sldB.appendChild(e.picker.sld), e.picker.sldB.appendChild(e.picker.sldPtrOB), e.picker.sldPtrOB.appendChild(e.picker.sldPtrMB), e.picker.sldPtrMB.appendChild(e.picker.sldPtrIB), e.picker.sldPtrIB.appendChild(e.picker.sldPtrS), e.picker.box.appendChild(e.picker.sldB), e.picker.box.appendChild(e.picker.sldM), e.picker.btn.appendChild(e.picker.btnT), e.picker.box.appendChild(e.picker.btn), e.picker.boxB.appendChild(e.picker.box), e.picker.wrap.appendChild(e.picker.boxS), e.picker.wrap.appendChild(e.picker.boxB));
          var t = e.picker,
              n = !!e.getSliderComponent(d),
              r = e.getPickerDims(d),
              i = 2 * d.pointerBorderWidth + d.pointerThickness + 2 * d.crossSize,
              s = e.getPadToSliderPadding(d),
              o = Math.min(d.borderRadius, Math.round(d.padding * Math.PI)),
              u = "crosshair";
          t.wrap.style.clear = "both", t.wrap.style.width = r[0] + 2 * d.borderWidth + "px", t.wrap.style.height = r[1] + 2 * d.borderWidth + "px", t.wrap.style.zIndex = d.zIndex, t.box.style.width = r[0] + "px", t.box.style.height = r[1] + "px", t.boxS.style.position = "absolute", t.boxS.style.left = "0", t.boxS.style.top = "0", t.boxS.style.width = "100%", t.boxS.style.height = "100%", e.setBorderRadius(t.boxS, o + "px"), t.boxB.style.position = "relative", t.boxB.style.border = d.borderWidth + "px solid", t.boxB.style.borderColor = d.borderColor, t.boxB.style.background = d.backgroundColor, e.setBorderRadius(t.boxB, o + "px"), t.padM.style.background = t.sldM.style.background = "#FFF", e.setStyle(t.padM, "opacity", "0"), e.setStyle(t.sldM, "opacity", "0"), t.pad.style.position = "relative", t.pad.style.width = d.width + "px", t.pad.style.height = d.height + "px", t.padPal.draw(d.width, d.height, e.getPadYComponent(d)), t.padB.style.position = "absolute", t.padB.style.left = d.padding + "px", t.padB.style.top = d.padding + "px", t.padB.style.border = d.insetWidth + "px solid", t.padB.style.borderColor = d.insetColor, t.padM._jscInstance = d, t.padM._jscControlName = "pad", t.padM.style.position = "absolute", t.padM.style.left = "0", t.padM.style.top = "0", t.padM.style.width = d.padding + 2 * d.insetWidth + d.width + s / 2 + "px", t.padM.style.height = r[1] + "px", t.padM.style.cursor = u, t.cross.style.position = "absolute", t.cross.style.left = t.cross.style.top = "0", t.cross.style.width = t.cross.style.height = i + "px", t.crossBY.style.position = t.crossBX.style.position = "absolute", t.crossBY.style.background = t.crossBX.style.background = d.pointerBorderColor, t.crossBY.style.width = t.crossBX.style.height = 2 * d.pointerBorderWidth + d.pointerThickness + "px", t.crossBY.style.height = t.crossBX.style.width = i + "px", t.crossBY.style.left = t.crossBX.style.top = Math.floor(i / 2) - Math.floor(d.pointerThickness / 2) - d.pointerBorderWidth + "px", t.crossBY.style.top = t.crossBX.style.left = "0", t.crossLY.style.position = t.crossLX.style.position = "absolute", t.crossLY.style.background = t.crossLX.style.background = d.pointerColor, t.crossLY.style.height = t.crossLX.style.width = i - 2 * d.pointerBorderWidth + "px", t.crossLY.style.width = t.crossLX.style.height = d.pointerThickness + "px", t.crossLY.style.left = t.crossLX.style.top = Math.floor(i / 2) - Math.floor(d.pointerThickness / 2) + "px", t.crossLY.style.top = t.crossLX.style.left = d.pointerBorderWidth + "px", t.sld.style.overflow = "hidden", t.sld.style.width = d.sliderSize + "px", t.sld.style.height = d.height + "px", t.sldGrad.draw(d.sliderSize, d.height, "#000", "#000"), t.sldB.style.display = n ? "block" : "none", t.sldB.style.position = "absolute", t.sldB.style.right = d.padding + "px", t.sldB.style.top = d.padding + "px", t.sldB.style.border = d.insetWidth + "px solid", t.sldB.style.borderColor = d.insetColor, t.sldM._jscInstance = d, t.sldM._jscControlName = "sld", t.sldM.style.display = n ? "block" : "none", t.sldM.style.position = "absolute", t.sldM.style.right = "0", t.sldM.style.top = "0", t.sldM.style.width = d.sliderSize + s / 2 + d.padding + 2 * d.insetWidth + "px", t.sldM.style.height = r[1] + "px", t.sldM.style.cursor = "default", t.sldPtrIB.style.border = t.sldPtrOB.style.border = d.pointerBorderWidth + "px solid " + d.pointerBorderColor, t.sldPtrOB.style.position = "absolute", t.sldPtrOB.style.left = -(2 * d.pointerBorderWidth + d.pointerThickness) + "px", t.sldPtrOB.style.top = "0", t.sldPtrMB.style.border = d.pointerThickness + "px solid " + d.pointerColor, t.sldPtrS.style.width = d.sliderSize + "px", t.sldPtrS.style.height = m + "px", t.btn.style.display = d.closable ? "block" : "none", t.btn.style.position = "absolute", t.btn.style.left = d.padding + "px", t.btn.style.bottom = d.padding + "px", t.btn.style.padding = "0 15px", t.btn.style.height = d.buttonHeight + "px", t.btn.style.border = d.insetWidth + "px solid", l(), t.btn.style.color = d.buttonColor, t.btn.style.font = "12px sans-serif", t.btn.style.textAlign = "center";

          try {
            t.btn.style.cursor = "pointer";
          } catch (c) {
            t.btn.style.cursor = "hand";
          }

          t.btn.onmousedown = function () {
            d.hide();
          }, t.btnT.style.lineHeight = d.buttonHeight + "px", t.btnT.innerHTML = "", t.btnT.appendChild(document.createTextNode(d.closeText)), a(), f(), e.picker.owner && e.picker.owner !== d && e.unsetClass(e.picker.owner.targetElement, d.activeClass), e.picker.owner = d, e.isElementType(v, "body") ? e.redrawPosition() : e._drawPosition(d, 0, 0, "relative", !1), t.wrap.parentNode != v && v.appendChild(t.wrap), e.setClass(d.targetElement, d.activeClass);
        }

        function a() {
          switch (e.getPadYComponent(d)) {
            case "s":
              var t = 1;
              break;

            case "v":
              var t = 2;
          }

          var n = Math.round(d.hsv[0] / 360 * (d.width - 1)),
              r = Math.round((1 - d.hsv[t] / 100) * (d.height - 1)),
              i = 2 * d.pointerBorderWidth + d.pointerThickness + 2 * d.crossSize,
              o = -Math.floor(i / 2);
          e.picker.cross.style.left = n + o + "px", e.picker.cross.style.top = r + o + "px";

          switch (e.getSliderComponent(d)) {
            case "s":
              var u = s(d.hsv[0], 100, d.hsv[2]),
                  a = s(d.hsv[0], 0, d.hsv[2]),
                  f = "rgb(" + Math.round(u[0]) + "," + Math.round(u[1]) + "," + Math.round(u[2]) + ")",
                  l = "rgb(" + Math.round(a[0]) + "," + Math.round(a[1]) + "," + Math.round(a[2]) + ")";
              e.picker.sldGrad.draw(d.sliderSize, d.height, f, l);
              break;

            case "v":
              var c = s(d.hsv[0], d.hsv[1], 100),
                  f = "rgb(" + Math.round(c[0]) + "," + Math.round(c[1]) + "," + Math.round(c[2]) + ")",
                  l = "#000";
              e.picker.sldGrad.draw(d.sliderSize, d.height, f, l);
          }
        }

        function f() {
          var t = e.getSliderComponent(d);

          if (t) {
            switch (t) {
              case "s":
                var n = 1;
                break;

              case "v":
                var n = 2;
            }

            var r = Math.round((1 - d.hsv[n] / 100) * (d.height - 1));
            e.picker.sldPtrOB.style.top = r - (2 * d.pointerBorderWidth + d.pointerThickness) - Math.floor(m / 2) + "px";
          }
        }

        function l() {
          return e.picker && e.picker.owner === d;
        }

        function c() {
          d.importColor();
        }

        this.value = null, this.valueElement = t, this.styleElement = t, this.required = !0, this.refine = !0, this.hash = !1, this.uppercase = !0, this.onFineChange = null, this.activeClass = "jscolor-active", this.minS = 0, this.maxS = 100, this.minV = 0, this.maxV = 100, this.hsv = [0, 0, 100], this.rgb = [255, 255, 255], this.width = 181, this.height = 101, this.showOnClick = !0, this.mode = "HSV", this.position = "bottom", this.smartPosition = !0, this.sliderSize = 16, this.crossSize = 8, this.closable = !1, this.closeText = "Close", this.buttonColor = "#000000", this.buttonHeight = 18, this.padding = 12, this.backgroundColor = "#FFFFFF", this.borderWidth = 1, this.borderColor = "#BBBBBB", this.borderRadius = 8, this.insetWidth = 1, this.insetColor = "#BBBBBB", this.shadow = !0, this.shadowBlur = 15, this.shadowColor = "rgba(0,0,0,0.2)", this.pointerColor = "#4C4C4C", this.pointerBorderColor = "#FFFFFF", this.pointerBorderWidth = 1, this.pointerThickness = 2, this.zIndex = 1e3, this.container = null;

        for (var r in n) {
          n.hasOwnProperty(r) && (this[r] = n[r]);
        }

        this.hide = function () {
          l() && o();
        }, this.show = function () {
          u();
        }, this.redraw = function () {
          l() && u();
        }, this.importColor = function () {
          this.valueElement ? e.isElementType(this.valueElement, "input") ? this.refine ? !this.required && /^\s*$/.test(this.valueElement.value) ? (this.valueElement.value = "", this.styleElement && (this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage, this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor, this.styleElement.style.color = this.styleElement._jscOrigStyle.color), this.exportColor(e.leaveValue | e.leaveStyle)) : this.fromString(this.valueElement.value) || this.exportColor() : this.fromString(this.valueElement.value, e.leaveValue) || (this.styleElement && (this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage, this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor, this.styleElement.style.color = this.styleElement._jscOrigStyle.color), this.exportColor(e.leaveValue | e.leaveStyle)) : this.exportColor() : this.exportColor();
        }, this.exportColor = function (t) {
          if (!(t & e.leaveValue) && this.valueElement) {
            var n = this.toString();
            this.uppercase && (n = n.toUpperCase()), this.hash && (n = "#" + n), e.isElementType(this.valueElement, "input") ? this.valueElement.value = n : this.valueElement.innerHTML = n;
          }

          t & e.leaveStyle || this.styleElement && (this.styleElement.style.backgroundImage = "none", this.styleElement.style.backgroundColor = "#" + this.toString(), this.styleElement.style.color = this.isLight() ? "#000" : "#FFF"), !(t & e.leavePad) && l() && a(), !(t & e.leaveSld) && l() && f();
        }, this.fromHSV = function (e, t, n, r) {
          if (e !== null) {
            if (isNaN(e)) return !1;
            e = Math.max(0, Math.min(360, e));
          }

          if (t !== null) {
            if (isNaN(t)) return !1;
            t = Math.max(0, Math.min(100, this.maxS, t), this.minS);
          }

          if (n !== null) {
            if (isNaN(n)) return !1;
            n = Math.max(0, Math.min(100, this.maxV, n), this.minV);
          }

          this.rgb = s(e === null ? this.hsv[0] : this.hsv[0] = e, t === null ? this.hsv[1] : this.hsv[1] = t, n === null ? this.hsv[2] : this.hsv[2] = n), this.exportColor(r);
        }, this.fromRGB = function (e, t, n, r) {
          if (e !== null) {
            if (isNaN(e)) return !1;
            e = Math.max(0, Math.min(255, e));
          }

          if (t !== null) {
            if (isNaN(t)) return !1;
            t = Math.max(0, Math.min(255, t));
          }

          if (n !== null) {
            if (isNaN(n)) return !1;
            n = Math.max(0, Math.min(255, n));
          }

          var o = i(e === null ? this.rgb[0] : e, t === null ? this.rgb[1] : t, n === null ? this.rgb[2] : n);
          o[0] !== null && (this.hsv[0] = Math.max(0, Math.min(360, o[0]))), o[2] !== 0 && (this.hsv[1] = o[1] === null ? null : Math.max(0, this.minS, Math.min(100, this.maxS, o[1]))), this.hsv[2] = o[2] === null ? null : Math.max(0, this.minV, Math.min(100, this.maxV, o[2]));
          var u = s(this.hsv[0], this.hsv[1], this.hsv[2]);
          this.rgb[0] = u[0], this.rgb[1] = u[1], this.rgb[2] = u[2], this.exportColor(r);
        }, this.fromString = function (e, t) {
          var n;
          if (n = e.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i)) return n[1].length === 6 ? this.fromRGB(parseInt(n[1].substr(0, 2), 16), parseInt(n[1].substr(2, 2), 16), parseInt(n[1].substr(4, 2), 16), t) : this.fromRGB(parseInt(n[1].charAt(0) + n[1].charAt(0), 16), parseInt(n[1].charAt(1) + n[1].charAt(1), 16), parseInt(n[1].charAt(2) + n[1].charAt(2), 16), t), !0;

          if (n = e.match(/^\W*rgba?\(([^)]*)\)\W*$/i)) {
            var r = n[1].split(","),
                i = /^\s*(\d*)(\.\d+)?\s*$/,
                s,
                o,
                u;

            if (r.length >= 3 && (s = r[0].match(i)) && (o = r[1].match(i)) && (u = r[2].match(i))) {
              var a = parseFloat((s[1] || "0") + (s[2] || "")),
                  f = parseFloat((o[1] || "0") + (o[2] || "")),
                  l = parseFloat((u[1] || "0") + (u[2] || ""));
              return this.fromRGB(a, f, l, t), !0;
            }
          }

          return !1;
        }, this.toString = function () {
          return (256 | Math.round(this.rgb[0])).toString(16).substr(1) + (256 | Math.round(this.rgb[1])).toString(16).substr(1) + (256 | Math.round(this.rgb[2])).toString(16).substr(1);
        }, this.toHEXString = function () {
          return "#" + this.toString().toUpperCase();
        }, this.toRGBString = function () {
          return "rgb(" + Math.round(this.rgb[0]) + "," + Math.round(this.rgb[1]) + "," + Math.round(this.rgb[2]) + ")";
        }, this.isLight = function () {
          return .213 * this.rgb[0] + .715 * this.rgb[1] + .072 * this.rgb[2] > 127.5;
        }, this._processParentElementsInDOM = function () {
          if (this._linkedElementsProcessed) return;
          this._linkedElementsProcessed = !0;
          var t = this.targetElement;

          do {
            var n = e.getStyle(t);
            n && n.position.toLowerCase() === "fixed" && (this.fixed = !0), t !== this.targetElement && (t._jscEventsAttached || (e.attachEvent(t, "scroll", e.onParentScroll), t._jscEventsAttached = !0));
          } while ((t = t.parentNode) && !e.isElementType(t, "body"));
        };

        if (typeof t == "string") {
          var h = t,
              p = document.getElementById(h);
          p ? this.targetElement = p : e.warn("Could not find target element with ID '" + h + "'");
        } else t ? this.targetElement = t : e.warn("Invalid target element: '" + t + "'");

        if (this.targetElement._jscLinkedInstance) {
          e.warn("Cannot link jscolor twice to the same element. Skipping.");
          return;
        }

        this.targetElement._jscLinkedInstance = this, this.valueElement = e.fetchElement(this.valueElement), this.styleElement = e.fetchElement(this.styleElement);
        var d = this,
            v = this.container ? e.fetchElement(this.container) : document.getElementsByTagName("body")[0],
            m = 3;
        if (e.isElementType(this.targetElement, "button")) if (this.targetElement.onclick) {
          var g = this.targetElement.onclick;

          this.targetElement.onclick = function (e) {
            return g.call(this, e), !1;
          };
        } else this.targetElement.onclick = function () {
          return !1;
        };

        if (this.valueElement && e.isElementType(this.valueElement, "input")) {
          var y = function y() {
            d.fromString(d.valueElement.value, e.leaveValue), e.dispatchFineChange(d);
          };

          e.attachEvent(this.valueElement, "keyup", y), e.attachEvent(this.valueElement, "input", y), e.attachEvent(this.valueElement, "blur", c), this.valueElement.setAttribute("autocomplete", "off");
        }

        this.styleElement && (this.styleElement._jscOrigStyle = {
          backgroundImage: this.styleElement.style.backgroundImage,
          backgroundColor: this.styleElement.style.backgroundColor,
          color: this.styleElement.style.color
        }), this.value ? this.fromString(this.value) || this.exportColor() : this.importColor();
      }
    };
    return e.jscolor.lookupClass = "jscolor", e.jscolor.installByClassName = function (t) {
      var n = document.getElementsByTagName("input"),
          r = document.getElementsByTagName("button");
      e.tryInstallOnElements(n, t), e.tryInstallOnElements(r, t);
    }, e.register(), e.jscolor;
  }());
}

;
module.exports = jscolor();

/***/ }),

/***/ "./assets/swiper.js":
/*!**************************!*\
  !*** ./assets/swiper.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Swiper 3.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: February 7, 2016
 */
function swiper() {
  (function () {
    'use strict';

    var $;
    /*===========================
    Swiper
    ===========================*/

    var Swiper = function Swiper(container, params) {
      if (!(this instanceof Swiper)) return new Swiper(container, params);
      var defaults = {
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        // autoplay
        autoplay: false,
        autoplayDisableOnInteraction: true,
        autoplayStopOnLast: false,
        // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
        iOSEdgeSwipeDetection: false,
        iOSEdgeSwipeThreshold: 20,
        // Free mode
        freeMode: false,
        freeModeMomentum: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 1,
        freeModeSticky: false,
        freeModeMinimumVelocity: 0.02,
        // Autoheight
        autoHeight: false,
        // Set wrapper width
        setWrapperSize: false,
        // Virtual Translate
        virtualTranslate: false,
        // Effects
        effect: 'slide',
        // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
        coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        flip: {
          slideShadows: true,
          limitRotation: true
        },
        cube: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94
        },
        fade: {
          crossFade: false
        },
        // Parallax
        parallax: false,
        // Scrollbar
        scrollbar: null,
        scrollbarHide: true,
        scrollbarDraggable: false,
        scrollbarSnapOnRelease: false,
        // Keyboard Mousewheel
        keyboardControl: false,
        mousewheelControl: false,
        mousewheelReleaseOnEdges: false,
        mousewheelInvert: false,
        mousewheelForceToAxis: false,
        mousewheelSensitivity: 1,
        // Hash Navigation
        hashnav: false,
        // Breakpoints
        breakpoints: undefined,
        // Slides grid
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        centeredSlides: false,
        slidesOffsetBefore: 0,
        // in px
        slidesOffsetAfter: 0,
        // in px
        // Round length
        roundLengths: false,
        // Touches
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        onlyExternal: false,
        threshold: 0,
        touchMoveStopPropagation: true,
        // Unique Navigation Elements
        uniqueNavElements: true,
        // Pagination
        pagination: null,
        paginationElement: 'span',
        paginationClickable: false,
        paginationHide: false,
        paginationBulletRender: null,
        paginationProgressRender: null,
        paginationFractionRender: null,
        paginationCustomRender: null,
        paginationType: 'bullets',
        // 'bullets' or 'progress' or 'fraction' or 'custom'
        // Resistance
        resistance: true,
        resistanceRatio: 0.85,
        // Next/prev buttons
        nextButton: null,
        prevButton: null,
        // Progress
        watchSlidesProgress: false,
        watchSlidesVisibility: false,
        // Cursor
        grabCursor: false,
        // Clicks
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        // Lazy Loading
        lazyLoading: false,
        lazyLoadingInPrevNext: false,
        lazyLoadingInPrevNextAmount: 1,
        lazyLoadingOnTransitionStart: false,
        // Images
        preloadImages: true,
        updateOnImagesReady: true,
        // loop
        loop: false,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        // Control
        control: undefined,
        controlInverse: false,
        controlBy: 'slide',
        //or 'container'
        // Swiping/no swiping
        allowSwipeToPrev: true,
        allowSwipeToNext: true,
        swipeHandler: null,
        //'.swipe-handler',
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        // NS
        slideClass: 'swiper-slide',
        slideActiveClass: 'swiper-slide-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slidePrevClass: 'swiper-slide-prev',
        wrapperClass: 'swiper-wrapper',
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        buttonDisabledClass: 'swiper-button-disabled',
        paginationCurrentClass: 'swiper-pagination-current',
        paginationTotalClass: 'swiper-pagination-total',
        paginationHiddenClass: 'swiper-pagination-hidden',
        paginationProgressbarClass: 'swiper-pagination-progressbar',
        // Observer
        observer: false,
        observeParents: false,
        // Accessibility
        a11y: false,
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
        // Callbacks
        runCallbacksOnInit: true
        /*
        Callbacks:
        onInit: function (swiper)
        onDestroy: function (swiper)
        onClick: function (swiper, e)
        onTap: function (swiper, e)
        onDoubleTap: function (swiper, e)
        onSliderMove: function (swiper, e)
        onSlideChangeStart: function (swiper)
        onSlideChangeEnd: function (swiper)
        onTransitionStart: function (swiper)
        onTransitionEnd: function (swiper)
        onImagesReady: function (swiper)
        onProgress: function (swiper, progress)
        onTouchStart: function (swiper, e)
        onTouchMove: function (swiper, e)
        onTouchMoveOpposite: function (swiper, e)
        onTouchEnd: function (swiper, e)
        onReachBeginning: function (swiper)
        onReachEnd: function (swiper)
        onSetTransition: function (swiper, duration)
        onSetTranslate: function (swiper, translate)
        onAutoplayStart: function (swiper)
        onAutoplayStop: function (swiper),
        onLazyImageLoad: function (swiper, slide, image)
        onLazyImageReady: function (swiper, slide, image)
        */

      };
      var initialVirtualTranslate = params && params.virtualTranslate;
      params = params || {};
      var originalParams = {};

      for (var param in params) {
        if (_typeof(params[param]) === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || typeof Dom7 !== 'undefined' && params[param] instanceof Dom7 || typeof jQuery !== 'undefined' && params[param] instanceof jQuery)) {
          originalParams[param] = {};

          for (var deepParam in params[param]) {
            originalParams[param][deepParam] = params[param][deepParam];
          }
        } else {
          originalParams[param] = params[param];
        }
      }

      for (var def in defaults) {
        if (typeof params[def] === 'undefined') {
          params[def] = defaults[def];
        } else if (_typeof(params[def]) === 'object') {
          for (var deepDef in defaults[def]) {
            if (typeof params[def][deepDef] === 'undefined') {
              params[def][deepDef] = defaults[def][deepDef];
            }
          }
        }
      } // Swiper


      var s = this; // Params

      s.params = params;
      s.originalParams = originalParams; // Classname

      s.classNames = [];
      /*=========================
      Dom Library and plugins
      ===========================*/

      if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined') {
        $ = Dom7;
      }

      if (typeof $ === 'undefined') {
        if (typeof Dom7 === 'undefined') {
          $ = window.Dom7 || window.Zepto || window.jQuery;
        } else {
          $ = Dom7;
        }

        if (!$) return;
      } // Export it to Swiper instance


      s.$ = $;
      /*=========================
      Breakpoints
      ===========================*/

      s.currentBreakpoint = undefined;

      s.getActiveBreakpoint = function () {
        //Get breakpoint for window width
        if (!s.params.breakpoints) return false;
        var breakpoint = false;
        var points = [],
            point;

        for (point in s.params.breakpoints) {
          if (s.params.breakpoints.hasOwnProperty(point)) {
            points.push(point);
          }
        }

        points.sort(function (a, b) {
          return parseInt(a, 10) > parseInt(b, 10);
        });

        for (var i = 0; i < points.length; i++) {
          point = points[i];

          if (point >= window.innerWidth && !breakpoint) {
            breakpoint = point;
          }
        }

        return breakpoint || 'max';
      };

      s.setBreakpoint = function () {
        //Set breakpoint for window width and update parameters
        var breakpoint = s.getActiveBreakpoint();

        if (breakpoint && s.currentBreakpoint !== breakpoint) {
          var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
          var needsReLoop = s.params.loop && breakPointsParams.slidesPerView !== s.params.slidesPerView;

          for (var param in breakPointsParams) {
            s.params[param] = breakPointsParams[param];
          }

          s.currentBreakpoint = breakpoint;

          if (needsReLoop && s.destroyLoop) {
            s.reLoop(true);
          }
        }
      }; // Set breakpoint on load


      if (s.params.breakpoints) {
        s.setBreakpoint();
      }
      /*=========================
      Preparation - Define Container, Wrapper and Pagination
      ===========================*/


      s.container = $(container);
      if (s.container.length === 0) return;

      if (s.container.length > 1) {
        var swipers = [];
        s.container.each(function () {
          var container = this;
          swipers.push(new Swiper(this, params));
        });
        return swipers;
      } // Save instance in container HTML Element and in data


      s.container[0].swiper = s;
      s.container.data('swiper', s);
      s.classNames.push('swiper-container-' + s.params.direction);

      if (s.params.freeMode) {
        s.classNames.push('swiper-container-free-mode');
      }

      if (!s.support.flexbox) {
        s.classNames.push('swiper-container-no-flexbox');
        s.params.slidesPerColumn = 1;
      }

      if (s.params.autoHeight) {
        s.classNames.push('swiper-container-autoheight');
      } // Enable slides progress when required


      if (s.params.parallax || s.params.watchSlidesVisibility) {
        s.params.watchSlidesProgress = true;
      } // Coverflow / 3D


      if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
        if (s.support.transforms3d) {
          s.params.watchSlidesProgress = true;
          s.classNames.push('swiper-container-3d');
        } else {
          s.params.effect = 'slide';
        }
      }

      if (s.params.effect !== 'slide') {
        s.classNames.push('swiper-container-' + s.params.effect);
      }

      if (s.params.effect === 'cube') {
        s.params.resistanceRatio = 0;
        s.params.slidesPerView = 1;
        s.params.slidesPerColumn = 1;
        s.params.slidesPerGroup = 1;
        s.params.centeredSlides = false;
        s.params.spaceBetween = 0;
        s.params.virtualTranslate = true;
        s.params.setWrapperSize = false;
      }

      if (s.params.effect === 'fade' || s.params.effect === 'flip') {
        s.params.slidesPerView = 1;
        s.params.slidesPerColumn = 1;
        s.params.slidesPerGroup = 1;
        s.params.watchSlidesProgress = true;
        s.params.spaceBetween = 0;
        s.params.setWrapperSize = false;

        if (typeof initialVirtualTranslate === 'undefined') {
          s.params.virtualTranslate = true;
        }
      } // Grab Cursor


      if (s.params.grabCursor && s.support.touch) {
        s.params.grabCursor = false;
      } // Wrapper


      s.wrapper = s.container.children('.' + s.params.wrapperClass); // Pagination

      if (s.params.pagination) {
        s.paginationContainer = $(s.params.pagination);

        if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
          s.paginationContainer = s.container.find(s.params.pagination);
        }

        if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
          s.paginationContainer.addClass('swiper-pagination-clickable');
        } else {
          s.params.paginationClickable = false;
        }

        s.paginationContainer.addClass('swiper-pagination-' + s.params.paginationType);
      } // Next/Prev Buttons


      if (s.params.nextButton || s.params.prevButton) {
        if (s.params.nextButton) {
          s.nextButton = $(s.params.nextButton);

          if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
            s.nextButton = s.container.find(s.params.nextButton);
          }
        }

        if (s.params.prevButton) {
          s.prevButton = $(s.params.prevButton);

          if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
            s.prevButton = s.container.find(s.params.prevButton);
          }
        }
      } // Is Horizontal


      s.isHorizontal = function () {
        return s.params.direction === 'horizontal';
      }; // s.isH = isH;
      // RTL


      s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');

      if (s.rtl) {
        s.classNames.push('swiper-container-rtl');
      } // Wrong RTL support


      if (s.rtl) {
        s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
      } // Columns


      if (s.params.slidesPerColumn > 1) {
        s.classNames.push('swiper-container-multirow');
      } // Check for Android


      if (s.device.android) {
        s.classNames.push('swiper-container-android');
      } // Add classes


      s.container.addClass(s.classNames.join(' ')); // Translate

      s.translate = 0; // Progress

      s.progress = 0; // Velocity

      s.velocity = 0;
      /*=========================
      Locks, unlocks
      ===========================*/

      s.lockSwipeToNext = function () {
        s.params.allowSwipeToNext = false;
      };

      s.lockSwipeToPrev = function () {
        s.params.allowSwipeToPrev = false;
      };

      s.lockSwipes = function () {
        s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
      };

      s.unlockSwipeToNext = function () {
        s.params.allowSwipeToNext = true;
      };

      s.unlockSwipeToPrev = function () {
        s.params.allowSwipeToPrev = true;
      };

      s.unlockSwipes = function () {
        s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
      };
      /*=========================
      Round helper
      ===========================*/


      function round(a) {
        return Math.floor(a);
      }
      /*=========================
      Set grab cursor
      ===========================*/


      if (s.params.grabCursor) {
        s.container[0].style.cursor = 'move';
        s.container[0].style.cursor = '-webkit-grab';
        s.container[0].style.cursor = '-moz-grab';
        s.container[0].style.cursor = 'grab';
      }
      /*=========================
      Update on Images Ready
      ===========================*/


      s.imagesToLoad = [];
      s.imagesLoaded = 0;

      s.loadImage = function (imgElement, src, srcset, checkForComplete, callback) {
        var image;

        function onReady() {
          if (callback) callback();
        }

        if (!imgElement.complete || !checkForComplete) {
          if (src) {
            image = new window.Image();
            image.onload = onReady;
            image.onerror = onReady;

            if (srcset) {
              image.srcset = srcset;
            }

            if (src) {
              image.src = src;
            }
          } else {
            onReady();
          }
        } else {
          //image already loaded...
          onReady();
        }
      };

      s.preloadImages = function () {
        s.imagesToLoad = s.container.find('img');

        function _onReady() {
          if (typeof s === 'undefined' || s === null) return;
          if (s.imagesLoaded !== undefined) s.imagesLoaded++;

          if (s.imagesLoaded === s.imagesToLoad.length) {
            if (s.params.updateOnImagesReady) s.update();
            s.emit('onImagesReady', s);
          }
        }

        for (var i = 0; i < s.imagesToLoad.length; i++) {
          s.loadImage(s.imagesToLoad[i], s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src'), s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset'), true, _onReady);
        }
      };
      /*=========================
      Autoplay
      ===========================*/


      s.autoplayTimeoutId = undefined;
      s.autoplaying = false;
      s.autoplayPaused = false;

      function autoplay() {
        s.autoplayTimeoutId = setTimeout(function () {
          if (s.params.loop) {
            s.fixLoop();

            s._slideNext();

            s.emit('onAutoplay', s);
          } else {
            if (!s.isEnd) {
              s._slideNext();

              s.emit('onAutoplay', s);
            } else {
              if (!params.autoplayStopOnLast) {
                s._slideTo(0);

                s.emit('onAutoplay', s);
              } else {
                s.stopAutoplay();
              }
            }
          }
        }, s.params.autoplay);
      }

      s.startAutoplay = function () {
        if (typeof s.autoplayTimeoutId !== 'undefined') return false;
        if (!s.params.autoplay) return false;
        if (s.autoplaying) return false;
        s.autoplaying = true;
        s.emit('onAutoplayStart', s);
        autoplay();
      };

      s.stopAutoplay = function (internal) {
        if (!s.autoplayTimeoutId) return;
        if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
        s.autoplaying = false;
        s.autoplayTimeoutId = undefined;
        s.emit('onAutoplayStop', s);
      };

      s.pauseAutoplay = function (speed) {
        if (s.autoplayPaused) return;
        if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
        s.autoplayPaused = true;

        if (speed === 0) {
          s.autoplayPaused = false;
          autoplay();
        } else {
          s.wrapper.transitionEnd(function () {
            if (!s) return;
            s.autoplayPaused = false;

            if (!s.autoplaying) {
              s.stopAutoplay();
            } else {
              autoplay();
            }
          });
        }
      };
      /*=========================
      Min/Max Translate
      ===========================*/


      s.minTranslate = function () {
        return -s.snapGrid[0];
      };

      s.maxTranslate = function () {
        return -s.snapGrid[s.snapGrid.length - 1];
      };
      /*=========================
      Slider/slides sizes
      ===========================*/


      s.updateAutoHeight = function () {
        // Update Height
        var slide = s.slides.eq(s.activeIndex)[0];

        if (typeof slide !== 'undefined') {
          var newHeight = slide.offsetHeight;
          if (newHeight) s.wrapper.css('height', newHeight + 'px');
        }
      };

      s.updateContainerSize = function () {
        var width, height;

        if (typeof s.params.width !== 'undefined') {
          width = s.params.width;
        } else {
          width = s.container[0].clientWidth;
        }

        if (typeof s.params.height !== 'undefined') {
          height = s.params.height;
        } else {
          height = s.container[0].clientHeight;
        }

        if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
          return;
        } //Subtract paddings


        width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
        height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10); // Store values

        s.width = width;
        s.height = height;
        s.size = s.isHorizontal() ? s.width : s.height;
      };

      s.updateSlidesSize = function () {
        s.slides = s.wrapper.children('.' + s.params.slideClass);
        s.snapGrid = [];
        s.slidesGrid = [];
        s.slidesSizesGrid = [];
        var spaceBetween = s.params.spaceBetween,
            slidePosition = -s.params.slidesOffsetBefore,
            i,
            prevSlideSize = 0,
            index = 0;
        if (typeof s.size === 'undefined') return;

        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
          spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
        }

        s.virtualSize = -spaceBetween; // reset margins

        if (s.rtl) s.slides.css({
          marginLeft: '',
          marginTop: ''
        });else s.slides.css({
          marginRight: '',
          marginBottom: ''
        });
        var slidesNumberEvenToRows;

        if (s.params.slidesPerColumn > 1) {
          if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
            slidesNumberEvenToRows = s.slides.length;
          } else {
            slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
          }

          if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
            slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
          }
        } // Calc slides


        var slideSize;
        var slidesPerColumn = s.params.slidesPerColumn;
        var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
        var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);

        for (i = 0; i < s.slides.length; i++) {
          slideSize = 0;
          var slide = s.slides.eq(i);

          if (s.params.slidesPerColumn > 1) {
            // Set slides order
            var newSlideOrderIndex;
            var column, row;

            if (s.params.slidesPerColumnFill === 'column') {
              column = Math.floor(i / slidesPerColumn);
              row = i - column * slidesPerColumn;

              if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
                if (++row >= slidesPerColumn) {
                  row = 0;
                  column++;
                }
              }

              newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
              slide.css({
                '-webkit-box-ordinal-group': newSlideOrderIndex,
                '-moz-box-ordinal-group': newSlideOrderIndex,
                '-ms-flex-order': newSlideOrderIndex,
                '-webkit-order': newSlideOrderIndex,
                'order': newSlideOrderIndex
              });
            } else {
              row = Math.floor(i / slidesPerRow);
              column = i - row * slidesPerRow;
            }

            slide.css({
              'margin-top': row !== 0 && s.params.spaceBetween && s.params.spaceBetween + 'px'
            }).attr('data-swiper-column', column).attr('data-swiper-row', row);
          }

          if (slide.css('display') === 'none') continue;

          if (s.params.slidesPerView === 'auto') {
            slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
            if (s.params.roundLengths) slideSize = round(slideSize);
          } else {
            slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
            if (s.params.roundLengths) slideSize = round(slideSize);

            if (s.isHorizontal()) {
              s.slides[i].style.width = slideSize + 'px';
            } else {
              s.slides[i].style.height = slideSize + 'px';
            }
          }

          s.slides[i].swiperSlideSize = slideSize;
          s.slidesSizesGrid.push(slideSize);

          if (s.params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
            if (index % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
            s.slidesGrid.push(slidePosition);
          } else {
            if (index % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
            s.slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
          }

          s.virtualSize += slideSize + spaceBetween;
          prevSlideSize = slideSize;
          index++;
        }

        s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
        var newSlidesGrid;

        if (s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
          s.wrapper.css({
            width: s.virtualSize + s.params.spaceBetween + 'px'
          });
        }

        if (!s.support.flexbox || s.params.setWrapperSize) {
          if (s.isHorizontal()) s.wrapper.css({
            width: s.virtualSize + s.params.spaceBetween + 'px'
          });else s.wrapper.css({
            height: s.virtualSize + s.params.spaceBetween + 'px'
          });
        }

        if (s.params.slidesPerColumn > 1) {
          s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
          s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
          s.wrapper.css({
            width: s.virtualSize + s.params.spaceBetween + 'px'
          });

          if (s.params.centeredSlides) {
            newSlidesGrid = [];

            for (i = 0; i < s.snapGrid.length; i++) {
              if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
            }

            s.snapGrid = newSlidesGrid;
          }
        } // Remove last grid elements depending on width


        if (!s.params.centeredSlides) {
          newSlidesGrid = [];

          for (i = 0; i < s.snapGrid.length; i++) {
            if (s.snapGrid[i] <= s.virtualSize - s.size) {
              newSlidesGrid.push(s.snapGrid[i]);
            }
          }

          s.snapGrid = newSlidesGrid;

          if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
            s.snapGrid.push(s.virtualSize - s.size);
          }
        }

        if (s.snapGrid.length === 0) s.snapGrid = [0];

        if (s.params.spaceBetween !== 0) {
          if (s.isHorizontal()) {
            if (s.rtl) s.slides.css({
              marginLeft: spaceBetween + 'px'
            });else s.slides.css({
              marginRight: spaceBetween + 'px'
            });
          } else s.slides.css({
            marginBottom: spaceBetween + 'px'
          });
        }

        if (s.params.watchSlidesProgress) {
          s.updateSlidesOffset();
        }
      };

      s.updateSlidesOffset = function () {
        for (var i = 0; i < s.slides.length; i++) {
          s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
        }
      };
      /*=========================
      Slider/slides progress
      ===========================*/


      s.updateSlidesProgress = function (translate) {
        if (typeof translate === 'undefined') {
          translate = s.translate || 0;
        }

        if (s.slides.length === 0) return;
        if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
        var offsetCenter = -translate;
        if (s.rtl) offsetCenter = translate; // Visible Slides

        s.slides.removeClass(s.params.slideVisibleClass);

        for (var i = 0; i < s.slides.length; i++) {
          var slide = s.slides[i];
          var slideProgress = (offsetCenter - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);

          if (s.params.watchSlidesVisibility) {
            var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
            var slideAfter = slideBefore + s.slidesSizesGrid[i];
            var isVisible = slideBefore >= 0 && slideBefore < s.size || slideAfter > 0 && slideAfter <= s.size || slideBefore <= 0 && slideAfter >= s.size;

            if (isVisible) {
              s.slides.eq(i).addClass(s.params.slideVisibleClass);
            }
          }

          slide.progress = s.rtl ? -slideProgress : slideProgress;
        }
      };

      s.updateProgress = function (translate) {
        if (typeof translate === 'undefined') {
          translate = s.translate || 0;
        }

        var translatesDiff = s.maxTranslate() - s.minTranslate();
        var wasBeginning = s.isBeginning;
        var wasEnd = s.isEnd;

        if (translatesDiff === 0) {
          s.progress = 0;
          s.isBeginning = s.isEnd = true;
        } else {
          s.progress = (translate - s.minTranslate()) / translatesDiff;
          s.isBeginning = s.progress <= 0;
          s.isEnd = s.progress >= 1;
        }

        if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
        if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
        if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
        s.emit('onProgress', s, s.progress);
      };

      s.updateActiveIndex = function () {
        var translate = s.rtl ? s.translate : -s.translate;
        var newActiveIndex, i, snapIndex;

        for (i = 0; i < s.slidesGrid.length; i++) {
          if (typeof s.slidesGrid[i + 1] !== 'undefined') {
            if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
              newActiveIndex = i;
            } else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
              newActiveIndex = i + 1;
            }
          } else {
            if (translate >= s.slidesGrid[i]) {
              newActiveIndex = i;
            }
          }
        } // Normalize slideIndex


        if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0; // for (i = 0; i < s.slidesGrid.length; i++) {
        // if (- translate >= s.slidesGrid[i]) {
        // newActiveIndex = i;
        // }
        // }

        snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
        if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;

        if (newActiveIndex === s.activeIndex) {
          return;
        }

        s.snapIndex = snapIndex;
        s.previousIndex = s.activeIndex;
        s.activeIndex = newActiveIndex;
        s.updateClasses();
      };
      /*=========================
      Classes
      ===========================*/


      s.updateClasses = function () {
        s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass);
        var activeSlide = s.slides.eq(s.activeIndex); // Active classes

        activeSlide.addClass(s.params.slideActiveClass); // Next Slide

        var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);

        if (s.params.loop && nextSlide.length === 0) {
          s.slides.eq(0).addClass(s.params.slideNextClass);
        } // Prev Slide


        var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);

        if (s.params.loop && prevSlide.length === 0) {
          s.slides.eq(-1).addClass(s.params.slidePrevClass);
        } // Pagination


        if (s.paginationContainer && s.paginationContainer.length > 0) {
          // Current/Total
          var current,
              total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;

          if (s.params.loop) {
            current = Math.ceil((s.activeIndex - s.loopedSlides) / s.params.slidesPerGroup);

            if (current > s.slides.length - 1 - s.loopedSlides * 2) {
              current = current - (s.slides.length - s.loopedSlides * 2);
            }

            if (current > total - 1) current = current - total;
            if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
          } else {
            if (typeof s.snapIndex !== 'undefined') {
              current = s.snapIndex;
            } else {
              current = s.activeIndex || 0;
            }
          } // Types


          if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
            s.bullets.removeClass(s.params.bulletActiveClass);

            if (s.paginationContainer.length > 1) {
              s.bullets.each(function () {
                if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
              });
            } else {
              s.bullets.eq(current).addClass(s.params.bulletActiveClass);
            }
          }

          if (s.params.paginationType === 'fraction') {
            s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
            s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
          }

          if (s.params.paginationType === 'progress') {
            var scale = (current + 1) / total,
                scaleX = scale,
                scaleY = 1;

            if (!s.isHorizontal()) {
              scaleY = scale;
              scaleX = 1;
            }

            s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
          }

          if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
            s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
            s.emit('onPaginationRendered', s, s.paginationContainer[0]);
          }
        } // Next/active buttons


        if (!s.params.loop) {
          if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
            if (s.isBeginning) {
              s.prevButton.addClass(s.params.buttonDisabledClass);
              if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
            } else {
              s.prevButton.removeClass(s.params.buttonDisabledClass);
              if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
            }
          }

          if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
            if (s.isEnd) {
              s.nextButton.addClass(s.params.buttonDisabledClass);
              if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
            } else {
              s.nextButton.removeClass(s.params.buttonDisabledClass);
              if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
            }
          }
        }
      };
      /*=========================
      Pagination
      ===========================*/


      s.updatePagination = function () {
        if (!s.params.pagination) return;

        if (s.paginationContainer && s.paginationContainer.length > 0) {
          var paginationHTML = '';

          if (s.params.paginationType === 'bullets') {
            var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;

            for (var i = 0; i < numberOfBullets; i++) {
              if (s.params.paginationBulletRender) {
                paginationHTML += s.params.paginationBulletRender(i, s.params.bulletClass);
              } else {
                paginationHTML += '<' + s.params.paginationElement + ' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
              }
            }

            s.paginationContainer.html(paginationHTML);
            s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);

            if (s.params.paginationClickable && s.params.a11y && s.a11y) {
              s.a11y.initPagination();
            }
          }

          if (s.params.paginationType === 'fraction') {
            if (s.params.paginationFractionRender) {
              paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
            } else {
              paginationHTML = '<span class="' + s.params.paginationCurrentClass + '"></span>' + ' / ' + '<span class="' + s.params.paginationTotalClass + '"></span>';
            }

            s.paginationContainer.html(paginationHTML);
          }

          if (s.params.paginationType === 'progress') {
            if (s.params.paginationProgressRender) {
              paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
            } else {
              paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
            }

            s.paginationContainer.html(paginationHTML);
          }

          if (s.params.paginationType !== 'custom') {
            s.emit('onPaginationRendered', s, s.paginationContainer[0]);
          }
        }
      };
      /*=========================
      Common update method
      ===========================*/


      s.update = function (updateTranslate) {
        s.updateContainerSize();
        s.updateSlidesSize();
        s.updateProgress();
        s.updatePagination();
        s.updateClasses();

        if (s.params.scrollbar && s.scrollbar) {
          s.scrollbar.set();
        }

        function forceSetTranslate() {
          newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
          s.setWrapperTranslate(newTranslate);
          s.updateActiveIndex();
          s.updateClasses();
        }

        if (updateTranslate) {
          var translated, newTranslate;

          if (s.controller && s.controller.spline) {
            s.controller.spline = undefined;
          }

          if (s.params.freeMode) {
            forceSetTranslate();

            if (s.params.autoHeight) {
              s.updateAutoHeight();
            }
          } else {
            if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
              translated = s.slideTo(s.slides.length - 1, 0, false, true);
            } else {
              translated = s.slideTo(s.activeIndex, 0, false, true);
            }

            if (!translated) {
              forceSetTranslate();
            }
          }
        } else if (s.params.autoHeight) {
          s.updateAutoHeight();
        }
      };
      /*=========================
      Resize Handler
      ===========================*/


      s.onResize = function (forceUpdatePagination) {
        //Breakpoints
        if (s.params.breakpoints) {
          s.setBreakpoint();
        } // Disable locks on resize


        var allowSwipeToPrev = s.params.allowSwipeToPrev;
        var allowSwipeToNext = s.params.allowSwipeToNext;
        s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
        s.updateContainerSize();
        s.updateSlidesSize();
        if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();

        if (s.params.scrollbar && s.scrollbar) {
          s.scrollbar.set();
        }

        if (s.controller && s.controller.spline) {
          s.controller.spline = undefined;
        }

        var slideChangedBySlideTo = false;

        if (s.params.freeMode) {
          var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
          s.setWrapperTranslate(newTranslate);
          s.updateActiveIndex();
          s.updateClasses();

          if (s.params.autoHeight) {
            s.updateAutoHeight();
          }
        } else {
          s.updateClasses();

          if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
            slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
          } else {
            slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
          }
        }

        if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
          s.lazy.load();
        } // Return locks after resize


        s.params.allowSwipeToPrev = allowSwipeToPrev;
        s.params.allowSwipeToNext = allowSwipeToNext;
      };
      /*=========================
      Events
      ===========================*/
      //Define Touch Events


      var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
      if (window.navigator.pointerEnabled) desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];else if (window.navigator.msPointerEnabled) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
      s.touchEvents = {
        start: s.support.touch || !s.params.simulateTouch ? 'touchstart' : desktopEvents[0],
        move: s.support.touch || !s.params.simulateTouch ? 'touchmove' : desktopEvents[1],
        end: s.support.touch || !s.params.simulateTouch ? 'touchend' : desktopEvents[2]
      }; // WP8 Touch Events Fix

      if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
        (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
      } // Attach/detach events


      s.initEvents = function (detach) {
        var actionDom = detach ? 'off' : 'on';
        var action = detach ? 'removeEventListener' : 'addEventListener';
        var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
        var target = s.support.touch ? touchEventsTarget : document;
        var moveCapture = s.params.nested ? true : false; //Touch Events

        if (s.browser.ie) {
          touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
          target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
          target[action](s.touchEvents.end, s.onTouchEnd, false);
        } else {
          if (s.support.touch) {
            touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
            touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
            touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, false);
          }

          if (params.simulateTouch && !s.device.ios && !s.device.android) {
            touchEventsTarget[action]('mousedown', s.onTouchStart, false);
            document[action]('mousemove', s.onTouchMove, moveCapture);
            document[action]('mouseup', s.onTouchEnd, false);
          }
        }

        window[action]('resize', s.onResize); // Next, Prev, Index

        if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
          s.nextButton[actionDom]('click', s.onClickNext);
          if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
        }

        if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
          s.prevButton[actionDom]('click', s.onClickPrev);
          if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
        }

        if (s.params.pagination && s.params.paginationClickable) {
          s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
          if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
        } // Prevent Links Clicks


        if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
      };

      s.attachEvents = function () {
        s.initEvents();
      };

      s.detachEvents = function () {
        s.initEvents(true);
      };
      /*=========================
      Handle Clicks
      ===========================*/
      // Prevent Clicks


      s.allowClick = true;

      s.preventClicks = function (e) {
        if (!s.allowClick) {
          if (s.params.preventClicks) e.preventDefault();

          if (s.params.preventClicksPropagation && s.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
          }
        }
      }; // Clicks


      s.onClickNext = function (e) {
        e.preventDefault();
        if (s.isEnd && !s.params.loop) return;
        s.slideNext();
      };

      s.onClickPrev = function (e) {
        e.preventDefault();
        if (s.isBeginning && !s.params.loop) return;
        s.slidePrev();
      };

      s.onClickIndex = function (e) {
        e.preventDefault();
        var index = $(this).index() * s.params.slidesPerGroup;
        if (s.params.loop) index = index + s.loopedSlides;
        s.slideTo(index);
      };
      /*=========================
      Handle Touches
      ===========================*/


      function findElementInEvent(e, selector) {
        var el = $(e.target);

        if (!el.is(selector)) {
          if (typeof selector === 'string') {
            el = el.parents(selector);
          } else if (selector.nodeType) {
            var found;
            el.parents().each(function (index, _el) {
              if (_el === selector) found = selector;
            });
            if (!found) return undefined;else return selector;
          }
        }

        if (el.length === 0) {
          return undefined;
        }

        return el[0];
      }

      s.updateClickedSlide = function (e) {
        var slide = findElementInEvent(e, '.' + s.params.slideClass);
        var slideFound = false;

        if (slide) {
          for (var i = 0; i < s.slides.length; i++) {
            if (s.slides[i] === slide) slideFound = true;
          }
        }

        if (slide && slideFound) {
          s.clickedSlide = slide;
          s.clickedIndex = $(slide).index();
        } else {
          s.clickedSlide = undefined;
          s.clickedIndex = undefined;
          return;
        }

        if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
          var slideToIndex = s.clickedIndex,
              realIndex,
              duplicatedSlides;

          if (s.params.loop) {
            if (s.animating) return;
            realIndex = $(s.clickedSlide).attr('data-swiper-slide-index');

            if (s.params.centeredSlides) {
              if (slideToIndex < s.loopedSlides - s.params.slidesPerView / 2 || slideToIndex > s.slides.length - s.loopedSlides + s.params.slidesPerView / 2) {
                s.fixLoop();
                slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
                setTimeout(function () {
                  s.slideTo(slideToIndex);
                }, 0);
              } else {
                s.slideTo(slideToIndex);
              }
            } else {
              if (slideToIndex > s.slides.length - s.params.slidesPerView) {
                s.fixLoop();
                slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
                setTimeout(function () {
                  s.slideTo(slideToIndex);
                }, 0);
              } else {
                s.slideTo(slideToIndex);
              }
            }
          } else {
            s.slideTo(slideToIndex);
          }
        }
      };

      var isTouched,
          isMoved,
          allowTouchCallbacks,
          touchStartTime,
          isScrolling,
          currentTranslate,
          startTranslate,
          allowThresholdMove,
          // Form elements to match
      formElements = 'input, select, textarea, button',
          // Last click time
      lastClickTime = Date.now(),
          clickTimeout,
          //Velocities
      velocities = [],
          allowMomentumBounce; // Animating Flag

      s.animating = false; // Touches information

      s.touches = {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      }; // Touch handlers

      var isTouchEvent, startMoving;

      s.onTouchStart = function (e) {
        if (e.originalEvent) e = e.originalEvent;
        isTouchEvent = e.type === 'touchstart';
        if (!isTouchEvent && 'which' in e && e.which === 3) return;

        if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
          s.allowClick = true;
          return;
        }

        if (s.params.swipeHandler) {
          if (!findElementInEvent(e, s.params.swipeHandler)) return;
        }

        var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

        if (s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
          return;
        }

        isTouched = true;
        isMoved = false;
        allowTouchCallbacks = true;
        isScrolling = undefined;
        startMoving = undefined;
        s.touches.startX = startX;
        s.touches.startY = startY;
        touchStartTime = Date.now();
        s.allowClick = true;
        s.updateContainerSize();
        s.swipeDirection = undefined;
        if (s.params.threshold > 0) allowThresholdMove = false;

        if (e.type !== 'touchstart') {
          var preventDefault = true;
          if ($(e.target).is(formElements)) preventDefault = false;

          if (document.activeElement && $(document.activeElement).is(formElements)) {
            document.activeElement.blur();
          }

          if (preventDefault) {
            e.preventDefault();
          }
        }

        s.emit('onTouchStart', s, e);
      };

      s.onTouchMove = function (e) {
        if (e.originalEvent) e = e.originalEvent;
        if (isTouchEvent && e.type === 'mousemove') return;

        if (e.preventedByNestedSwiper) {
          s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
          s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
          return;
        }

        if (s.params.onlyExternal) {
          // isMoved = true;
          s.allowClick = false;

          if (isTouched) {
            s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
            touchStartTime = Date.now();
          }

          return;
        }

        if (isTouchEvent && document.activeElement) {
          if (e.target === document.activeElement && $(e.target).is(formElements)) {
            isMoved = true;
            s.allowClick = false;
            return;
          }
        }

        if (allowTouchCallbacks) {
          s.emit('onTouchMove', s, e);
        }

        if (e.targetTouches && e.targetTouches.length > 1) return;
        s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

        if (typeof isScrolling === 'undefined') {
          var touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
          isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : 90 - touchAngle > s.params.touchAngle;
        }

        if (isScrolling) {
          s.emit('onTouchMoveOpposite', s, e);
        }

        if (typeof startMoving === 'undefined' && s.browser.ieTouch) {
          if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
            startMoving = true;
          }
        }

        if (!isTouched) return;

        if (isScrolling) {
          isTouched = false;
          return;
        }

        if (!startMoving && s.browser.ieTouch) {
          return;
        }

        s.allowClick = false;
        s.emit('onSliderMove', s, e);
        e.preventDefault();

        if (s.params.touchMoveStopPropagation && !s.params.nested) {
          e.stopPropagation();
        }

        if (!isMoved) {
          if (params.loop) {
            s.fixLoop();
          }

          startTranslate = s.getWrapperTranslate();
          s.setWrapperTransition(0);

          if (s.animating) {
            s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
          }

          if (s.params.autoplay && s.autoplaying) {
            if (s.params.autoplayDisableOnInteraction) {
              s.stopAutoplay();
            } else {
              s.pauseAutoplay();
            }
          }

          allowMomentumBounce = false; //Grab Cursor

          if (s.params.grabCursor) {
            s.container[0].style.cursor = 'move';
            s.container[0].style.cursor = '-webkit-grabbing';
            s.container[0].style.cursor = '-moz-grabbin';
            s.container[0].style.cursor = 'grabbing';
          }
        }

        isMoved = true;
        var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
        diff = diff * s.params.touchRatio;
        if (s.rtl) diff = -diff;
        s.swipeDirection = diff > 0 ? 'prev' : 'next';
        currentTranslate = diff + startTranslate;
        var disableParentSwiper = true;

        if (diff > 0 && currentTranslate > s.minTranslate()) {
          disableParentSwiper = false;
          if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
        } else if (diff < 0 && currentTranslate < s.maxTranslate()) {
          disableParentSwiper = false;
          if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
        }

        if (disableParentSwiper) {
          e.preventedByNestedSwiper = true;
        } // Directions locks


        if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
          currentTranslate = startTranslate;
        }

        if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
          currentTranslate = startTranslate;
        }

        if (!s.params.followFinger) return; // Threshold

        if (s.params.threshold > 0) {
          if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
            if (!allowThresholdMove) {
              allowThresholdMove = true;
              s.touches.startX = s.touches.currentX;
              s.touches.startY = s.touches.currentY;
              currentTranslate = startTranslate;
              s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
              return;
            }
          } else {
            currentTranslate = startTranslate;
            return;
          }
        } // Update active index in free mode


        if (s.params.freeMode || s.params.watchSlidesProgress) {
          s.updateActiveIndex();
        }

        if (s.params.freeMode) {
          //Velocity
          if (velocities.length === 0) {
            velocities.push({
              position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
              time: touchStartTime
            });
          }

          velocities.push({
            position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
            time: new window.Date().getTime()
          });
        } // Update progress


        s.updateProgress(currentTranslate); // Update translate

        s.setWrapperTranslate(currentTranslate);
      };

      s.onTouchEnd = function (e) {
        if (e.originalEvent) e = e.originalEvent;

        if (allowTouchCallbacks) {
          s.emit('onTouchEnd', s, e);
        }

        allowTouchCallbacks = false;
        if (!isTouched) return; //Return Grab Cursor

        if (s.params.grabCursor && isMoved && isTouched) {
          s.container[0].style.cursor = 'move';
          s.container[0].style.cursor = '-webkit-grab';
          s.container[0].style.cursor = '-moz-grab';
          s.container[0].style.cursor = 'grab';
        } // Time diff


        var touchEndTime = Date.now();
        var timeDiff = touchEndTime - touchStartTime; // Tap, doubleTap, Click

        if (s.allowClick) {
          s.updateClickedSlide(e);
          s.emit('onTap', s, e);

          if (timeDiff < 300 && touchEndTime - lastClickTime > 300) {
            if (clickTimeout) clearTimeout(clickTimeout);
            clickTimeout = setTimeout(function () {
              if (!s) return;

              if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
                s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
              }

              s.emit('onClick', s, e);
            }, 300);
          }

          if (timeDiff < 300 && touchEndTime - lastClickTime < 300) {
            if (clickTimeout) clearTimeout(clickTimeout);
            s.emit('onDoubleTap', s, e);
          }
        }

        lastClickTime = Date.now();
        setTimeout(function () {
          if (s) s.allowClick = true;
        }, 0);

        if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
          isTouched = isMoved = false;
          return;
        }

        isTouched = isMoved = false;
        var currentPos;

        if (s.params.followFinger) {
          currentPos = s.rtl ? s.translate : -s.translate;
        } else {
          currentPos = -currentTranslate;
        }

        if (s.params.freeMode) {
          if (currentPos < -s.minTranslate()) {
            s.slideTo(s.activeIndex);
            return;
          } else if (currentPos > -s.maxTranslate()) {
            if (s.slides.length < s.snapGrid.length) {
              s.slideTo(s.snapGrid.length - 1);
            } else {
              s.slideTo(s.slides.length - 1);
            }

            return;
          }

          if (s.params.freeModeMomentum) {
            if (velocities.length > 1) {
              var lastMoveEvent = velocities.pop(),
                  velocityEvent = velocities.pop();
              var distance = lastMoveEvent.position - velocityEvent.position;
              var time = lastMoveEvent.time - velocityEvent.time;
              s.velocity = distance / time;
              s.velocity = s.velocity / 2;

              if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
                s.velocity = 0;
              } // this implies that the user stopped moving a finger then released.
              // There would be no events with distance zero, so the last event is stale.


              if (time > 150 || new window.Date().getTime() - lastMoveEvent.time > 300) {
                s.velocity = 0;
              }
            } else {
              s.velocity = 0;
            }

            velocities.length = 0;
            var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
            var momentumDistance = s.velocity * momentumDuration;
            var newPosition = s.translate + momentumDistance;
            if (s.rtl) newPosition = -newPosition;
            var doBounce = false;
            var afterBouncePosition;
            var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;

            if (newPosition < s.maxTranslate()) {
              if (s.params.freeModeMomentumBounce) {
                if (newPosition + s.maxTranslate() < -bounceAmount) {
                  newPosition = s.maxTranslate() - bounceAmount;
                }

                afterBouncePosition = s.maxTranslate();
                doBounce = true;
                allowMomentumBounce = true;
              } else {
                newPosition = s.maxTranslate();
              }
            } else if (newPosition > s.minTranslate()) {
              if (s.params.freeModeMomentumBounce) {
                if (newPosition - s.minTranslate() > bounceAmount) {
                  newPosition = s.minTranslate() + bounceAmount;
                }

                afterBouncePosition = s.minTranslate();
                doBounce = true;
                allowMomentumBounce = true;
              } else {
                newPosition = s.minTranslate();
              }
            } else if (s.params.freeModeSticky) {
              var j = 0,
                  nextSlide;

              for (j = 0; j < s.snapGrid.length; j += 1) {
                if (s.snapGrid[j] > -newPosition) {
                  nextSlide = j;
                  break;
                }
              }

              if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
                newPosition = s.snapGrid[nextSlide];
              } else {
                newPosition = s.snapGrid[nextSlide - 1];
              }

              if (!s.rtl) newPosition = -newPosition;
            } //Fix duration


            if (s.velocity !== 0) {
              if (s.rtl) {
                momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
              } else {
                momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
              }
            } else if (s.params.freeModeSticky) {
              s.slideReset();
              return;
            }

            if (s.params.freeModeMomentumBounce && doBounce) {
              s.updateProgress(afterBouncePosition);
              s.setWrapperTransition(momentumDuration);
              s.setWrapperTranslate(newPosition);
              s.onTransitionStart();
              s.animating = true;
              s.wrapper.transitionEnd(function () {
                if (!s || !allowMomentumBounce) return;
                s.emit('onMomentumBounce', s);
                s.setWrapperTransition(s.params.speed);
                s.setWrapperTranslate(afterBouncePosition);
                s.wrapper.transitionEnd(function () {
                  if (!s) return;
                  s.onTransitionEnd();
                });
              });
            } else if (s.velocity) {
              s.updateProgress(newPosition);
              s.setWrapperTransition(momentumDuration);
              s.setWrapperTranslate(newPosition);
              s.onTransitionStart();

              if (!s.animating) {
                s.animating = true;
                s.wrapper.transitionEnd(function () {
                  if (!s) return;
                  s.onTransitionEnd();
                });
              }
            } else {
              s.updateProgress(newPosition);
            }

            s.updateActiveIndex();
          }

          if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
            s.updateProgress();
            s.updateActiveIndex();
          }

          return;
        } // Find current slide


        var i,
            stopIndex = 0,
            groupSize = s.slidesSizesGrid[0];

        for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
          if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
            if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
              stopIndex = i;
              groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
            }
          } else {
            if (currentPos >= s.slidesGrid[i]) {
              stopIndex = i;
              groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
            }
          }
        } // Find current slide size


        var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;

        if (timeDiff > s.params.longSwipesMs) {
          // Long touches
          if (!s.params.longSwipes) {
            s.slideTo(s.activeIndex);
            return;
          }

          if (s.swipeDirection === 'next') {
            if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);else s.slideTo(stopIndex);
          }

          if (s.swipeDirection === 'prev') {
            if (ratio > 1 - s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);else s.slideTo(stopIndex);
          }
        } else {
          // Short swipes
          if (!s.params.shortSwipes) {
            s.slideTo(s.activeIndex);
            return;
          }

          if (s.swipeDirection === 'next') {
            s.slideTo(stopIndex + s.params.slidesPerGroup);
          }

          if (s.swipeDirection === 'prev') {
            s.slideTo(stopIndex);
          }
        }
      };
      /*=========================
      Transitions
      ===========================*/


      s._slideTo = function (slideIndex, speed) {
        return s.slideTo(slideIndex, speed, true, true);
      };

      s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
        if (typeof runCallbacks === 'undefined') runCallbacks = true;
        if (typeof slideIndex === 'undefined') slideIndex = 0;
        if (slideIndex < 0) slideIndex = 0;
        s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
        if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
        var translate = -s.snapGrid[s.snapIndex]; // Stop autoplay

        if (s.params.autoplay && s.autoplaying) {
          if (internal || !s.params.autoplayDisableOnInteraction) {
            s.pauseAutoplay(speed);
          } else {
            s.stopAutoplay();
          }
        } // Update progress


        s.updateProgress(translate); // Normalize slideIndex

        for (var i = 0; i < s.slidesGrid.length; i++) {
          if (-Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
            slideIndex = i;
          }
        } // Directions locks


        if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
          return false;
        }

        if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
          if ((s.activeIndex || 0) !== slideIndex) return false;
        } // Update Index


        if (typeof speed === 'undefined') speed = s.params.speed;
        s.previousIndex = s.activeIndex || 0;
        s.activeIndex = slideIndex;

        if (s.rtl && -translate === s.translate || !s.rtl && translate === s.translate) {
          // Update Height
          if (s.params.autoHeight) {
            s.updateAutoHeight();
          }

          s.updateClasses();

          if (s.params.effect !== 'slide') {
            s.setWrapperTranslate(translate);
          }

          return false;
        }

        s.updateClasses();
        s.onTransitionStart(runCallbacks);

        if (speed === 0) {
          s.setWrapperTranslate(translate);
          s.setWrapperTransition(0);
          s.onTransitionEnd(runCallbacks);
        } else {
          s.setWrapperTranslate(translate);
          s.setWrapperTransition(speed);

          if (!s.animating) {
            s.animating = true;
            s.wrapper.transitionEnd(function () {
              if (!s) return;
              s.onTransitionEnd(runCallbacks);
            });
          }
        }

        return true;
      };

      s.onTransitionStart = function (runCallbacks) {
        if (typeof runCallbacks === 'undefined') runCallbacks = true;

        if (s.params.autoHeight) {
          s.updateAutoHeight();
        }

        if (s.lazy) s.lazy.onTransitionStart();

        if (runCallbacks) {
          s.emit('onTransitionStart', s);

          if (s.activeIndex !== s.previousIndex) {
            s.emit('onSlideChangeStart', s);

            if (s.activeIndex > s.previousIndex) {
              s.emit('onSlideNextStart', s);
            } else {
              s.emit('onSlidePrevStart', s);
            }
          }
        }
      };

      s.onTransitionEnd = function (runCallbacks) {
        s.animating = false;
        s.setWrapperTransition(0);
        if (typeof runCallbacks === 'undefined') runCallbacks = true;
        if (s.lazy) s.lazy.onTransitionEnd();

        if (runCallbacks) {
          s.emit('onTransitionEnd', s);

          if (s.activeIndex !== s.previousIndex) {
            s.emit('onSlideChangeEnd', s);

            if (s.activeIndex > s.previousIndex) {
              s.emit('onSlideNextEnd', s);
            } else {
              s.emit('onSlidePrevEnd', s);
            }
          }
        }

        if (s.params.hashnav && s.hashnav) {
          s.hashnav.setHash();
        }
      };

      s.slideNext = function (runCallbacks, speed, internal) {
        if (s.params.loop) {
          if (s.animating) return false;
          s.fixLoop();
          var clientLeft = s.container[0].clientLeft;
          return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
        } else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
      };

      s._slideNext = function (speed) {
        return s.slideNext(true, speed, true);
      };

      s.slidePrev = function (runCallbacks, speed, internal) {
        if (s.params.loop) {
          if (s.animating) return false;
          s.fixLoop();
          var clientLeft = s.container[0].clientLeft;
          return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
        } else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
      };

      s._slidePrev = function (speed) {
        return s.slidePrev(true, speed, true);
      };

      s.slideReset = function (runCallbacks, speed, internal) {
        return s.slideTo(s.activeIndex, speed, runCallbacks);
      };
      /*=========================
      Translate/transition helpers
      ===========================*/


      s.setWrapperTransition = function (duration, byController) {
        s.wrapper.transition(duration);

        if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
          s.effects[s.params.effect].setTransition(duration);
        }

        if (s.params.parallax && s.parallax) {
          s.parallax.setTransition(duration);
        }

        if (s.params.scrollbar && s.scrollbar) {
          s.scrollbar.setTransition(duration);
        }

        if (s.params.control && s.controller) {
          s.controller.setTransition(duration, byController);
        }

        s.emit('onSetTransition', s, duration);
      };

      s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
        var x = 0,
            y = 0,
            z = 0;

        if (s.isHorizontal()) {
          x = s.rtl ? -translate : translate;
        } else {
          y = translate;
        }

        if (s.params.roundLengths) {
          x = round(x);
          y = round(y);
        }

        if (!s.params.virtualTranslate) {
          if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
        }

        s.translate = s.isHorizontal() ? x : y; // Check if we need to update progress

        var progress;
        var translatesDiff = s.maxTranslate() - s.minTranslate();

        if (translatesDiff === 0) {
          progress = 0;
        } else {
          progress = (translate - s.minTranslate()) / translatesDiff;
        }

        if (progress !== s.progress) {
          s.updateProgress(translate);
        }

        if (updateActiveIndex) s.updateActiveIndex();

        if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
          s.effects[s.params.effect].setTranslate(s.translate);
        }

        if (s.params.parallax && s.parallax) {
          s.parallax.setTranslate(s.translate);
        }

        if (s.params.scrollbar && s.scrollbar) {
          s.scrollbar.setTranslate(s.translate);
        }

        if (s.params.control && s.controller) {
          s.controller.setTranslate(s.translate, byController);
        }

        s.emit('onSetTranslate', s, s.translate);
      };

      s.getTranslate = function (el, axis) {
        var matrix, curTransform, curStyle, transformMatrix; // automatic axis detection

        if (typeof axis === 'undefined') {
          axis = 'x';
        }

        if (s.params.virtualTranslate) {
          return s.rtl ? -s.translate : s.translate;
        }

        curStyle = window.getComputedStyle(el, null);

        if (window.WebKitCSSMatrix) {
          curTransform = curStyle.transform || curStyle.webkitTransform;

          if (curTransform.split(',').length > 6) {
            curTransform = curTransform.split(', ').map(function (a) {
              return a.replace(',', '.');
            }).join(', ');
          } // Some old versions of Webkit choke when 'none' is passed; pass
          // empty string instead in this case


          transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
        } else {
          transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
          matrix = transformMatrix.toString().split(',');
        }

        if (axis === 'x') {
          //Latest Chrome and webkits Fix
          if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; //Crazy IE10 Matrix
          else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); //Normal Browsers
            else curTransform = parseFloat(matrix[4]);
        }

        if (axis === 'y') {
          //Latest Chrome and webkits Fix
          if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; //Crazy IE10 Matrix
          else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); //Normal Browsers
            else curTransform = parseFloat(matrix[5]);
        }

        if (s.rtl && curTransform) curTransform = -curTransform;
        return curTransform || 0;
      };

      s.getWrapperTranslate = function (axis) {
        if (typeof axis === 'undefined') {
          axis = s.isHorizontal() ? 'x' : 'y';
        }

        return s.getTranslate(s.wrapper[0], axis);
      };
      /*=========================
      Observer
      ===========================*/


      s.observers = [];

      function initObserver(target, options) {
        options = options || {}; // create an observer instance

        var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        var observer = new ObserverFunc(function (mutations) {
          mutations.forEach(function (mutation) {
            s.onResize(true);
            s.emit('onObserverUpdate', s, mutation);
          });
        });
        observer.observe(target, {
          attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
          childList: typeof options.childList === 'undefined' ? true : options.childList,
          characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        s.observers.push(observer);
      }

      s.initObservers = function () {
        if (s.params.observeParents) {
          var containerParents = s.container.parents();

          for (var i = 0; i < containerParents.length; i++) {
            initObserver(containerParents[i]);
          }
        } // Observe container


        initObserver(s.container[0], {
          childList: false
        }); // Observe wrapper

        initObserver(s.wrapper[0], {
          attributes: false
        });
      };

      s.disconnectObservers = function () {
        for (var i = 0; i < s.observers.length; i++) {
          s.observers[i].disconnect();
        }

        s.observers = [];
      };
      /*=========================
      Loop
      ===========================*/
      // Create looped slides


      s.createLoop = function () {
        // Remove duplicated slides
        s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
        var slides = s.wrapper.children('.' + s.params.slideClass);
        if (s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
        s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
        s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;

        if (s.loopedSlides > slides.length) {
          s.loopedSlides = slides.length;
        }

        var prependSlides = [],
            appendSlides = [],
            i;
        slides.each(function (index, el) {
          var slide = $(this);
          if (index < s.loopedSlides) appendSlides.push(el);
          if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
          slide.attr('data-swiper-slide-index', index);
        });

        for (i = 0; i < appendSlides.length; i++) {
          s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
        }

        for (i = prependSlides.length - 1; i >= 0; i--) {
          s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
        }
      };

      s.destroyLoop = function () {
        s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
        s.slides.removeAttr('data-swiper-slide-index');
      };

      s.reLoop = function (updatePosition) {
        var oldIndex = s.activeIndex - s.loopedSlides;
        s.destroyLoop();
        s.createLoop();
        s.updateSlidesSize();

        if (updatePosition) {
          s.slideTo(oldIndex + s.loopedSlides, 0, false);
        }
      };

      s.fixLoop = function () {
        var newIndex; //Fix For Negative Oversliding

        if (s.activeIndex < s.loopedSlides) {
          newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
          newIndex = newIndex + s.loopedSlides;
          s.slideTo(newIndex, 0, false, true);
        } //Fix For Positive Oversliding
        else if (s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2 || s.activeIndex > s.slides.length - s.params.slidesPerView * 2) {
            newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
            newIndex = newIndex + s.loopedSlides;
            s.slideTo(newIndex, 0, false, true);
          }
      };
      /*=========================
      Append/Prepend/Remove Slides
      ===========================*/


      s.appendSlide = function (slides) {
        if (s.params.loop) {
          s.destroyLoop();
        }

        if (_typeof(slides) === 'object' && slides.length) {
          for (var i = 0; i < slides.length; i++) {
            if (slides[i]) s.wrapper.append(slides[i]);
          }
        } else {
          s.wrapper.append(slides);
        }

        if (s.params.loop) {
          s.createLoop();
        }

        if (!(s.params.observer && s.support.observer)) {
          s.update(true);
        }
      };

      s.prependSlide = function (slides) {
        if (s.params.loop) {
          s.destroyLoop();
        }

        var newActiveIndex = s.activeIndex + 1;

        if (_typeof(slides) === 'object' && slides.length) {
          for (var i = 0; i < slides.length; i++) {
            if (slides[i]) s.wrapper.prepend(slides[i]);
          }

          newActiveIndex = s.activeIndex + slides.length;
        } else {
          s.wrapper.prepend(slides);
        }

        if (s.params.loop) {
          s.createLoop();
        }

        if (!(s.params.observer && s.support.observer)) {
          s.update(true);
        }

        s.slideTo(newActiveIndex, 0, false);
      };

      s.removeSlide = function (slidesIndexes) {
        if (s.params.loop) {
          s.destroyLoop();
          s.slides = s.wrapper.children('.' + s.params.slideClass);
        }

        var newActiveIndex = s.activeIndex,
            indexToRemove;

        if (_typeof(slidesIndexes) === 'object' && slidesIndexes.length) {
          for (var i = 0; i < slidesIndexes.length; i++) {
            indexToRemove = slidesIndexes[i];
            if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
            if (indexToRemove < newActiveIndex) newActiveIndex--;
          }

          newActiveIndex = Math.max(newActiveIndex, 0);
        } else {
          indexToRemove = slidesIndexes;
          if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
          if (indexToRemove < newActiveIndex) newActiveIndex--;
          newActiveIndex = Math.max(newActiveIndex, 0);
        }

        if (s.params.loop) {
          s.createLoop();
        }

        if (!(s.params.observer && s.support.observer)) {
          s.update(true);
        }

        if (s.params.loop) {
          s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
        } else {
          s.slideTo(newActiveIndex, 0, false);
        }
      };

      s.removeAllSlides = function () {
        var slidesIndexes = [];

        for (var i = 0; i < s.slides.length; i++) {
          slidesIndexes.push(i);
        }

        s.removeSlide(slidesIndexes);
      };
      /*=========================
      Effects
      ===========================*/


      s.effects = {
        fade: {
          setTranslate: function setTranslate() {
            for (var i = 0; i < s.slides.length; i++) {
              var slide = s.slides.eq(i);
              var offset = slide[0].swiperSlideOffset;
              var tx = -offset;
              if (!s.params.virtualTranslate) tx = tx - s.translate;
              var ty = 0;

              if (!s.isHorizontal()) {
                ty = tx;
                tx = 0;
              }

              var slideOpacity = s.params.fade.crossFade ? Math.max(1 - Math.abs(slide[0].progress), 0) : 1 + Math.min(Math.max(slide[0].progress, -1), 0);
              slide.css({
                opacity: slideOpacity
              }).transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
            }
          },
          setTransition: function setTransition(duration) {
            s.slides.transition(duration);

            if (s.params.virtualTranslate && duration !== 0) {
              var eventTriggered = false;
              s.slides.transitionEnd(function () {
                if (eventTriggered) return;
                if (!s) return;
                eventTriggered = true;
                s.animating = false;
                var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];

                for (var i = 0; i < triggerEvents.length; i++) {
                  s.wrapper.trigger(triggerEvents[i]);
                }
              });
            }
          }
        },
        flip: {
          setTranslate: function setTranslate() {
            for (var i = 0; i < s.slides.length; i++) {
              var slide = s.slides.eq(i);
              var progress = slide[0].progress;

              if (s.params.flip.limitRotation) {
                progress = Math.max(Math.min(slide[0].progress, 1), -1);
              }

              var offset = slide[0].swiperSlideOffset;
              var rotate = -180 * progress,
                  rotateY = rotate,
                  rotateX = 0,
                  tx = -offset,
                  ty = 0;

              if (!s.isHorizontal()) {
                ty = tx;
                tx = 0;
                rotateX = -rotateY;
                rotateY = 0;
              } else if (s.rtl) {
                rotateY = -rotateY;
              }

              slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;

              if (s.params.flip.slideShadows) {
                //Set shadows
                var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');

                if (shadowBefore.length === 0) {
                  shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                  slide.append(shadowBefore);
                }

                if (shadowAfter.length === 0) {
                  shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                  slide.append(shadowAfter);
                }

                if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
              }

              slide.transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
            }
          },
          setTransition: function setTransition(duration) {
            s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

            if (s.params.virtualTranslate && duration !== 0) {
              var eventTriggered = false;
              s.slides.eq(s.activeIndex).transitionEnd(function () {
                if (eventTriggered) return;
                if (!s) return;
                if (!$(this).hasClass(s.params.slideActiveClass)) return;
                eventTriggered = true;
                s.animating = false;
                var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];

                for (var i = 0; i < triggerEvents.length; i++) {
                  s.wrapper.trigger(triggerEvents[i]);
                }
              });
            }
          }
        },
        cube: {
          setTranslate: function setTranslate() {
            var wrapperRotate = 0,
                cubeShadow;

            if (s.params.cube.shadow) {
              if (s.isHorizontal()) {
                cubeShadow = s.wrapper.find('.swiper-cube-shadow');

                if (cubeShadow.length === 0) {
                  cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                  s.wrapper.append(cubeShadow);
                }

                cubeShadow.css({
                  height: s.width + 'px'
                });
              } else {
                cubeShadow = s.container.find('.swiper-cube-shadow');

                if (cubeShadow.length === 0) {
                  cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                  s.container.append(cubeShadow);
                }
              }
            }

            for (var i = 0; i < s.slides.length; i++) {
              var slide = s.slides.eq(i);
              var slideAngle = i * 90;
              var round = Math.floor(slideAngle / 360);

              if (s.rtl) {
                slideAngle = -slideAngle;
                round = Math.floor(-slideAngle / 360);
              }

              var progress = Math.max(Math.min(slide[0].progress, 1), -1);
              var tx = 0,
                  ty = 0,
                  tz = 0;

              if (i % 4 === 0) {
                tx = -round * 4 * s.size;
                tz = 0;
              } else if ((i - 1) % 4 === 0) {
                tx = 0;
                tz = -round * 4 * s.size;
              } else if ((i - 2) % 4 === 0) {
                tx = s.size + round * 4 * s.size;
                tz = s.size;
              } else if ((i - 3) % 4 === 0) {
                tx = -s.size;
                tz = 3 * s.size + s.size * 4 * round;
              }

              if (s.rtl) {
                tx = -tx;
              }

              if (!s.isHorizontal()) {
                ty = tx;
                tx = 0;
              }

              var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';

              if (progress <= 1 && progress > -1) {
                wrapperRotate = i * 90 + progress * 90;
                if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
              }

              slide.transform(transform);

              if (s.params.cube.slideShadows) {
                //Set shadows
                var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');

                if (shadowBefore.length === 0) {
                  shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                  slide.append(shadowBefore);
                }

                if (shadowAfter.length === 0) {
                  shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                  slide.append(shadowAfter);
                }

                if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
              }
            }

            s.wrapper.css({
              '-webkit-transform-origin': '50% 50% -' + s.size / 2 + 'px',
              '-moz-transform-origin': '50% 50% -' + s.size / 2 + 'px',
              '-ms-transform-origin': '50% 50% -' + s.size / 2 + 'px',
              'transform-origin': '50% 50% -' + s.size / 2 + 'px'
            });

            if (s.params.cube.shadow) {
              if (s.isHorizontal()) {
                cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + -s.width / 2 + 'px) rotateX(90deg) rotateZ(0deg) scale(' + s.params.cube.shadowScale + ')');
              } else {
                var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                var scale1 = s.params.cube.shadowScale,
                    scale2 = s.params.cube.shadowScale / multiplier,
                    offset = s.params.cube.shadowOffset;
                cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + -s.height / 2 / scale2 + 'px) rotateX(-90deg)');
              }
            }

            var zFactor = s.isSafari || s.isUiWebView ? -s.size / 2 : 0;
            s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
          },
          setTransition: function setTransition(duration) {
            s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

            if (s.params.cube.shadow && !s.isHorizontal()) {
              s.container.find('.swiper-cube-shadow').transition(duration);
            }
          }
        },
        coverflow: {
          setTranslate: function setTranslate() {
            var transform = s.translate;
            var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
            var rotate = s.isHorizontal() ? s.params.coverflow.rotate : -s.params.coverflow.rotate;
            var translate = s.params.coverflow.depth; //Each slide offset from center

            for (var i = 0, length = s.slides.length; i < length; i++) {
              var slide = s.slides.eq(i);
              var slideSize = s.slidesSizesGrid[i];
              var slideOffset = slide[0].swiperSlideOffset;
              var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
              var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
              var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

              var translateZ = -translate * Math.abs(offsetMultiplier);
              var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * offsetMultiplier;
              var translateX = s.isHorizontal() ? s.params.coverflow.stretch * offsetMultiplier : 0; //Fix for ultra small values

              if (Math.abs(translateX) < 0.001) translateX = 0;
              if (Math.abs(translateY) < 0.001) translateY = 0;
              if (Math.abs(translateZ) < 0.001) translateZ = 0;
              if (Math.abs(rotateY) < 0.001) rotateY = 0;
              if (Math.abs(rotateX) < 0.001) rotateX = 0;
              var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
              slide.transform(slideTransform);
              slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

              if (s.params.coverflow.slideShadows) {
                //Set shadows
                var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');

                if (shadowBefore.length === 0) {
                  shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                  slide.append(shadowBefore);
                }

                if (shadowAfter.length === 0) {
                  shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                  slide.append(shadowAfter);
                }

                if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                if (shadowAfter.length) shadowAfter[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
              }
            } //Set correct perspective for IE10


            if (s.browser.ie) {
              var ws = s.wrapper[0].style;
              ws.perspectiveOrigin = center + 'px 50%';
            }
          },
          setTransition: function setTransition(duration) {
            s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
          }
        }
      };
      /*=========================
      Images Lazy Loading
      ===========================*/

      s.lazy = {
        initialImageLoaded: false,
        loadImageInSlide: function loadImageInSlide(index, loadInDuplicate) {
          if (typeof index === 'undefined') return;
          if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
          if (s.slides.length === 0) return;
          var slide = s.slides.eq(index);
          var img = slide.find('.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');

          if (slide.hasClass('swiper-lazy') && !slide.hasClass('swiper-lazy-loaded') && !slide.hasClass('swiper-lazy-loading')) {
            img = img.add(slide[0]);
          }

          if (img.length === 0) return;
          img.each(function () {
            var _img = $(this);

            _img.addClass('swiper-lazy-loading');

            var background = _img.attr('data-background');

            var src = _img.attr('data-src'),
                srcset = _img.attr('data-srcset');

            s.loadImage(_img[0], src || background, srcset, false, function () {
              if (background) {
                _img.css('background-image', 'url("' + background + '")');

                _img.removeAttr('data-background');
              } else {
                if (srcset) {
                  _img.attr('srcset', srcset);

                  _img.removeAttr('data-srcset');
                }

                if (src) {
                  _img.attr('src', src);

                  _img.removeAttr('data-src');
                }
              }

              _img.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading');

              slide.find('.swiper-lazy-preloader, .preloader').remove();

              if (s.params.loop && loadInDuplicate) {
                var slideOriginalIndex = slide.attr('data-swiper-slide-index');

                if (slide.hasClass(s.params.slideDuplicateClass)) {
                  var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                  s.lazy.loadImageInSlide(originalSlide.index(), false);
                } else {
                  var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                  s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
                }
              }

              s.emit('onLazyImageReady', s, slide[0], _img[0]);
            });
            s.emit('onLazyImageLoad', s, slide[0], _img[0]);
          });
        },
        load: function load() {
          var i;

          if (s.params.watchSlidesVisibility) {
            s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
              s.lazy.loadImageInSlide($(this).index());
            });
          } else {
            if (s.params.slidesPerView > 1) {
              for (i = s.activeIndex; i < s.activeIndex + s.params.slidesPerView; i++) {
                if (s.slides[i]) s.lazy.loadImageInSlide(i);
              }
            } else {
              s.lazy.loadImageInSlide(s.activeIndex);
            }
          }

          if (s.params.lazyLoadingInPrevNext) {
            if (s.params.slidesPerView > 1 || s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1) {
              var amount = s.params.lazyLoadingInPrevNextAmount;
              var spv = s.params.slidesPerView;
              var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
              var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0); // Next Slides

              for (i = s.activeIndex + s.params.slidesPerView; i < maxIndex; i++) {
                if (s.slides[i]) s.lazy.loadImageInSlide(i);
              } // Prev Slides


              for (i = minIndex; i < s.activeIndex; i++) {
                if (s.slides[i]) s.lazy.loadImageInSlide(i);
              }
            } else {
              var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
              if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
              var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
              if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
            }
          }
        },
        onTransitionStart: function onTransitionStart() {
          if (s.params.lazyLoading) {
            if (s.params.lazyLoadingOnTransitionStart || !s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded) {
              s.lazy.load();
            }
          }
        },
        onTransitionEnd: function onTransitionEnd() {
          if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
            s.lazy.load();
          }
        }
      };
      /*=========================
      Scrollbar
      ===========================*/

      s.scrollbar = {
        isTouched: false,
        setDragPosition: function setDragPosition(e) {
          var sb = s.scrollbar;
          var x = 0,
              y = 0;
          var translate;
          var pointerPosition = s.isHorizontal() ? e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX || e.clientX : e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY || e.clientY;
          var position = pointerPosition - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
          var positionMin = -s.minTranslate() * sb.moveDivider;
          var positionMax = -s.maxTranslate() * sb.moveDivider;

          if (position < positionMin) {
            position = positionMin;
          } else if (position > positionMax) {
            position = positionMax;
          }

          position = -position / sb.moveDivider;
          s.updateProgress(position);
          s.setWrapperTranslate(position, true);
        },
        dragStart: function dragStart(e) {
          var sb = s.scrollbar;
          sb.isTouched = true;
          e.preventDefault();
          e.stopPropagation();
          sb.setDragPosition(e);
          clearTimeout(sb.dragTimeout);
          sb.track.transition(0);

          if (s.params.scrollbarHide) {
            sb.track.css('opacity', 1);
          }

          s.wrapper.transition(100);
          sb.drag.transition(100);
          s.emit('onScrollbarDragStart', s);
        },
        dragMove: function dragMove(e) {
          var sb = s.scrollbar;
          if (!sb.isTouched) return;
          if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          sb.setDragPosition(e);
          s.wrapper.transition(0);
          sb.track.transition(0);
          sb.drag.transition(0);
          s.emit('onScrollbarDragMove', s);
        },
        dragEnd: function dragEnd(e) {
          var sb = s.scrollbar;
          if (!sb.isTouched) return;
          sb.isTouched = false;

          if (s.params.scrollbarHide) {
            clearTimeout(sb.dragTimeout);
            sb.dragTimeout = setTimeout(function () {
              sb.track.css('opacity', 0);
              sb.track.transition(400);
            }, 1000);
          }

          s.emit('onScrollbarDragEnd', s);

          if (s.params.scrollbarSnapOnRelease) {
            s.slideReset();
          }
        },
        enableDraggable: function enableDraggable() {
          var sb = s.scrollbar;
          var target = s.support.touch ? sb.track : document;
          $(sb.track).on(s.touchEvents.start, sb.dragStart);
          $(target).on(s.touchEvents.move, sb.dragMove);
          $(target).on(s.touchEvents.end, sb.dragEnd);
        },
        disableDraggable: function disableDraggable() {
          var sb = s.scrollbar;
          var target = s.support.touch ? sb.track : document;
          $(sb.track).off(s.touchEvents.start, sb.dragStart);
          $(target).off(s.touchEvents.move, sb.dragMove);
          $(target).off(s.touchEvents.end, sb.dragEnd);
        },
        set: function set() {
          if (!s.params.scrollbar) return;
          var sb = s.scrollbar;
          sb.track = $(s.params.scrollbar);

          if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
            sb.track = s.container.find(s.params.scrollbar);
          }

          sb.drag = sb.track.find('.swiper-scrollbar-drag');

          if (sb.drag.length === 0) {
            sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
            sb.track.append(sb.drag);
          }

          sb.drag[0].style.width = '';
          sb.drag[0].style.height = '';
          sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
          sb.divider = s.size / s.virtualSize;
          sb.moveDivider = sb.divider * (sb.trackSize / s.size);
          sb.dragSize = sb.trackSize * sb.divider;

          if (s.isHorizontal()) {
            sb.drag[0].style.width = sb.dragSize + 'px';
          } else {
            sb.drag[0].style.height = sb.dragSize + 'px';
          }

          if (sb.divider >= 1) {
            sb.track[0].style.display = 'none';
          } else {
            sb.track[0].style.display = '';
          }

          if (s.params.scrollbarHide) {
            sb.track[0].style.opacity = 0;
          }
        },
        setTranslate: function setTranslate() {
          if (!s.params.scrollbar) return;
          var diff;
          var sb = s.scrollbar;
          var translate = s.translate || 0;
          var newPos;
          var newSize = sb.dragSize;
          newPos = (sb.trackSize - sb.dragSize) * s.progress;

          if (s.rtl && s.isHorizontal()) {
            newPos = -newPos;

            if (newPos > 0) {
              newSize = sb.dragSize - newPos;
              newPos = 0;
            } else if (-newPos + sb.dragSize > sb.trackSize) {
              newSize = sb.trackSize + newPos;
            }
          } else {
            if (newPos < 0) {
              newSize = sb.dragSize + newPos;
              newPos = 0;
            } else if (newPos + sb.dragSize > sb.trackSize) {
              newSize = sb.trackSize - newPos;
            }
          }

          if (s.isHorizontal()) {
            if (s.support.transforms3d) {
              sb.drag.transform('translate3d(' + newPos + 'px, 0, 0)');
            } else {
              sb.drag.transform('translateX(' + newPos + 'px)');
            }

            sb.drag[0].style.width = newSize + 'px';
          } else {
            if (s.support.transforms3d) {
              sb.drag.transform('translate3d(0px, ' + newPos + 'px, 0)');
            } else {
              sb.drag.transform('translateY(' + newPos + 'px)');
            }

            sb.drag[0].style.height = newSize + 'px';
          }

          if (s.params.scrollbarHide) {
            clearTimeout(sb.timeout);
            sb.track[0].style.opacity = 1;
            sb.timeout = setTimeout(function () {
              sb.track[0].style.opacity = 0;
              sb.track.transition(400);
            }, 1000);
          }
        },
        setTransition: function setTransition(duration) {
          if (!s.params.scrollbar) return;
          s.scrollbar.drag.transition(duration);
        }
      };
      /*=========================
      Controller
      ===========================*/

      s.controller = {
        LinearSpline: function LinearSpline(x, y) {
          this.x = x;
          this.y = y;
          this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
          // (x1,y1) is the known point before given value,
          // (x3,y3) is the known point after given value.

          var i1, i3;
          var l = this.x.length;

          this.interpolate = function (x2) {
            if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

            i3 = binarySearch(this.x, x2);
            i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
            // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

            return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
          };

          var binarySearch = function () {
            var maxIndex, minIndex, guess;
            return function (array, val) {
              minIndex = -1;
              maxIndex = array.length;

              while (maxIndex - minIndex > 1) {
                if (array[guess = maxIndex + minIndex >> 1] <= val) {
                  minIndex = guess;
                } else {
                  maxIndex = guess;
                }
              }

              return maxIndex;
            };
          }();
        },
        //xxx: for now i will just save one spline function to to
        getInterpolateFunction: function getInterpolateFunction(c) {
          if (!s.controller.spline) s.controller.spline = s.params.loop ? new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) : new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
        },
        setTranslate: function setTranslate(translate, byController) {
          var controlled = s.params.control;
          var multiplier, controlledTranslate;

          function setControlledTranslate(c) {
            // this will create an Interpolate function based on the snapGrids
            // x is the Grid of the scrolled scroller and y will be the controlled scroller
            // it makes sense to create this only once and recall it for the interpolation
            // the function does a lot of value caching for performance
            translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;

            if (s.params.controlBy === 'slide') {
              s.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
              // but it did not work out

              controlledTranslate = -s.controller.spline.interpolate(-translate);
            }

            if (!controlledTranslate || s.params.controlBy === 'container') {
              multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
              controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
            }

            if (s.params.controlInverse) {
              controlledTranslate = c.maxTranslate() - controlledTranslate;
            }

            c.updateProgress(controlledTranslate);
            c.setWrapperTranslate(controlledTranslate, false, s);
            c.updateActiveIndex();
          }

          if (s.isArray(controlled)) {
            for (var i = 0; i < controlled.length; i++) {
              if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                setControlledTranslate(controlled[i]);
              }
            }
          } else if (controlled instanceof Swiper && byController !== controlled) {
            setControlledTranslate(controlled);
          }
        },
        setTransition: function setTransition(duration, byController) {
          var controlled = s.params.control;
          var i;

          function setControlledTransition(c) {
            c.setWrapperTransition(duration, s);

            if (duration !== 0) {
              c.onTransitionStart();
              c.wrapper.transitionEnd(function () {
                if (!controlled) return;

                if (c.params.loop && s.params.controlBy === 'slide') {
                  c.fixLoop();
                }

                c.onTransitionEnd();
              });
            }
          }

          if (s.isArray(controlled)) {
            for (i = 0; i < controlled.length; i++) {
              if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                setControlledTransition(controlled[i]);
              }
            }
          } else if (controlled instanceof Swiper && byController !== controlled) {
            setControlledTransition(controlled);
          }
        }
      };
      /*=========================
      Hash Navigation
      ===========================*/

      s.hashnav = {
        init: function init() {
          if (!s.params.hashnav) return;
          s.hashnav.initialized = true;
          var hash = document.location.hash.replace('#', '');
          if (!hash) return;
          var speed = 0;

          for (var i = 0, length = s.slides.length; i < length; i++) {
            var slide = s.slides.eq(i);
            var slideHash = slide.attr('data-hash');

            if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
              var index = slide.index();
              s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
            }
          }
        },
        setHash: function setHash() {
          if (!s.hashnav.initialized || !s.params.hashnav) return;
          document.location.hash = s.slides.eq(s.activeIndex).attr('data-hash') || '';
        }
      };
      /*=========================
      Keyboard Control
      ===========================*/

      function handleKeyboard(e) {
        if (e.originalEvent) e = e.originalEvent; //jquery fix

        var kc = e.keyCode || e.charCode; // Directions locks

        if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
          return false;
        }

        if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
          return false;
        }

        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
          return;
        }

        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
          return;
        }

        if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
          var inView = false; //Check that swiper should be inside of visible area of window

          if (s.container.parents('.swiper-slide').length > 0 && s.container.parents('.swiper-slide-active').length === 0) {
            return;
          }

          var windowScroll = {
            left: window.pageXOffset,
            top: window.pageYOffset
          };
          var windowWidth = window.innerWidth;
          var windowHeight = window.innerHeight;
          var swiperOffset = s.container.offset();
          if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
          var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + s.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + s.height], [swiperOffset.left + s.width, swiperOffset.top + s.height]];

          for (var i = 0; i < swiperCoord.length; i++) {
            var point = swiperCoord[i];

            if (point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth && point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight) {
              inView = true;
            }
          }

          if (!inView) return;
        }

        if (s.isHorizontal()) {
          if (kc === 37 || kc === 39) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }

          if (kc === 39 && !s.rtl || kc === 37 && s.rtl) s.slideNext();
          if (kc === 37 && !s.rtl || kc === 39 && s.rtl) s.slidePrev();
        } else {
          if (kc === 38 || kc === 40) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }

          if (kc === 40) s.slideNext();
          if (kc === 38) s.slidePrev();
        }
      }

      s.disableKeyboardControl = function () {
        s.params.keyboardControl = false;
        $(document).off('keydown', handleKeyboard);
      };

      s.enableKeyboardControl = function () {
        s.params.keyboardControl = true;
        $(document).on('keydown', handleKeyboard);
      };
      /*=========================
      Mousewheel Control
      ===========================*/


      s.mousewheel = {
        event: false,
        lastScrollTime: new window.Date().getTime()
      };

      if (s.params.mousewheelControl) {
        try {
          new window.WheelEvent('wheel');
          s.mousewheel.event = 'wheel';
        } catch (e) {
          if (window.WheelEvent || s.container[0] && 'wheel' in s.container[0]) {
            s.mousewheel.event = 'wheel';
          }
        }

        if (!s.mousewheel.event && window.WheelEvent) {}

        if (!s.mousewheel.event && document.onmousewheel !== undefined) {
          s.mousewheel.event = 'mousewheel';
        }

        if (!s.mousewheel.event) {
          s.mousewheel.event = 'DOMMouseScroll';
        }
      }

      function handleMousewheel(e) {
        if (e.originalEvent) e = e.originalEvent; //jquery fix

        var we = s.mousewheel.event;
        var delta = 0;
        var rtlFactor = s.rtl ? -1 : 1; //WebKits

        if (we === 'mousewheel') {
          if (s.params.mousewheelForceToAxis) {
            if (s.isHorizontal()) {
              if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX * rtlFactor;else return;
            } else {
              if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;else return;
            }
          } else {
            delta = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * rtlFactor : -e.wheelDeltaY;
          }
        } //Old FireFox
        else if (we === 'DOMMouseScroll') delta = -e.detail; //New FireFox
          else if (we === 'wheel') {
              if (s.params.mousewheelForceToAxis) {
                if (s.isHorizontal()) {
                  if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX * rtlFactor;else return;
                } else {
                  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;else return;
                }
              } else {
                delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * rtlFactor : -e.deltaY;
              }
            }

        if (delta === 0) return;
        if (s.params.mousewheelInvert) delta = -delta;

        if (!s.params.freeMode) {
          if (new window.Date().getTime() - s.mousewheel.lastScrollTime > 60) {
            if (delta < 0) {
              if ((!s.isEnd || s.params.loop) && !s.animating) s.slideNext();else if (s.params.mousewheelReleaseOnEdges) return true;
            } else {
              if ((!s.isBeginning || s.params.loop) && !s.animating) s.slidePrev();else if (s.params.mousewheelReleaseOnEdges) return true;
            }
          }

          s.mousewheel.lastScrollTime = new window.Date().getTime();
        } else {
          //Freemode or scrollContainer:
          var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
          var wasBeginning = s.isBeginning,
              wasEnd = s.isEnd;
          if (position >= s.minTranslate()) position = s.minTranslate();
          if (position <= s.maxTranslate()) position = s.maxTranslate();
          s.setWrapperTransition(0);
          s.setWrapperTranslate(position);
          s.updateProgress();
          s.updateActiveIndex();

          if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
            s.updateClasses();
          }

          if (s.params.freeModeSticky) {
            clearTimeout(s.mousewheel.timeout);
            s.mousewheel.timeout = setTimeout(function () {
              s.slideReset();
            }, 300);
          } else {
            if (s.params.lazyLoading && s.lazy) {
              s.lazy.load();
            }
          } // Return page scroll on edge positions


          if (position === 0 || position === s.maxTranslate()) return;
        }

        if (s.params.autoplay) s.stopAutoplay();
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        return false;
      }

      s.disableMousewheelControl = function () {
        if (!s.mousewheel.event) return false;
        s.container.off(s.mousewheel.event, handleMousewheel);
        return true;
      };

      s.enableMousewheelControl = function () {
        if (!s.mousewheel.event) return false;
        s.container.on(s.mousewheel.event, handleMousewheel);
        return true;
      };
      /*=========================
      Parallax
      ===========================*/


      function setParallaxTransform(el, progress) {
        el = $(el);
        var p, pX, pY;
        var rtlFactor = s.rtl ? -1 : 1;
        p = el.attr('data-swiper-parallax') || '0';
        pX = el.attr('data-swiper-parallax-x');
        pY = el.attr('data-swiper-parallax-y');

        if (pX || pY) {
          pX = pX || '0';
          pY = pY || '0';
        } else {
          if (s.isHorizontal()) {
            pX = p;
            pY = '0';
          } else {
            pY = p;
            pX = '0';
          }
        }

        if (pX.indexOf('%') >= 0) {
          pX = parseInt(pX, 10) * progress * rtlFactor + '%';
        } else {
          pX = pX * progress * rtlFactor + 'px';
        }

        if (pY.indexOf('%') >= 0) {
          pY = parseInt(pY, 10) * progress + '%';
        } else {
          pY = pY * progress + 'px';
        }

        el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
      }

      s.parallax = {
        setTranslate: function setTranslate() {
          s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
            setParallaxTransform(this, s.progress);
          });
          s.slides.each(function () {
            var slide = $(this);
            slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
              var progress = Math.min(Math.max(slide[0].progress, -1), 1);
              setParallaxTransform(this, progress);
            });
          });
        },
        setTransition: function setTransition(duration) {
          if (typeof duration === 'undefined') duration = s.params.speed;
          s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
            var el = $(this);
            var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
            if (duration === 0) parallaxDuration = 0;
            el.transition(parallaxDuration);
          });
        }
      };
      /*=========================
      Plugins API. Collect all and init all plugins
      ===========================*/

      s._plugins = [];

      for (var plugin in s.plugins) {
        var p = s.plugins[plugin](s, s.params[plugin]);
        if (p) s._plugins.push(p);
      } // Method to call all plugins event/method


      s.callPlugins = function (eventName) {
        for (var i = 0; i < s._plugins.length; i++) {
          if (eventName in s._plugins[i]) {
            s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
          }
        }
      };
      /*=========================
      Events/Callbacks/Plugins Emitter
      ===========================*/


      function normalizeEventName(eventName) {
        if (eventName.indexOf('on') !== 0) {
          if (eventName[0] !== eventName[0].toUpperCase()) {
            eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
          } else {
            eventName = 'on' + eventName;
          }
        }

        return eventName;
      }

      s.emitterEventListeners = {};

      s.emit = function (eventName) {
        // Trigger callbacks
        if (s.params[eventName]) {
          s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }

        var i; // Trigger events

        if (s.emitterEventListeners[eventName]) {
          for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
            s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
          }
        } // Trigger plugins


        if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      };

      s.on = function (eventName, handler) {
        eventName = normalizeEventName(eventName);
        if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
        s.emitterEventListeners[eventName].push(handler);
        return s;
      };

      s.off = function (eventName, handler) {
        var i;
        eventName = normalizeEventName(eventName);

        if (typeof handler === 'undefined') {
          // Remove all handlers for such event
          s.emitterEventListeners[eventName] = [];
          return s;
        }

        if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;

        for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
          if (s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
        }

        return s;
      };

      s.once = function (eventName, handler) {
        eventName = normalizeEventName(eventName);

        var _handler = function _handler() {
          handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
          s.off(eventName, _handler);
        };

        s.on(eventName, _handler);
        return s;
      }; // Accessibility tools


      s.a11y = {
        makeFocusable: function makeFocusable($el) {
          $el.attr('tabIndex', '0');
          return $el;
        },
        addRole: function addRole($el, role) {
          $el.attr('role', role);
          return $el;
        },
        addLabel: function addLabel($el, label) {
          $el.attr('aria-label', label);
          return $el;
        },
        disable: function disable($el) {
          $el.attr('aria-disabled', true);
          return $el;
        },
        enable: function enable($el) {
          $el.attr('aria-disabled', false);
          return $el;
        },
        onEnterKey: function onEnterKey(event) {
          if (event.keyCode !== 13) return;

          if ($(event.target).is(s.params.nextButton)) {
            s.onClickNext(event);

            if (s.isEnd) {
              s.a11y.notify(s.params.lastSlideMessage);
            } else {
              s.a11y.notify(s.params.nextSlideMessage);
            }
          } else if ($(event.target).is(s.params.prevButton)) {
            s.onClickPrev(event);

            if (s.isBeginning) {
              s.a11y.notify(s.params.firstSlideMessage);
            } else {
              s.a11y.notify(s.params.prevSlideMessage);
            }
          }

          if ($(event.target).is('.' + s.params.bulletClass)) {
            $(event.target)[0].click();
          }
        },
        liveRegion: $('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
        notify: function notify(message) {
          var notification = s.a11y.liveRegion;
          if (notification.length === 0) return;
          notification.html('');
          notification.html(message);
        },
        init: function init() {
          // Setup accessibility
          if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
            s.a11y.makeFocusable(s.nextButton);
            s.a11y.addRole(s.nextButton, 'button');
            s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
          }

          if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
            s.a11y.makeFocusable(s.prevButton);
            s.a11y.addRole(s.prevButton, 'button');
            s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
          }

          $(s.container).append(s.a11y.liveRegion);
        },
        initPagination: function initPagination() {
          if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
            s.bullets.each(function () {
              var bullet = $(this);
              s.a11y.makeFocusable(bullet);
              s.a11y.addRole(bullet, 'button');
              s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
            });
          }
        },
        destroy: function destroy() {
          if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
        }
      };
      /*=========================
      Init/Destroy
      ===========================*/

      s.init = function () {
        if (s.params.loop) s.createLoop();
        s.updateContainerSize();
        s.updateSlidesSize();
        s.updatePagination();

        if (s.params.scrollbar && s.scrollbar) {
          s.scrollbar.set();

          if (s.params.scrollbarDraggable) {
            s.scrollbar.enableDraggable();
          }
        }

        if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
          if (!s.params.loop) s.updateProgress();
          s.effects[s.params.effect].setTranslate();
        }

        if (s.params.loop) {
          s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
        } else {
          s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);

          if (s.params.initialSlide === 0) {
            if (s.parallax && s.params.parallax) s.parallax.setTranslate();

            if (s.lazy && s.params.lazyLoading) {
              s.lazy.load();
              s.lazy.initialImageLoaded = true;
            }
          }
        }

        s.attachEvents();

        if (s.params.observer && s.support.observer) {
          s.initObservers();
        }

        if (s.params.preloadImages && !s.params.lazyLoading) {
          s.preloadImages();
        }

        if (s.params.autoplay) {
          s.startAutoplay();
        }

        if (s.params.keyboardControl) {
          if (s.enableKeyboardControl) s.enableKeyboardControl();
        }

        if (s.params.mousewheelControl) {
          if (s.enableMousewheelControl) s.enableMousewheelControl();
        }

        if (s.params.hashnav) {
          if (s.hashnav) s.hashnav.init();
        }

        if (s.params.a11y && s.a11y) s.a11y.init();
        s.emit('onInit', s);
      }; // Cleanup dynamic styles


      s.cleanupStyles = function () {
        // Container
        s.container.removeClass(s.classNames.join(' ')).removeAttr('style'); // Wrapper

        s.wrapper.removeAttr('style'); // Slides

        if (s.slides && s.slides.length) {
          s.slides.removeClass([s.params.slideVisibleClass, s.params.slideActiveClass, s.params.slideNextClass, s.params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-column').removeAttr('data-swiper-row');
        } // Pagination/Bullets


        if (s.paginationContainer && s.paginationContainer.length) {
          s.paginationContainer.removeClass(s.params.paginationHiddenClass);
        }

        if (s.bullets && s.bullets.length) {
          s.bullets.removeClass(s.params.bulletActiveClass);
        } // Buttons


        if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
        if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass); // Scrollbar

        if (s.params.scrollbar && s.scrollbar) {
          if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
          if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
        }
      }; // Destroy


      s.destroy = function (deleteInstance, cleanupStyles) {
        // Detach evebts
        s.detachEvents(); // Stop autoplay

        s.stopAutoplay(); // Disable draggable

        if (s.params.scrollbar && s.scrollbar) {
          if (s.params.scrollbarDraggable) {
            s.scrollbar.disableDraggable();
          }
        } // Destroy loop


        if (s.params.loop) {
          s.destroyLoop();
        } // Cleanup styles


        if (cleanupStyles) {
          s.cleanupStyles();
        } // Disconnect observer


        s.disconnectObservers(); // Disable keyboard/mousewheel

        if (s.params.keyboardControl) {
          if (s.disableKeyboardControl) s.disableKeyboardControl();
        }

        if (s.params.mousewheelControl) {
          if (s.disableMousewheelControl) s.disableMousewheelControl();
        } // Disable a11y


        if (s.params.a11y && s.a11y) s.a11y.destroy(); // Destroy callback

        s.emit('onDestroy'); // Delete instance

        if (deleteInstance !== false) s = null;
      };

      s.init(); // Return swiper instance

      return s;
    };
    /*==================================================
        Prototype
    ====================================================*/


    Swiper.prototype = {
      isSafari: function () {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
      }(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
      isArray: function isArray(arr) {
        return Object.prototype.toString.apply(arr) === '[object Array]';
      },

      /*==================================================
      Browser
      ====================================================*/
      browser: {
        ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
      },

      /*==================================================
      Devices
      ====================================================*/
      device: function () {
        var ua = navigator.userAgent;
        var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
        return {
          ios: ipad || iphone || ipod,
          android: android
        };
      }(),

      /*==================================================
      Feature Detection
      ====================================================*/
      support: {
        touch: window.Modernizr && Modernizr.touch === true || function () {
          return !!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
        }(),
        transforms3d: window.Modernizr && Modernizr.csstransforms3d === true || function () {
          var div = document.createElement('div').style;
          return 'webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div;
        }(),
        flexbox: function () {
          var div = document.createElement('div').style;
          var styles = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' ');

          for (var i = 0; i < styles.length; i++) {
            if (styles[i] in div) return true;
          }
        }(),
        observer: function () {
          return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
        }()
      },

      /*==================================================
      Plugins
      ====================================================*/
      plugins: {}
    };
    /*===========================
    Get Dom libraries
    ===========================*/

    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];

    for (var i = 0; i < swiperDomPlugins.length; i++) {
      if (window[swiperDomPlugins[i]]) {
        addLibraryPlugin(window[swiperDomPlugins[i]]);
      }
    } // Required DOM Plugins


    var domLib;

    if (typeof Dom7 === 'undefined') {
      domLib = window.Dom7 || window.Zepto || window.jQuery;
    } else {
      domLib = Dom7;
    }
    /*===========================
    Add .swiper plugin from Dom libraries
    ===========================*/


    function addLibraryPlugin(lib) {
      lib.fn.swiper = function (params) {
        var firstInstance;
        lib(this).each(function () {
          var s = new Swiper(this, params);
          if (!firstInstance) firstInstance = s;
        });
        return firstInstance;
      };
    }

    if (domLib) {
      if (!('transitionEnd' in domLib.fn)) {
        domLib.fn.transitionEnd = function (callback) {
          var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
              i,
              j,
              dom = this;

          function fireCallBack(e) {
            /*jshint validthis:true */
            if (e.target !== this) return;
            callback.call(this, e);

            for (i = 0; i < events.length; i++) {
              dom.off(events[i], fireCallBack);
            }
          }

          if (callback) {
            for (i = 0; i < events.length; i++) {
              dom.on(events[i], fireCallBack);
            }
          }

          return this;
        };
      }

      if (!('transform' in domLib.fn)) {
        domLib.fn.transform = function (transform) {
          for (var i = 0; i < this.length; i++) {
            var elStyle = this[i].style;
            elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
          }

          return this;
        };
      }

      if (!('transition' in domLib.fn)) {
        domLib.fn.transition = function (duration) {
          if (typeof duration !== 'string') {
            duration = duration + 'ms';
          }

          for (var i = 0; i < this.length; i++) {
            var elStyle = this[i].style;
            elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
          }

          return this;
        };
      }
    }

    window.Swiper = Swiper;
  })();
  /*===========================
  Swiper AMD Export
  ===========================*/


  if (true) {
    module.exports = window.Swiper;
  } else {}
}

module.exports = swiper();

/***/ }),

/***/ "./vendor/symfony/ux-turbo/Resources/assets/dist/turbo_controller.js":
/*!***************************************************************************!*\
  !*** ./vendor/symfony/ux-turbo/Resources/assets/dist/turbo_controller.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _stimulus = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");

var Turbo = _interopRequireWildcard(__webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
} // Expose Turbo to the rest of the app to allow for dynamic Turbo calls


window.Turbo = Turbo;
/**
 * Empty Stimulus controller only used for Symfony Flex wiring.
 *
 * @author Titouan Galopin <galopintitouan@gmail.com>
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  return _default;
}(_stimulus.Controller);

exports.default = _default;

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-6aab04"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);