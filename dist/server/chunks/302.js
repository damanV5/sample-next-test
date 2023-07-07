"use strict";
exports.id = 302;
exports.ids = [302];
exports.modules = {

/***/ 8302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7432);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6063);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5295);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4287);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7943);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(373);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5166);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(626);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_cb62414e_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9447);
/* harmony import */ var video_js_dist_video_js_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2611);
/* harmony import */ var video_js_dist_video_js_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6954);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1299);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7687);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _library_ad46544b_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9005);
function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,l=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(e);if(t){var n=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor;i=Reflect.construct(l,arguments,n)}else i=l.apply(this,arguments);return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this,i)}}var m=video_js__WEBPACK_IMPORTED_MODULE_7___default().getComponent("Component"),d=function(r){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(d,m);var o=u(d);function d(t){var l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,d),l=o.call(this,t,r),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(l),"multicamCssPositioning",(function(e,t){var i=window.getComputedStyle(document.getElementById(t),null),l=i.getPropertyValue("height"),r=i.getPropertyValue("width"),o=l.slice(0,-2);r.slice(0,-2)-135<=135?(e.style.bottom="290px",e.style.height="352px"):(e.style.bottom="".concat(o-135,"px"),e.style.height="".concat(o-85,"px"))})),l.playerId=r.playerId,l.streams=null==r?void 0:r.streams,l.config=null==r?void 0:r.config,l.createUI(null==r?void 0:r.streams),l}return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(d,[{key:"createEl",value:function(){return video_js__WEBPACK_IMPORTED_MODULE_7___default().dom.createEl("div",{className:"multicamera-parent"})}},{key:"createUI",value:function(e){var t,i,l,r,o,n,s=this,a=this.el();null!=this&&null!==(t=this.config)&&void 0!==t&&t.liveui&&null!=this&&null!==(i=this.config)&&void 0!==i&&i.liveVideo||0==(null==this||null===(l=this.config)||void 0===l?void 0:l.liveui)&&0==(null==this||null===(r=this.config)||void 0===r?void 0:r.liveVideo)?null==a||null===(o=a.classList)||void 0===o||o.add("".concat(this.config.skin)):null==a||null===(n=a.classList)||void 0===n||n.add("default"),this.loadCSS();for(var c=0;c<e.length;c++)this.createTile(e[c],c);this.multicamCssPositioning(a,this.playerId),window.onresize=function(){s.multicamCssPositioning(a,s.playerId)}}},{key:"getOffset",value:function(e){var t=e.getBoundingClientRect();return{left:t.left+window.scrollX,top:t.top+window.scrollY}}},{key:"createTile",value:function(e,t){var i=this,l=this.el(),r=video_js__WEBPACK_IMPORTED_MODULE_7___default().dom.createEl("div",{className:"tile ".concat(t)});0==t&&(r.style.border="2px solid red"),r.style.backgroundImage="url(".concat(e.img,")"),video_js__WEBPACK_IMPORTED_MODULE_7___default().dom.appendContent(l,r);var o=sessionStorage.getItem("token");return r.addEventListener("click",(function(t){(0,_index_cb62414e_js__WEBPACK_IMPORTED_MODULE_8__.s)(i.playerId),i.removeSelectedTile();var l=document.getElementsByClassName("".concat(t.srcElement.className))[0];l&&(l.style.border="2px solid red"),(0,_index_cb62414e_js__WEBPACK_IMPORTED_MODULE_8__.V)().load(i.playerId,e.id,o).then((function(e){(0,_index_cb62414e_js__WEBPACK_IMPORTED_MODULE_8__.V)().play(i.playerId)}))})),l}},{key:"removeSelectedTile",value:function(){for(var e=document.getElementsByClassName("tile"),t=0;t<e.length;t++)e[t].style.border=0}},{key:"loadCSS",value:function(){__webpack_require__.e(/* import() */ 297).then(__webpack_require__.bind(__webpack_require__, 5297)).then((function(e){var t=document.createElement("style");t.id="multicam",t.append("".concat(e.default)),document.head.appendChild(t)}))}}]),d}();


/***/ })

};
;