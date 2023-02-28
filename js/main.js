'use strict';

// CREIAMO LE NOSTRE LISTE:
// lista ciclo for 
const listForArray = [
    'Pane',
    'Latte',
    'Insalata'
]; 
// lista ciclo while 
const listWhileArray = [
    'Shampo',
    'Dentifricio',
    'Deodorante'
];
// lista ciclo do while 
const listDoWhileArray = [
    'Sacchetti',
    'Detersivo',
    'Candeggina'
];


// INDICHIAMO L'INPUT PER AGGIUNGERE UN PRODOTTO 
const inputFor = document.getElementById('listForInput');
const inputWhile = document.getElementById('listWhileInput');
const inputDoWhile = document.getElementById('listDoWhileInput');

// INDICHIAMO IL BOTTONE PER AGGIUNGERE UN PRODOTTO 
const buttonFor = document.getElementById('listForButton');
const buttonWhile = document.getElementById('listWhileButton');
const buttonDoWhile = document.getElementById('listDoWhileButton');

// INDICHIAMO IL BOTTONE PER SVUOTARE LA LISTA
const buttonDeleteFor = document.getElementById('listForButtonDelete');
const buttonDeleteWhile = document.getElementById('listWhileButtonDelete');
const buttonDeleteDoWhile = document.getElementById('listDoWhileButtonDelete');

// INDICHIAMO LE UL VUOTE
const listFor = document.getElementById('listFor');
const listWhile = document.getElementById('listWhile');
const listDoWhile = document.getElementById('listDoWhile');


// PRIMA LISTA : FOR 
for (let iFor = 0; iFor<listForArray.length; iFor++){
    const listElement = document.createElement('li');
    listFor.append(listElement);
    listElement.innerHTML = (listForArray[iFor]);
}

// INPUT E BOTTONI DELLA LISTA WHILE 
buttonFor.addEventListener('click',
    function(){
        if(listForInput.value != ''){
            listForArray.push(inputFor).value;
            const listElement = document.createElement('li');
            listFor.append(listElement);
            listElement.innerHTML = (inputFor).value;
        }
    }
)
buttonDeleteFor.addEventListener('click',
    function(){
        listForArray.length = 0;
        listFor.innerHTML = '';
    }
)

// SECONDA LISTA : WHILE 
let iWhile = 0;
while (iWhile < listWhileArray.length){
    const listElement = document.createElement('li');
    listWhile.append(listElement);
    listElement.innerHTML = (listWhileArray[iWhile]);
    iWhile++;
}

// INPUT E BOTTONI DELLA LISTA FOR 
buttonWhile.addEventListener('click',
    function(){
        if(listWhileInput.value != ''){
            listWhileArray.push(inputWhile).value;
            const listElement = document.createElement('li');
            listWhile.append(listElement);
            listElement.innerHTML = (inputWhile).value;
        }
    }
)
buttonDeleteWhile.addEventListener('click',
    function(){
        listWhileArray.length = 0;
        listWhile.innerHTML = '';
    }
)

// TERZA LISTA: DO WHILE 
let iDoWhile = 0;
do { 
    const listElement = document.createElement('li');
    listDoWhile.append(listElement);
    listElement.innerHTML = (listDoWhileArray[iDoWhile]);
    iDoWhile++;
} while ( iDoWhile < listDoWhileArray.length);

// INPUT E BOTTONI DELLA LISTA WHILE 
buttonDoWhile.addEventListener('click',
    function(){
        if(listDoWhileInput.value != ''){
            listDoWhileArray.push(inputDoWhile).value;
            const listElement = document.createElement('li');
            listDoWhile.append(listElement);
            listElement.innerHTML = (inputDoWhile).value;
        }
    }
)
buttonDeleteDoWhile.addEventListener('click',
    function(){
        listDoWhileArray.length = 0;
        listDoWhile.innerHTML = '';
    }
)