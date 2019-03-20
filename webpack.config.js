module.exports = {
    output: {
        filename: 'emoji-mart.js'
    },
    resolve: {
        alias: {
            'react': 'preact/compat/dist/compat.js',
            'react-dom': 'preact/compat/dist/compat.js',
            'preact/hooks': 'preact/hooks/dist/hooks.js'
        }
    }
}
