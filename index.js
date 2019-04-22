
newQuote();
let quote = document.querySelector("#text")
let pisac = document.querySelector("#author")
let responz
let pisar
let link

function newQuote() {
    var url = "https://randomquoteapi.glitch.me/time?amount=5"
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {

            responz = response.quotes[0].quote
            quote.innerText = responz;
            pisar = response.quotes[0].author
            pisac.innerText = pisar;

        })
}

function shareQuote() {
    link = window.open(`https://twitter.com/intent/tweet?text=${responz} ${pisar}`, "_blank");
    link.focus()





}