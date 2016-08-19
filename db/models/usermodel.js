var mongoose = require('mongoose');

UserSchema = mongoose.Schema({
	username: {type: String, unique: true},
	password: String
})

module.exports = mongoose.model('User', UserSchema);