module.exports = {
    entry: {
        vendor: [
          'emoji-mart/css/emoji-mart.css'
        ]
    },
    output: {
        filename: 'emoji-mart.js'
    },
    resolve: {
        alias: {
            'react': 'preact/compat/dist/compat.js',
            'react-dom': 'preact/compat/dist/compat.js',
            'preact/hooks': 'preact/hooks/dist/hooks.js'
        }
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|css)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              },
            },
          ],
        },
      ],
    },
}
