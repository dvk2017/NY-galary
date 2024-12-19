import images from './images.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const marcup = images.reduce((html, { preview, original, description }) => {
  return (html += `
        <li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
        `);
}, '');

const marcupGallery = document.querySelector('.gallery');
marcupGallery.insertAdjacentHTML('beforeend', marcup);

new SimpleLightbox('.gallery .gallery-link', {
  captionsData: '<input type="email" name="email" autofocus />', //'alt',
  captionDelay: 250,
  /* options */
});
