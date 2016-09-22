app.Question = function(id, options) {
  this.id = id;
  this.questionText = options.questionText || '';
  this.answers = ko.observableArray(options.answers || []);
};
