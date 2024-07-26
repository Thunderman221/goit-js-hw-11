import { fetchImages } from './js/pixabay-api';
import { renderImages, showNoResultsMessage } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#search-form');
  const input = document.querySelector('#search-input');
  const gallery = document.querySelector('.gallery');
  const loader = document.querySelector('.loader');

  if (!form || !input || !gallery) {
    console.error('Form or input element not found');
    return;
  }

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'title',
    captionDelay: 250,
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const query = input.value.trim();

    if (query === '') {
      iziToast.error({
        title: 'Error',
        message: "Search query can't be empty!",
      });
      return;
    }

    loader.style.display = 'block';

    try {
      const images = await fetchImages(query);

      gallery.innerHTML = '';

      if (images.length === 0) {
        showNoResultsMessage();
      } else {
        renderImages(images);
        lightbox.refresh();

        await new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, 100);
        });
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
      });
    } finally {
      loader.style.display = 'none';
    }
  });
});
