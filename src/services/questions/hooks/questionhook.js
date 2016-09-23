'use strict';

// src/services/questions/hooks/questionhook.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(hook) {
  var hooklength = hook.result.data.length;
  var questionNr = Math.floor((Math.random() * hooklength) + 1) -1;
  console.log("asdsadsad")
  //to prevent manipulation, dont use on DEV
  if(hooklength < 15){
    hook.result = {
      question: "Sorry, there are not enough questions to start a quiz, please contact an admin",
      id: 0
    }
  }else{
    hook.result = {
      question: hook.result.data[questionNr].question,
      id: hook.result.data[questionNr]._id
    };
  }
};



