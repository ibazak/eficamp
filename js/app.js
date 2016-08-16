$(document).foundation();

$(document).ready(function(){
    $('.next').click(function(){
       alert($(".login-input").val());
    });


    $('.next').click(function() {
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
            },
            success: function(response) {
                console.log(response);
            }
        });
    };
    

});



