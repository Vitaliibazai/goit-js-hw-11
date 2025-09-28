import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

function showToast(type, title, message) {
  iziToast[type]({
    title,
    message,
    position: 'topRight',
  });
}

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = e.target.elements['search-text'].value.trim();
  if (!query)
    return showToast('warning', 'Warning', 'Please enter a search term!');

  clearGallery();
  showLoader();

  try {
    const { hits } = await getImagesByQuery(query, 1, 40);

    if (!hits.length) {
      return showToast(
        'error',
        'Error',
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }

    createGallery(hits);
  } catch (error) {
    showToast(
      'error',
      'Error',
      'Something went wrong. Please try again later.'
    );
  } finally {
    hideLoader();
  }
});
