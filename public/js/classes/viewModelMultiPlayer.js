app.ViewModelMultiPlayer = function() {
  var vm = this;
  vm.gameRequests = ko.observableArray();
  vm.yourGameRequests = ko.observableArray();
  vm.ongoingGames = ko.observableArray();
  vm.completedGames = ko.observableArray();
  vm.friendslist = ko.observableArray();

  var $menuPage = $('.multiplayer-page-menu');
  var $newGamePage = $('.multiplayer-page-new-game');
  var $gameRequestsPage = $('.multiplayer-page-game-requests');
  var $ongoingGamePage = $('.multiplayer-page-ongoing-game');
  var $yourGameRequestsPage = $('.multiplayer-page-your-game-requests');
  var $matchHistoryPage = $('.multiplayer-page-match-history');

  vm.showNewGamePage = function() {
    $menuPage.fadeOut();
    $newGamePage.fadeIn();
  };

  vm.closeNewGamePage = function() {
    $newGamePage.fadeOut();
    $menuPage.fadeIn();
  }

  vm.showGameRequestPage = function() {
    $menuPage.fadeOut();
    $gameRequestsPage.fadeIn();
  };

  vm.closeGameRequestPage = function() {
    $gameRequestsPage.fadeOut();
    $menuPage.fadeIn();
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
    $menuPage.fadeOut();
    $gameYourRequestsPage.fadeIn();
  };

  vm.closeYourGameRequestPage = function() {
    $gameYourRequestsPage.fadeOut();
    $menuPage.fadeIn();
  };

  vm.showMatchHistoryPage = function() {
    $menuPage.fadeOut();
    $matchHistoryPage.fadeIn();
  };

  vm.closeMatchHistoryPage = function() {
    $matchHistoryPage.fadeOut();
    $menuPage.fadeIn();
  };

  console.log('MultiPlayer ViewModel loaded');
};
