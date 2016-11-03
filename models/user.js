var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  profilepic: String,
  email: String,
  bio: String,
  posts: [
  	{
  		title: String,
  		body: String,
  		picurl: String
  	}
  ]
});

module.exports = mongoose.model('User', UserSchema);
