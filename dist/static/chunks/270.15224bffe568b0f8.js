"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{9270:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var l=n(8050),i=n(9449),o=n(184),c=n(9959),a=n(5626),r=n(31),s=n(5877),u=n(95),d=n(5346);n(6675),n(4471),n(4362);var f=u.Z.getComponent("Component"),v=function(e){(0,c.Z)(h,f);var t,v=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=(0,r.Z)(h);if(t){var l=(0,r.Z)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,a.Z)(this,e)});function h(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,l.Z)(this,h),t=v.call(this,e,n),(0,s.Z)((0,o.Z)(t),"multicamCssPositioning",function(e,t){var n=window.getComputedStyle(document.getElementById(t),null),l=n.getPropertyValue("height"),i=n.getPropertyValue("width"),o=l.slice(0,-2);i.slice(0,-2)-135<=135?(e.style.bottom="290px",e.style.height="352px"):(e.style.bottom="".concat(o-135,"px"),e.style.height="".concat(o-85,"px"))}),t.playerId=n.playerId,t.streams=null==n?void 0:n.streams,t.config=null==n?void 0:n.config,t.createUI(null==n?void 0:n.streams),t}return(0,i.Z)(h,[{key:"createEl",value:function(){return u.Z.dom.createEl("div",{className:"multicamera-parent"})}},{key:"createUI",value:function(e){var t,n,l,i,o,c,a=this,r=this.el();null!=this&&null!==(t=this.config)&&void 0!==t&&t.liveui&&null!=this&&null!==(n=this.config)&&void 0!==n&&n.liveVideo||0==(null==this||null===(l=this.config)||void 0===l?void 0:l.liveui)&&0==(null==this||null===(i=this.config)||void 0===i?void 0:i.liveVideo)?null==r||null===(o=r.classList)||void 0===o||o.add("".concat(this.config.skin)):null==r||null===(c=r.classList)||void 0===c||c.add("default"),this.loadCSS();for(var s=0;s<e.length;s++)this.createTile(e[s],s);this.multicamCssPositioning(r,this.playerId),window.onresize=function(){a.multicamCssPositioning(r,a.playerId)}}},{key:"getOffset",value:function(e){var t=e.getBoundingClientRect();return{left:t.left+window.scrollX,top:t.top+window.scrollY}}},{key:"createTile",value:function(e,t){var n=this,l=this.el(),i=u.Z.dom.createEl("div",{className:"tile ".concat(t)});0==t&&(i.style.border="2px solid red"),i.style.backgroundImage="url(".concat(e.img,")"),u.Z.dom.appendContent(l,i);var o=sessionStorage.getItem("token");return i.addEventListener("click",function(t){(0,d.s)(n.playerId),n.removeSelectedTile();var l=document.getElementsByClassName("".concat(t.srcElement.className))[0];l&&(l.style.border="2px solid red"),(0,d.V)().load(n.playerId,e.id,o).then(function(e){(0,d.V)().play(n.playerId)})}),l}},{key:"removeSelectedTile",value:function(){for(var e=document.getElementsByClassName("tile"),t=0;t<e.length;t++)e[t].style.border=0}},{key:"loadCSS",value:function(){n.e(603).then(n.bind(n,603)).then(function(e){var t=document.createElement("style");t.id="multicam",t.append("".concat(e.default)),document.head.appendChild(t)})}}]),h}()}}]);