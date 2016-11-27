app.Player = function(options) {
  this.username = options.username || 'Player?';
  this.displayname = options.displayname || this.username;
  this.online = ko.observable(false);
};
