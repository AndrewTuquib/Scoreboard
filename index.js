let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')
let currentHomeScore = 0
let currentGuestScore = 0
let add1Home = document.getElementById('add1home-btn')
let add2Home = document.getElementById('add2home-btn')
let add3Home = document.getElementById('add3home-btn')
let add1Guest = document.getElementById('add1guest-btn')
let add2Guest = document.getElementById('add2guest-btn')
let add3Guest = document.getElementById('add3guest-btn')
let reset = document.getElementById('reset-btn')


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

function updateGuestScore() {
    guestScore.textContent = currentGuestScore
}
function updateHomeScore() {
    homeScore.textContent = currentHomeScore
}


add1Home.addEventListener('click', function() {
    currentHomeScore += 1
    updateHomeScore()
    leader()
})
add2Home.addEventListener('click', function() {
    currentHomeScore += 2
    updateHomeScore()
    leader()
})
add3Home.addEventListener('click', function() {
    currentHomeScore += 3
    updateHomeScore()
    leader()
})

add1Guest.addEventListener('click', function(){
    currentGuestScore += 1
    updateGuestScore()
    leader()
})
add2Guest.addEventListener('click', function(){
    currentGuestScore += 2
    updateGuestScore()
    leader()
})
add3Guest.addEventListener('click', function(){
    currentGuestScore += 3
    updateGuestScore()
    leader()
})

reset.addEventListener('click', function(){
    currentGuestScore *= 0
    updateGuestScore()
    currentHomeScore *= 0
    updateHomeScore()
    leader()
})


