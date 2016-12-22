'use strict';

// src/services/leaderboard/hooks/getleaderboard.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};


module.exports = function(hook) {
  var args = [
    { $group : {_id : "$username", score : { $max : "$score" } }},
    { $sort : { score : -1 } },
    { $limit : 50}
  ];

  return this.Model.aggregate(args)
    .then(data => {
      console.log(data)
      hook.result = {
        total: data.length || 0,
        data,
      };

      return hook;
    });
    
};