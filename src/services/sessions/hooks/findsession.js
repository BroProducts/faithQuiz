'use strict';

// src/services/sessions/hooks/findsession.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID;
const url = require('../../../../config/db.conf');

module.exports = function(hook) {
    return new Promise((resolve, reject) => {
      const length = hook.result.data.length;
      if(hook.params.user._id == hook.result.data[length - 1].userid){
        if(hook.params.query.$or){
          const answer1count = hook.result.data[length - 1].answer1count
          const answer2count = hook.result.data[length - 1].answer2count
          if(answer1count >= answer2count && hook.params.query.$or[1].userid == "answer1"){
            console.log("answer1 correct")

            MongoClient.connect(url, function(err, db) {
              const sessionCollection = db.collection('sessions');
              sessionCollection.update(
                {
                  _id: ObjectId(hook.result.data[length - 1]._id.toString())
                },
                {
                  $set: { "answerdone": true}
                }
              ).then(function(){
                hook.result = true;
                resolve(hook);
              })
            })

          }else if(answer1count <= answer2count && hook.params.query.$or[1].userid == "answer2"){
            console.log("answer2 correct")
            MongoClient.connect(url, function(err, db) {
              const sessionCollection = db.collection('sessions');
              sessionCollection.update(
                {
                  "_id": ObjectId(hook.result.data[length - 1]._id.toString())
                },
                {
                  $set: { "answerdone": true}
                }
              ).then(function(){
                hook.result = true;
                resolve(hook);
              })
            })
          }else{
            console.log("fail")
            var questionsdone = 0;
            for (var i = 0; i < hook.result.data.length; i++) { 
                if(hook.result.data[i].answerdone == true){
                  questionsdone++;
                }
            }
            MongoClient.connect(url, function(err, db) {
              console.log("connected to db")
              const sessionCollection = db.collection('sessions');              
              const leaderboadCollection = db.collection('leaderboards');
              if(questionsdone > 0){
                leaderboadCollection.insert(
                  {
                    userid: hook.params.user._id.toString(),
                    score: length -1,
                    createdAt: new Date(),
                    username: hook.params.user.username
                  }
                ).then(function(){
                  sessionCollection.remove(
                    {
                      userid: hook.params.user._id.toString()
                    }
                  ).then(function(){
                    hook.result = false;
                    resolve(hook);
                  })
                })
              }else{
                sessionCollection.remove(
                  {
                    userid: hook.params.user._id.toString()
                  }
                ).then(function(){
                  hook.result = false;
                  resolve(hook);
                })
              }
              });
            }
          }else{
            hook.result = {
              question: hook.result.data[length - 1].question,
              answer1: hook.result.data[length - 1].answer1,
              answer2: hook.result.data[length - 1].answer2
            }
            resolve(hook);
          }
        }
    })
  };