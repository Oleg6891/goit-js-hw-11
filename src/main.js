
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

const form = document.querySelector('.form');
const input = form.elements['search-text'];


form.addEventListener('submit', async event => {
    event.preventDefault();

    const query = input.value.trim();

    if (query === '') {
        iziToast.warning({
            title: 'Warning',
            message: 'Введіть слово для пошуку!',
            position: 'topRight',
            timeout: 2000,
        });
        return;
    }

    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(query);

        if (data.hits.length === 0) {
            iziToast.info({
                title: 'No Results',
                message:
                    'Sorry, there are no images matching your search query. Please try again!',
                position: 'center',
                timeout: 2000,
            });

            return;
        }
        createGallery(data.hits);

    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: error.message,
            position: 'topRight',
        });
    } finally {
        hideLoader();
    }
});

