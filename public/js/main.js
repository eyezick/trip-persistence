'use strict';
/* global $ tripModule */

const allHotels = $('#hotel-choices');
const allRestaurants = $('#restaurant-choices');
const allActivities = $('#activity-choices');

$(document).ready(function () {
	$.ajax({
		method: 'GET',
		url: '/api/options'
	})
	.then(function(data) {

		data[0].forEach(function(hotel) {
			var newElement = $(`<option>${ hotel.name }</option>`);
			allHotels.append(newElement);
		});
		data[1].forEach(function(restaurant) {
			var newElement = $(`<option>${ restaurant.name }</option>`);
			allRestaurants.append(newElement);
		});
		data[2].forEach(function(activity) {
			var newElement = $(`<option>${ activity.name }</option>`);
			allActivities.append(newElement);
		});


	});

});

$(tripModule.load);
