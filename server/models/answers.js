// Answer MODEL

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// AnswerSchema
var AnswerSchema = new mongoose.Schema({
	user_name:String,
	answer:String,
	support_detail:String,
	likes:Number,

	// belongs to Question
	_question: {type: Schema.Types.ObjectId, ref:'Question' }
});

mongoose.model('Answer', AnswerSchema);