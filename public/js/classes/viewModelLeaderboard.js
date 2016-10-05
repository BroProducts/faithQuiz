app.ViewModelLeaderboard = function() {
    var vm = this;
    vm.leaderboardloaded = ko.observable(false);
    vm.leaderboarddata = ko.observableArray();

    vm.start = function() {
        app.showPreloaderFast();

        console.log("start")
        leaderboardService.find({
            query: {
            $sort: { score: -1 },
            $limit: 10
            }
        }).then(function (page) {
            console.log(page)
            app.hidePreloaderFast();
            
            for (var i = 0; i < page.data.length; i++) {
                var leaderboard = new app.leaderboard(page.data[i]);
                console.log(leaderboard)
                vm.leaderboarddata().push(leaderboard);
            }
            vm.leaderboardloaded(true) 
            app.hidePreloaderFast();
        });
    };
};