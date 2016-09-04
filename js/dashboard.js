$(document).ready(function(){

    function getFinances(response) {
        // console.log(response);
        var finances = response.content[0];
        var balance = finances.balance;
        var funds = finances.funds;
        var payments = finances.payments;

        // console.log(finances);
        document.getElementById("balance-value").innerHTML = balance + " PLN";
        document.getElementById("funds-value").innerHTML = funds  + " PLN";
        document.getElementById("payments-value").innerHTML = payments  + " PLN";
    }

    function getHistory(response) {
        var history = response.content;

        for (i = 0; i < 5; i++) {
            var transaction = history[i];
            var transactionArray = Object.keys(transaction).map(function (key) { return transaction[key]});
            var date = transactionArray[1].substring(0,10);
            var status = transaction.status;
            if (status == "income") {
                status = transactionArray[5];
                $('.status').addClass("status-color");
            } else {
                $('.status').removeClass("status-color");
                status = -transactionArray[5];
            }
            console.log(transactionArray[2]);
            $(".list-component").prepend(
                $('<li class="row list-component-li">').append($(
                    '<div class="large-3 columns text-left">'+ date +'</div>'+
                    '<div class="large-6 columns">' +
                    + '<span>'+transactionArray[2]+'</span>' + '<br>' +
                    + '<span>'+transactionArray[3]+'</span>'+' '+'<span>IKONA</span>' +
                    '</div>' +
                    '<div class="large-3 columns text-right status">'+status+' '+transactionArray[4]+'</div>'
                )));
        }

        // document.getElementById("data-elem").innerHTML = date;

    }

    sendAjax("data/summary", "GET", {}, getFinances, function (){console.log("nie udało się finance");});

    sendAjax("data/history", "GET", {}, getHistory, function (){console.log("nie udało się history");});

    // data/summary
    // Method: GET
    // Success response:
    //     Code: 200
    // {"status":true,"content":{"balance":78036,"funds":91923,"payments":87511}}


    // /data/history
    // Method: GET
    // {"status":true,"content":[{"id":"B48YL","date":"1923-07-24T04:33:07.596Z","description":
    //     "etiam aliquam aliquam","category":"Cash","currency":"PLN","amount":238,"status":"income"}]}




});




