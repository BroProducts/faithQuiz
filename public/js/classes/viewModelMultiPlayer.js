app.ViewModelMultiPlayer = function() {
  var vm = this;
  vm.gameRequests = ko.observableArray();
  vm.yourGameRequests = ko.observableArray();
  vm.ongoingGames = ko.observableArray();
  vm.completedGames = ko.observableArray();
  vm.friendslist = ko.observableArray();

  var $menuPage = $('.multiplayer-page-menu');
  var $newGamePage = $('.multiplayer-page-new-game')

  vm.openNewGamePage = function() {
    $menuPage.fadeOut();
    $newGamePage.fadeIn();
  };

  vm.closeNewGamePage = function() {
    $newGamePage.fadeOut();
    $menuPage.fadeIn();
  }

  vm.showGameRequest = function() {
    console.log('show game requests');
  };

  vm.showYourGameRequest = function() {
    console.log('show your game requests');
  };

  vm.showMatchHistory = function() {
    console.log('show match history');
  };

  console.log('MultiPlayer ViewModel loaded');
};
