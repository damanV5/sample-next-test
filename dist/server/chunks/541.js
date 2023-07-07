"use strict";
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 936:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/**
 * The AirPlayButton module contains both the AirPlayButton class definition and the
 * function used to register the button as a Video.js Component.
 *
 * @module AirPlayButton
 */

var hasAirPlayAPISupport = __webpack_require__(1687),
    AirPlayButton;

/**
* The Video.js Button class is the base class for UI button components.
*
* @external Button
* @see {@link http://docs.videojs.com/Button.html|Button}
*/

/** @lends AirPlayButton.prototype */
AirPlayButton = {

   /**
    * This class is a button component designed to be displayed in the player UI's control
    * bar. It displays an Apple AirPlay selection list when clicked.
    *
    * @constructs
    * @extends external:Button
    */
   constructor: function(player, options) {
      this.constructor.super_.apply(this, arguments);

      if (!hasAirPlayAPISupport()) {
         this.hide();
      }

      this._reactToAirPlayAvailableEvents();

      if (options.addAirPlayLabelToButton) {
         this.el().classList.add('vjs-airplay-button-lg');

         this._labelEl = document.createElement('span');
         this._labelEl.classList.add('vjs-airplay-button-label');
         this._labelEl.textContent = this.localize('AirPlay');

         this.el().appendChild(this._labelEl);
      } else {
         this.controlText('Start AirPlay');
      }
   },

   /**
    * Overrides Button#buildCSSClass to return the classes used on the button element.
    *
    * @param {DOMElement} el
    * @see {@link http://docs.videojs.com/Button.html#buildCSSClass|Button#buildCSSClass}
    */
   buildCSSClass: function() {
      return 'vjs-airplay-button ' + this.constructor.super_.prototype.buildCSSClass();
   },

   /**
    * Overrides Button#handleClick to handle button click events. AirPlay functionality is
    * handled outside of this class, which should be limited to UI related logic. This
    * function simply triggers an event on the player.
    *
    * @fires AirPlayButton#airPlayRequested
    * @param {DOMElement} el
    * @see {@link http://docs.videojs.com/Button.html#handleClick|Button#handleClick}
    */
   handleClick: function() {
      this.player().trigger('airPlayRequested');
   },

   /**
    * Gets the underlying DOMElement used by the player.
    *
    * @private
    * @returns {DOMElement} either an <audio> or <video> tag, depending on the type of
    * player
    */
   _getMediaEl: function() {
      var playerEl = this.player().el();

      return playerEl.querySelector('video, audio');
   },

   /**
    * Binds a listener to the `webkitplaybacktargetavailabilitychanged` event, if it is
    * supported, that will show or hide this button Component based on the availability
    * of the AirPlay function.
    *
    * @private
    */
   _reactToAirPlayAvailableEvents: function() {
      var mediaEl = this._getMediaEl(),
          self = this;

      if (!mediaEl || !hasAirPlayAPISupport()) {
         return;
      }

      function onTargetAvailabilityChanged(event) {
         if (event.availability === 'available') {
            self.show();
         } else {
            self.hide();
         }
      }

      mediaEl.addEventListener('webkitplaybacktargetavailabilitychanged', onTargetAvailabilityChanged);
      this.on('dispose', function() {
         mediaEl.removeEventListener('webkitplaybacktargetavailabilitychanged', onTargetAvailabilityChanged);
      });
   },
};

/**
 * Registers the AirPlayButton Component with Video.js. Calls
 * {@link http://docs.videojs.com/Component.html#.registerComponent}, which will add a
 * component called `airPlayButton` to the list of globally registered Video.js
 * components. The `airPlayButton` is added to the player's control bar UI automatically
 * once {@link module:enableAirPlay} has been called. If you would like to specify the
 * order of the buttons that appear in the control bar, including this button, you can do
 * so in the options that you pass to the `videojs` function when creating a player:
 *
 * ```
 * videojs('playerID', {
 *    controlBar: {
 *       children: [
 *          'playToggle',
 *          'progressControl',
 *          'volumePanel',
 *          'fullscreenToggle',
 *          'airPlayButton',
 *       ],
 *    }
 * });
 * ```
 *
 * @param videojs {object} A reference to {@link http://docs.videojs.com/module-videojs.html|Video.js}
 * @see http://docs.videojs.com/module-videojs.html#~registerPlugin
 */
module.exports = function(videojs) {
   var AirPlayButtonImpl;

   AirPlayButtonImpl = videojs.extend(videojs.getComponent('Button'), AirPlayButton);
   videojs.registerComponent('airPlayButton', AirPlayButtonImpl);
};


