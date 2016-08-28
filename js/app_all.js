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


$(document).ready(function(){


    $('.go-button').click(function() {
        var loginValue = $(".login-input").text();
        var passwordValue = $(".password-input").val();
        var logPass = {
            'login': loginValue,
            'password': passwordValue
        };

        function error(response) {
            var msg = JSON.parse(response.responseText);
            console.log(msg);

            $(".password-input").val('');
            document.getElementById("alertbox").innerHTML = msg.message;
            $("#alertbox").delay(2000).fadeOut(1000);
        }

        function success(response) {
            console.log(response);
            window.location.replace("dashboard.html");
            sendAjax("data/summary", "GET", {}, function(){}, function (){});
            console.log("po wywołaniu sendAjax i przejściu do dashboard");
        }

        sendAjax( "login/", "POST", logPass, success, error);
    });

});





