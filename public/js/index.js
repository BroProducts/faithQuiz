var app = feathers()
  // Use localStorage to store our login token
  .configure(feathers.authentication({
    storage: window.localStorage
  }));

app.authenticate().then(function () {
  window.location.href = '/pages/game.html';
}).catch(function(error){
  console.error('Not logged in!');
});