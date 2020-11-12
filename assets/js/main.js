// Schere Stein Papier

//--- Alle wichtigen Dinge aus dem HTML Dokument holen:
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")
let result = document.getElementById("result")
result.innerHTML = ""
let roundsCounter = document.getElementById("roundsCounter")
let userCount = document.getElementById("userCount")
let compCount = document.getElementById("compCount")
let icons = document.querySelectorAll("img")
let userCounter = 0
let compCounter = 0

//--- Funktion um die Spielrunden zu bestimmen
function checkRounds() {
    let five = document.getElementById("five")
    let ten = document.getElementById("ten")
    let fifteen = document.getElementById("fifteen")
    let twenty = document.getElementById("twenty")
    let rounds = 0
    if (five.checked) {
        rounds = 5
    } else if (ten.checked) {
        rounds = 10 
    } else if (fifteen.checked) {
        rounds = 15
    } else if (twenty.checked) {
        rounds = 20
    }
    return rounds
}
checkRounds()


//--- Funktion für den Zufallsgenerator
const randomizer2 = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
//---------------------------------------

//--- Funktion für den Klick aufs Icon bzw. dem eigentlichen Spiel
rock.addEventListener("click", event => {
    countingRounds()
    let rounds = checkRounds()
    clickCount++
    roundsCounter.innerHTML = `${clickCount}/${rounds}`
    let compChoice = randomizer2()
    switch (compChoice) {
        case "rock":
            // console.log("rock");
            result.innerHTML = `${rock.id}(User) can't beat ${compChoice}(Comp). Draw! :|`
            rock.classList.add("draw")
            setTimeout(() => rock.classList.remove('draw'), 700)
            break

        case "scissors":
            // console.log("scissors");
            result.innerHTML = `${rock.id}(User) beats ${compChoice}(Comp). Win! :)`
            userCounter++
            userCount.innerHTML = userCounter
            rock.classList.add("win")
            setTimeout(() => rock.classList.remove('win'), 700)
            break

        case "paper":
            // console.log("paper");
            result.innerHTML = `${rock.id}(User) gets beaten by ${compChoice}(Comp). Lose! :(`
            compCounter++
            compCount.innerHTML = compCounter
            rock.classList.add("lose")
            setTimeout(() => rock.classList.remove('lose'), 700)
            break
    }
})

paper.addEventListener("click", event => {
    countingRounds()
    let rounds = checkRounds()
    clickCount++
    roundsCounter.innerHTML = `${clickCount}/${rounds}`
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
    countingRounds()
    let rounds = checkRounds()
    clickCount++
    roundsCounter.innerHTML = `${clickCount}/${rounds}`
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
result.innerHTML = ""
//--- Funktion zum zählen der Runde, allerdings funktioniert gerade result.innerHTML nicht....
let clickCount = 0
function countingRounds() {
    let rounds = checkRounds()
    if ((clickCount + 1) === rounds) {
        console.log("STOP");
        result.innerText = "Hallo"
    } 
}
countingRounds()


//--- restart button
document.getElementById("restart").addEventListener("click", () => {
    location.reload();
})
//---------------------------------------


// möglichkeit die addeventlisteners zusammen zu fassen? 
/*
idee: alle in einer function zusammenfassen, in der dann die eigentliche funktion aufgerufen wird. dann: if else

if ()


*/