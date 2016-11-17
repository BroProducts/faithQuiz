'use strict';

// src/services/signup/hooks/signup.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html
const bcrypt = require('bcryptjs');
const MongoClient = require('mongodb').MongoClient


module.exports = function(hook) {
  return new Promise((resolve, reject) => {
    console.log("in da hood")
    const stingurl = hook.app.locals.settings.mongodb;
    const url = eval(stingurl).toString()
    MongoClient.connect(url, function(err, db) {
      const userCollection = db.collection('users');
      userCollection.find({"username": hook.data.username}).toArray(function(err, docs) {
        console.log(docs[0])
        if(docs[0] == undefined){
          bcrypt.genSalt(10, function(err, salt) {
            console.log("new")
            bcrypt.hash(hook.data.password, salt, function(err, hash) {
              //hook.data.username = hook.data.username.toLowerCase()
              hook.data.password = hash
              resolve(hook);
            });
          });
        }else{
          console.log("already there")
          reject("user already there");
        }    
      })
    })
  })
  
};
