const homeScore = document.getElementById('home-score')
const guestScore = document.getElementById('guest-score')
let currentHomeScore = 0
let currentGuestScore = 0
const add1Home = document.getElementById('add1home-btn')
const add2Home = document.getElementById('add2home-btn')
const add3Home = document.getElementById('add3home-btn')
const add1Guest = document.getElementById('add1guest-btn')
const add2Guest = document.getElementById('add2guest-btn')
const add3Guest = document.getElementById('add3guest-btn')
const reset = document.getElementById('reset-btn')


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



function updateScore(score, currentScore) {
    score.textContent = currentScore
    leader()
}

function addHomeScore(increment){
    currentHomeScore += increment
}
function addGuestScore(increment){
    currentGuestScore += increment
}

add1Home.addEventListener('click', function() {
    addHomeScore(1)
    updateScore(homeScore, currentHomeScore)
})
add2Home.addEventListener('click', function() {
    addHomeScore(2)
    updateScore(homeScore, currentHomeScore)
})
add3Home.addEventListener('click', function() {
    addHomeScore(3)
    updateScore(homeScore, currentHomeScore)
})

add1Guest.addEventListener('click', function(){
    addGuestScore(1)
    updateScore(guestScore, currentGuestScore)
})
add2Guest.addEventListener('click', function(){
    addGuestScore(2)
    updateScore(guestScore, currentGuestScore)
})
add3Guest.addEventListener('click', function(){
    addGuestScore(3)
    updateScore(guestScore, currentGuestScore)
})

reset.addEventListener('click', function(){
    currentGuestScore *= 0
    currentHomeScore *= 0
    updateScore(guestScore, currentGuestScore)
    updateScore(homeScore, currentHomeScore)
})


