const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'layout.js': './src/all/layout.js',
		'layout.css': './src/layout.css'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						compact: false,
						presets: ['babel-preset-es2015'],
						plugins: ['babel-plugin-transform-node-env-inline']
					}
				}
			},
			{
		    test: /\.css$/,
		    use: ExtractTextPlugin.extract({
		    	fallback: 'style-loader', 
		    	use: ['css-loader']
		    }), 
		  }
		]
	},
	output: {
		library: 'metal',
		libraryTarget: 'this',
		filename: './build/globals/[name]'
	},
	plugins: [
		new ExtractTextPlugin('./build/globals/layout.css'),
		new webpack.optimize.ModuleConcatenationPlugin()
	]
};
