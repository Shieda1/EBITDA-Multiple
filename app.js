// https://www.omnicalculator.com/finance/ebitda-multiple#ebitda-multiple-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const v6 = document.getElementById('v6');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const EBITDAmultipleRadio = document.getElementById('EBITDAmultipleRadio');
const cashandcashequivalentsRadio = document.getElementById('cashandcashequivalentsRadio');
const marketcapitalizationRadio = document.getElementById('marketcapitalizationRadio');
const minorityinterestRadio = document.getElementById('minorityinterestRadio');
const preferredsharesRadio = document.getElementById('preferredsharesRadio');
const valueofdebtRadio = document.getElementById('valueofdebtRadio');
const EBITDARadio = document.getElementById('EBITDARadio');

let EBITDAmultiple;
let cashandcashequivalents = v1;
let marketcapitalization = v2;
let minorityinterest = v3;
let preferredshares = v4;
let valueofdebt = v5;
let EBITDA = v6;

// labels of thepust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');
const variable6 = document.getElementById('variable6');

EBITDAmultipleRadio.addEventListener('click', function() {
  variable1.textContent = 'Cash and cash equivalents';
  variable2.textContent = 'Market capitalization';
  variable3.textContent = 'Minority interest';
  variable4.textContent = 'Preferred shares';
  variable5.textContent = 'Value of debt';
  variable6.textContent = 'EBITDA';
  cashandcashequivalents = v1;
  marketcapitalization = v2;
  minorityinterest = v3;
  preferredshares = v4;
  valueofdebt = v5;
  EBITDA = v6;
  result.textContent = '';
});

cashandcashequivalentsRadio.addEventListener('click', function() {
  variable1.textContent = 'EBITDA multiple';
  variable2.textContent = 'Market capitalization';
  variable3.textContent = 'Minority interest';
  variable4.textContent = 'Preferred shares';
  variable5.textContent = 'Value of debt';
  variable6.textContent = 'EBITDA';
  EBITDAmultiple = v1;
  marketcapitalization = v2;
  minorityinterest = v3;
  preferredshares = v4;
  valueofdebt = v5;
  EBITDA = v6;
  result.textContent = '';
});

marketcapitalizationRadio.addEventListener('click', function() {
  variable1.textContent = 'EBITDA multiple';
  variable2.textContent = 'Cash and cash equivalents';
  variable3.textContent = 'Minority interest';
  variable4.textContent = 'Preferred shares';
  variable5.textContent = 'Value of debt';
  variable6.textContent = 'EBITDA';
  EBITDAmultiple = v1;
  cashandcashequivalents = v2;
  minorityinterest = v3;
  preferredshares = v4;
  valueofdebt = v5;
  EBITDA = v6;
  result.textContent = '';
});

minorityinterestRadio.addEventListener('click', function() {
  variable1.textContent = 'EBITDA multiple';
  variable2.textContent = 'Cash and cash equivalents';
  variable3.textContent = 'Market capitalization';
  variable4.textContent = 'Preferred shares';
  variable5.textContent = 'Value of debt';
  variable6.textContent = 'EBITDA';
  EBITDAmultiple = v1;
  cashandcashequivalents = v2;
  marketcapitalization = v3;
  preferredshares = v4;
  valueofdebt = v5;
  EBITDA = v6;
  result.textContent = '';
});

preferredsharesRadio.addEventListener('click', function() {
  variable1.textContent = 'EBITDA multiple';
  variable2.textContent = 'Cash and cash equivalents';
  variable3.textContent = 'Market capitalization';
  variable4.textContent = 'Minority interest';
  variable5.textContent = 'Value of debt';
  variable6.textContent = 'EBITDA';
  EBITDAmultiple = v1;
  cashandcashequivalents = v2;
  marketcapitalization = v3;
  minorityinterest = v4;
  valueofdebt = v5;
  EBITDA = v6;
  result.textContent = '';
});

