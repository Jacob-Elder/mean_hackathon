var express = require('express');
var Users = require('../models/user');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Users.find(function(err, users) {
      if (err) return res.status(500).send(err);
      return res.send(users);
    });
  })
  .post(function(req, res) {
    // return res.send(req.body)
    console.log(req.body);
    Users.create(req.body, function(err, user) {
      if (err) return res.status(500).send(err);
      return res.send(user);
    });
  });
router.route('/login').get(function(req, res){
  console.log(req.query);
  Users.find({email: req.body.email}, function(err, user){
    if(err){
      return console.log(err);
    }
    console.log(user);
    res.send(user);
  });
})
router.route('/:id')
  .get(function(req, res) {
    Users.findById(req.params.id, function(err, user) {
      if (err) return res.status(500).send(err);
      return res.send(user);
    });
  })
  .put(function(req, res) {
    Users.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      return res.send({ message: 'success' });
    });
  })
  .delete(function(req, res) {
    Users.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      return res.send({ message: 'success' });
    });
  });

module.exports = router;
