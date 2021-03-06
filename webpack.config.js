module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname + './',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.jpg$/, 
				loader: "file-loader" 
			}
		]
	}
}