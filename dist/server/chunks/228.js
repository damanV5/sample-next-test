"use strict";
exports.id = 228;
exports.ids = [228];
exports.modules = {

/***/ 4228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7432);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6063);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4287);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7943);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(373);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(626);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_cb62414e_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9447);
/* harmony import */ var video_js_dist_video_js_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2611);
/* harmony import */ var video_js_dist_video_js_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5166);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6954);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1299);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7687);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5295);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _library_ad46544b_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9005);
function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,l=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(e);if(t){var s=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor;r=Reflect.construct(l,arguments,s)}else r=l.apply(this,arguments);return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this,r)}}var c=video_js__WEBPACK_IMPORTED_MODULE_5___default().getComponent("Component"),d=function(o){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(d,c);var n=i(d);function d(t){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,d),(r=n.call(this,t,o)).playerId=o.playerId,r.createUI(null==o?void 0:o.config.streams),r}return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(d,[{key:"createEl",value:function(){return video_js__WEBPACK_IMPORTED_MODULE_5___default().dom.createEl("div",{className:"mweb-potrait-parent"})}},{key:"createUI",value:function(e){var t=this,r=this.el(),o=video_js__WEBPACK_IMPORTED_MODULE_5___default().dom.createEl("div",{className:"broadcast"});o.innerHTML="Broadcasts";var n=video_js__WEBPACK_IMPORTED_MODULE_5___default().dom.createEl("div",{className:"potraittray hideMWebTray"});n.style.width="".concat(window.innerWidth-50,"px");var s=video_js__WEBPACK_IMPORTED_MODULE_5___default().dom.createEl("div",{className:"tilecontainer-potrait"});video_js__WEBPACK_IMPORTED_MODULE_5___default().dom.appendContent(r,o),video_js__WEBPACK_IMPORTED_MODULE_5___default().dom.appendContent(r,n),video_js__WEBPACK_IMPORTED_MODULE_5___default().dom.appendContent(n,s),o.addEventListener("click",(function(){null!=n&&n.classList.contains("hideMWebTray")?(n.classList.remove("hideMWebTray"),t.toggleProgressControls(!0),r.style.background="darkgray"):(null==n||n.classList.add("hideMWebTray"),t.toggleProgressControls(!1),r.style.background="gray")})),this.loadCSS();for(var a=0;a<e.length;a++)this.createTile(e[a],a)}},{key:"createTile",value:function(e,t){var r=this,o=this.el(),n=video_js__WEBPACK_IMPORTED_MODULE_5___default().dom.createEl("div",{className:"tile-potrait-mweb ".concat(t)});0==t&&(n.style.border="2px solid red"),n.style.backgroundImage="url(".concat(e.img,")");var i=video_js__WEBPACK_IMPORTED_MODULE_5___default().dom.$(".tilecontainer-potrait",this.contentEl());video_js__WEBPACK_IMPORTED_MODULE_5___default().dom.appendContent(i,n);var c=sessionStorage.getItem("token");return n.addEventListener("click",(function(t){(0,_index_cb62414e_js__WEBPACK_IMPORTED_MODULE_6__.s)(r.playerId),r.removeSelectedTile();var o=document.getElementsByClassName("".concat(t.srcElement.className))[0];o&&(o.style.border="2px solid red"),(0,_index_cb62414e_js__WEBPACK_IMPORTED_MODULE_6__.V)().load(r.playerId,e.id,c).then((function(e){(0,_index_cb62414e_js__WEBPACK_IMPORTED_MODULE_6__.V)().play(r.playerId)}))})),o}},{key:"removeSelectedTile",value:function(){for(var e=document.getElementsByClassName("tile-potrait-mweb"),t=0;t<e.length;t++)e[t].style.border=0}},{key:"loadCSS",value:function(){__webpack_require__.e(/* import() */ 289).then(__webpack_require__.bind(__webpack_require__, 7289)).then((function(e){var t=document.createElement("style");t.className="mweb",t.append("".concat(e.default)),document.head.appendChild(t)}))}},{key:"toggleProgressControls",value:function(e){var t=document.querySelector(".vjs-progress-control.vjs-control"),r=document.querySelector(".vjs-play-control.vjs-control.vjs-button"),o=document.querySelector(".vjs-remaining-time.vjs-time-control.vjs-control"),n=document.querySelector(".vjs-seek-to-live-control.vjs-control");e?(null==t||t.classList.add("hide-controls"),null==r||r.classList.add("hide-controls"),null==o||o.classList.add("hide-controls"),null==n||n.classList.add("hide-controls")):(null!=t&&t.classList.contains("hide-controls")&&(null==t||t.classList.remove("hide-controls")),null!=r&&r.classList.contains("hide-controls")&&(null==r||r.classList.remove("hide-controls")),null!=o&&o.classList.contains("hide-controls")&&(null==o||o.classList.remove("hide-controls")),null!=n&&n.classList.contains("hide-controls")&&(null==n||n.classList.remove("hide-controls")))}}]),d}();


/***/ })

};
;