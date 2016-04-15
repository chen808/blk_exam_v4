// Answer MODEL

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// AnswerSchema
var VoteSchema = new mongoose.Schema({
	option_1_count:Number,
	option_2_count:Number,
	option_3_count:Number,
	option_4_count:Number,
	
	

	// belongs to Question
	_question: {type: Schema.Types.ObjectId, ref:'Question' }
});

mongoose.model('Vote', VoteSchema);