"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[810],{2810:function(e,s,t){t.r(s),t.d(s,{hideControls:function(){return i},initialiseLiveSkin:function(){return l}});var n,o=t(5346);function l(e,s){null!=s&&s.liveui||null==s||!s.liveVideo?t.e(552).then(t.bind(t,552)).then(function(e){var s=document.createElement("style");s.id="dvr_skin",s.append("".concat(e.default)),document.head.appendChild(s)}):t.e(156).then(t.bind(t,9156)).then(function(e){var s=document.createElement("style");s.id="nondvr_skin",s.append("".concat(e.default)),document.head.appendChild(s)});var n,l,i=(0,o.V)().getPlayer(e).controlBar.getChild("SubsCapsButton").el();if(!((null===(n=document.getElementsByClassName("vjs-subs-caps-button")[1])||void 0===n||null===(l=n.childNodes)||void 0===l?void 0:l.length)>2)){document.getElementsByClassName("vjs-subs-caps-button")[1].appendChild((0,o.V)().createIconMarkup((0,o.N)()));var c=document.createElement("div");c.classList.add("caption-header"),i.querySelector(".vjs-menu-content").insertBefore(c,i.querySelector(".vjs-menu-item"));var a=document.createElement("div");a.innerText="Captions",a.className="fs14",document.getElementsByClassName("vjs-subs-caps-button")[0].appendChild(a),(0,o.V)().addSlowMotion(e),"Safari"==(0,o.V)().detectBrowser()&&(document.getElementsByClassName("vjs-subs-caps-button")[0].style.left="9.5rem")}}function i(e,s){c();var t=document.getElementsByClassName("vjs-chromecast-button")[0],o=document.getElementsByClassName("vjs-airplay-button")[0],l=document.getElementsByClassName("vjs-fullscreen-control")[0];e.on("pause",function(){clearTimeout(n),null!=t&&t.classList.contains("hideoutsidecontrols")&&(null==t||t.classList.remove("hideoutsidecontrols")),l.classList.contains("hideoutsidecontrols")&&l.classList.remove("hideoutsidecontrols"),null!=o&&o.classList.contains("hideoutsidecontrols")&&o.classList.remove("hideoutsidecontrols")}),e.on("play",function(){c()});var i=document.getElementById("".concat(s));i.addEventListener("mouseenter",function(){null!=t&&t.classList.contains("hideoutsidecontrols")&&(null==t||t.classList.remove("hideoutsidecontrols")),null!=l&&l.classList.contains("hideoutsidecontrols")&&l.classList.remove("hideoutsidecontrols"),null!=o&&o.classList.contains("hideoutsidecontrols")&&o.classList.remove("hideoutsidecontrols"),e.paused()||c()}),i.addEventListener("touchstart",function(){null!=t&&t.classList.contains("hideoutsidecontrols")&&t.classList.remove("hideoutsidecontrols"),null!=l&&l.classList.contains("hideoutsidecontrols")&&l.classList.remove("hideoutsidecontrols"),null!=o&&o.classList.contains("hideoutsidecontrols")&&o.classList.remove("hideoutsidecontrols"),c()}),i.addEventListener("mousemove",function(){null!=t&&t.classList.contains("hideoutsidecontrols")&&t.classList.remove("hideoutsidecontrols"),null!=l&&l.classList.contains("hideoutsidecontrols")&&l.classList.remove("hideoutsidecontrols"),null!=o&&o.classList.contains("hideoutsidecontrols")&&o.classList.remove("hideoutsidecontrols"),e.paused()||c()})}function c(){var e=document.getElementsByClassName("vjs-chromecast-button")[0],s=document.getElementsByClassName("vjs-fullscreen-control")[0],t=document.getElementsByClassName("vjs-airplay-button")[0];clearTimeout(n),n=setTimeout(function(){null==e||e.classList.add("hideoutsidecontrols"),null==s||s.classList.add("hideoutsidecontrols"),null==t||t.classList.add("hideoutsidecontrols")},2200)}t(6675),t(4471),t(95),t(4362)}}]);