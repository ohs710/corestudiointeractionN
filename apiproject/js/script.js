const currencyForm = document.querySelector('#fixer__form'),
  fromCurrency = document.querySelector('#currency__from'),
  toCurrency = document.querySelector ('#currency__to'),
  fromAmount = document.querySelector ('#from__amount'),
  toAmount = document.querySelector ('#to__amount');

let gbp,usd,eur,krw,hkd, output;
// currencies

const getData = event => {
    if (event) {
      event.preventDefault();
    }
  
    const proxy= 'http://cors-anywhere.herokuapp.com/';
    //const APIKEY ='8ea73c77910f22d9896d5031522bd4b4',
  const api = `${proxy}http://data.fixer.io/api/latest?access_key=8ea73c77910f22d9896d5031522bd4b4`;
    fetch (api)
    .then(response => response.json())
    .then (data => {
      if (data){
        const exchangeRates = data.rates;
        console.log(exchangeRates);
        let euroValue = parseInt(fromAmount.value) / exchangeRates[fromCurrency.value];
        let convertedValue = euroValue * exchangeRates[toCurrency.value];
        
        // reduce the number
        toAmount.value = convertedValue;
        var num = convertedValue;
        var n = num.toFixed(2);
        console.log (n)

        

      }
  
    })
  .catch(error => console.error(error));
};

if (currencyForm){
  currencyForm.addEventListener('submit',getData);
};