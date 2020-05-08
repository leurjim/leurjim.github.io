// Activa la galería de imágenes.
// La tarea principal para adjuntar un detector de eventos a cada imagen en la galería
// y responda adecuadamente al hacer click.
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage  = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail) {
    // Precargar imágenes grandes.
    let newImageScr  = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImageScr;

    thumbnail.addEventListener("click", function() {
      // Establecer imagen clicada como imagen principal.
      mainImage.setAttribute("src", newImageScr);
      mainImage.setAttribute("alt", thumbnail.alt);

      // Cambiar qué imagen es current.
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");

      // Actualiza la información de la imagen.
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");

      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}
