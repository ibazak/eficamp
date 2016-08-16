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
                document.getElementById("alertbox").innerHTML  =
                    "Nieprawidłowy identyfikator lub hasło. <br>" +
                    "Upewnij się, że CAPS LOCK jest wyłączony i wpisz ponownie dane logowania";
                $("#alertbox").delay(3000).fadeOut(1000);
            },
            success: function(response) {
                console.log(response);
                if (response.readyState == 4) {
                    document.getElementById("demo").innerHTML = response.responseText;
                    $(".go-button").attr("href", "http://www.w3schools.com/jquery");
                } else {
                    document.getElementById("demo").innerHTML = "Nieobsłużony wyjątek";
                }
            }
        });
    };

    /*function goToDashboard() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                document.getElementById("demo").innerHTML = xhttp.responseText;
            }
        };
    };*/

});



