import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default (env, args) => ({
	entry: {
		'app': {import: './index.ts', filename: 'omegagrid.js'},
	},
	mode: args.mode,
	devtool: args.mode == 'development' ? 'eval-source-map' : false,
	output: {
		path: path.resolve(__dirname, '.'),
		library: 'Omegagrid',
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
	}
});
