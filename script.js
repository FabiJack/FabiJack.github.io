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

