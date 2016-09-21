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
    console.log('openMultiplayer')
  }
  vm.singlePlayer = new app.ViewModelSinglePlayer()
};
