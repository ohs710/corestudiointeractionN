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
  // issue with the http and https, when i push onto github it registers the cors as http not https 
   const proxy= `https://cors-anywhere.herokuapp.com/`;
    //const APIKEY ='8ea73c77910f22d9896d5031522bd4b4',
  const api = `${proxy}https://data.fixer.io/api/latest?access_key=8ea73c77910f22d9896d5031522bd4b4`;
    fetch (api)
    .then(response => response.json())
    .then (data => {
      if (data){
        console.log(data);
        const exchangeRates = data.rates;
        console.log(exchangeRates);
        let euroValue = parseInt(fromAmount.value) / exchangeRates[fromCurrency.value];
        let convertedValue = euroValue * exchangeRates[toCurrency.value];
        var num = convertedValue;
        var n = num.toFixed (1);

        // reduce the numbers after decimal
        toAmount.value = n;

        console.log (num)
        console.log (n)
        


      }
  
    })
  .catch(error => console.error(error));
};

if (currencyForm){
  currencyForm.addEventListener('submit',getData);
};


var aText = new Array(
  "made by Jinna AED 4.130055  AED 4.130055 AFN 87.376213  ALL 123.623314 AMD 541.446549 ANG 2.108568 AOA 358.715253 ARS 47.749333 AUD 1.581409 AWG 2.023848 AZN 1.91708 BAM 1.954585 BBD 2.239725 BDT 94.853236BGN 1.956105BHD 0.423906 BIF 2058.646608 BMD 1.12436 BND 1.518841 BOB 7.770957 BRL 4.420927 BSD 1.124585 BTC 0.000201 BTN 78.010337 BWP 11.976671 BYN 2.345358 BYR 22037.452426 BZD 2.266766 CAD 1.506833 CDF 1836.640599 CHF 1.146915 CLF 0.027072  CLF 0.027072  CLP 747.133904 CNY 7.5548 COP 3549.660162 CRC 667.729154 CUC 1.12436,  CUP 29.795535, CVE 110.202446, CZK  25.741658, DJF 199.821127, DKK 7.465918, DOP 57.010691, DZD 134.085557, EGP 19.316611, ERN 16.865117, ETB 32.303367, EUR 1, FJD 2.395842, FKP 0.864452, GBP 0.86438, GEL 3.037728, GGP 0.864331, GHS 5.73941, GIP 0.864273, GMD 55.76897, GNF 10270.913357, GTQ 8.569365, GYD 235.688093, HKD 8.819929, HNL 27.492286, HRK 7.424596, HTG 95.669561, HUF 320.790903, IDR 15845.60291, ILS 4.046908, IMP 0.864331, INR 78.33707, IQD 1341.867224, IRR 47341.16995, ISK 135.811485, JEP 0.864331, JMD 147.032333, JOD 0.797196, JPY 125.793805, KES 114.223966, KGS 78.36889, KHR 4593.574774, KMF 491.76685, KPW 1011.966638, KRW 1284.851041, KWD 0.342019, KYD 0.937227, KZT 426.289498, LAK 9679.387494, LBP 1695.815752,   LKR 196.414641,   LRD 187.767998,   LSL 15.920657,   LTL 3.319943,   LVL 0.680114,   LYD 1.566964,   MAD 10.794196,   MDL 20.073758,   MGA 4087.891478,   MKD 61.504167,   MMK 1725.611371,   MNT 2960.37558,   MOP 9.085835,   MRO 401.396071,   MUR 39.239593, MVR 17.360195, MWK 819.259151  MXN 21.228532, MYR 4.641918, MZN 72.768439, NAD 15.820094, NGN 404.296934, NIO 36.942527, NOK 9.600768, NPR 125.472942, NZD 1.689221, OMR 0.432542, PAB 1.124585, PEN 3.719495, PGK 3.801685, PHP 58.501006, PKR 159.276943, PLN 4.287543, PYG 7017.410276, QAR 4.094075, RON 4.760596, RSD 117.990021, RUB 71.703233, RWF 1017.776129, SAR 4.217642, SBD 9.113667, SCR 15.436293, SDG 53.534153, SEK 10.510606, SGD 1.525919, SHP 1.485167, SLL 10006.802725, SOS 652.129281, SRD 8.385436, STD 23668.448338, SVC 9.839949, SYP 579.045632, SZL 15.947905, THB 35.946902, TJS 10.615529, TMT 3.946503, TND 3.40473, TOP 2.553985, TRY 6.556702, TTD 7.624903, TWD 34.690973, TZS 2592.894829, UAH 29.963626, UGX 4200.256517, USD 1.1243 UYU 38.554005, UZS 9490.269765, VEF 11.22954, VND 26109.939903, VUV 128.492006, WST 2.94834, XAF 655.5576, XAG 0.07543, XAU 0.000883, XCD 3.038638, XDR 0.81072, XOF 655.557826, XP :119.181799, YER 281.483608, ZAR 15.97912, ZMK 10120.583454, ZMW 13.889174  ZWL 362.443"
  );
  var iSpeed = 100; 
  var iIndex = 0;
  var iArrLength = aText[0].length; 
  var iScrollAt = 20; 
   
  var iTextPos = 0; 
  var sContents = ''; 
  var iRow; 
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  };
  
  
  typewriter();
  
  