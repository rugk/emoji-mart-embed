import { Picker } from 'emoji-mart/dist-modern/index.js'
import React from 'react'
import { define } from 'remount/es6'

function main(properties) {
  console.log("given props", properties);

  const PickerPrepared = (interactiveProperties) => {
    // filter null values
    for (const element in interactiveProperties) {
      if (interactiveProperties[element] === null) {
        delete interactiveProperties[element];
      }
    }

    console.log("new props:", interactiveProperties);

    return React.createElement(Picker, {
      // defaults
      set: 'twitter',
      native: false,
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

  define({ 'emoji-picker': {
    component: PickerPrepared,
    attributes: ['set', 'native', 'title', 'showPreview']
  }});

  const picker = document.createElement('emoji-picker')
  document.body.appendChild(picker)
}

// export as global
window.emojiMart = main;

