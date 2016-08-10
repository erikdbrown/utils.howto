var yaml = require('js-yaml');
var fs = require('fs');

fs.readFile('./howto.yaml', 'utf-8', (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(yaml.safeLoad(data));
	}
});