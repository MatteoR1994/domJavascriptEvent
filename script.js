/**** TEORIA ****/

// - onclick permette di chiamare una funzione alla volta. Se viene settato più volte la funzione attiva sarà l'ultima.
// - addEventListener permette di chiamare più funzioni alla volta. Se viene settato più volte, tutte le funzioni saranno attive.
// di solito il default è addEventListener.

//----------------------------------------------------------------------------------//

const button3 = document.getElementById('button3');
button3.onclick = () => buttonClick('button 3');
//button3.onclick = countClick; // Questa sovrascrive quella di prima


const button4 = document.getElementById('button4');
button4.addEventListener('mousedown', buttonClick);


const parPippo = document.getElementById('par-pippo');
parPippo.addEventListener('click', countClick);


const link = document.getElementById('link');
link.addEventListener('click', countClick);


//document.addEventListener('keydown', buttonClick); // prendo tutti i tasti cliccati.
// document.addEventListener('keydown', changeBackground);
// document.addEventListener('keydown', onKeyDown);
document.addEventListener('keydown', realTimeSearch);


function buttonClick(string) {
    console.log(string);
}

let counter = 0;

function countClick(event) {
    counter++;
    console.log(counter);
    // if (counter === 7) {
    //     button4.removeEventListener('click', countClick);
    // }
    event.stopPropagation(); // Sto dicendo all'evento di smettere di propagarsi dopo essere stato eseguito una volta.
    event.preventDefault(); // Sto dicendo all'evento di non comportarsi come il suo default, ma solo come dico io.
}

function changeBackground(event) {
    //console.log(event);
    let number = parseInt(event.key);
    if (event.ctrlKey && !isNaN(number)) {
        event.preventDefault();
        document.body.style.backgroundColor = '#' + number + number + number + number + number + number;
    }
}

//----------------------------------------------------------------------------------//


// setTimeout(() => { // quello dentro viene eseguito dopo il tempo definito, una volta sola.
//    console.log('pippo'); 
// }, 10000); // il tempo è sempre in millisecondi.


// let intervalCounter = 0;
// const interval = setInterval(() => { // quello dentro viene eseguito dopo il tempo definito, ripetuto.
//     console.log(intervalCounter);
//     if (intervalCounter === 10) {
//         clearInterval(interval); // stoppo l'interval.
//     }
//     intervalCounter++;
// }, 1000);


const div = document.getElementById('mouse-div-2');

// div.addEventListener('mouseenter', onMouseEnter);
// div.addEventListener('mouseleave', onMouseLeave);

div.addEventListener('mousemove', onMouseOver);

function onMouseEnter() {
    console.log('sono entrato');
}

function onMouseLeave() {
    console.log('sono uscito');
}

function onMouseOver() {
    console.log('sono sopra');
}


let selectedKey = '';
function onKeyDown(event) {
    if (event.key !== selectedKey) {
        console.log('tasto premuto ' + event.key);
        selectedKey = event.key;
    }
}


let searchTimeout;
function realTimeSearch(event) {
    if (searchTimeout) {
        clearTimeout(searchTimeout);
    }
    searchTimeout = setTimeout(() => {
        console.log('sto cercando');
    }, 1000);
}