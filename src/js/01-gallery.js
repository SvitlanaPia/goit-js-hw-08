import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createPhotoElements(photos) {
  return photos
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
    </a>`;
    })
    .join('');
}

const createdPhotos = createPhotoElements(galleryItems);
galleryEl.innerHTML = createdPhotos;

const originalPhoto = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});

galleryEl.addEventListener('click', onGalleryItemElClick);

function onGalleryItemElClick(event) {
  event.preventDefault();

  const { target } = event;

  if (target.nodeName !== 'IMG') {
    return;
  }
}
