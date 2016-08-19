app.ViewModel = function() {
  var vm = this;
  vm.musicMuted = ko.observable(false);
  vm.musicMuted.subscribe(function (state) {
    if(state){
      $('#audio-relax')[0].muted = true;
    } else {
      $('#audio-relax')[0].muted = false;
    };
  });
  vm.toggleMusic = function () {
    vm.musicMuted(!vm.musicMuted())
  }
};
