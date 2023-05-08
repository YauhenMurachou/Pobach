import axios from 'axios';

export const photosApi = {
  async getPhotos() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/albums/1/photos'
    );
    return response.json();
  },
};

export const photoSagaApi = {
  async getPhotos() {
    const response = await axios.get('https://picsum.photos/v2/list');
    return response.data;
  },
};
