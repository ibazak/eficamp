$(document).foundation();

$(document).ready(function(){

    $('.go-button').click(function() {
        var loginValue = $(".login-input").text();
        var passwordValue = $(".password-input").val();
        var LogPass = {
            'login': loginValue,
            'password': passwordValue
        };
        sendAjax(LogPass);
    });

    function sendAjax(pValue) {
        $.ajax({
            type: "post",
            data: pValue,
            url: "https://efigence-camp.herokuapp.com/api/login",
            error: function(response) {
                console.log(response.responseText);
                // message = JSON.parse(response.responseText);
                document.getElementById("alertbox").innerHTML  =
                    "Nieprawidłowy identyfikator lub hasło. <br>" +
                    "Upewnij się, że CAPS LOCK jest wyłączony i wpisz ponownie dane logowania";
                //.load() .replace() w divie
                $("#alertbox").delay(3000).fadeOut(1000);
            },
            success: function(response) {
                console.log(response);
                window.location.replace("dashboard.html");
            }
        });
    };

});



