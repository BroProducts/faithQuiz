app.Lobby = function(options) {
  this.players = ko.observableArray(options.players || []);
};
