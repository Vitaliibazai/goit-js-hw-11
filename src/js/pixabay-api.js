import axios from 'axios';

const API_KEY = '51715222-245823a157b91ecf18a5e059a';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1, perPage = 40) {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: perPage,
      },
    });

    return {
      hits: data.hits,
      totalHits: data.totalHits,
    };
  } catch (error) {
    console.error('Помилка при завантаженні зображень:', error);
    throw error;
  }
}
