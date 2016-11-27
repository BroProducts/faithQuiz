app.Answer = function(id, options) {
  var options = options || {}
  this.id = id;
  this.answerText = options.answerText;
  this.answerCount = options.answerCount;
};
