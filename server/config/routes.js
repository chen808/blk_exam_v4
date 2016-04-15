// ROUTES JS

// require tweets controller
var question = require('./../controllers/questions.js');



module.exports = function(app){

	// GETS ====================================================
	app.get('/getAllPoll', function(req, res){
		question.get_all_poll(req, res);
	})

	app.get('/deletePoll/:id', function(req, res){
		question.delete_this_poll(req, res, req.params.id);
	})



	// POSTS ===================================================
	app.post('/newPoll', function(req, res){
		question.new_poll(req, res);
	})


}