var config = {
    baseApi: "https://efigence-camp.herokuapp.com/api/"
};

function sendAjax(endpoint, method, data, sCallback, eCallback) {
    $.ajax({
            method: method,
            url: config.baseApi + endpoint,
            data: data,
        })
        .success(function (msg) {
            sCallback(msg);
        })
        .error(function(error) {
            eCallback(error);
        });
}







