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


add1Home.addEventListener('click', function() {
    currentHomeScore += 1
    homeScore.textContent = currentHomeScore
    leader()
})
add2Home.addEventListener('click', function() {
    currentHomeScore += 2
    homeScore.textContent = currentHomeScore
    leader()
})
add3Home.addEventListener('click', function() {
    currentHomeScore += 3
    homeScore.textContent = currentHomeScore
    leader()
})

add1Guest.addEventListener('click', function(){
    currentGuestScore += 1
    guestScore.textContent = currentGuestScore
    leader()
})
add2Guest.addEventListener('click', function(){
    currentGuestScore += 2
    guestScore.textContent = currentGuestScore
    leader()
})
add3Guest.addEventListener('click', function(){
    currentGuestScore += 3
    guestScore.textContent = currentGuestScore
    leader()
})

reset.addEventListener('click', function(){
    currentGuestScore *= 0
    guestScore.textContent = currentGuestScore
    currentHomeScore *= 0
    homeScore.textContent = currentHomeScore
    leader()
})


