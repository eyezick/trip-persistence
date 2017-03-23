var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var Day = require('../models/day');

router.get('/options', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.json([dbHotels, dbRestaurants, dbActivities]);
  })
  .catch(next);
});


//DAYS ROUTES BELOW

router.get('/days', function(req, res, next) {
  Day.findAll()
      .then(function (allDays) {
        res.send(allDays)
      }).catch(next)
})

router.put('/days/:id', function(req, res, next) {
    Day.update(req.body, {
          where : {
            id : req.params.id
          },
        returning : true
        }
    ).then(function () {
        res.status(204)
    }).catch(next)
})

router.post('/days/:id', function(req, res, next) {
    console.log(req.body)
    Day.create(req.body)
        .then(function () {
            res.status(200)
        }).catch(next)
})


router.delete('/days', function(req, res, next) {
    res.send('/days')
})


//OTHER ROUTES BELOW

module.exports = router;
