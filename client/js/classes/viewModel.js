app.ViewModel = function() {
  var vm = this;
  vm.openProfil = function(){
    $('.popup-profil').fadeIn()
  }
  vm.closeProfil = function(){
    $('.popup-profil').fadeOut()
  }
};
