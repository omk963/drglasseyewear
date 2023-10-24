var prevScrollpos = window.scrollY;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if(prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("top").style.top = '0';
    } else {
        document.getElementsByClassName("top").style.top = '-70px';
    }
    prevScrollpos = currentScrollPos;
}


var quotes = ['hi', 'bye', 'lol', 'hello', 'world']
function randomQuotes() {
    var idx = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[idx];}