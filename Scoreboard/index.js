let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')
let currentHomeScore = 0
let currentGuestScore = 0


function add1Home(){
    currentHomeScore += 1
    homeScore.textContent = currentHomeScore
}
function add2Home(){
    currentHomeScore += 2
    homeScore.textContent = currentHomeScore
}
function add3Home(){
    currentHomeScore += 3
    homeScore.textContent = currentHomeScore
}

function add1Guest(){
    currentGuestScore += 1
    guestScore.textContent = currentGuestScore
}
function add2Guest(){
    currentGuestScore += 2
    guestScore.textContent = currentGuestScore
}
function add3Guest(){
    currentGuestScore += 3
    guestScore.textContent = currentGuestScore
}

function reset(){
    currentGuestScore *= 0
    guestScore.textContent = currentGuestScore
    currentHomeScore *= 0
    homeScore.textContent = currentHomeScore
}