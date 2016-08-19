var app = app || {}
app.version = '0.0.1'

$(document).ready(function(){
  app.vm = new app.ViewModel()
  app.vm.musicMuted(true)
  console.log(ko.toJS(app.vm))
  ko.applyBindings(app.vm);
})
