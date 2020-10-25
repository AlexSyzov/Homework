import './styles.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import MarkupChange from './modules/markupChange';
import debounce from 'lodash.debounce';
import fetchCountries from './modules/fetchCountries';
import refs from './modules/refs';

refs.countryInput.addEventListener('input', debounce(onCountryInput, 500));

function onCountryInput(event) {
  const markupChange = new MarkupChange(event.target.value);

  markupChange.clearContainer();
  markupChange.removeStyles();
  
  if (markupChange.isInputEmpty()) {
    return;
  }

  fetchCountries(markupChange.name).then(
    markupChange.onCountriesAmount.bind(markupChange),
  );
}