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
  vm.logout = function() {
    app.logout().then(function () {
      return window.location.href = '/index.html';
    });
  }
  vm.singlePlayer = new app.ViewModelSinglePlayer()
};
