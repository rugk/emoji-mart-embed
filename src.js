/**
 * Exports emoji-mart as a custom HTMl element.
 *
 * @public
 * @module emoji-mart-embed
 */

import { Picker, store, emojiIndex, getEmojiDataFromNative } from 'emoji-mart/dist-modern/index.js'
import allEmojiData from 'emoji-mart/data/all.json'
import React from 'react'
import { define } from 'remount/es6'

/**
 * Create the HTML custom element for emoji-mart emoji picker.
 *
 * @public
 * @param {string} [customElementName="emoji-picker"] the name of the custom element
 * @param {Object} [properties] custom properties for emoji-mart
 * @param {string[]} [customAttributes=["set", "native", "title", "showPreview"]]
 * @returns {void}
 */
async function definePicker(
    customElementName = "emoji-picker",
    properties = undefined,
    customAttributes = ["set", "native", "title", "showPreview"]
) {
  const PickerPrepared = (interactiveProperties) => {
    // filter null values
    for (const element in interactiveProperties) {
      if (interactiveProperties[element] === null) {
        delete interactiveProperties[element];
      }
    }

    return React.createElement(Picker, {
      // defaults
      native: true,
      onSelect: emoji => console.log('emoji selected', emoji),
      title: 'Emoji',
      showPreview: false,
      showPreview: true,
      // passed to function
      ...properties,
      // manually set overwrite everything finally
      ...interactiveProperties
    });
  }

  define({ [customElementName]: {
    component: PickerPrepared,
    attributes: customAttributes
  }});
}

/**
 * Sets the data store for emoji-mart.
 *
 * @public
 * @param {Object} [dataStore]
 * @param {function} [dataStore.getter] a syncronous(!) function to get data
 * from
 * @param {function} [dataStore.getter] a asyncronous function to save data
 * to
 * @see https://github.com/missive/emoji-mart#storage
 * @returns {void}
 */
function setDataStore(dataStore) {
    return store.setHandlers(dataStore);
}

/**
 * Override real getEmojiDataFromNative function.
 * 
 * It is only needed to be done, because the data object is not available
 * outside of emoji-mart.
 *
 * @public
 * @param {string} emoji
 * @param {string} design
 * @param {Object} [data]
 * @see https://github.com/missive/emoji-mart#get-emoji-data-from-native
 * @returns {Object}
 */
function getEmojiDataFromNativeOverwrite(emoji, design, data = allEmojiData) {
  getEmojiDataFromNative(emoji, design, data);
}

// export as global
window.emojiMart = {
    definePicker,
    setDataStore,
    getEmojiDataFromNative: getEmojiDataFromNativeOverwrite,
    emojiIndex
};
