$(document).ready(function(){

    $('.go-button').click(function() {
        var loginValue = $(".login-input").text();
        var passwordValue = $(".password-input").val();
        var loginPassword = {
            'login': loginValue,
            'password': passwordValue
        };

        function error(response) {
            var msg = JSON.parse(response.responseText);

            $(".password-input").val('');
            document.getElementById("alertbox").innerHTML = msg.message;
            $("#alertbox").fadeIn(0);
            $("#alertbox").delay(2000).fadeOut(1000);
        }

        function success(response) {
            console.log(response);
            window.location.replace("dashboard.html");
            console.log("Poprawne dane logowania: przejście do dashboard");
        }

        sendAjax( "login/", "POST", loginPassword, success, error);

    });

});


