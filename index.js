const coin = document.querySelector('.coin_display')

function handler() {
    coin.innerHTML = ""
    coin.classList.add('inbetween')
    setTimeout(flipcoin, 1200)
}

function flipcoin() {
    coin.classList.remove('inbetween')
    const a = Math.floor(Math.random() * 10)
    if (a >= 5) {
        coin.innerHTML = "Head"
        coin.classList.remove('coin_display2')
        coin.classList.add('coin_display')
    }
    else {
        coin.innerHTML = "Tail";
        coin.classList.remove('coin_display')
        coin.classList.add('coin_display2')
    }
}