// Question MODEL

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// QuestionSchema
var QuestionSchema = new mongoose.Schema({
	user_name:String,
	question:String,
	detail:String,
	answer_count:Number,
	created_at:{ type: Date, default: Date.now },

	//creating association to Answer
	answers: [{type: Schema.Types.ObjectId, ref:'Answer'}]

}); // end of TweetSchema


mongoose.model('Question', QuestionSchema);