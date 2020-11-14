import refs from '../modules/refs';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error, success } from '@pnotify/core';
import imageCard from '../templates/image-card.hbs';
import axios from 'axios';

const API_KEY = '19013681-b3e57e495a7f99e090e3c058f';

axios.defaults.baseURL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

export default class {
  constructor() {
    this.key = API_KEY;
    this.pageNumber = 1;
  }

  clearGallery() {
    refs.gallery.innerHTML = '';
  }

  resetPageNumber() {
    this.pageNumber = 1;
  }

  incrementPageNumber() {
    this.pageNumber += 1;
  }

  onSearchFormSubmit(event) {
    event.preventDefault();
    this.clearGallery();
    this.resetPageNumber();

    const images = this.getData();

    images
      .then(({ data: { hits } }) => {
        if (hits.length === 0) {
          this.showError('There are no images for your request :(');
          return;
        }

        if (!refs.searchInput.value) {
          this.showError("You haven't typed anything!");
          return;
        }

        this.updateMarkup(hits);
        this.showSuccess('So here are some nice images for you! :)');

        const observer = new IntersectionObserver(this.loadMore.bind(this));
        observer.observe(refs.observedBlock);
      })
      .catch(err => {
        this.showError(err);
      });
  }

  loadMore() {
    this.incrementPageNumber();
    const images = this.getData();

    images
      .then(({ data: { hits } }) => {
        this.updateMarkup(hits);
      })
      .catch(err => {
        this.showError(err);
      });
  }

  updateMarkup(items) {
    const markup = imageCard(items);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
  }

  showError(message) {
    error({
      text: message,
      width: '300px',
      delay: 1500,
    });
  }

  showSuccess(message) {
    success({
      text: message,
      width: '300px',
      delay: 1500,
    });
  }

  getData() {
    return axios.get(
      `&q=${refs.searchInput.value}&page=${this.pageNumber}&per_page=12&key=${this.key}`,
    );
  }
}