var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Vote = mongoose.model('Vote');

module.exports = (function(){

	return{

		new_poll: function(req, res){
			console.log(req.body);
			if(req.body.user_name == null || req.body.question == null || req.body.option1 == null || req.body.option2 == null || req.body.option3 == null || req.body.option4 == null){
				return res.json({error: "Did not save, please fill all empty spaces"})
			}
			else{
				Question.create({
					user_name:req.body.user_name,
					question:req.body.question,
					option_1:req.body.option1,
					option_2:req.body.option2,
					option_3:req.body.option3,
					option_4:req.body.option4,
				}, function(err, results){
					if(err){
						console.log("Error adding new poll");
					}
					else{
						return res.json({error: "Your poll was successfully saved!"});
					}
				})
			}
		},

		get_all_poll: function(req, res){
			Question.find({}, function(err, results){
				if(err){
					console.log("Error gettting data");
				}
				else{
					res.json(results);
				}
			})
		},

		delete_this_poll: function(req, res){
			Question.remove({_id:req.params.id}, function(err, Question){
				if(err){
					console.log('error removing data');
				}
				else{
					console.log('Successfully deleted data');
				}
			})
		},

		getThisPoll: function(req, res){
			Question.findOne({_id:req.params.id}, function(err, results){
				if(err){
					console.log('error getting data');
				}
				else{
					res.json(results);
				}
			})
		},

		update_Opt1_count: function(req, res){
			Question.findOneAndUpdate( {_id:req.params.id}, {$inc:{option_1_count: 1}}, function(err, Answer){
				if(err){
					console.log('error updating count');
				}
				else{
					console.log('Successfully updated count');
				}
			})
		},

		update_Opt2_count: function(req, res){
			Question.findOneAndUpdate( {_id:req.params.id}, {$inc:{option_2_count: 1}}, function(err, Answer){
				if(err){
					console.log('error updating count');
				}
				else{
					console.log('Successfully updated count');
				}
			})
		},

		update_Opt3_count: function(req, res){
			Question.findOneAndUpdate( {_id:req.params.id}, {$inc:{option_3_count: 1}}, function(err, Answer){
				if(err){
					console.log('error updating count');
				}
				else{
					console.log('Successfully updated count');
				}
			})
		},

		update_Opt4_count: function(req, res){
			Question.findOneAndUpdate( {_id:req.params.id}, {$inc:{option_4_count: 1}}, function(err, Answer){
				if(err){
					console.log('error updating count');
				}
				else{
					console.log('Successfully updated count');
				}
			})
		},




















	} // end return

})(); // end module.exports



























