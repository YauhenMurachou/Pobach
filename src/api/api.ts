import axios from 'axios';

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': 'dfa9082f-57f9-4359-8c49-339d0a7e601b3' },
});

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
