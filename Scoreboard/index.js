let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')
let currentHomeScore = 0
let currentGuestScore = 0

function leader() {
    if (currentHomeScore > currentGuestScore) {
        homeScore.classList.add("score-leader")
        guestScore.classList.remove("score-leader")
    } else if (currentHomeScore < currentGuestScore) {
        homeScore.classList.remove("score-leader")
        guestScore.classList.add("score-leader")
    } else {
        homeScore.classList.remove("score-leader")
        guestScore.classList.remove("score-leader")
    }
}


function add1Home(){
    currentHomeScore += 1
    homeScore.textContent = currentHomeScore
    leader()
}
function add2Home(){
    currentHomeScore += 2
    homeScore.textContent = currentHomeScore
    leader()
}
function add3Home(){
    currentHomeScore += 3
    homeScore.textContent = currentHomeScore
    leader()
}

function add1Guest(){
    currentGuestScore += 1
    guestScore.textContent = currentGuestScore
    leader()
}
function add2Guest(){
    currentGuestScore += 2
    guestScore.textContent = currentGuestScore
    leader()
}
function add3Guest(){
    currentGuestScore += 3
    guestScore.textContent = currentGuestScore
    leader()
}

function reset(){
    currentGuestScore *= 0
    guestScore.textContent = currentGuestScore
    currentHomeScore *= 0
    homeScore.textContent = currentHomeScore
    leader()
}


