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
                /*  {"status":false,"code":"l1","message":"No login\/password"}
                    {"status":false,"code":"l2","message":"Wrong login\/password"}
                */
                var message = JSON.parse(response.responseText);
                if (message.code == "l2"){
                    document.getElementById("alertbox").innerHTML  =
                    "Invalid login or password." + message.code;
                } else  {
                    document.getElementById("alertbox").innerHTML  =
                    "Login and password are required.";
                }
                //.load() .replace() w divie
                $("#alertbox").delay(4000).fadeOut(1000);
            },
            success: function(response) {
                console.log(response);
                window.location.replace("dashboard.html");
            }
        });
    };

});



