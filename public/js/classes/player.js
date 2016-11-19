app.Player = function(options) {
  this.username = options.username || 'Player?';
  this.online = ko.observable(false);
};
