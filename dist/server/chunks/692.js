"use strict";
exports.id = 692;
exports.ids = [692];
exports.modules = {

/***/ 3692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideControls: () => (/* binding */ n),
/* harmony export */   initialiseLiveSkin: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _index_cb62414e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9447);
/* harmony import */ var video_js_dist_video_js_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2611);
/* harmony import */ var video_js_dist_video_js_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5166);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6954);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1299);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(626);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7687);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7432);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6063);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5295);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4287);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7943);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(373);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _library_ad46544b_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9005);
function t(t,o){var n,i;!function(e){null!=e&&e.liveui||null==e||!e.liveVideo?__webpack_require__.e(/* import() */ 772).then(__webpack_require__.bind(__webpack_require__, 4772)).then((function(e){var s=document.createElement("style");s.id="dvr_skin",s.append("".concat(e.default)),document.head.appendChild(s)})):__webpack_require__.e(/* import() */ 348).then(__webpack_require__.bind(__webpack_require__, 3348)).then((function(e){var s=document.createElement("style");s.id="nondvr_skin",s.append("".concat(e.default)),document.head.appendChild(s)}))}(o);var l=(0,_index_cb62414e_js__WEBPACK_IMPORTED_MODULE_0__.V)().getPlayer(t).controlBar.getChild("SubsCapsButton").el();if(!((null===(n=document.getElementsByClassName("vjs-subs-caps-button")[1])||void 0===n||null===(i=n.childNodes)||void 0===i?void 0:i.length)>2)){document.getElementsByClassName("vjs-subs-caps-button")[1].appendChild((0,_index_cb62414e_js__WEBPACK_IMPORTED_MODULE_0__.V)().createIconMarkup((0,_index_cb62414e_js__WEBPACK_IMPORTED_MODULE_0__.N)()));var a=document.createElement("div");a.classList.add("caption-header"),l.querySelector(".vjs-menu-content").insertBefore(a,l.querySelector(".vjs-menu-item"));var r=document.createElement("div");if(r.innerText="Captions",r.className="fs14",document.getElementsByClassName("vjs-subs-caps-button")[0].appendChild(r),(0,_index_cb62414e_js__WEBPACK_IMPORTED_MODULE_0__.V)().addSlowMotion(t),"Safari"==(0,_index_cb62414e_js__WEBPACK_IMPORTED_MODULE_0__.V)().detectBrowser())document.getElementsByClassName("vjs-subs-caps-button")[0].style.left="9.5rem"}}var o;function n(e,s){i();var t=document.getElementsByClassName("vjs-chromecast-button")[0],n=document.getElementsByClassName("vjs-airplay-button")[0],l=document.getElementsByClassName("vjs-fullscreen-control")[0];e.on("pause",(function(){clearTimeout(o),null!=t&&t.classList.contains("hideoutsidecontrols")&&(null==t||t.classList.remove("hideoutsidecontrols")),l.classList.contains("hideoutsidecontrols")&&l.classList.remove("hideoutsidecontrols"),null!=n&&n.classList.contains("hideoutsidecontrols")&&n.classList.remove("hideoutsidecontrols")})),e.on("play",(function(){i()}));var a=document.getElementById("".concat(s));a.addEventListener("mouseenter",(function(){null!=t&&t.classList.contains("hideoutsidecontrols")&&(null==t||t.classList.remove("hideoutsidecontrols")),null!=l&&l.classList.contains("hideoutsidecontrols")&&l.classList.remove("hideoutsidecontrols"),null!=n&&n.classList.contains("hideoutsidecontrols")&&n.classList.remove("hideoutsidecontrols"),e.paused()||i()})),a.addEventListener("touchstart",(function(){null!=t&&t.classList.contains("hideoutsidecontrols")&&t.classList.remove("hideoutsidecontrols"),null!=l&&l.classList.contains("hideoutsidecontrols")&&l.classList.remove("hideoutsidecontrols"),null!=n&&n.classList.contains("hideoutsidecontrols")&&n.classList.remove("hideoutsidecontrols"),i()})),a.addEventListener("mousemove",(function(){null!=t&&t.classList.contains("hideoutsidecontrols")&&t.classList.remove("hideoutsidecontrols"),null!=l&&l.classList.contains("hideoutsidecontrols")&&l.classList.remove("hideoutsidecontrols"),null!=n&&n.classList.contains("hideoutsidecontrols")&&n.classList.remove("hideoutsidecontrols"),e.paused()||i()}))}function i(){var e=document.getElementsByClassName("vjs-chromecast-button")[0],s=document.getElementsByClassName("vjs-fullscreen-control")[0],t=document.getElementsByClassName("vjs-airplay-button")[0];clearTimeout(o),o=setTimeout((function(){null==e||e.classList.add("hideoutsidecontrols"),null==s||s.classList.add("hideoutsidecontrols"),null==t||t.classList.add("hideoutsidecontrols")}),2200)}


/***/ })

};
;