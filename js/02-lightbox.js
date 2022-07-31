import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  galleryContainer: document.querySelector(".gallery"),
};
createGalleryMarkup(galleryItems);
// function of create and rendering gallery markup
function createGalleryMarkup(images) {
  const galleryMarkup = images
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>`;
    })
    .join("");
  refs.galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
