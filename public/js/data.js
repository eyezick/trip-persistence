var dataModule = (function () {

    var publicAPI = {

        ajaxCall : $.ajax({
            method: 'GET',
            url: '/api/options'
        })

    };
    return publicAPI;

}());
