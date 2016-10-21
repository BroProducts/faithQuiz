var socket = io();
var app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())

var signupService = app.service('signups');

function signup() {
    signupService.create({
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }).then(function(result){
        console.log("done")
        console.log(result)
        window.location = "login.html"
        // var errorAlreadyThere = result.search("user already there")
        // console.log(errorAlreadyThere)
    })    
}
