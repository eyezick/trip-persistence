var dataModule = (function () {

    var publicAPI = {

        ajaxCall : $.ajax({
            method: 'GET',
            url: '/api/options'
        }),
        ajaxPost : function (dayNumber) {
            $.ajax({
                method: 'POST',
                url: '/api/days/' + dayNumber,
                data: {number: dayNumber}
            })
        }

    };
    return publicAPI;

}());