import countryList from '../templates/country_list.hbs';
import countryInfo from '../templates/country_info.hbs';
import { error } from '@pnotify/core';
import refs from './refs';

export default class MarkupChange {
  constructor(searchQuery) {
    this.name = searchQuery;
  }

  clearContainer() {
    refs.container.innerHTML = '';
  }

  isInputEmpty() {
    if (this.name === '') {
      return true;
    }

    return false;
  }

  createList(data) {
    const markup = countryList(data);
    refs.container.insertAdjacentHTML('beforeend', markup);
  }

  showCountryInfo(data) {
    const markup = countryInfo(data);
    refs.container.insertAdjacentHTML('beforeend', markup);
  }

  addStyles() {
    refs.container.classList.add('countries-container--active');
    refs.countryInput.classList.add('country_input--no-box-shadow');
  }

  removeStyles() {
    refs.container.classList.remove('countries-container--active');
    refs.countryInput.classList.remove('country_input--no-box-shadow');
  }

  onCountriesAmount(array) {
    if (array.length > 10) {
      this.showError();
      return;
    }

    if (array.length >= 2 && array.length <= 10) {
      this.createList(array);
      this.addStyles();
      return;
    }

    if (array.length === 1) {
      this.showCountryInfo(array);
      this.addStyles();
      return;
    }
  }

  showError() {
    error({
      text: 'Too many matches found. Please enter a more specific query!',
      width: '300px',
      delay: 1500,
    });
  }
}