/***/ }),

/***/ 2793:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/**
 * @module enableAirPlay
 */

var hasAirPlayAPISupport = __webpack_require__(1687);

/**
 * @private
 * @param {object} the Video.js Player instance
 * @returns {AirPlayButton} or `undefined` if it does not exist
 */
function getExistingAirPlayButton(player) {
   return player.controlBar.getChild('airPlayButton');
}

/**
 * Adds the AirPlayButton Component to the player's ControlBar component, if the
 * AirPlayButton does not already exist in the ControlBar.
 * @private
 * @param player {object} the Video.js Player instance
 * @param options {object}
 */
function ensureAirPlayButtonExists(player, options) {
   var existingAirPlayButton = getExistingAirPlayButton(player),
       indexOpt;

   if (options.addButtonToControlBar && !existingAirPlayButton) {
      // Figure out AirPlay button's index
      indexOpt = player.controlBar.children().length;
      if (typeof options.buttonPositionIndex !== 'undefined') {
         indexOpt = options.buttonPositionIndex >= 0
            ? options.buttonPositionIndex
            : player.controlBar.children().length + options.buttonPositionIndex;
      }

      player.controlBar.addChild('airPlayButton', options, indexOpt);
   }
}

/**
 * Handles requests for AirPlay triggered by the AirPlayButton Component.
 *
 * @private
 * @param player {object} the Video.js Player instance
 */
function onAirPlayRequested(player) {
   var mediaEl = player.el().querySelector('video, audio');

   if (mediaEl && mediaEl.webkitShowPlaybackTargetPicker) {
      mediaEl.webkitShowPlaybackTargetPicker();
   }
}

/**
 * Adds an event listener for the `airPlayRequested` event triggered by the AirPlayButton
 * Component.
 *
 * @private
 * @param player {object} the Video.js Player instance
 */
function listenForAirPlayEvents(player) {
   // Respond to requests for AirPlay. The AirPlayButton component triggers this event
   // when the user clicks the AirPlay button.
   player.on('airPlayRequested', onAirPlayRequested.bind(null, player));
}

/**
 * Sets up the AirPlay plugin.
 *
 * @private
 * @param player {object} the Video.js player
 * @param options {object} the plugin options
 */
function enableAirPlay(player, options) {
   if (!player.controlBar) {
      return;
   }

   if (hasAirPlayAPISupport()) {
      listenForAirPlayEvents(player);
      ensureAirPlayButtonExists(player, options);
   }
}

/**
 * Registers the AirPlay plugin with Video.js. Calls
 * {@link http://docs.videojs.com/module-videojs.html#~registerPlugin|videojs#registerPlugin},
 * which will add a plugin function called `airPlay` to any instance of a Video.js player
 * that is created after calling this function. Call `player.airPlay(options)`, passing in
 * configuration options, to enable the AirPlay plugin on your Player instance.
 *
 * Currently, the only configuration option is:
 *
 *    * **buttonText** - the text to display inside of the button component. By default,
 *    this text is hidden and is used for accessibility purposes.
 *
 * @param {object} videojs
 * @see http://docs.videojs.com/module-videojs.html#~registerPlugin
 */
module.exports = function(videojs) {
   videojs.registerPlugin('airPlay', function(options) {
      var pluginOptions = Object.assign({ addButtonToControlBar: true }, options || {});

      // `this` is an instance of a Video.js Player.
      // Wait until the player is "ready" so that the player's control bar component has
      // been created.
      this.ready(enableAirPlay.bind(this, this, pluginOptions));
   });
};


/***/ }),

/***/ 5541:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var createAirPlayButton = __webpack_require__(936),
    createAirPlayPlugin = __webpack_require__(2793);

/**
 * @module index
 */

/**
 * Registers the AirPlay plugin and AirPlayButton Component with Video.js. See
 * {@link module:AirPlayButton} and {@link module:enableAirPlay} for more details about
 * how the plugin and button are registered and configured.
 *
 * @param {object} videojs
 * @see module:enableAirPlay
 * @see module:AirPlayButton
 */
module.exports = function(videojs) {
   videojs = videojs || window.videojs;
   createAirPlayButton(videojs);
   createAirPlayPlugin(videojs);
};


/***/ }),

/***/ 1687:
/***/ ((module) => {



/**
 * @module hasAirPlayAPISupport
 */

/**
 * Returns whether or not the current browser environment supports AirPlay.
 *
 * @private
 * @returns {boolean} true if AirPlay support is available
 */
module.exports = function() {
   return !!window.WebKitPlaybackTargetAvailabilityEvent;
};


/***/ })

};
;