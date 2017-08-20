/**
 * @arvoux/background-image - Arvoux Background Image Plugin
 * @version v1.0.0
 * @author jackzard
 * @link https://github.com/jackzard/ArvouxBackgroundImage#readme
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["arvouxBackgroundImage"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["arvouxBackgroundImage"] = factory(root["ng"]["core"], root["ng"]["common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(3));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(1);
var background_image_1 = __webpack_require__(4);
var ArvouxBackgroundImageModule = (function () {
    function ArvouxBackgroundImageModule() {
    }
    ArvouxBackgroundImageModule_1 = ArvouxBackgroundImageModule;
    ArvouxBackgroundImageModule.forRoot = function () {
        return {
            ngModule: ArvouxBackgroundImageModule_1
        };
    };
    ArvouxBackgroundImageModule = ArvouxBackgroundImageModule_1 = __decorate([
        core_1.NgModule({
            declarations: [background_image_1.BackgroundImageDirective],
            imports: [common_1.CommonModule],
            exports: [background_image_1.BackgroundImageDirective]
        })
    ], ArvouxBackgroundImageModule);
    return ArvouxBackgroundImageModule;
    var ArvouxBackgroundImageModule_1;
}());
exports.ArvouxBackgroundImageModule = ArvouxBackgroundImageModule;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(1);
var BackgroundImageDirective = (function () {
    function BackgroundImageDirective(ElementRef, platform_id) {
        this.ElementRef = ElementRef;
        this.platform_id = platform_id;
        this.server_url = true;
        this.pos_cover = true;
        this.shadow = true;
        this.resize = 0;
    }
    BackgroundImageDirective.prototype.ngOnInit = function () {
        if (!common_1.isPlatformBrowser(this.platform_id))
            return;
        var el = this.ElementRef.nativeElement;
        this.SetBackgroundImage();
        if (this.pos_cover)
            this.SetPositionSize(el);
    };
    BackgroundImageDirective.prototype.SetBackgroundImage = function (url) {
        if (url === void 0) { url = null; }
        var el = this.ElementRef.nativeElement;
        var url_default = this.url ? this.url : this.ENV.no_image;
        this.path_image = this.server_url
            ? this.ENV.img_url + '/' + url_default
            : url_default;
        if (url)
            this.path_image = this.ENV.img_url + '/' + url;
        el.style.backgroundImage = "url('" + this.path_image + "')";
    };
    BackgroundImageDirective.prototype.SetPositionSize = function (el) {
        el.style.backgroundSize = 'cover';
        el.style.backgroundPosition = 'center';
    };
    __decorate([
        core_1.Input('bg-url'),
        __metadata("design:type", Object)
    ], BackgroundImageDirective.prototype, "url", void 0);
    __decorate([
        core_1.Input('bg-server-url'),
        __metadata("design:type", Boolean)
    ], BackgroundImageDirective.prototype, "server_url", void 0);
    __decorate([
        core_1.Input('bg-position-cover'),
        __metadata("design:type", Boolean)
    ], BackgroundImageDirective.prototype, "pos_cover", void 0);
    __decorate([
        core_1.Input('bg-shadow'),
        __metadata("design:type", Boolean)
    ], BackgroundImageDirective.prototype, "shadow", void 0);
    __decorate([
        core_1.Input('bg-resize'),
        __metadata("design:type", Number)
    ], BackgroundImageDirective.prototype, "resize", void 0);
    __decorate([
        core_1.Input('ENV'),
        __metadata("design:type", Object)
    ], BackgroundImageDirective.prototype, "ENV", void 0);
    BackgroundImageDirective = __decorate([
        core_1.Directive({
            selector: '[background-image]',
        }),
        __param(1, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [core_1.ElementRef, Object])
    ], BackgroundImageDirective);
    return BackgroundImageDirective;
}());
exports.BackgroundImageDirective = BackgroundImageDirective;


/***/ })
/******/ ]);
});
//# sourceMappingURL=ArvouxBackgroundImage.umd.js.map