app.ViewModelMultiPlayer = function() {
    var vm = this;
    vm.gameRequests = ko.observableArray();
    vm.yourGameRequests = ko.observableArray();
    vm.ongoingGames = ko.observableArray();
    vm.completedGames = ko.observableArray();
    vm.friendslist = ko.observableArray();

    var $menuPage = $('.multiplayer-page-menu');
    var $newGamePage =$('.multiplayer-page-new-game')

    vm.startNewGame = function(){
      $menuPage.hide();
      $newGamePage.show();
      console.log('start new game');
    };

    vm.showGameRequest = function(){
      console.log('show game request');
    };

    console.log('MultiPlayer ViewModel loaded');
};
