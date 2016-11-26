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

  vm.pageHistory = ko.observableArray([]);

  vm.pageBack = function(){
    if(vm.pageHistory().length){
      $('.mp-page').fadeOut();
      var $lastPage = vm.pageHistory.pop();
      $lastPage.fadeIn();
    }
  }

  vm.showNewGamePage = function() {
    vm.pageHistory.push($menuPage);
    $menuPage.fadeOut();
    $newGamePage.fadeIn();
  };

  vm.showGameRequestsPage = function() {
    vm.pageHistory.push($menuPage);
    $menuPage.fadeOut();
    $gameRequestsPage.fadeIn();
  };

  vm.showOngoingGamePage = function() {
    vm.pageHistory.push($menuPage);
    $menuPage.fadeOut();
    $ongoingGamePage.fadeIn();
  };

  vm.showYourGameRequestsPage = function() {
    vm.pageHistory.push($menuPage);
    $menuPage.fadeOut();
    $yourGameRequestsPage.fadeIn();
  };

  vm.showMatchHistoryPage = function() {
    vm.pageHistory.push($menuPage);
    $menuPage.fadeOut();
    $matchHistoryPage.fadeIn();
  };

  console.log('MultiPlayer ViewModel loaded');
};
