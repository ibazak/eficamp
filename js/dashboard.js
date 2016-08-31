$(document).ready(function(){

    function getFinances(response) {
        console.log(response);
        var finances = response.content[0];
        var balance = finances.balance;
        var funds = finances.funds;
        var payments = finances.payments;

        console.log(finances);
        document.getElementById("balance-value").innerHTML = balance + " PLN";
        document.getElementById("funds-value").innerHTML = funds  + " PLN";
        document.getElementById("payments-value").innerHTML = payments  + " PLN";

    }

    sendAjax("data/summary", "GET", {}, getFinances, function (){console.log("nie udało się");});

    // {"status":true,"content":{"balance":78036,"funds":91923,"payments":87511}}
});




