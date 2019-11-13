var oak = document.getElementById('persona');
var elm = new Audio('song.mp3');

function playOakAudio() {
    oak.play();
}

function playElmAudio() {
    elm.play();
}

var Element = {
    left: function() {
        setTimeout(function() {
            alert('You have chosen Goro Akechi');
            location.replace("left.html");
        }, 4000);

        playOakAudio();

    },
    right: function() {
        setTimeout(function() {
            alert('You have chosen Ren Amamiya (a.k.a. the Joker)');
            location.replace("right.html");
        }, 4000);

        playOakAudio();
    },
    removeEl: function() {
        var element = document.getElementById('jokerLetter');
        element.parentNode.removeChild(element);
    },
    sLetter: function() {
        playElmAudio();

        document.getElementById('jokerLetter').insertAdjacentHTML("beforebegin", "<p id='joker'> Chrisalyn, <br> <br> &nbsp&nbsp&nbsp&nbsp This is it, I should, umm, wish you happy birthday, I guess. Hmm, this doesn’t feel right. Maybe I’ll try: Congrats on leveling up? Hmm, no that’s worse. Oh, forget it, below is something I thought you’d like – it’s a <a href='https://www.youtube.com/watch?v=67xaZRZZ568' target='_blank'>video</a> and that’s it. Take this and have a good birthday Chrisalyn! <br><br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp At Your Side, <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Ren Amamiya </p>");
        Element.removeEl();

    }
}