var socket = io();
var app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())

var signupService = app.service('signups');

function signup() {
    if(document.getElementById("password") == document.getElementById("confpassword")){
    //console.log("insignup1")
    signupService.create({
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }).then(function(result){
        console.log("done")
        console.log(result)
        window.location = "login.html"
        // var errorAlreadyThere = result.search("user already there")
        // console.log(errorAlreadyThere)
    }).catch(error => {
    console.log(error)
        var errortxt = error.toString();
        var n = errortxt.indexOf("user already there");
        if(n != -1){
            alert("Username already exists")
        }else{
            alert("Something bad happend")
        }
    }); 
    }else{
        alert("your passwords do not match")
    }  
}
