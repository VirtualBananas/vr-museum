var mongoose = require('mongoose');

UserSchema = mongoose.Schema.({
	username: {type: String, unique: true},
	password: String
})

mongoose.model('User', UserSchema);