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
document.addEventListener('keydown', changeBackground);


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