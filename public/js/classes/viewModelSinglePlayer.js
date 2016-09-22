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
            $limit: 25
            }
        }).then(function (page) {
            return console.log(page.data.reverse())
        });

        app.showPreloaderFast();

        var question = [{id: 1, questionText: 'I\'ve got a question for ya111!'}, {id: 1, questionText: 'I\'ve got a question for ya2222!'}, {id: 1, questionText: 'I\'ve got a question for ya3333!'}];
        var xxx = Math.floor((Math.random() * 3) + 1) - 1;

        var questionOptions = {};
        questionOptions.questionText = question[xxx].questionText;
        var question = new app.Question(question[xxx].id, questionOptions);
        vm.activeQuestion(question);
        var answers = [{
            id: 1,
            answerText: 'answer 1 text sag awg',
            answerCount: 22353
        }, {
            id: 2,
            answerText: 'answer 2 text ehsrh rth wg',
            answerCount: 243457
        }];
        for (var i = 0; i < answers.length; i++) {
            var answerOptions = {};
            answerOptions.answerText = answers[i].answerText;
            answerOptions.answerCount = answers[i].answerCount;
            var answer = new app.Answer(answers[i].id, answerOptions);
            vm.activeQuestion().answers.push(answer);
        };
        app.hidePreloaderFast();
    };
    vm.answerQuestion = function() {
        app.showPreloaderFast();
        var answer = this;
        var answerCorrect = false;
        for (var i = 0; i < vm.activeQuestion().answers().length; i++) {
            if (answer.answerCount < vm.activeQuestion().answers()[i].answerCount) {
                answerCorrect = false;
            } else {
                answerCorrect = true
            };
        };
        vm.activeQuestion(undefined)
        if (answerCorrect) {
            vm.nextQuestion();
        } else {
            vm.lose();
        };
        app.hidePreloaderFast();
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
