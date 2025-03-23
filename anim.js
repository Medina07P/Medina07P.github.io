// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
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

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);