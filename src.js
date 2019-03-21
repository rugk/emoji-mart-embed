/**
 * Exports emoji-mart as a custom HTMl element.
 *
 * @public
 * @module emoji-mart-embed
 */

import { Picker } from 'emoji-mart/dist-modern/index.js'
import React from 'react'
import { define } from 'remount/es6'

/**
 * Create the HTML custom element for emoji-mart,
 *
 * @private
 * @param {string} [customElementName="emoji-picker"] the name of the custom element
 * @param {Object} [properties] custom properties for emoji-mart
 * @param {string[]} [customAttributes=["set", "native", "title", "showPreview"]]
 * @returns {void}
 */
async function defineEmojiMartElement(
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

// export as global
window.defineEmojiMartElement = defineEmojiMartElement;

