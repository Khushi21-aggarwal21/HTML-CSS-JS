let player = {
    name:"Per",
    chips: 250
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getrandom(){
    let r = Math.floor(Math.random()*13)+1
    if(r>10){
        return 10
    }
    else if(r===1){
        return 11
    }
    else{
        return r
    }
}

function startgame(){
    isAlive = true
    let fc = getrandom()
    let sc = getrandom()
    cards = [fc,sc]
    sum = fc + sc
    rendergame()
}

function rendergame() {
    cardsEl.textContent = "Cards: " 
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card??"
    } else if (sum === 21) {
        message = "You've got Blackjack!!"
        hasBlackJack = true
    } else {
        message = "You have lost the game!!"
        isAlive = false
    }
    messageEl.textContent = message
}
 function newcard(){
    if(isAlive === true && hasBlackJack === false){
    let card = getrandom()
    sum += card
    cards.push(card)
    console.log(cards)
    rendergame()
    }

 }