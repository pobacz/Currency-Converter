
let amountElement = document.querySelector(".js-amount");
let fromCurrencyElement = document.querySelector(".js-fromCurrency");
let toCurrencyElement = document.querySelector(".js-toCurrency");
let convertedAmountElement = document.querySelector(".js-convertedAmount");
let formElement = document.querySelector(".js-form");
let resetButton = document.querySelector(".js-resetButton");


fromCurrencyElement.addEventListener("input", () => {
    if (fromCurrencyElement.value === toCurrencyElement.value) {
        toCurrencyElement.value = "";
    }
});

toCurrencyElement.addEventListener("input", () => {
    if (toCurrencyElement.value === fromCurrencyElement.value) {
        fromCurrencyElement.value = "";
    }
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let pound = 5.286;
    let dollar = 3.795;
    let euro = 4.556;
    let zloty = 1.000;


    let amount = Number(amountElement.value);
    let fromCurrency = fromCurrencyElement.value;
    let toCurrency = toCurrencyElement.value;
    let primaryOutcome;
    let finalOutcome;


    resetButton.addEventListener("click", () => {
        convertedAmountElement.innerText = "";
    });

    switch (fromCurrency) {

        case "GBP":
            primaryOutcome = amount * pound;
            break;
        case "USD":
            primaryOutcome = amount * dollar;
            break;
        case "EUR":
            primaryOutcome = amount * euro;
            break;
        case "PLN":
            primaryOutcome = amount * zloty;
            break;
    }


    switch (toCurrency) {

        case "GBP":
            finalOutcome = primaryOutcome / pound;
            break;
        case "USD":
            finalOutcome = primaryOutcome / dollar;
            break;
        case "EUR":
            finalOutcome = primaryOutcome / euro;
            break;
        case "PLN":
            finalOutcome = primaryOutcome / zloty;
            break;
    }


    convertedAmountElement.innerText = `${amount.toFixed(3)} ${fromCurrency} = ${finalOutcome.toFixed(3)} ${toCurrency}`;
});

