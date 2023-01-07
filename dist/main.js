/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\nbody {\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 60%;\\r\\n  max-width: 600px;\\r\\n  margin: 20px auto;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  padding: 15px;\\r\\n  margin: 0;\\r\\n  font-weight: 200;\\r\\n  font-size: 18px;\\r\\n  border-bottom: 1px #cecece solid;\\r\\n}\\r\\n\\r\\n.todo-input {\\r\\n  padding: 15px;\\r\\n  border-bottom: 1px #cecece solid;\\r\\n  border-left: none;\\r\\n  border-right: none;\\r\\n  border-top: none;\\r\\n}\\r\\n\\r\\n.todo-list {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.todo-list li {\\r\\n  padding: 15px;\\r\\n  border-bottom: 1px #cecece solid;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.todo-list div {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.all-clear-btn {\\r\\n  padding: 15px;\\r\\n  border: none;\\r\\n  color: #5a5a5a;\\r\\n}\\r\\n\\r\\n.todo-menu i {\\r\\n  margin: 5px;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.line-over {\\r\\n  text-decoration: line-through;\\r\\n  color: #5a5a5a;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_LoadTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/LoadTodos.js */ \"./src/modules/LoadTodos.js\");\n/* harmony import */ var _modules_Add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Add.js */ \"./src/modules/Add.js\");\n/* harmony import */ var _modules_Checkbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Checkbox.js */ \"./src/modules/Checkbox.js\");\n// import _ from 'lodash';\r\n\r\n\r\n\r\n\r\n\r\nconst todoInput = document.getElementById('todo-input-id');\r\nconst clearAll = document.querySelector('.all-clear-btn');\r\n\r\nwindow.onload = () => {\r\n  _modules_LoadTodos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoFunc();\r\n};\r\n\r\ntodoInput.addEventListener('keypress', (e) => {\r\n  if (e.key === 'Enter') {\r\n    _modules_Add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addTodo();\r\n  }\r\n});\r\n\r\nclearAll.addEventListener('click', () => {\r\n  _modules_Checkbox_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].removeCompleted();\r\n});\r\n\n\n//# sourceURL=webpack://todo-list-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/Add.js":
/*!****************************!*\
  !*** ./src/modules/Add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddTodos)\n/* harmony export */ });\n/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.js */ \"./src/modules/Todo.js\");\n/* harmony import */ var _LoadTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadTodos.js */ \"./src/modules/LoadTodos.js\");\n\n\n\nconst todoInput = document.querySelector('.todo-input');\n\nclass AddTodos {\n  static addTodo() {\n    const index = _LoadTodos_js__WEBPACK_IMPORTED_MODULE_1__.loadedTodos.length + 1;\n    const todo = new _Todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](index, todoInput.value, false);\n    _LoadTodos_js__WEBPACK_IMPORTED_MODULE_1__.loadedTodos.push(todo);\n    localStorage.setItem(_LoadTodos_js__WEBPACK_IMPORTED_MODULE_1__.storageKey, JSON.stringify(_LoadTodos_js__WEBPACK_IMPORTED_MODULE_1__.loadedTodos));\n    _LoadTodos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoFunc();\n    todoInput.value = '';\n  }\n}\n\n//# sourceURL=webpack://todo-list-webpack/./src/modules/Add.js?");

/***/ }),

/***/ "./src/modules/Checkbox.js":
/*!*********************************!*\
  !*** ./src/modules/Checkbox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CheckboxAction)\n/* harmony export */ });\n/* harmony import */ var _LoadTodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadTodos.js */ \"./src/modules/LoadTodos.js\");\n/* eslint-disable */\r\n\r\n\r\nclass CheckboxAction {\r\n  constructor() {\r\n    this.toDoList = JSON.parse(localStorage.getItem(_LoadTodos_js__WEBPACK_IMPORTED_MODULE_0__.storageKey)) || [];\r\n  }\r\n\r\n  static checkboxAction(i, action) {\r\n    _LoadTodos_js__WEBPACK_IMPORTED_MODULE_0__.loadedTodos[i].completed = action;\r\n    localStorage.setItem(_LoadTodos_js__WEBPACK_IMPORTED_MODULE_0__.storageKey, JSON.stringify(_LoadTodos_js__WEBPACK_IMPORTED_MODULE_0__.loadedTodos));\r\n  }\r\n\r\n  // remove all completed todos\r\n  static removeCompleted() {\r\n    this.toDoList = _LoadTodos_js__WEBPACK_IMPORTED_MODULE_0__.loadedTodos.filter((task) => task.completed !== true);\r\n\r\n    localStorage.setItem(_LoadTodos_js__WEBPACK_IMPORTED_MODULE_0__.storageKey, JSON.stringify(this.toDoList));\r\n    for (let i = 0; i < this.toDoList.length; i += 1) {\r\n      this.toDoList[i].index = i + 1;\r\n    }\r\n    localStorage.setItem(_LoadTodos_js__WEBPACK_IMPORTED_MODULE_0__.storageKey, JSON.stringify(this.toDoList));\r\n    window.location.reload();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list-webpack/./src/modules/Checkbox.js?");

