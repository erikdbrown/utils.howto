var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD,
	database: 'howtodb'
});

connection.connect(err => {
	if (err) {
		console.log('Error in DB connection: ', err.stack)
	} else {
		createTables(connection);
	}
})

function createTables(db) {

	db.query('CREATE TABLE IF NOT EXISTS teams ( \
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, \
		team_name VARCHAR(100) \
		)', (error, results, fields) => {
		if (error) {
			console.log('Error in createing teams table: ', error);
		} else {
			console.log('CREATED teams TABLE');
		}
	});

	db.query('CREATE TABLE IF NOT EXISTS tags ( \
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, \
		tag_name VARCHAR(100) \
		)', (error, results, fields) => {
		if (error) {
			console.log('Error in createing teams table: ', error);
		} else {
			console.log('CREATED tags TABLE');
		}
	});

	db.query('CREATE TABLE IF NOT EXISTS howtos ( \
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, \
		title VARCHAR(200), \
		content TEXT, \
		clicks INT NOT NULL DEFAULT 0, \
		team_id INT NOT NULL, \
		FOREIGN KEY (team_id) \
		  REFERENCES teams(id) \
		)', (error, results, fields) => {
		if (error) {
			console.log('Error in createing howtos table: ', error);
		} else {
			console.log('CREATED howtos TABLE');
		}
	})

	db.query('CREATE TABLE IF NOT EXISTS tags_howtos ( \
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, \
		tag_id INT NOT NULL, \
		howto_id INT NOT NULL, \
		FOREIGN KEY (tag_id) \
		  REFERENCES tags(id), \
		FOREIGN KEY (howto_id) \
		  REFERENCES howtos(id) \
		)', (error, results, fields) => {
		if (error) {
			console.log('Error in createing howtos table: ', error);
		} else {
			console.log('CREATED tags_howtos TABLE');
		}
	})
}

module.exports = connection;