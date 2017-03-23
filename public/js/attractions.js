'use strict';
/* global $ attractionModule hotels restaurants activities */

/**
 * This module holds collection of enhanced attraction objects which can be
 * easily looked up by type and id. It is primarily used when someone clicks
 * to add an attraction in the `options` module.
 */

// var hotels;
// var restaurants;
// var activities;

var attractionsModule = (function () {

  // application state
  var allAttractions = {

    hotels: [],
    restaurants: [],
    activities: []

  };

  // private helper methods (only available inside the module)

  function findById (array, id) {
    return array.find(function (el) {
      return +el.id === +id;
    });
  }

  // var enhanced = {
  //   hotels: hotels.map(attractionModule.create),
  //   restaurants: restaurants.map(attractionModule.create),
  //   activities: activities.map(attractionModule.create),
  // };

  // globally accessible module methods (available to other modules)
  
  var publicAPI = {

    getByTypeAndId: function (type, id) {
      if (type === 'hotel') return findById(allAttractions.hotels, id);
      else if (type === 'restaurant') return findById(allAttractions.restaurants, id);
      else if (type === 'activity') return findById(allAttractions.activities, id);
      else throw Error('Unknown attraction type');
    },

    getEnhanced: function (databaseAttraction) {
      var type = databaseAttraction.type;
      var id = databaseAttraction.id;
      var found = publicAPI.getByTypeAndId(type, id);
      if (found) return found;
      throw Error('enhanced version not found', databaseAttraction);
    },

    setAttraction: function (data) {
      allAttractions.hotels = data[0].map(attractionModule.create);
      allAttractions.restaurants = data[1].map(attractionModule.create);
      allAttractions.activities = data[2].map(attractionModule.create);

    }

  };

  return publicAPI;

}());