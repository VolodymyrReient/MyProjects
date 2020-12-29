/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_02__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/02 */ \"./src/modules/02.js\");\n/* harmony import */ var _modules_05__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/05 */ \"./src/modules/05.js\");\n/* harmony import */ var _style_09_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/09.css */ \"./src/style/09.css\");\n/* harmony import */ var _img_bg_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/bg.jpeg */ \"./src/img/bg.jpeg\");\n/* harmony import */ var _modules_09__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/09 */ \"./src/modules/09.js\");\n\n\n\n\n\n(0,_modules_09__WEBPACK_IMPORTED_MODULE_4__.documentAll)();\nconsole.log((0,_modules_02__WEBPACK_IMPORTED_MODULE_0__.getMaxDigit)(123456));\nconsole.log((0,_modules_05__WEBPACK_IMPORTED_MODULE_1__.getRandomArray)(10, 3, 50));\nconsole.log(\"Hello!\");\n\n//# sourceURL=webpack://webpackmyself-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/02.js":
/*!***************************!*\
  !*** ./src/modules/02.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMaxDigit\": () => /* binding */ getMaxDigit,\n/* harmony export */   \"getPow\": () => /* binding */ getPow\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n// 1 function\nvar getMaxDigit = function getMaxDigit(number) {\n  return +Math.max.apply(Math, _toConsumableArray(number + ''));\n};\nconsole.log(getMaxDigit(123456));\nfunction getPow(x, y) {\n  var res = 1;\n\n  for (var i = 1; i <= Math.abs(y); i++) {\n    res *= x;\n  }\n\n  if (y < 0) {\n    return 1 / res;\n  } else {\n    return res;\n  }\n}\nconsole.log(getPow(5, -2)); //3 function\n\nfunction formatName(name) {\n  return name[0].toUpperCase() + name.slice(1).toLowerCase();\n}\n\nconsole.log(formatName(\"VOloDYmyR\")); //4 function\n\nfunction calcTax(wage) {\n  var tax = 19.5;\n  var cleanWage = +wage - +wage / 100 * tax;\n  return cleanWage;\n}\n\nconsole.log(calcTax(1000)); //5 function\n\nfunction getRandomIntInclusive(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nconsole.log(getRandomIntInclusive(1, 10)); //6 function\n\nfunction uniqueLetters(str) {\n  var string = str.toLowerCase().split('');\n  var res = string.filter(function (val, i, str) {\n    return str.lastIndexOf(val) === str.indexOf(val);\n  });\n  return res.join();\n}\n\nconsole.log(uniqueLetters(\"Бісквіт був дуже ніжним\"));\n\n//# sourceURL=webpack://webpackmyself-webpack/./src/modules/02.js?");

/***/ }),

