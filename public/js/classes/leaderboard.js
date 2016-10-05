app.leaderboard = function(options) {
  var datefull = new Date(options.createdAt);
  this.username = options.username;
  this.date = datefull.getDay() + "/" + datefull.getMonth() + "/" + datefull.getFullYear();
  this.score = options.score;
};
