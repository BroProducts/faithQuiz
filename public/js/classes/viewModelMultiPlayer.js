app.ViewModelMultiPlayer = function() {
    var vm = this;
    vm.gameRequests = ko.observableArray();
    vm.yourGameRequests = ko.observableArray();
    vm.ongoingGames = ko.observableArray();
    vm.completedGames = ko.observableArray();
    vm.friendslist = ko.observableArray();


    vm.startNewGame = function(){
      console.log('start new game');
    };

    console.log('MultiPlayer ViewModel loaded');
};
