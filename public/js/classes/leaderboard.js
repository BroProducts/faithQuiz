app.leaderboard = function(options) {
  var self = this;
  var datefull = new Date(options.createdAt);
  this.username = options.username;
  this.date = datefull.getDay() + "/" + datefull.getMonth() + "/" + datefull.getFullYear();
  this.score = options.score;
  this.currentUserScore = ko.computed(function(){
    if(self.username.toLocaleLowerCase() == app.vm.profil.currentUsername().toLocaleLowerCase()){
      return true;
    } else {
      return false;
    }
  })
};
