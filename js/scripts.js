const ceSole = 1; // 1 è un valore truthy, cioè, non è true, ma è simile a true
const sonoSveglio = 0; // 0 è un valore falsish, cioè, non è false, ma è simile a false

if (sonoSveglio) {
    console.log('Sono entrato nell if');
}
else {
    console.log('Sono entrato nell else');
}

const a = 4;
const b = 4;

/* 
    CONFRONTO: UGUALE
*/
if (a == b) {
    console.log('a è uguale a b');
}
else {
    console.log('a NON è uguale a b');
}

/* 
    CONFRONTO: DIVERSO
*/
if (a != b) {
    console.log('a è diverso da b');
}
else {
    console.log('a NON è diverso da b');
}

/* 
    CONFRONTO: MAGGIORE
*/
if (a > b) {
    console.log('a è maggiore di b');
}
else {
    console.log('a NON è maggiore di b');
}

/* 
    CONFRONTO: MINORE
*/
if (a < b) {
    console.log('a è minore di b');
}
else {
    console.log('a NON è minore di b');
}

/* 
    CONFRONTO: MAGGIORE O UGUALE
*/
if (a >= b) {
    console.log('a è maggiore o uguale a b');
}
else {
    console.log('a NON è maggiore o uguale a b');
}

/* 
    CONFRONTO: MINORE O UGUALE
*/
if (a <= b) {
    console.log('a è minore o uguale a b');
}
else {
    console.log('a NON è minore o uguale a b');
}

/* 
    ---------------------------------------------------------------------------------
    FINO A QUI, PARE CHE SI SIA CAPITO
    ---------------------------------------------------------------------------------
*/

let age = '17';

/* 
    Se il valore di age è 17
*/
if (age == 17) {
    console.log('Che bello! L anno prossimo diventi maggiorenne');
}
else {
    console.log('Non so se sei piccolo o sei grande');
}

/* 
    CONFRONTO: IDENTITA'
    Se il valore di age è 17 E il tipo di age è lo stesso del numero 17
*/
// age = parseInt(age);
if (age === 17) {
    console.log('Che bello! L anno prossimo diventi maggiorenne');
}
else {
    console.log('Non so se sei piccolo o sei grande');
}

if (age !== 17) {
    console.log('Non identità VERA');
}
else {
    console.log('Non identità FALSA');
}

if (age != 17) {
    console.log('Diverso VERO');
}
else {
    console.log('Diverso FALSO');
}

const miaVariabileGlobale = 77;
console.log('miaVariabileGlobale', miaVariabileGlobale, typeof miaVariabileGlobale);
if (age != 17) {
    console.log('Hai 17 anni');
}
else {
    console.log('miaVariabileGlobale', miaVariabileGlobale, typeof miaVariabileGlobale);

    const miaVariabileInterna = 77;
    console.log('miaVariabileInterna', miaVariabileInterna, typeof miaVariabileInterna);

    if (age > 17) {
        console.log('miaVariabileGlobale', miaVariabileGlobale, typeof miaVariabileGlobale);
        console.log('Hai più di 17 anni');
    }
    else {
        console.log('Hai meno di 17 anni');
    }
}

console.log('miaVariabileInterna', miaVariabileInterna, typeof miaVariabileInterna);

if (age == 17) {
    console.log('Hai 17 anni');
}
else if (age > 17) {
    console.log('Hai più di 17 anni');
}
else {
    console.log('Hai meno di 17 anni');
}

if (age == 23) {
    console.log('Hai 23 anni');
}

/* Ricordiamo che ceSole ha valore 1 */
if (ceSole) { // if (ceSole è truthy)
    console.log('Vado al mare');
}
else {
    console.log('Mi guardo un film');
}

if (ceSole == false) {
    console.log('Mi guardo un film');
}
else {
    console.log('Vado al mare');
}

const hoMangiatoUnDolce = false;
if (hoMangiatoUnDolce) {
    console.log('Sono felicio');
}
else {
    console.log('Non sono molto felicio');
}

if (hoMangiatoUnDolce == false) {
    console.log('Non sono molto felicio');
}
else {
    console.log('Sono felicio');
}

if (!hoMangiatoUnDolce) { // !qualcosa -> vuol dire inverti il valore di verità di qualcosa
    console.log('Non sono molto felicio');
}
else {
    console.log('Sono felicio');
}

if (age == 17) {}
if (age != 17) {}       // Se age è diverso da 17      
if (!(age == 17)) {}    // Se non è vero che age è uguale a 17



/* Ricordiamo che ceSole ha valore 1 */
const faCaldo = false;
if (ceSole && faCaldo) {    // Qui devono essere vere entrambe le condizioni prima e dopo l'&&
    console.log('Vado al mare');
}
else {
    console.log('Me ne sto a casa');
}

/* Ricordiamo che hoMangiatoUnDolce ha valore false */
const hoAccarezzatoUnCucciolo = 1;
if (hoMangiatoUnDolce && hoAccarezzatoUnCucciolo) {
    console.log('Sono pienamente felice');
}
else if (hoMangiatoUnDolce || hoAccarezzatoUnCucciolo) { // Qui mi basta che sia vera una sola delle due condizioni prima e dopo l'||
    console.log('Sono felice a metà');
}
else {
    console.log('Non sono felice');
}

// 3 * 2 / 4 * 8 => *, /, *
// 3 * [(2 / 4) * 8] => /, *, *

// if (a && b || c && d) => &&, ||, &&
// if (a && ((b || c) && d)) => ||, &&, &&

	
const pippino = new Date();
console.log('pippino', pippino, typeof pippino);
console.log(pippino.getTime());
console.log(pippino.getFullYear());
console.log(pippino.getMonth());
console.log(pippino.getDate());
console.log(pippino.getDay());
console.log(pippino.getHours());
console.log(pippino.getMinutes());
console.log(pippino.getSeconds());
console.log(pippino.getMilliseconds());

const numeroRandomConVirgolaTraZeroEUno = Math.random();
console.log('numeroRandomConVirgolaTraZeroEUno', numeroRandomConVirgolaTraZeroEUno, typeof numeroRandomConVirgolaTraZeroEUno);
const numeroRandomConVirgolaTraZeroEDieci = numeroRandomConVirgolaTraZeroEUno * 10;
console.log('numeroRandomConVirgolaTraZeroEDieci', numeroRandomConVirgolaTraZeroEDieci, typeof numeroRandomConVirgolaTraZeroEDieci);
const numeroRandomConVirgolaTraUnoEDieci = numeroRandomConVirgolaTraZeroEDieci + 1;
console.log('numeroRandomConVirgolaTraUnoEDieci', numeroRandomConVirgolaTraUnoEDieci, typeof numeroRandomConVirgolaTraUnoEDieci);
const numeroRandomInteroTraUnoEDieci = Math.floor(numeroRandomConVirgolaTraUnoEDieci);
console.log('numeroRandomInteroTraUnoEDieci', numeroRandomInteroTraUnoEDieci, typeof numeroRandomInteroTraUnoEDieci);

const max = 20;
const min = 10;
const numeroCasualeInteroTraMinEMax = Math.floor( Math.random() * (max - min + 1) ) + min;
console.log('numeroCasualeInteroTraMinEMax', numeroCasualeInteroTraMinEMax, typeof numeroCasualeInteroTraMinEMax);