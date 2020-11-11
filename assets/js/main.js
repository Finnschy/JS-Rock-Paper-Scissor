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


// let radios = document.querySelectorAll("[type=radio]")
// for (let i = 0; i < radios.length; i++) {
//     console.log(radios[i].value);
//     }

/* radio buttons: when checked = true dann aktion */


//--- Ab hier wirds ernst!!! ------------------------------------------------

//--- Alle wichtigen Dinge aus dem HTML Dokument holen:
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")
let result = document.getElementById("result")
let userCount = document.getElementById("userCount")
let compCount = document.getElementById("compCount")
let icons = document.querySelectorAll("img")
let userCounter = 0
let compCounter = 0

//------funktion für den zufallsgenerator
// function randomizer() {
//     let choices = ['rock', 'paper', 'scissors'];
//     let randomNumber = Math.floor(Math.random() * 3);
//     return choices[randomNumber];
//   }
//   console.log(randomizer());

//------obige funktion mal als arrowfunktion
const randomizer2 = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//---------------------------------------

//------funktion für icon click
rock.addEventListener("click", event => {
    let compChoice = randomizer2()
    switch (compChoice) {
        case "rock":
            console.log("rock");
            result.innerHTML = `${rock.id}(User) can't beat ${compChoice}(Comp). Draw! :|`
            rock.classList.add("draw")
            setTimeout(() => rock.classList.remove('draw'), 700)
            break

        case "scissors":
            console.log("scissors");
            result.innerHTML = `${rock.id}(User) beats ${compChoice}(Comp). Win! :)`
            userCounter++
            userCount.innerHTML = userCounter
            rock.classList.add("win")
            setTimeout(() => rock.classList.remove('win'), 700)
            break

        case "paper":
            console.log("paper");
            result.innerHTML = `${rock.id}(User) gets beaten by ${compChoice}(Comp). Lose! :(`
            compCounter++
            compCount.innerHTML = compCounter
            rock.classList.add("lose")
            setTimeout(() => rock.classList.remove('lose'), 700)
            break
    }
})

paper.addEventListener("click", event => {
    let compChoice = randomizer2()
    switch (compChoice) {
        case "rock":
            result.innerHTML = `${paper.id}(User) beats ${compChoice}(Comp). Win! :)`
            userCounter++
            userCount.innerHTML = userCounter
            paper.classList.add("win")
            setTimeout(() => paper.classList.remove('win'), 700)
            break

        case "scissors":
            result.innerHTML = `${paper.id}(User) gets beaten by ${compChoice}(Comp). Lose! :(`
            compCounter++
            compCount.innerHTML = compCounter
            paper.classList.add("lose")
            setTimeout(() => paper.classList.remove('lose'), 700)
            break

        case "paper":
            result.innerHTML = `${paper.id}(User) can't beat ${compChoice}(Comp). Draw! :|`
            paper.classList.add("draw")
            setTimeout(() => paper.classList.remove('draw'), 700)
            break
    }
})

scissor.addEventListener("click", event => {
    let compChoice = randomizer2()
    switch (compChoice) {
        case "rock":
            result.innerHTML = `${scissor.id}(User) gets beaten by ${compChoice}(Comp). Lose! :(`
            compCounter++
            compCount.innerHTML = compCounter
            scissor.classList.add("lose")
            setTimeout(() => scissor.classList.remove('lose'), 700)
            break

        case "scissors":
            result.innerHTML = `${scissor.id}(User) can't beat ${compChoice}(Comp). Draw! :|`
            scissor.classList.add("draw")
            setTimeout(() => scissor.classList.remove('draw'), 700)
            break

        case "paper":
            result.innerHTML = `${scissor.id}(User) beats ${compChoice}(Comp). Win! :)`
            userCounter++
            userCount.innerHTML = userCounter
            scissor.classList.add("win")
            setTimeout(() => scissor.classList.remove('win'), 700)
            break
    }
})
//---------------------------------------
