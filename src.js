import { Picker } from 'emoji-mart/dist-modern/index.js'
import React from 'react'
import { define } from 'remount/es6'

async function defineEmojiMartElement(customElementName, properties) {
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
    attributes: ['set', 'native', 'title', 'showPreview']
  }});
}

// export as global
window.defineEmojiMartElement = defineEmojiMartElement;
