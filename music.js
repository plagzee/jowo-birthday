function playSound(aud) {
    let audio = new Audio(aud);
    audio.loop = true;
    audio.play();
}


var butn = document.querySelector('.btn');
var parag = document.querySelector('.para');

const startit = () => {
    setTimeout(function () {
        console.log("start");
        confetti.start();
    }, 1000);
};

const stopit = () => {
    setTimeout(function () {
        console.log("stop");
        confetti.stop();
    }, 6000);
};


butn.addEventListener('click', function (e) {

    e.preventDefault();

    aud = document.getElementById('my-audio');
    aud.muted = false;

    parag.classList.remove('hide');
    butn.classList.add('hide');
    confetti();
})

