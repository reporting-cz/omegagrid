import path from 'path';
import webpack from 'webpack';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'));

export default (env, args) => ({
	entry: {
		'app': {import: './index.ts', filename: 'omegagrid.js'},
	},
	mode: args.mode,
	externals: {
		'monaco-editor': 'monaco-editor',
		'highcharts': 'Highcharts',
		'@sheet/core': 'XLSX',
		'xlsx': 'XLSX',
	},
	devtool: args.mode == 'development' ? 'eval-source-map' : false,
	output: {
		path: path.resolve(__dirname, '.'),
		library: {
			name: 'Omegagrid',
			type: 'window',
		}
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: {
				loader: 'ts-loader',
				options: {
					transpileOnly: false,
					projectReferences: true
				}
			}
		}],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.PACKAGE_NAME': JSON.stringify(pkg.name),
			'process.env.PACKAGE_VERSION': JSON.stringify(pkg.version)
		})
	]
});
