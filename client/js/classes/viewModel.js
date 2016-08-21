app.ViewModel = function() {
  var vm = this;
  vm.openProfil = function() {
    $('.popup-profil').fadeIn()
  }
  vm.closeProfil = function() {
    $('.popup-profil').fadeOut()
  }
  vm.openSingleplayer = function() {
    console.log('openSingleplayer')
  }
  vm.closeSingleplayer = function() {
    console.log('closeSingleplayer')
  }
  vm.openMultiplayer = function() {
    console.log('openMultiplayer')
  }
  vm.closeMultiplayer = function() {
    console.log('closeMultiplayer')
  }
};
