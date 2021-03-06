/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

module.exports = {
  // Change to your "entry-point".
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundles.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@Context': path.resolve(__dirname, 'src/components/Context'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Assets': path.resolve(__dirname, 'src/assets'),
      '@Utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|tsx|js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            emitError: true,
          },
        },
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
};
