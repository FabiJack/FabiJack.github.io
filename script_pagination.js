let currentPage = 1;
const itemsPerPage = 10;
const galleryItems = document.querySelectorAll('.gallery-item');

function showPage(page) {
    // Calcula el rango de imágenes a mostrar
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    // Oculta todas las imágenes
    galleryItems.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.style.display = 'block'; // Muestra las imágenes correspondientes
        } else {
            item.style.display = 'none'; // Oculta las imágenes que no están en el rango
        }
    });

    // Actualiza los botones de paginación
    document.getElementById('prevPage').disabled = page === 1;
    document.getElementById('nextPage').disabled = endIndex >= galleryItems.length;
}

function changePage(direction) {
    // Cambia la página actual
    currentPage += direction;
    showPage(currentPage);
}

// Inicializa la galería mostrando la primera página
showPage(currentPage);
