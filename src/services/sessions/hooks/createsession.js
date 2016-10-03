'use strict';

const MongoClient = require('mongodb').MongoClient
// Connection URL
const url = require('../../../../config/db.conf');

//Use connect method to connect to the server

module.exports = function(hook) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function(err, db) {
      const questionCollection = db.collection('questions');
        questionCollection.count().then(function(N) {
          const R = Math.floor(Math.random() * N);
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
    });
  });
}
