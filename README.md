# emoji-mart-embed

Provides [emoji-mart](https://github.com/missive/emoji-mart), so it can be used in plain JavaScript. This uses [remount](https://github.com/rstacruz/remount) and [preact](https://github.com/developit/preact).

In the end, you just have a custom element:

```html
<emoji-picker></emoji-picker>
```

## Building

```sh
npm install
npm run build
```

For your convenience, the finished files are written into the [`dist`](dist) dir.
All Emoji JSON data is included in the JS, and there is also the CSS file.

## Usage

Include the JS and CSS.

### EmojiPicker

Then, you can define the emoji-mart EmojiPicker like this:

```js
window.emojiMart.definePicker("emoji-picker", {
     native: true,
     emojiTooltip: true,
});
```

You can pass in a JSON, which is directly passed to [the picker of emoji-mart](https://github.com/missive/emoji-mart#user-content-picker) (only some little defaults are provided).

Afterwards, you can create the [HTML custom element](https://developer.mozilla.org/docs/Web/Web_Components/Using_custom_elements):
```js
const picker = document.createElement("emoji-picker");
document.body.appendChild(picker);
```

### Headless search

As [with upstream](https://github.com/missive/emoji-mart#headless-search) you can use the emoji-index. Just use `window.emojiMart.emojiIndex` instead.

### Get emoji data from Native

Basically the same as [the upstream project](https://github.com/missive/emoji-mart#get-emoji-data-from-native), just use `window.emojiMart.getEmojiDataFromNative` instead.

TODO: Needs testing!

### Storage

It also exposes the storage of emoji-mart, [so you can use it in the same way as the original docs](https://github.com/missive/emoji-mart#storage):

```js
window.emojiMart.setDataStore("emoji-picker", {
    getter: (key) => {
        // Get from your own storage (sync)
    },

    setter: (key, value) => {
        // Persist in your own storage (can be async)
    }
});
```

## Credits

Loosely based on https://github.com/nolanlawson/emoji-mart-outside-react, so thanks to [@nolanlawson](https://github.com/nolanlawson).

