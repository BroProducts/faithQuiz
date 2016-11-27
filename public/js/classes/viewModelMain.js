app.ViewModelMain = function() {
  var vm = this;
  vm.closePopup = function() {
    $('.popup').fadeOut()
  }
  vm.openProfil = function() {
    $('.popup-profil').fadeIn()
  }
  vm.openSingleplayer = function() {
    $('.popup-singleplayer').fadeIn()
  }
  vm.openMultiplayer = function() {
    $('.popup-multiplayer').fadeIn()
  }
  vm.profil = new app.ViewModelProfil();
  vm.singlePlayer = new app.ViewModelSinglePlayer();
  vm.multiPlayer = new app.ViewModelMultiPlayer();
  vm.friendlist = new app.ViewModelFriendlist();
  vm.leaderboard = new app.ViewModelLeaderboard();
};
