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

function openModal(imgElement) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}


