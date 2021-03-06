var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: '.src/app/index.js',
	output: {
		path: 'dist/assets',
		filename: 'bundle.js',
		publicPath: 'assets'
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
	},
	module: {
		loaders: [
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: ['babel-loader'],
			query: {
				presets: ['latest', 'stage-0', 'react']
			}
		]
	}
}