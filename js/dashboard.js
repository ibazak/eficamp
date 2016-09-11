$(document).ready(function () {

    function getFinances(response) {
        var finances = response.content[0];
        var balance = finances.balance;
        var funds = finances.funds;
        var payments = finances.payments;

        document.getElementById("balance-value").innerHTML = balance + " PLN";
        document.getElementById("funds-value").innerHTML = funds + " PLN";
        document.getElementById("payments-value").innerHTML = payments + " PLN";
    }

    function getHistory(response) {
        var history = response.content;

        for (i = 0; i < 5; i++) {
            var historyArray = history[i];
            var transaction = Object.keys(historyArray).map(function (key) {
                return historyArray[key]
            });
            var date = transaction[1].substring(0, 10);
            var status = historyArray.status;
            if (status == "income") {
                status = transaction[5];
                $('.status').addClass("status-color");
            } else {
                $('.status').removeClass("status-color");
                status = -transaction[5];
            }
            $(".list-component").prepend(
                $('<li class="row list-component-li">').append($(
                    '<div class="large-3 columns text-left">' + date + '</div>' +
                    '<div class="large-6 columns">'
                    + '<span>' + transaction[2] + '</span>' + '<br>'
                    + '<span>' + transaction[3] + '</span>' + ' ' + '<span>IKONA</span>' +
                    '</div>' +
                    '<div class="large-3 columns text-right status">' + status + ' ' + transaction[4] + '</div>'
                )));
        }

    }

    function getProducts(response) {
        var products = response.content;
        var arr = ["0", "1", "2", "3", "4"];

        jQuery.each(arr, function() {

        for (var i = 0; i < 6; i++) {
            var productElem = products[i];
            var productArray = Object.keys(productElem).map(function (key) {
                return productElem[key]
            });
            var type = productArray[0];
            var currency = productArray[1];
            var amount = productArray[2];

            $(".product-" + arr[i]).append('<span>'+type+'</span><br>');
            $(".product-" + arr[i]).append('<span>' +amount+ " " +currency+'</span>');

        }

        });

    };

    sendAjax("data/summary", "GET", {}, getFinances, function () {
        console.log("nie udało się finance");
    });

    sendAjax("data/history", "GET", {}, getHistory, function () {
        console.log("nie udało się history");
    });

    sendAjax("data/products", "GET", {}, getProducts, function () {
        console.log("nie udało się products")
    });

    // /data/products
    //
    // Method: GET
    // Success response:
    //     Code: 200
    // {"status":true,"content":[{ "type": "Wallet", "currency": "PLN", "amount": 489.50 }]}


});




