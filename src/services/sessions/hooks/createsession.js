'use strict';

const MongoClient = require('mongodb').MongoClient

module.exports = function(hook) {
  return new Promise((resolve, reject) => {
    const stingurl = hook.app.locals.settings.mongodb;
    if(stingurl == "process.env.MONGODB_URI"){
    console.log("if")
    const urlstr = eval(stingurl);
    var url = urlstr.toString();
  }else{
    var url = stingurl
    console.log(url)
    console.log("esle")
  }
    MongoClient.connect(url, function(err, db) {
      const sessionCollection = db.collection('sessions');
      const questionCollection = db.collection('eioquestions');
      sessionCollection.find({"userid": hook.params.user._id.toString()}).sort({ $natural: -1 }).limit(1).toArray(function(err, docs) {
        console.log(docs)
        if(docs[0] == undefined || docs[0].answerdone == true){
          questionCollection.count().then(function(N) {
            const R = Math.floor(Math.random() * N)
            console.log(R);
            questionCollection.find().limit(1)
              .skip(R).toArray(function(err, docs) {
                if(err) {
                  return reject(err);
                }

                hook.data.createdAt = new Date();
                hook.data.userid = hook.data.userid;
                hook.data.questionid = docs[0]._id;
                hook.data.question = docs[0].question;
                hook.data.answer1 = docs[0].answer1;
                hook.data.answer2 = docs[0].answer2;
                hook.data.answer1count = docs[0].answer1perc;
                hook.data.answer2count = docs[0].answer2perc;
                hook.data.answerdone = false;

                resolve(hook);
              });
          }).catch(reject);         
        }else{
          console.log("last question not finished")
          hook.data.createdAt = new Date();
          hook.data.userid = hook.data.userid;
          hook.data.questionid = docs[0].questionid;
          hook.data.question = docs[0].question;
          hook.data.answer1 = docs[0].answer1;
          hook.data.answer2 = docs[0].answer2;
          hook.data.answer1count = docs[0].answer1count;
          hook.data.answer2count = docs[0].answer2count;
          hook.data.answerdone = false;
          resolve(hook);
        }
      })
    });
  });
}
