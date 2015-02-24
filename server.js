var express 			= require('express'),
	app					= express(),
	bodyParser 			= require('body-parser'),
	mongoose			= require('mongoose'),
	meetupsController 	= require('./server/controllers/meetups-controller');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser());

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.post('/api/meetups', meetupsController.create);
app.get('/api/meetups', meetupsController.list);
app.delete('/api/meetups', meetupsController.remove);

app.listen(8000, function() {
	console.log('Listening...');
})

//express doesnt use body parser by default