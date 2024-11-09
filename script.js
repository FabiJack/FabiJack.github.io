function openGallery() {
    window.location.href = "gallery.html";
}

function openIndex() {
    window.location.href = "index.html";
}

// Para posicionar los corazones aleatoriamente
document.querySelectorAll('.heart').forEach(heart => {
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
});

// Verificar si el audio debe estar reproduciéndose
const audio = document.getElementById('background-audio');
audio.volume = 1; // Ajusta el volumen si es necesario

// Si está definido en localStorage, ajusta la reproducción
if (localStorage.getItem('isPlaying') === 'true') {
    audio.play();
}

// Guardar el estado de reproducción al navegar a la galería
function openGallery() {
    localStorage.setItem('isPlaying', !audio.paused);
    window.location.href = "gallery.html";
}

// Escuchar el evento para cambiar el estado
audio.onpause = () => localStorage.setItem('isPlaying', 'false');
audio.onplay = () => localStorage.setItem('isPlaying', 'true');

// Verifica si el estado de reproducción está guardado en localStorage
const isPlaying = localStorage.getItem('isPlaying');
console.log(isPlaying); // Esto mostrará el valor en la consola

if (isPlaying === 'true') {
    // Si el valor es 'true', inicia la reproducción
    audio.play();
} else {
    // Si no está definido o es 'false', no inicia la reproducción automáticamente
    audio.pause();
}

