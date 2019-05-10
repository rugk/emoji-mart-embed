module.exports = {
    devtool: "source-map",
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
        {
          test: /\.m?js$/,
          include: /node_modules\/emoji-mart/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ["env", {
                  "targets": {
                    "browsers": ["firefox >= 63"]
                  }
                }]
              ],
              plugins: [
                [
                  'transform-react-remove-prop-types',
                  {
                    removeImport: true,
                    additionalLibraries: [
                      '../../utils/shared-props'
                    ]
                  }
                ]
              ]
            }
          }
        }
      ],
    },
}
