const NimblePicker = require('emoji-mart/dist/components/picker/nimble-picker').default
const React = require('react')
const { define } = require('remount/es6')

async function main() {
  const data = await (await fetch('node_modules/emoji-mart/data/all.json')).json()
  const Picker = props => (React.createElement(NimblePicker, {

    data,
    native: false,
    onSelect: emoji => console.log('emoji selected', emoji),
    title: 'Emoji',
    showPreview: true,
    ...props
  }))

  define({ 'emoji-picker': {
    component: Picker,
    attributes: ['set', 'native', 'title', 'showPreview']
  }})

  const picker = document.createElement('emoji-picker')
  document.body.appendChild(picker)
}

main().catch(err => console.error(err))

