let home = 0
let guest = 0
let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")

function add1Home() {
    home += 1
    homeEl.textContent = home
}
function add2Home() {
    home += 2
    homeEl.textContent = home
}
function add3Home() {
    home += 3
    homeEl.textContent = home
}
function add1Guest() {
    guest += 1
    guestEl.textContent = guest
}
function add2Guest() {
    guest += 2
    guestEl.textContent = guest
}
function add3Guest() {
    guest += 3
    guestEl.textContent = guest
}
function newGame() {
    home = 0
    guest = 0
    homeEl.textContent = home
    guestEl.textContent = guest
}