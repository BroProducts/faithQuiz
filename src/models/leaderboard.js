const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const LeaderboardSchema = new Schema({
  userid:  Number,
  score: Number,
  username:   String,
  createdAt: { type: Date, default: Date.now }
});
const Model = mongoose.model('Leaderboards', LeaderboardSchema);

module.exports = Model;