import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  galleryContainer: document.querySelector(".gallery"),
  body: document.querySelector("body"),
};
// function of create and rendering gallery markup
createGalleryMarkup(galleryItems);
function createGalleryMarkup(images) {
  const galleryMarkup = images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
            </div>`;
    })
    .join("");
  refs.galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
}
// function of delegation and getting the big image.
refs.galleryContainer.addEventListener("click", clickOnImg);
function clickOnImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const origImgUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${origImgUrl}">
    `);
  instance.show();
  closeOnEscape(instance);
}
// function of close modal on escape
function closeOnEscape(instance) {
  const instanceVisible = basicLightbox.visible();

  if (instanceVisible) {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    });
  }
}
