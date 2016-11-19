var socket = io();
var app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  .configure(feathers.authentication({ storage: window.localStorage }))

function login() {
    app.authenticate({
    type: 'local',
    'username': document.getElementById("username").value,
    'password': document.getElementById("password").value
    }).then(function(result){
    console.log('Authenticated!', result);
    window.location = "game.html"
    }).catch(function(error){
    console.error('Error authenticating!', error);
    alert('Username or Password wrong');
    });
}
