var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = (function(){

	return{

		new_Question: function(req, res){
			Question.create({
				user_name:req.body.user_name,
				question:req.body.question,
				detail:req.body.detail
			}, function(err, results){
				if(err){
					console.log("Error adding question");
				}
				else{
					console.log("Success adding question!");
				}
			})
		},



		get_all_question: function(req, res){
			Question.find({}, function(err, results){
				if(err){
					console.log('Error getting data');
				}
				else{
					res.json(results);
				}
			})
		},


		get_one_question: function(req, res){
			Question.findOne({_id:req.params.id}, function(err, results){
				if(err){
					console.log('error getting question');
				}
				else{
					res.json(results);
				}
			})
		},

		answer_to_question: function(req, res){
			// find the question
			Question.findOne({_id:req.body.questionID}, function(err, question){
				var answer = new Answer({user_name:req.body.user_name, answer:req.body.answer, support_detail:req.body.support_detail});

				// increment the answer count
				Question.findOneAndUpdate( {_id:req.body.questionID}, {$inc:{answer_count: 1}}, function(err, Question){
	 				if(err){
	 					console.log('error updating post count');
	 				}
	 				else{
	 					console.log('successfully updated post count');
	 				}
	 			})

				answer._question = question._id;

				question.answers.push(answer);

				answer.save(function(err){
					question.save(function(err){
						if(err){
							console.log('error');
						}
						else{
							console.log('successfully saved answer!')
						}
					})
				})
			})
			
		},

		get_all: function(req, res){
			Question.findOne({_id:req.params.id})
				.populate('answers')
				.exec(function(err, answer){
					res.json('answer', {answer});
				})

		},


		update_like: function(req, res){
			Answer.findOneAndUpdate( {_id:req.params.id}, {$inc:{likes: 1}}, function(err, Answer){
	 				if(err){
	 					console.log('error updating like count');
	 				}
	 				else{
	 					console.log('successfully updated like count');
	 				}
	 			})
		}

















	} // end return

})(); // end module.exports



























