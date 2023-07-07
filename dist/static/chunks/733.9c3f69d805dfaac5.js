"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[733],{5733:function(e,t,n){n.r(t),n.d(t,{emeErrorHandler:function(){return x},getOptions:function(){return Z},handleEncryptedEvent:function(){return j},handleMsNeedKeyEvent:function(){return H},handleWebKitNeedKeyEvent:function(){return N},hasSession:function(){return P},removeSession:function(){return O},setupSessions:function(){return q}});var r=n(7567),i=n.n(r),s=n(95),a=n(5228),o=n.n(a);/*! @name videojs-contrib-eme @version 3.11.1 @license Apache-2.0 */function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){for(var t=new ArrayBuffer(2*e.length),n=new Uint16Array(t),r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n},y=function(e){var t=i().createElement("a");return t.href=e,t.hostname},d=function(e,t){if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(var n=new DataView(e),r=new DataView(t),i=0;i<n.byteLength;i++)if(n.getUint8(i)!==r.getUint8(i))return!1;return!0},f=function(e){return e instanceof Uint8Array||e instanceof Uint16Array?e.buffer:e},m=function(){for(var e=s.Z.obj||s.Z,t=e.merge||e.mergeOptions,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.apply(e,r)},g=function(){var e=m.apply(void 0,arguments);return Object.keys(e).forEach(function(t){null===e[t]&&delete e[t]}),e},l=s.Z.xhr.httpHandler;l||(l=function(e,t){return function(n,r,i){if(n){e(n);return}if(r.statusCode>=400&&r.statusCode<=599){var s=i;t&&(s=String.fromCharCode.apply(null,new Uint8Array(i))),e({cause:s});return}e(null,i)}});var p=function(e){var t,n=String.fromCharCode.apply(null,new Uint16Array(e)),r=new(o()).DOMParser().parseFromString(n,"application/xml"),i=r.getElementsByTagName("HttpHeaders")[0],s={};if(i)for(var a=i.getElementsByTagName("name"),c=i.getElementsByTagName("value"),u=0;u<a.length;u++)s[a[u].childNodes[0].nodeValue]=c[u].childNodes[0].nodeValue;var y=r.getElementsByTagName("Challenge")[0];return y&&(t=o().atob(y.childNodes[0].nodeValue)),{headers:s,message:t}},v=function(e,t,n,r){var i=p(t),a=i.message,o=g(i.headers,n.emeHeaders,e.licenseHeaders);s.Z.xhr({uri:e.url,method:"post",headers:o,body:a,responseType:"arraybuffer"},l(r,!0))},h=function(e){if(e.supportedConfigurations)return e.supportedConfigurations;var t={},n=e.audioContentType,r=e.audioRobustness,i=e.videoContentType,s=e.videoRobustness,a=e.persistentState;return(n||r)&&(t.audioCapabilities=[c({},n?{contentType:n}:{},r?{robustness:r}:{})]),(i||s)&&(t.videoCapabilities=[c({},i?{contentType:i}:{},s?{robustness:s}:{})]),a&&(t.persistentState=a),[t]},k=function(e){var t;return Object.keys(e).forEach(function(n){var r=h(e[n]);t=t?t.catch(function(e){return o().navigator.requestMediaKeySystemAccess(n,r)}):o().navigator.requestMediaKeySystemAccess(n,r)}),t},b=function e(t,n){var r=n.mediaKeys,i=n.initDataType,a=n.initData,o=n.options,c=n.getLicense,u=n.removeSession,y=n.eventBus,d=r.createSession();return y.trigger("keysessioncreated"),t.on("dispose",function(){d.close()}),new Promise(function(r,f){d.addEventListener("message",function(e){("license-request"===e.messageType||"license-renewal"===e.messageType)&&c(o,e.message).then(function(e){r(d.update(e))}).catch(function(e){f(e)})},!1),d.addEventListener("keystatuseschange",function(r){var i=!1;d.keyStatuses.forEach(function(e,t){switch(y.trigger({keyId:t,status:e,target:d,type:"keystatuschange"}),e){case"expired":i=!0;break;case"internal-error":s.Z.log.warn('Key status reported as "internal-error." Leaving the session open since we don\'t have enough details to know if this error is fatal.',r)}}),i&&d.close().then(function(){u(a),e(t,n)})},!1),d.generateRequest(i,a).catch(function(){f("Unable to create or initialize key session")})})},S=function(e){var t=e.player,n=e.video,r=e.initDataType,i=e.initData,s=e.options,a=e.getLicense,o=e.removeSession,c=e.eventBus;return n.mediaKeysObject?b(t,{mediaKeys:n.mediaKeysObject,initDataType:r,initData:i,options:s,getLicense:a,removeSession:o,eventBus:c}):(n.pendingSessionData.push({initDataType:r,initData:i,options:s,getLicense:a,removeSession:o,eventBus:c}),Promise.resolve())},w=function(e){var t=e.player,n=e.video,r=e.certificate,i=e.createdMediaKeys;n.mediaKeysObject=i;var s=[];r&&s.push(i.setServerCertificate(r));for(var a=0;a<n.pendingSessionData.length;a++){var o=n.pendingSessionData[a];s.push(b(t,{mediaKeys:n.mediaKeysObject,initDataType:o.initDataType,initData:o.initData,options:o.options,getLicense:o.getLicense,removeSession:o.removeSession,eventBus:o.eventBus}))}return n.pendingSessionData=[],s.push(n.setMediaKeys(i)),Promise.all(s)},D=function(e,t){if("string"==typeof t&&(t={url:t}),!t.url&&!t.getLicense)throw Error("Neither URL nor getLicense function provided to get license");if(t.url&&!t.getLicense){var n,r;t.getLicense="com.microsoft.playready"===e?(n=t,function(e,t,r){v(n,t,e,r)}):(r=t,function(e,t,n){var i=g({"Content-type":"application/octet-stream"},e.emeHeaders,r.licenseHeaders);s.Z.xhr({uri:r.url,method:"POST",responseType:"arraybuffer",body:t,headers:i},l(n,!0))})}return t},L=function(e){var t,n,r=e.player,i=e.video,s=e.initDataType,a=e.initData,o=e.keySystemAccess,c=e.options,u=e.removeSession,y=e.eventBus,d=Promise.resolve();return void 0===i.mediaKeysObject&&(i.mediaKeysObject=null,i.pendingSessionData=[],d=new Promise(function(e,r){if(i.keySystem=o.keySystem,!(n=D(o.keySystem,c.keySystems[o.keySystem])).getCertificate){e(o);return}n.getCertificate(c,function(n,i){if(n){r(n);return}t=i,e()})}).then(function(){return o.createMediaKeys()}).then(function(e){return w({player:r,video:i,certificate:t,createdMediaKeys:e})}).catch(function(e){return e?Promise.reject(e):Promise.reject("Failed to create and initialize a MediaKeys object")})),d.then(function(){var e=D(i.keySystem,c.keySystems[i.keySystem]).getLicense;return S({player:r,video:i,initDataType:s,initData:a,options:c,getLicense:i.keySystem?function(t,n){return new Promise(function(r,i){e(t,n,function(e,t){if(y&&y.trigger("licenserequestattempted"),e){i(e);return}r(t)})})}:null,removeSession:u,eventBus:y})})},K="com.apple.fps.1_0",_=function(e){var t=e.initData,n=e.id,r=e.cert;"string"==typeof n&&(n=u(n));var i=0,s=new ArrayBuffer(t.byteLength+4+n.byteLength+4+r.byteLength),a=new DataView(s);new Uint8Array(s,i,t.byteLength).set(t),i+=t.byteLength,a.setUint32(i,n.byteLength,!0),i+=4;var o=new Uint16Array(s,i,n.length);return o.set(n),i+=o.byteLength,a.setUint32(i,r.byteLength,!0),i+=4,new Uint8Array(s,i,r.byteLength).set(r),new Uint8Array(s,0,s.byteLength)},E=function(e){var t=e.video,n=e.contentId,r=e.initData,i=e.cert,s=e.options,a=e.getLicense,c=e.eventBus;return new Promise(function(e,u){var y;if(!t.webkitKeys)try{t.webkitSetMediaKeys(new(o()).WebKitMediaKeys(K))}catch(e){u("Could not create MediaKeys");return}try{y=t.webkitKeys.createSession("video/mp4",_({id:n,initData:r,cert:i}))}catch(e){u("Could not create key session");return}c.trigger("keysessioncreated"),y.contentId=n,y.addEventListener("webkitkeymessage",function(e){a(s,n,e.message,function(e,t){if(c&&c.trigger("licenserequestattempted"),e){u(e);return}y.update(new Uint8Array(t))})}),y.addEventListener("webkitkeyadded",function(){e()}),y.addEventListener("webkitkeyerror",function(){var e=y.error;u("KeySession error: code "+e.code+", systemCode "+e.systemCode)})})},C=function(e,t){return y(String.fromCharCode.apply(null,new Uint16Array(t.buffer)))},T=function(e){var t=e.video,n=e.initData,r=e.options,i=e.eventBus,a=r.keySystems[K],o=a.getCertificate||function(e,t){var n=g(e.emeHeaders,a.certificateHeaders);s.Z.xhr({uri:a.certificateUri,responseType:"arraybuffer",headers:n},l(function(e,n){if(e){t(e);return}t(null,new Uint8Array(n))}))},c=a.getContentId||C,u=a.getLicense||function(e,t,n,r){var i=g({"Content-type":"application/octet-stream"},e.emeHeaders,a.licenseHeaders);s.Z.xhr({uri:a.licenseUri,method:"POST",responseType:"arraybuffer",body:n,headers:i},l(r,!0))};return new Promise(function(e,t){o(r,function(n,r){if(n){t(n);return}e(r)})}).then(function(e){return E({video:t,cert:e,initData:n,getLicense:u,options:r,contentId:c(r,n),eventBus:i})})},U="com.microsoft.playready",M=function(e,t,n,r){var i=e.keySystems[U];if("function"==typeof i.getKey){i.getKey(e,n.destinationURL,n.message.buffer,function(e,n){if(e){r.trigger({message:"Unable to get key: "+e,target:t,type:"mskeyerror"});return}t.update(n)});return}"string"==typeof i?i={url:i}:"boolean"==typeof i&&(i={}),i.url||(i.url=n.destinationURL);var s=function(e,n){if(r&&r.trigger("licenserequestattempted"),e){r.trigger({message:"Unable to request key from url: "+i.url,target:t,type:"mskeyerror"});return}t.update(new Uint8Array(n))};i.getLicense?i.getLicense(e,n.message.buffer,s):v(i,n.message.buffer,e,s)},A=function(e,t,n,r){var i=e.msKeys.createSession("video/mp4",t);if(!i)throw Error("Could not create key session.");r.trigger("keysessioncreated"),i.addEventListener("mskeymessage",function(e){M(n,i,e,r)}),i.addEventListener("mskeyerror",function(e){r.trigger({message:"Unexpected key error from key session with code: "+i.error.code+" and systemCode: "+i.error.systemCode,target:i,type:"mskeyerror"})}),i.addEventListener("mskeyadded",function(){r.trigger({target:i,type:"mskeyadded"})})},B=function(e){var t=e.video,n=e.initData,r=e.options,i=e.eventBus;t.msKeys&&delete t.msKeys;try{t.msSetMediaKeys(new(o()).MSMediaKeys(U))}catch(e){throw Error("Unable to create media keys for PlayReady key system. Error: "+e.message)}A(t,n,r,i)},P=function(e,t){for(var n=0;n<e.length;n++)if(e[n].initData&&d(f(e[n].initData),f(t)))return!0;return!1},O=function(e,t){for(var n=0;n<e.length;n++)if(e[n].initData===t){e.splice(n,1);return}},j=function(e,t,n,r,i){if(!n||!n.keySystems)return Promise.resolve();var s=t.initData;return k(n.keySystems).then(function(a){var o=a.keySystem;return(n.keySystems[o]&&n.keySystems[o].pssh&&(s=n.keySystems[o].pssh),P(r,s)||!s)?Promise.resolve():(r.push({initData:s}),L({player:e,video:t.target,initDataType:t.initDataType,initData:s,keySystemAccess:a,options:n,removeSession:O.bind(null,r),eventBus:i}))})},N=function(e,t,n){return t.keySystems&&t.keySystems[K]&&e.initData?T({video:e.target,initData:e.initData,options:t,eventBus:n}):Promise.resolve()},H=function(e,t,n,r){if(!(!t.keySystems||!t.keySystems[U]||n.reduce(function(e,t){return e||t.playready},!1))){var i=e.initData;t.keySystems[U]&&t.keySystems[U].pssh&&(i=t.keySystems[U].pssh),i&&(n.push({playready:!0,initData:i}),B({video:e.target,initData:i,options:t,eventBus:r}))}},Z=function(e){return m(e.currentSource(),e.eme.options)},q=function(e){var t=e.src();t!==e.eme.activeSrc&&(e.eme.activeSrc=t,e.eme.sessions=[])},x=function(e){return function(t){var n={code:5};"string"==typeof t?n.message=t:t&&(t.message&&(n.message=t.message),t.cause&&(t.cause.length||t.cause.byteLength)&&(n.cause=t.cause)),e.error(n)}},R=function(e,t){if("video"===e.$(".vjs-tech").tagName.toLowerCase()){if(q(e),o().WebKitMediaKeys){var n=function(n){q(e),N(n,Z(e),e.tech_).catch(t)};e.tech_.el_.addEventListener("webkitneedkey",function(t){var r=Z(e).firstWebkitneedkeyTimeout||1e3,i=e.src();e.eme.webkitneedkey_=e.eme.webkitneedkey_||{},e.eme.webkitneedkey_.src!==i&&(e.eme.webkitneedkey_={handledFirstEvent:!1,src:i}),e.eme.webkitneedkey_.handledFirstEvent?n(t):(e.clearTimeout(e.eme.webkitneedkey_.timeout),e.eme.webkitneedkey_.timeout=e.setTimeout(function(){e.eme.webkitneedkey_.handledFirstEvent=!0,e.eme.webkitneedkey_.timeout=null,n(t)},r))})}else o().MediaKeys?e.tech_.el_.addEventListener("encrypted",function(n){q(e),j(e,n,Z(e),e.eme.sessions,e.tech_).catch(t)}):o().MSMediaKeys&&(e.tech_.el_.addEventListener("msneedkey",function(n){q(e);try{H(n,Z(e),e.eme.sessions,e.tech_)}catch(e){t(e)}}),e.tech_.on("mskeyerror",t),e.on("dispose",function(){e.tech_.off("mskeyerror",t)}))}},V=function(e){void 0===e&&(e={});var t=this,n=x(t);t.ready(function(){return R(t,n)}),t.eme={initializeMediaKeys:function(r,i,s){void 0===r&&(r={}),void 0===i&&(i=function(){}),void 0===s&&(s=!1);var a=m(t.currentSource(),e,r),o={initDataType:"cenc",initData:null,target:t.tech_.el_};if(q(t),t.tech_.el_.setMediaKeys)j(t,o,a,t.eme.sessions,t.tech_).then(function(){return i()}).catch(function(e){i(e),s||n(e)});else if(t.tech_.el_.msSetMediaKeys){var c=function e(r){t.tech_.off("mskeyadded",e),t.tech_.off("mskeyerror",e),"mskeyerror"===r.type?(i(r.target.error),s||n(r.message)):i()};t.tech_.one("mskeyadded",c),t.tech_.one("mskeyerror",c);try{H(o,a,t.eme.sessions,t.tech_)}catch(e){t.tech_.off("mskeyadded",c),t.tech_.off("mskeyerror",c),i(e),s||n(e)}}},options:e}};s.Z.registerPlugin("eme",V),V.VERSION="3.11.1",t.default=V}}]);