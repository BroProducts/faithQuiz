app.ViewModelFriendlist = function() {
  var vm = this;
  vm.friends = ko.observableArray();

  vm.friendNameInput = ko.observable();
  vm.addFriend = function() {
    var options = {
      username: vm.friendNameInput
    }
    var friend = new app.Payer(options);
    vm.friends.push(friend);
  };

  vm.removeFriend = function() {
    var self = this;
    vm.friends.remove(self);
  };

  vm.loadFriends = function(){
    for(var i = 0; i < 6; i++){
      var options = {
        username: 'Friend' + i,
        displayname: 'friEnd' + i
      }
      var friend = new app.Payer(options);
      vm.friends.push(friend);
    };
  };
  vm.loadFriends();

  console.log('Friendlist ViewModel loaded');
};
