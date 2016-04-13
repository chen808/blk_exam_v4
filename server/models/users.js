// TWEETS MODEL

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// TweetSchema
var UserSchema = new mongoose.Schema({
	user_name:String,

}); // end of TweetSchema


mongoose.model('User', UserSchema);