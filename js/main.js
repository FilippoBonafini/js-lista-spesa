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
const inputDowhile = document.getElementById('listDoWhileInput');

// INDICHIAMO IL BOTTONE PER AGGIUNGERE UN PRODOTTO 
const buttonFor = document.getElementById('listForButton');
const buttonWhile = document.getElementById('listWhileButton');
const buttonDowhile = document.getElementById('listDoWhileButton');

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

// SECONDA LISTA : WHILE 
let iWhile = 0;
while (iWhile < listWhileArray.length){
    const listElement = document.createElement('li');
    listWhile.append(listElement);
    listElement.innerHTML = (listWhileArray[iWhile]);
    iWhile++;
}

// TERZA LISTA: DO WHILE 
let iDoWhile = 0;
do { 
    const listElement = document.createElement('li');
    listDoWhile.append(listElement);
    listElement.innerHTML = (listDoWhileArray[iDoWhile]);
    iDoWhile++;
} while ( iDoWhile < listDoWhileArray.length);