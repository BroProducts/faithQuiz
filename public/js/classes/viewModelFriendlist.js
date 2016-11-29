app.ViewModelFriendlist = function() {
  var vm = this;
  vm.friends = ko.observableArray();

  vm.friendNameInput = ko.observable('');
  vm.addFriend = function() {
    var playername = vm.friendNameInput();
    if (playername.length) {
      var options = {
        username: playername
      };
      var friend = new app.Player(options);
      vm.friends.push(friend);
      vm.friendNameInput('');
    }
  };

  vm.removeFriend = function(friend) {
    var self = friend || this;
    vm.friends.remove(self);
  };

  vm.loadFriends = function() {
    for (var i = 0; i < 6; i++) {
      var options = {
        username: 'Friend' + i,
        displayname: 'friEnd' + i
      }
      var friend = new app.Player(options);
      vm.friends.unshift(friend);
    };
  };
  vm.loadFriends();

  console.log('Friendlist ViewModel loaded');
};
