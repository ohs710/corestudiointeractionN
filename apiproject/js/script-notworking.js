window.addEventListener('load', ()=> {
(function (){

  const form = document.querySelector('form'),
  dataWrapper = document.querySelector('.data-response');
  
  const getData = event => {
  if (event) {
    event.preventDefault();
  }

  const proxy= 'https://cors-anywhere.herokuapp.com/';
  //const APIKEY ='8ea73c77910f22d9896d5031522bd4b4',
const api = `${proxy}https://data.fixer.io/api/latest?access_key=8ea73c77910f22d9896d5031522bd4b4/&base=USD&symbols=USD,EUR,HKD,KRW,GBP`;
  fetch (api)
  .then(response => response.json())
  .then (data => {
    let formattedData = '';
    if (data){
    formattedData = data.login;
    console.log (data);
    }
    dataWrapper.innerHTML = formattedData; 

  })
.catch(error => console.error(error));
  };

if (form){
  form.addEventListener('submit',getData);

};

currencyForm = document.querySelector('#fixer__form'),
fromCurrency = document.querySelector('#currency__from'),
toCurrency = document.querySelector ('#currency__to'),
fromAmount = document.querySelector ('#from__amount'); 

var gbp,usd,eur,krw,hkd;
function init (){
  gbp= document.getElementById("GBP");
  usd= document.getElementById("USD");
  krw=document.getElementById("KRW");
  eur= document.getElementById("EUR");
  hkd= document.getElementById("HKD");
  
}

function gbp (){
  usd.value = parseFloat(gbp.value)* 
  eur.value = parseFloat(eur.value)*
  krw.value = parseFloat(krw.value)* 
  hkd.value = parseFloat(hkd.value)* 
}