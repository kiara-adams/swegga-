let btnTot = document.querySelector('#button');
let spanFemTot = document.querySelector('#femTot');
let spanMaleTot = document.querySelector('#maleTot');
let spanTot = document.querySelector('#total');
let quantFem = document.querySelector('#inp1');
let quantMale = document.querySelector('#inp2');
const valFem = 150.95;
const valMale = 180.95;

btnTot.addEventListener('click', (event)=> {
    event.preventDefault();
    spanFemTot.innerHTML = (quantFem.value * valFem).toFixed(2);
    spanMaleTot.innerHTML = (quantMale.value * valMale).toFixed(2);
    console.log(spanFemTot.value);
    spanTot.innerHTML = (parseInt(spanFemTot.innerText) + Number(spanMaleTot.innerText)).toFixed(2);
})
