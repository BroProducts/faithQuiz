app.ViewModelSinglePlayer = function() {
    var vm = this;
    vm.gameStartet = ko.observable(false);
    vm.gameLost = ko.observable(false)
    vm.currentScore = ko.observable(0);
    vm.activeQuestion = ko.observable();
    vm.start = function() {
        vm.gameLost(false)
        vm.gameStartet(true);
        vm.currentScore(0);
        vm.getQuestion();
    };

    vm.getQuestion = function() {
        //get messages
        questionService.find({
            query: {
            $sort: { createdAt: -1 },
            $limit: 1000
            }
        }).then(function (page) {
            
            app.showPreloaderFast();

            var question = {id: page.id, questionText: page.question};

            var questionOptions = {};
            questionOptions.questionText = question.questionText;
            var question = new app.Question(question.id, questionOptions);
            vm.activeQuestion(question);
            var answers = [{
                id: "answer1",
                answerText: page.answer1
            }, {
                id: "answer2",
                answerText: page.answer2
            }];
            for (var i = 0; i < answers.length; i++) {
                var answerOptions = {};
                answerOptions.answerText = answers[i].answerText;
                var answer = new app.Answer(answers[i].id, answerOptions);
                vm.activeQuestion().answers.push(answer);
            };
            app.hidePreloaderFast();

        });

        
    };
    vm.answerQuestion = function() {
        app.showPreloaderFast();
        var answer = this;
        console.log(answer)
        var answerCorrect = false;

        leaderboardService.create({
            questionid: app.vm.singlePlayer.activeQuestion().id,
            answer: answer.id
        }).then(function (page) {
            answerCorrect = true


        // for (var i = 0; i < vm.activeQuestion().answers().length; i++) {
        //     if (answer.answerCount < vm.activeQuestion().answers()[i].answerCount) {
        //         answerCorrect = false;
        //     } else {
        //         answerCorrect = true
        //     };
        // };
        vm.activeQuestion(undefined)
        if (answerCorrect) {
            vm.nextQuestion();
        } else {
            vm.lose();
        };
        app.hidePreloaderFast();
        })
    };
    vm.nextQuestion = function() {
        vm.currentScore(vm.currentScore() + 1);
        vm.getQuestion();
    };
    vm.lose = function() {
        vm.gameStartet(false);
        vm.gameLost(true)
    };
};