/***/ "./src/modules/05.js":
/*!***************************!*\
  !*** ./src/modules/05.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomArray\": () => /* binding */ getRandomArray\n/* harmony export */ });\n// 1\nvar getRandomArray = function getRandomArray(length, min, max) {\n  return Array.from({\n    length: length\n  }).map(function (el) {\n    return Math.round(Math.random() * (min, max));\n  });\n}; // 2\n\nfunction getMode() {\n  var key = [];\n  var result = [];\n  var count = {};\n  var max = -Infinity;\n  var nomodeMsg = \"The array hasn't mode.\";\n  var nomodeFlag = true;\n\n  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {\n    arr[_key] = arguments[_key];\n  }\n\n  arr.forEach(function (item) {\n    if (!(item in count) && Number.isInteger(item)) count[item] = 0;\n    count[item]++;\n    max = max < count[item] ? count[item] : max;\n  });\n  if (max <= 1) return nomodeMsg;\n\n  for (key in count) {\n    if (count[key] === max) {\n      result.push(key);\n    } else {\n      nomodeFlag = false;\n    }\n  }\n\n  return nomodeFlag ? nomodeMsg : +result;\n} // 3 \n\n\nvar filterEvenNumbers = function filterEvenNumbers() {\n  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    numbers[_key2] = arguments[_key2];\n  }\n\n  return numbers.filter(function (el) {\n    return el % 2;\n  });\n}; // 4\n\n\nfunction getAverage() {\n  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n    numbers[_key3] = arguments[_key3];\n  }\n\n  var onlyGoals = numbers.filter(function (num) {\n    return num > 0 && num % parseInt(num) === 0;\n  }).map(function (num) {\n    return num;\n  });\n  var average = 0;\n  onlyGoals.forEach(function (num) {\n    if (Number.isInteger(num)) average += num;\n  });\n  return +average / onlyGoals.length.toFixed(2);\n} // 5 \n\n\nfunction countPositiveNumbers() {\n  var count = 0;\n\n  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n    numbers[_key4] = arguments[_key4];\n  }\n\n  numbers.forEach(function (num) {\n    if (num > 0) {\n      count++;\n    }\n  });\n  return count;\n} // 6\n\n\nvar getDividedByFive = function getDividedByFive() {\n  for (var _len5 = arguments.length, numbers = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\n    numbers[_key5] = arguments[_key5];\n  }\n\n  return numbers.filter(function (el) {\n    return el % 5 === 0;\n  });\n};\n\nconsole.log(\"\\n    \\u041C\\u0430\\u0441\\u0441\\u0438\\u0432 \\u0440\\u0430\\u043D\\u0434\\u043E\\u043C\\u043D\\u0438\\u0445 \\u0447\\u0438\\u0441\\u0435\\u043B(\\u043D\\u0430 \\u0432\\u0445\\u043E\\u0434\\u0456 10, 3, 50): \".concat(getRandomArray(10, 3, 50), \",\\n    \\u041C\\u043E\\u0434\\u0430(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): \").concat(getMode(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2), \",\\n    \\u0424\\u0456\\u043B\\u044C\\u0442\\u0440 \\u043F\\u0430\\u0440\\u043D\\u0438\\u0445 \\u0447\\u0438\\u0441\\u0435\\u043B(5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 105): \").concat(filterEvenNumbers(5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 105), \"\\n    \\u0421\\u0435\\u0440\\u0435\\u0434\\u043D\\u0454 \\u0430\\u0440\\u0438\\u0444\\u043C\\u0435\\u0442\\u0438\\u0447\\u043D\\u0435(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 3.5, 2.5, 40.5): \").concat(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 3.5, 2.5, 40.5), \",\\n    \\u041B\\u0456\\u0447\\u0438\\u043B\\u044C\\u043D\\u0438\\u043A \\u0434\\u043E\\u0434\\u0430\\u0442\\u043D\\u0456\\u0445 \\u0447\\u0438\\u0441\\u0435\\u043B(1, -2, 3, -4, -5, 6): \").concat(countPositiveNumbers(1, -2, 3, -4, -5, 6), \",\\n    \\u0427\\u0438\\u0441\\u043B\\u0430 \\u043A\\u0440\\u0430\\u0442\\u043D\\u0456 5(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): \").concat(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2), \"\\n    \"));\n\n//# sourceURL=webpack://webpackmyself-webpack/./src/modules/05.js?");

/***/ }),

/***/ "./src/modules/09.js":
/*!***************************!*\
  !*** ./src/modules/09.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"documentAll\": () => /* binding */ documentAll\n/* harmony export */ });\nfunction documentAll() {\n  var squareAll = document.querySelector(\".wrapper\");\n  var square = document.querySelectorAll(\".square\");\n  var btn = document.querySelector(\".btn\");\n  var timer;\n\n  function getRandomInt(min, max) {\n    return Math.floor(Math.random() * (max - min)) + min;\n  }\n\n  var randomColor = setInterval(function () {\n    square.forEach(function (e) {\n      e.style.backgroundColor = 'rgb(' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ')';\n    });\n  }, 1000);\n\n  function generateBlocks() {\n    squareAll.classList.toggle(\"wrapper-show\"); // if(!randomColor.classList.contains(\"wrapper-show\")) {\n    //   clearInterval(randomColor);\n    // }  \n  }\n\n  btn.addEventListener(\"click\", generateBlocks);\n}\n\n\n\n//# sourceURL=webpack://webpackmyself-webpack/./src/modules/09.js?");

/***/ }),

/***/ "./src/img/bg.jpeg":
/*!*************************!*\
  !*** ./src/img/bg.jpeg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fe1c94fe378bcded865820225aab3e3a.jpeg\");\n\n//# sourceURL=webpack://webpackmyself-webpack/./src/img/bg.jpeg?");

/***/ }),

/***/ "./src/style/09.css":
/*!**************************!*\
  !*** ./src/style/09.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackmyself-webpack/./src/style/09.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;