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

	app.get('/getPoll/:id', function(req, res){
		question.getThisPoll(req, res, req.params.id);
	})



	// POSTS ===================================================
	app.post('/newPoll', function(req, res){
		question.new_poll(req, res);
	})

	app.post('/updateOpt1_Count/:id', function(req, res){
		question.update_Opt1_count(req, res, req.params.id);
	})

	app.post('/updateOpt2_Count/:id', function(req, res){
		question.update_Opt2_count(req, res, req.params.id);
	})

	app.post('/updateOpt3_Count/:id', function(req, res){
		question.update_Opt3_count(req, res, req.params.id);
	})

	app.post('/updateOpt4_Count/:id', function(req, res){
		question.update_Opt4_count(req, res, req.params.id);
	})


}