const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  redditId: String,
  credits: { type: Number, default: 100 },
  accessToken: String,
  refreshToken: String,
  profile: Object,
});

mongoose.model('users', userSchema);
