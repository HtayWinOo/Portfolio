
window.addEventListener('click', function (e) {

    if (e.target.id == 'playAudio') {
        var audio = new Audio('./Css/Damon_Empero_ft_Veronica_-_Vacation_lyrics[ConverteZilla.com].mp3');
        if (audio.paused) {
            audio.play();
            audio.volume = 0.2;
            audio.loop();
        }
        else {
            audio.pause();
        }
    }
})