// ROUTES JS

// require tweets controller
var question = require('./../controllers/questions.js');



module.exports = function(app){

	// GETS ==================================
	app.get('/getAllQuestions', function(req, res){
		question.get_all_question(req, res);
	})

	app.get('/getQuestion/:id', function(req, res){
		question.get_one_question(req, res, req.params.id);
	})


	// POSTS =================================
	app.post('/newQuestion', function(req, res){
		question.new_Question(req, res);
	})

	app.post('/answer_this', function(req, res){
		question.answer_to_question(req, res);
	})



}