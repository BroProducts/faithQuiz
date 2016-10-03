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
        app.showPreloaderFast();
        console.log(app.get('user')._id)

        
        //get messages
        sessionService.create({
            userid: app.get('user')._id
        }).then(function (page) {
            
            const query = {
                paginate: false,
                query: {
                    userid: app.get('user')._id
                },
                $sort: { createdAt: -1 }
            }
           sessionService.find(query).then(function (page) {

            console.log(page)
            app.showPreloaderFast();

            var question = { questionText: page.question};

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
        });
        
    };
    
    vm.answerQuestion = function() {
        app.showPreloaderFast();
        var answer = this;
        const query = {
            paginate: false,
            query: {
                $or: [
                    { userid: app.get('user')._id },
                    { userid: answer.id }
                ]
            },
            $sort: { createdAt: -1 }
        }
        sessionService.find(query).then(function (page) {
            console.log(page)
            app.showPreloaderFast();
            
            
            var answerCorrect = page;

                vm.activeQuestion(undefined)
                if (answerCorrect) {
                    vm.nextQuestion();
                } else {
                    vm.lose();
                };
                

        });
    };
    vm.nextQuestion = function() {
        vm.currentScore(vm.currentScore() + 1);
        vm.getQuestion();
    };
    vm.lose = function() {
        vm.gameStartet(false);
        vm.gameLost(true)
        app.hidePreloaderFast();
    };
};