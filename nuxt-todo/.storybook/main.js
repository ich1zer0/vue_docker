const path = require('path')
const rootPath = path.resolve(__dirname, '../')
const tailwindcss = require('tailwindcss')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\tailwind.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-import')(),
                tailwindcss(path.resolve(__dirname, '../tailwind.config.js')),
                require('autoprefixer'),
              ],
            },
          },
        ],
        include: path.resolve(__dirname, '../assets/css/'),
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      }
    )
    config.resolve.alias['~'] = rootPath

    return config
  },
}
