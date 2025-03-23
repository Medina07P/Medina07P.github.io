onload = () =>{
    document.body.classList.remove("container");
};

var audio = document.getElementById("audio");
var playButton = document.getElementById("playButton");

playButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play().catch(error => console.log("Error al reproducir:", error));
    } else {
        audio.pause();
    }
});
