(function (){
const APIKEY ='8ea73c77910f22d9896d5031522bd4b4',
proxy= 'https://cors-anywhere.herokuapp.com/',
currencyForm = document.querySelector('#fixer__form'),
fromCurrency = document.querySelector('#currency__from'),
toCurrency = document.querySelector ('#currency__to'),
fromAmount = document.querySelector ('#from__amount'); 
var gbps = '0.86438';
var usd = '1.12436';
var krw='1011.966638';
var hkd= ':8.819929';
var eur= '1';
var exchangeRates;

const getFixerRates = (event) = {
  if (event) {
    event.preventDefault();

  fetch (`http://data.fixer.io/api/latest?access_key=${APIKEY}&base=USD&symbols= GBP,EUR,HKD,KRW,USD`)
  .then(response => response.json())
  .then (data => {
    const exchangeRates= data.rates;
    const gbpRate = exchangeRates.GBP;
   const usdRate= exchangeRates.USD;
    const krwRate= exchangeRates.KRW;
    const eurRate= exchangeRates.EUR;
    const hkdRate= exchangeRates.HKD;


 
//convert euros by dividing value/ fromCurrency rate
var x = eurRate
var y= fromCurrency
var z = x/y; 
document.getElementById("currency__from").innterHTML= z; 

//convert currency by multiplying Euro value by toCurrency 

var x = toCurrency
var y = fromCurrency
var z = x*y 

document.getElementById("currency__to").innterHTML= "from__amount";


    console.log(fromCurrency.value, toCurrency.value,fromAmount.value);
     console.log(exchangeRates[toCurrency.value]);
    console.log(exchangeRates[fromCurrency.value]);
  })
//set API end point, access key, required parameters
$endpoint = "convert";
$access_key = "8ea73c77910f22d9896d5031522bd4b4";
$from ='eurRate';
$to = 'usdRate';
$amount = 10;

.catch(error => console.error (error));


if (fixer__form) {
  fixer__form.addEventListener ('submit, getFixerRates'); 
};