/***/ }),

/***/ "./src/modules/LoadTodos.js":
/*!**********************************!*\
  !*** ./src/modules/LoadTodos.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoadTodos),\n/* harmony export */   \"loadedTodos\": () => (/* binding */ loadedTodos),\n/* harmony export */   \"storageKey\": () => (/* binding */ storageKey)\n/* harmony export */ });\n/* harmony import */ var _Remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Remove.js */ \"./src/modules/Remove.js\");\n/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo.js */ \"./src/modules/Todo.js\");\n/* harmony import */ var _Checkbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkbox.js */ \"./src/modules/Checkbox.js\");\n/* eslint-disable */\r\n\r\n\r\n\r\n\r\nconst storageKey = 'todoLocalData';\r\nconst loadedTodos = JSON.parse(localStorage.getItem(storageKey)) || null;\r\n\r\nconst todoList = document.querySelector('.todo-list');\r\n\r\nclass LoadTodos {\r\n  static todoFunc() {\r\n    // let data = JSON.parse(localStorage.getItem(storageKey)) || null;\r\n\r\n    todoList.innerHTML = '';\r\n    console.log(loadedTodos, 'this is data');\r\n    if(loadedTodos !== null){\r\n      for (let i = 0; i < loadedTodos.length; i += 1) {\r\n        todoList.innerHTML += `\r\n                <li>\r\n                <div>\r\n                <input class=\"edite-input hide\" type=\"text\" id=\"edit-input-id\" name=\"edit\">\r\n                <input class=\"checkbox show\" type=\"checkbox\" id=\"todo-${i}\" name=\"todo-${i}\" value=\"\">\r\n                <label class=\"checkbox-label show\" for=\"todo-${i}\"> ${loadedTodos[i].disc}</label>\r\n                </div>\r\n                <div class=\"todo-menu\">\r\n                <i class='fa fa-ellipsis-v three-dot show'></i>\r\n                <i class=\"fa fa-wrench edite hide\" aria-hidden=\"true\"></i>\r\n                <i class=\"fa fa-trash trash hide\" aria-hidden=\"true\"></i>\r\n                <i class=\"fa fa-times close hide\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                </li>`;\r\n      }\r\n    }else{\r\n      const todo1 = new _Todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1,'Reading Books',false);\r\n      localStorage.setItem(storageKey, JSON.stringify(todo1));\r\n    }\r\n   \r\n    const checkBox = document.querySelectorAll('.checkbox');\r\n    const checkboxLabel = document.querySelectorAll('.checkbox-label');\r\n    const editInput = document.querySelectorAll('.edite-input');\r\n    const todomenu = document.querySelectorAll('.three-dot');\r\n    const todoClose = document.querySelectorAll('.close');\r\n    const todoEdite = document.querySelectorAll('.edite');\r\n    const todoTrash = document.querySelectorAll('.trash');\r\n    if(loadedTodos!==null){\r\n      for (let a = 0; a < loadedTodos.length; a += 1) {\r\n        todomenu[a].addEventListener('click', () => {\r\n          todomenu[a].classList.replace('show', 'hide');\r\n          todoClose[a].classList.replace('hide', 'show');\r\n          todoEdite[a].classList.replace('hide', 'show');\r\n          todoTrash[a].classList.replace('hide', 'show');\r\n        });\r\n      }\r\n    }\r\n\r\n    if(loadedTodos!==null){\r\n      for (let a = 0; a < loadedTodos.length; a += 1) {\r\n        todoClose[a].addEventListener('click', () => {\r\n          todomenu[a].classList.replace('hide', 'show');\r\n          todoClose[a].classList.replace('show', 'hide');\r\n          todoEdite[a].classList.replace('show', 'hide');\r\n          todoTrash[a].classList.replace('show', 'hide');\r\n          checkBox[a].classList.replace('hide', 'show');\r\n          checkboxLabel[a].classList.replace('hide', 'show');\r\n          editInput[a].classList.replace('show', 'hide');\r\n        });\r\n      }\r\n    }\r\n    \r\n    if(loadedTodos!==null){\r\n      for (let a = 0; a < loadedTodos.length; a += 1) {\r\n        todoTrash[a].addEventListener('click', () => {\r\n          _Remove_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTodo(a);\r\n        });\r\n      }\r\n    }\r\n\r\n    if(loadedTodos!==null){\r\n      for (let a = 0; a < loadedTodos.length; a += 1) {\r\n        todoEdite[a].addEventListener('click', () => {\r\n          todoEdite[a].classList.replace('show', 'hide');\r\n          todoTrash[a].classList.replace('show', 'hide');\r\n          checkBox[a].classList.replace('show', 'hide');\r\n          checkboxLabel[a].classList.replace('show', 'hide');\r\n          editInput[a].classList.replace('hide', 'show');\r\n  \r\n          editInput[a].value = loadedTodos[a].disc;\r\n        });\r\n      }\r\n    }\r\n\r\n   if(loadedTodos!==null){\r\n    for (let a = 0; a < loadedTodos.length; a += 1) {\r\n      editInput[a].addEventListener('keypress', (e) => {\r\n        if (editInput[a].value && e.key === 'Enter') {\r\n          const todo = new _Todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](a+1,editInput[a].value, false);\r\n          loadedTodos[a] = todo;\r\n          localStorage.setItem(storageKey, JSON.stringify(loadedTodos));\r\n          LoadTodos.todoFunc();\r\n          editInput[a].value = '';\r\n          editInput[a].classList.replace('show', 'hide');\r\n          checkBox[a].classList.replace('hide', 'show');\r\n          checkboxLabel[a].classList.replace('hide', 'show');\r\n        }\r\n      });\r\n    }\r\n   }\r\n\r\n    const checkboxInput = document.querySelectorAll('.checkbox');\r\n    const checkLabel = document.querySelectorAll('.checkbox-label');\r\n    \r\n    if(loadedTodos!==null){\r\n      for(let a = 0; a<loadedTodos.length;a +=1){\r\n        checkboxInput[a].addEventListener('change', () => {\r\n          if (checkboxInput[a].checked) {\r\n            checkLabel[a].classList.add('line-over');\r\n            _Checkbox_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].checkboxAction(a,true);\r\n          }else {\r\n            checkLabel[a].classList.remove('line-over');\r\n            _Checkbox_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].checkboxAction(a,false);\r\n          }\r\n          \r\n        });\r\n      }\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list-webpack/./src/modules/LoadTodos.js?");

