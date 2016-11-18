app.ViewModelMain = function() {
  var vm = this;
  vm.leaderboard = new app.ViewModelLeaderboard()
  vm.activeUser = ko.observable(app.get('user').username)
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
  vm.openLeaderboard = function() {
    $('.popup-leaderboard').fadeIn()
    vm.leaderboard.start()
  }
  vm.logout = function() {
    app.logout().then(function () {
      return window.location.href = '/index.html';
    });
  }
  vm.singlePlayer = new app.ViewModelSinglePlayer()
  vm.multiPlayer = new app.ViewModelMultiPlayer()
};
