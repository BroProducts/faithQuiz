'use strict';

// src/services/user/hooks/signup.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const MongoClient = require('mongodb').MongoClient


module.exports = function(hook) {
  return new Promise((resolve, reject) => {
    console.log("in da hood")
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
      const userCollection = db.collection('users');
      userCollection.find({"username": hook.data.username}).toArray(function(err, docs) {
        console.log(docs[0])
        if(docs[0] == undefined){
              hook.data.username = hook.data.username.toLowerCase()
              var username = hook.data.username
              hook.data.username = username.substring(0, 25)
              resolve(hook);
        }else{
          console.log("already there")
          reject("user already there");
        }    
      })
    })
  }) 
};
