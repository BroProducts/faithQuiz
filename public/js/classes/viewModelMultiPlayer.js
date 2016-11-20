app.ViewModelMultiPlayer = function() {
  var vm = this;
  vm.gameRequests = ko.observableArray();
  vm.yourGameRequests = ko.observableArray();
  vm.ongoingGames = ko.observableArray();
  vm.completedGames = ko.observableArray();
  vm.friendslist = ko.observableArray();

  var $menuPage = $('.multiplayer-page-menu');
  var $newGamePage = $('.multiplayer-page-new-game');
  var $ongoingGamePage = $('.multiplayer-page-ongoing-game');

  vm.showNewGamePage = function() {
    $menuPage.fadeOut();
    $newGamePage.fadeIn();
  };

  vm.closeNewGamePage = function() {
    $newGamePage.fadeOut();
    $menuPage.fadeIn();
  }

  vm.showGameRequestPage = function() {
    console.log('show game requests');
  };

  vm.showOngoingGamePage = function() {
    $menuPage.fadeOut();
    $ongoingGamePage.fadeIn();
  };

  vm.closeOngoingGamePage = function() {
    $ongoingGamePage.fadeOut();
    $menuPage.fadeIn();
  };

  vm.showYourGameRequestPage = function() {
    console.log('show your game requests');
  };

  vm.showMatchHistoryPage = function() {
    console.log('show match history');
  };

  console.log('MultiPlayer ViewModel loaded');
};
