{
    const fromCurrencyElement = document.querySelector(".js-fromCurrency");
    const toCurrencyElement = document.querySelector(".js-toCurrency");
    const convertedAmountElement = document.querySelector(".js-convertedAmount");

    const pound = 5.286;
    const dollar = 3.795;
    const euro = 4.556;
    const zloty = 1.000;


    const computePrimaryOutcome = (fromCurrency, amount) => {
        switch (fromCurrency) {

            case "GBP":
                return amount * pound;

            case "USD":
                return amount * dollar;

            case "EUR":
                return amount * euro;

            case "PLN":
                return amount * zloty;
        }
    }


    const computeFinalOutcome = (toCurrency, computePrimaryOutcome) => {
        switch (toCurrency) {

            case "GBP":
                return computePrimaryOutcome / pound;

            case "USD":
                return computePrimaryOutcome / dollar;

            case "EUR":
                return computePrimaryOutcome / euro;

            case "PLN":
                return computePrimaryOutcome / zloty;
        }
    }


   


    const showConvertedAmount = (amount, fromCurrency, finalOutcome, toCurrency) => {
        convertedAmountElement.innerText = `${amount.toFixed(3)} ${fromCurrency} = ${finalOutcome.toFixed(3)} ${toCurrency}`;
    }


    const resetAllContent = () => {
        const resetButton = document.querySelector(".js-resetButton");
        resetButton.addEventListener("click", () => {
            convertedAmountElement.innerText = "";
        });
    }


    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");

        const amount = Number(amountElement.value);
        const fromCurrency = fromCurrencyElement.value;
        const toCurrency = toCurrencyElement.value;

        const primaryOutcome = computePrimaryOutcome(fromCurrency, amount);
        const finalOutcome = computeFinalOutcome(toCurrency, primaryOutcome)

        showConvertedAmount(amount, fromCurrency, finalOutcome, toCurrency);

    }


    const init = () => {

        preventCurrencyDuplicate(fromCurrencyElement, toCurrencyElement);

          
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("reset", resetAllContent);
    }

    init();

}