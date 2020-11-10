// Schere Stein Papier
/* 
Was soll passieren? Schritt für Schritt.
1. Es wird ausgewählt, wie viele Runden gespielt werden.
Das bedeutet, dass nach 5, 10, 15 oder 20 klicks auf die Icons machen können soll.
wenn 5, 10, 15 oder 20 mal geklickt wurde, dann erscheint die nachricht "The user wins" oder "Comp wins"
2. Man klickt 5, 10, 15 oder 20 mal auf eines der drei Icons und es erscheint die Meldung
    "___(user) beats ___(comp). You win! / You lose!" 
    oder bei Gleichstand
    "It was a draw! You both picked ___"
    ___ steht dabei für das jeweils ausgewählte bzw random generierte Icon
3. Außerdem wird der punkte counter bei der seite hochgezählt, die gewinnt
4. es gibt unten einen restart button, der alles auf null setzt

wenn die eingabe des users === computer randomizer dann DRAW


muss quasi mit eventlistener click die id des icons abgreifen und das mit dem randomizer vergleichen
die anzahl der clicks limitieren indem ich die anzahl der clicks abrufe und sage, dass er bei 5, 10, 15 oder 20 klicks abbrechen bzw die gewinnernachricht anzeigen soll

ich brauche eine funktion mit addeventlistener, click für die icons 
*/

// let radios = document.querySelectorAll("[type=radio]")
// console.log(radios);

// let radioValue = document.querySelector("[type=radio]:checked").value
// console.log(radioValue);


let radios = document.querySelectorAll("[type=radio]")
for (let i = 0; i < radios.length; i++) {
    console.log(radios[i].value);
    }

/* radio buttons: when checked = true dann aktion */ 


//--- Ab hier wirds ernst!!! ------------------------------------------------

let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")
let result = document.getElementById("result")
console.log(rock);

//------funktion für den zufallsgenerator
function randomizer() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }
  console.log(randomizer());
//---------------------------------------


//------funktion für icon click
function iconEventClick() {
    rock.addEventListener("click", () => {
        console.log(rock.id);
        result.innerHTML = rock.id
    })
    
    paper.addEventListener("click", () => {
        console.log(paper.id);
        result.innerHTML = paper.id
    })
    
    scissor.addEventListener("click", () => {
        console.log(scissor.id);
        result.innerHTML = scissor.id
    })
}
iconEventClick()
//---------------------------------------


//------funktion zum vergleich


