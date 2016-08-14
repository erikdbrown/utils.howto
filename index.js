var yaml = require('js-yaml');
var fs = require('fs');

function readHowTo(path, callback) {
	var howto;
	var path = './docs/' + path;
	fs.readFile(path, 'utf-8', (err, data) => {
		if (err) {
			callback(err);
		} else {
			howto = yaml.safeLoad(data);
			callback(null, howto);
		}
	});
}


// takes an objet with title and content properties
function createHowTo(howto, next) {
	var yamlFile = yaml.safeDump(howto);
	var title = howto.title;
	fs.open('./docs/' + title + '.yaml', 'w', (err, fd) => {
		fs.write(fd, yamlFile, (err, written, string) => {
			if (err) {
				// do something to handle error
			}
			console.log('Written: ', written);
			console.log('String: ', string);
			fs.close(fd);
		})
		
	})
}

module.exports = {
	readHowTo: readHowTo,
	createHowTo: createHowTo
}