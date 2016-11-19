app.ViewModelProfil = function() {
  var vm = this;

  vm.currentUsername = ko.observable(app.get('user').username);

  vm.logout = function() {
    app.logout().then(function() {
      return window.location.href = '/index.html';
    });
  };
  console.log('Profil ViewModel loaded');
};
