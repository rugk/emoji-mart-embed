# emoji-mart-embed

Provides [emoji-mart](https://github.com/missive/emoji-mart) in plain JavaScript. This uses [remount](https://github.com/rstacruz/remount) and [preact](https://github.com/developit/preact).

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

Then, you can define the emoji-mart EmojiPicker like this:

```js
window.defineEmojiMartElement("emoji-picker", {
       native: true,
       emojiTooltip: true,
  });
```

You can poass in a JSON, which is directly passed to [the picker of emoji-mart](https://github.com/missive/emoji-mart#user-content-picker).

Afterwards, you can create the [HTML custom element](https://developer.mozilla.org/docs/Web/Web_Components/Using_custom_elements):
```js
const picker = document.createElement("emoji-picker");
document.body.appendChild(picker);
```

## Credits

Loosely based on https://github.com/nolanlawson/emoji-mart-outside-react, so thanks to [@nolanlawson](https://github.com/nolanlawson).

