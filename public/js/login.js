var socket = io();
var app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  .configure(feathers.authentication({
    storage: window.localStorage
  }));

function login() {
  $('.preloader').show()
  var username = document.getElementById("username").value;
  var lcusername = username.toLowerCase();
  app.authenticate({
    type: 'local',
    'username': lcusername,
    'password': document.getElementById("password").value
  }).then(function(result) {
    console.log('Authenticated!', result);
    window.location = "game.html"
  }).catch(function(error) {
    console.error('Error authenticating!', error);
    $('.preloader').hide();
    alert('Username or Password wrong');
  });
};

function hidePreloader() {
  $('.preloader').hide();
};

function showPreloader() {
  $('.preloader').show();
};

$(document).on('keydown', function(e){
  if (e.keyCode == 13){
    login();
  };
});
