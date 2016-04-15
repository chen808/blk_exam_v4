// Question MODEL

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// QuestionSchema
var QuestionSchema = new mongoose.Schema({
	user_name:String,
	question:String,
	option_1:String,
	option_2:String,
	option_3:String,
	option_4:String,
	created_at:{ type: Date, default: Date.now },

	//creating association to Answer
	votes: [{type: Schema.Types.ObjectId, ref:'Vote'}]

}); // end of TweetSchema


mongoose.model('Question', QuestionSchema);