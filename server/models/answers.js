// Answer MODEL

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// AnswerSchema
var AnswerSchema = new mongoose.Schema({
	user_name:String,
	answer:String,
	support_detail:String,
	likes:Number,
	created_at:{ type: Date, default: Date.now },

	// belongs to Question
	_question: {type: Schema.Types.ObjectId, ref:'Question' }
});

mongoose.model('Answer', AnswerSchema);