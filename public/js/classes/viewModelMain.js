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
  var myScroll;
  vm.openMultiplayer = function() {
    $('.popup-multiplayer').fadeIn()
    if (myScroll) {
      myScroll.destroy();
    }
    myScroll = = new IScroll('.multiplayer-page-menu', {
      mouseWheel: true,
      scrollbars: true,
      fadeScrollbars: true,
      shrinkScrollbars: 'scale'
    });
  }
  vm.openLeaderboard = function() {
    $('.popup-leaderboard').fadeIn()
  }
  vm.profil = new app.ViewModelProfil();
  vm.singlePlayer = new app.ViewModelSinglePlayer();
  vm.multiPlayer = new app.ViewModelMultiPlayer();
  vm.leaderboard = new app.ViewModelLeaderboard();
};
