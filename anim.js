var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "I just can't get you out of my head", time: 15 },
  { text: "Girl, your loving is all I think about", time: 19 },
  { text: "I just can't get you out of my head", time: 24 },
  { text: "Girl, it's more than I dare to think about", time: 28 },
  { text: "I just can't get you out of my head", time: 50 },
  { text: "Girl, your loving is all I think about", time: 55 },
  { text: "I just can't get you out of my head", time: 59 },
  { text: "Girl, it's more than I dare to think about", time: 64 },
  { text: "Every night and every day", time: 69 },
  { text: "Just to be there in your arms", time: 78 },
  { text: "Won't you stay?", time: 87 },
  { text: "Won't you lay?", time: 95 },
  { text: "I just can't get you out of my head", time: 121 },
  { text: "Girl, your loving is all I think about", time: 125 },
  { text: "I just can't get you out of my head", time: 130 },
  { text: "Girl, it's more than I dare to think about", time: 134 },
  { text: "There's a dark secret in me", time: 139 },
  { text: "Don't leave me locked in your heart", time: 148 },
  { text: "Set me free", time: 156 },
  { text: "Feel the need in me", time: 165 },
  { text: "I love you too much darling", time: 192 },
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Iniciar la sincronización de letras cuando el audio comience a reproducirse
audio.addEventListener("play", () => {
  setInterval(updateLyrics, 1000);
});

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);