valueofdebtRadio.addEventListener('click', function() {
  variable1.textContent = 'EBITDA multiple';
  variable2.textContent = 'Cash and cash equivalents';
  variable3.textContent = 'Market capitalization';
  variable4.textContent = 'Minority interest';
  variable5.textContent = 'Preferred shares';
  variable6.textContent = 'EBITDA';
  EBITDAmultiple = v1;
  cashandcashequivalents = v2;
  marketcapitalization = v3;
  minorityinterest = v4;
  preferredshares = v5;
  EBITDA = v6;
  result.textContent = '';
});

EBITDARadio.addEventListener('click', function() {
  variable1.textContent = 'EBITDA multiple';
  variable2.textContent = 'Cash and cash equivalents';
  variable3.textContent = 'Market capitalization';
  variable4.textContent = 'Minority interest';
  variable5.textContent = 'Value of debt';
  variable6.textContent = 'EBITDA';
  EBITDAmultiple = v1;
  cashandcashequivalents = v2;
  marketcapitalization = v3;
  minorityinterest = v4;
  valueofdebt = v5;
  preferredshares = v6;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(EBITDAmultipleRadio.checked)
    result.textContent = `EBITDA multiple = ${computeEBITDAmultiple().toFixed(2)}`;

  else if(cashandcashequivalentsRadio.checked)
    result.textContent = `Cash and cash equivalents = ${computecashandcashequivalents().toFixed(2)}`;

  else if(marketcapitalizationRadio.checked)
    result.textContent = `Market capitalization = ${computemarketcapitalization().toFixed(2)}`;

  else if(minorityinterestRadio.checked)
    result.textContent = `Minority interest = ${computeminorityinterest().toFixed(2)}`;

  else if(preferredsharesRadio.checked)
    result.textContent = `Preferred shares = ${computepreferredshares().toFixed(2)}`;

  else if(valueofdebtRadio.checked)
    result.textContent = `Value of debt = ${computevalueofdebt().toFixed(2)}`;

  else if(EBITDARadio.checked)
    result.textContent = `EBITDA = ${computeEBITDA().toFixed(2)}`;
})

// calculation

function computeEBITDAmultiple() {
  return (Number(marketcapitalization.value) + Number(valueofdebt.value) + Number(minorityinterest.value) + Number(preferredshares.value) - Number(cashandcashequivalents.value)) / Number(EBITDA.value);
}

function computecashandcashequivalents() {
  return (Number(marketcapitalization.value) + Number(valueofdebt.value) + Number(minorityinterest.value) + Number(preferredshares.value) - (Number(EBITDAmultiple.value) * Number(EBITDA.value)));
}

function computemarketcapitalization() {
  return (Number(EBITDAmultiple.value) * Number(EBITDA.value)) - Number(valueofdebt.value) - Number(minorityinterest.value) - Number(preferredshares.value) + Number(cashandcashequivalents.value);
}

function computeminorityinterest() {
  return (Number(EBITDAmultiple.value) * Number(EBITDA.value)) - Number(marketcapitalization.value) - Number(valueofdebt.value) - Number(preferredshares.value) + Number(cashandcashequivalents.value);
}

function computepreferredshares() {
  return (Number(EBITDAmultiple.value) * Number(EBITDA.value)) - Number(marketcapitalization.value) - Number(valueofdebt.value) - Number(minorityinterest.value) + Number(cashandcashequivalents.value);
}

function computevalueofdebt() {
  return (Number(EBITDAmultiple.value) * Number(EBITDA.value)) - Number(marketcapitalization.value) - Number(minorityinterest.value) - Number(preferredshares.value) + Number(cashandcashequivalents.value);
}

function computeEBITDA() {
  return (Number(marketcapitalization.value) + Number(valueofdebt.value) + Number(minorityinterest.value) + Number(preferredshares.value) - Number(cashandcashequivalents.value)) / Number(EBITDAmultiple.value);
}