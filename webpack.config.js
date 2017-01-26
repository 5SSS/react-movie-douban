var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry:'./app/app.js',
	output:{
		path:path.resolve(__dirname, './html'),
		chunkFilename: 'js/[name].[chunkhash:8].chunk.js', 
		filename:'./js/index.js'
	},
	module:{
		loaders:[
			{	test:/\.jsx?$/,exclude:/node_modules/,loader:'babel',
	  			query:{
	  				presets:['es2015','react']
	  			}
	  		},
	  		{
			   test: /\.(png|jpg|gif)$/,
			   loader: 'url-loader?limit=8192' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
			}
		]
	},
	plugins: [
	    new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    })
    ]
}