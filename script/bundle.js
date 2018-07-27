const {fork} = require('child_process');
const command = process.env.NODE_ENV === 'production' ? 'build' : 'watch';

fork('node_modules/.bin/parcel', [
	command,
	'src/graphics/*.html',
	'--out-dir',
	'graphics',
	'--public-url',
	'.',
]);

fork('node_modules/.bin/parcel', [
	command,
	'src/dashboard/*.html',
	'--out-dir',
	'dashboard',
	'--public-url',
	'.',
]);
