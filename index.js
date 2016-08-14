var yaml = require('js-yaml');
var fs = require('fs');

function readHowTo(path) {
	var path = './docs/' + path;
	fs.readFile(path, 'utf-8', (err, data) => {
		if (err) {
			console.log(err);
		} else {
			console.log(yaml.safeLoad(data));
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