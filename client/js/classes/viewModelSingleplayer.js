app.ViewModelSinglePlayer = function() {
    var vm = this;
    vm.gameStartet = ko.observable(false);
    vm.currentScore = ko.observable(0);
    vm.activeQuestion = ko.observable();
    vm.start = function() {
        vm.gameStartet(true);
        vm.currentScore(0);
        vm.getQuestion();
    };

    vm.getQuestion = function() {
        var questionOptions = {};
        questionOptions.questionText = 'Question text swag swagf awogorgh serigus eriugbseipr gh';
        var question = new app.Question(1, questionOptions);
        vm.activeQuestion(question);
        var answers = [{
            id: 1,
            answerText: 'answer 1 text sag awg',
            answerCount: 24353
        }, {
            id: 2,
            answerText: 'answer 2 text ehsrh rth wg',
            answerCount: 243457
        }];
        for(var i = 0; i < answers.length; i++){
          var answerOptions = {};
          answerOptions.answerText = answers[i].answerText;
          answerOptions.answerCount = answers[i].answerCount;
          var answer = new app.Answer(answers[i].id, answerOptions);
          vm.activeQuestion().answers.push(answer);
        };
        console.log(ko.toJS(vm.activeQuestion()));
    };
};
