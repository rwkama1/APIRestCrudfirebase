module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/product/product.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/init-middleware.js":
/*!********************************!*\
  !*** ./lib/init-middleware.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initMiddleware; });
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

/***/ }),

/***/ "./pages/api/cors.js":
/*!***************************!*\
  !*** ./pages/api/cors.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/init-middleware */ "./lib/init-middleware.js");

 // Initialize the cors middleware

const cors = Object(_lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__["default"])( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
cors__WEBPACK_IMPORTED_MODULE_0___default()({
  // Only allow requests with GET, POST,PUT,DELETE and OPTIONS
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
/* harmony default export */ __webpack_exports__["default"] = (cors);

/***/ }),

/***/ "./pages/api/product/product.js":
/*!**************************************!*\
  !*** ./pages/api/product/product.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cors */ "./pages/api/cors.js");
/* harmony import */ var crudfirebase_dproduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crudfirebase/dproduct */ "crudfirebase/dproduct");
/* harmony import */ var crudfirebase_dproduct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crudfirebase_dproduct__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = (async function (req, res) {
  if (req.method === "GET") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
    const list = await crudfirebase_dproduct__WEBPACK_IMPORTED_MODULE_1__["DProduct"].getInstance().listproducts();
    res.send(list);
  }

  if (req.method === "POST") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);

    try {
      const data = req.body;
      var dtproduct = new crudfirebase_dproduct__WEBPACK_IMPORTED_MODULE_1__["Product"](data.barcode, data.name, data.price);
      const addproduct = await crudfirebase_dproduct__WEBPACK_IMPORTED_MODULE_1__["DProduct"].getInstance().addProduct(dtproduct);
      return res.status(200).json({
        status: "Success"
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        data: {
          msg: "Could not add product",
          error
        }
      });
    }
  }

  if (req.method === "PUT") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);

    try {
      const data = req.body;
      var dtproduct = new crudfirebase_dproduct__WEBPACK_IMPORTED_MODULE_1__["Product"](data.barcode, data.name, data.price);
      const updprod = await crudfirebase_dproduct__WEBPACK_IMPORTED_MODULE_1__["DProduct"].getInstance().updateProduct(dtproduct);
      return res.status(200).json({
        status: "Success"
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        data: {
          msg: "Could not update product",
          error
        }
      });
    }
  }

  if (req.method === "DELETE") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
    const {
      barcode
    } = req.query;

    try {
      var dtproduct = new crudfirebase_dproduct__WEBPACK_IMPORTED_MODULE_1__["Product"](barcode, "", 0);
      const updprod = await crudfirebase_dproduct__WEBPACK_IMPORTED_MODULE_1__["DProduct"].getInstance().deleteProduct(dtproduct);
      return res.status(200).json({
        status: "Success"
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        data: {
          msg: "Could not delete product",
          error
        }
      });
    }
  }
}); // export  async  function  getProduct(req, res) {
//   const { pbarcode } = req.query;
//   await cors(req, res)
//     const product=await DProduct.getInstance().getproduct(pbarcode);
//     res.json(product);
// }

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "crudfirebase/dproduct":
/*!****************************************!*\
  !*** external "crudfirebase/dproduct" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crudfirebase/dproduct");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXQtbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29ycy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvZHVjdC9wcm9kdWN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnVkZmlyZWJhc2UvZHByb2R1Y3RcIiJdLCJuYW1lcyI6WyJpbml0TWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiY29ycyIsIkNvcnMiLCJtZXRob2RzIiwibWV0aG9kIiwibGlzdCIsIkRQcm9kdWN0IiwiZ2V0SW5zdGFuY2UiLCJsaXN0cHJvZHVjdHMiLCJzZW5kIiwiZGF0YSIsImJvZHkiLCJkdHByb2R1Y3QiLCJQcm9kdWN0IiwiYmFyY29kZSIsIm5hbWUiLCJwcmljZSIsImFkZHByb2R1Y3QiLCJhZGRQcm9kdWN0Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibXNnIiwidXBkcHJvZCIsInVwZGF0ZVByb2R1Y3QiLCJxdWVyeSIsImRlbGV0ZVByb2R1Y3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7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LENBQUN3QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJELGNBQU0sRUFBRSxPQURrQjtBQUUxQlQsWUFBSSxFQUFFO0FBQUVZLGFBQUcsRUFBRSwwQkFBUDtBQUFtQ0Q7QUFBbkM7QUFGb0IsT0FBckIsQ0FBUDtBQUlEO0FBQ0Y7QUFDQSxDLEdBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7O0FDckVGLGlDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2FwaS9wcm9kdWN0L3Byb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9wcm9kdWN0L3Byb2R1Y3QuanNcIik7XG4iLCIvLyBIZWxwZXIgbWV0aG9kIHRvIHdhaXQgZm9yIGEgbWlkZGxld2FyZSB0byBleGVjdXRlIGJlZm9yZSBjb250aW51aW5nXG4vLyBBbmQgdG8gdGhyb3cgYW4gZXJyb3Igd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluIGEgbWlkZGxld2FyZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE1pZGRsZXdhcmUobWlkZGxld2FyZSkge1xuICByZXR1cm4gKHJlcSwgcmVzKSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG1pZGRsZXdhcmUocmVxLCByZXMsIChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KVxuICAgICAgfSlcbiAgICB9KVxufVxuIiwiaW1wb3J0IENvcnMgZnJvbSAnY29ycydcbmltcG9ydCBpbml0TWlkZGxld2FyZSBmcm9tICcuLi8uLi9saWIvaW5pdC1taWRkbGV3YXJlJ1xuXG5cblxuLy8gSW5pdGlhbGl6ZSB0aGUgY29ycyBtaWRkbGV3YXJlXG5jb25zdCBjb3JzID0gaW5pdE1pZGRsZXdhcmUoXG4gIC8vIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoZSBhdmFpbGFibGUgb3B0aW9ucyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2NvcnMjY29uZmlndXJhdGlvbi1vcHRpb25zXG4gIENvcnMoe1xuICAgIC8vIE9ubHkgYWxsb3cgcmVxdWVzdHMgd2l0aCBHRVQsIFBPU1QsUFVULERFTEVURSBhbmQgT1BUSU9OU1xuICAgIG1ldGhvZHM6IFsnR0VUJywgJ1BPU1QnLCAnUFVUJywnREVMRVRFJywnT1BUSU9OUyddLFxuICB9KVxuKVxuZXhwb3J0IGRlZmF1bHQgY29yc1xuXG4iLCJpbXBvcnQgY29ycyBmcm9tIFwiLi4vY29yc1wiO1xyXG5pbXBvcnQge0RQcm9kdWN0fSBmcm9tIFwiY3J1ZGZpcmViYXNlL2Rwcm9kdWN0XCI7XHJcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcImNydWRmaXJlYmFzZS9kcHJvZHVjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgaWYocmVxLm1ldGhvZD09PVwiR0VUXCIpXHJcbiAge1xyXG4gICAgYXdhaXQgY29ycyhyZXEsIHJlcylcclxuICAgIGNvbnN0IGxpc3Q9YXdhaXQgRFByb2R1Y3QuZ2V0SW5zdGFuY2UoKS5saXN0cHJvZHVjdHMoKTtcclxuICAgIHJlcy5zZW5kKGxpc3QpO1xyXG4gIH1cclxuICBpZihyZXEubWV0aG9kPT09XCJQT1NUXCIpXHJcbiAge1xyXG4gICAgYXdhaXQgY29ycyhyZXEsIHJlcylcclxuICAgIHRyeVxyXG4gICAge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgdmFyIGR0cHJvZHVjdD1uZXcgUHJvZHVjdChkYXRhLmJhcmNvZGUsIGRhdGEubmFtZSxkYXRhLnByaWNlKTtcclxuICAgIFxyXG4gICAgY29uc3QgYWRkcHJvZHVjdD1hd2FpdCBEUHJvZHVjdC5nZXRJbnN0YW5jZSgpLmFkZFByb2R1Y3QoZHRwcm9kdWN0KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogXCJTdWNjZXNzXCIgfSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICBzdGF0dXM6IFwiRXJyb3JcIixcclxuICAgICAgICBkYXRhOiB7IG1zZzogXCJDb3VsZCBub3QgYWRkIHByb2R1Y3RcIiwgZXJyb3IgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYocmVxLm1ldGhvZD09PVwiUFVUXCIpXHJcbiAge1xyXG4gICAgYXdhaXQgY29ycyhyZXEsIHJlcylcclxuICAgIHRyeVxyXG4gICAge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgdmFyIGR0cHJvZHVjdD1uZXcgUHJvZHVjdChkYXRhLmJhcmNvZGUsIGRhdGEubmFtZSxkYXRhLnByaWNlKTtcclxuICAgIGNvbnN0IHVwZHByb2Q9YXdhaXQgRFByb2R1Y3QuZ2V0SW5zdGFuY2UoKS51cGRhdGVQcm9kdWN0KGR0cHJvZHVjdCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IFwiU3VjY2Vzc1wiIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiBcIkVycm9yXCIsXHJcbiAgICAgICAgZGF0YTogeyBtc2c6IFwiQ291bGQgbm90IHVwZGF0ZSBwcm9kdWN0XCIsIGVycm9yIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKHJlcS5tZXRob2Q9PT1cIkRFTEVURVwiKVxyXG4gIHtcclxuICAgIGF3YWl0IGNvcnMocmVxLCByZXMpO1xyXG4gICAgY29uc3QgeyBiYXJjb2RlIH0gPSByZXEucXVlcnk7XHJcbiAgICB0cnlcclxuICAgIHtcclxuICAgIHZhciBkdHByb2R1Y3Q9bmV3IFByb2R1Y3QoYmFyY29kZSwgXCJcIiwwKTtcclxuICAgIGNvbnN0IHVwZHByb2Q9YXdhaXQgRFByb2R1Y3QuZ2V0SW5zdGFuY2UoKS5kZWxldGVQcm9kdWN0KGR0cHJvZHVjdCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IFwiU3VjY2Vzc1wiIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiBcIkVycm9yXCIsXHJcbiAgICAgICAgZGF0YTogeyBtc2c6IFwiQ291bGQgbm90IGRlbGV0ZSBwcm9kdWN0XCIsIGVycm9yIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIH1cclxuICAvLyBleHBvcnQgIGFzeW5jICBmdW5jdGlvbiAgZ2V0UHJvZHVjdChyZXEsIHJlcykge1xyXG4gIC8vICAgY29uc3QgeyBwYmFyY29kZSB9ID0gcmVxLnF1ZXJ5O1xyXG4gIC8vICAgYXdhaXQgY29ycyhyZXEsIHJlcylcclxuICAvLyAgICAgY29uc3QgcHJvZHVjdD1hd2FpdCBEUHJvZHVjdC5nZXRJbnN0YW5jZSgpLmdldHByb2R1Y3QocGJhcmNvZGUpO1xyXG4gIC8vICAgICByZXMuanNvbihwcm9kdWN0KTtcclxuICAvLyB9XHJcbiAgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnVkZmlyZWJhc2UvZHByb2R1Y3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==