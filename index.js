import './styles.css';
import refs from './modules/refs';
import ApiService from './modules/apiService';
import * as basicLightbox from 'basiclightbox';

let lightbox;
const imageSearch = new ApiService();

refs.searchForm.addEventListener(
  'submit',
  imageSearch.onSearchFormSubmit.bind(imageSearch),
);
refs.gallery.addEventListener('click', onImageClick);

function onImageClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  refs.gallery.removeEventListener('click', onImageClick);

  lightbox = basicLightbox.create(`
    <img src=${event.target.dataset.large} class="lightbox__image">
  `);

  lightbox.show();

  const container = document.querySelector('.basicLightbox');
  container.addEventListener('click', onLightboxClick);
}

function onLightboxClick(event) {
  if (event.target === event.currentTarget || event.target.nodeName === 'IMG') {
    lightbox.close();
    refs.gallery.addEventListener('click', onImageClick);
  }

  const container = document.querySelector('.basicLightbox');
  container.removeEventListener('click', onLightboxClick);
}