/***/ }),

/***/ "./src/modules/Remove.js":
/*!*******************************!*\
  !*** ./src/modules/Remove.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DeleteTodo)\n/* harmony export */ });\n/* harmony import */ var _LoadTodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadTodos.js */ \"./src/modules/LoadTodos.js\");\n/* eslint-disable */\r\n\r\n\r\nclass DeleteTodo {\r\n  static deleteTodo(i) {\r\n    _LoadTodos_js__WEBPACK_IMPORTED_MODULE_0__.loadedTodos.splice(i, 1);\r\n    for(let i = 0; i < _LoadTodos_js__WEBPACK_IMPORTED_MODULE_0__.loadedTodos.length; i+=1){\r\n      _LoadTodos_js__WEBPACK_IMPORTED_MODULE_0__.loadedTodos[i].index = i+1\r\n    }\r\n    localStorage.setItem(_LoadTodos_js__WEBPACK_IMPORTED_MODULE_0__.storageKey, JSON.stringify(_LoadTodos_js__WEBPACK_IMPORTED_MODULE_0__.loadedTodos));\r\n    _LoadTodos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoFunc();\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list-webpack/./src/modules/Remove.js?");

/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n  constructor(index, disc, completed) {\n    this.index = index;\n    this.disc = disc;\n    this.completed = completed;\n  }\n}\n\n//# sourceURL=webpack://todo-list-webpack/./src/modules/Todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;