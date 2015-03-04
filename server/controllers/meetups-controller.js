var Meetup = require('../models/meetup');

module.exports.create = function (req, res) {
	var meetup = new Meetup(req.body);
	meetup.save(function (err, result) {
		res.json(result);
	});
}

module.exports.list = function (req, res) {
	Meetup.find({}, function (err, results) {
		res.json(results);
	});
}

module.exports.remove = function(req, res) {
	console.log("GOING TO REMOVE!!!");
	console.log(req.query);
	
	item = req.query;
	Meetup.remove(item, function (err, results) {
		console.log("done");
		console.log(err);
		console.log(results);
		res.json(results);
	});
}