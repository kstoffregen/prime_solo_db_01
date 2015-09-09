var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

///* GET users listing. */
router.get('/', function(req, res, next){
  if(req.isAuthenticated()) {
    User.find({}, function(err, users){
      if (err) {
        next(err);
      } else {
        console.log(users);
        res.render('users', {"users": users});
      }
    });
  }else{
    res.send(200);
  }
});

module.exports = router;