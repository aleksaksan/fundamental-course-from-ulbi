import axios from 'axios';

export default class PostService {
  static async getAll() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response.data;
  };

  static async getPagesResponse(limit = 10, page = 1) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
      params: {
        _limit: limit,
        _page: page,
      }
    });
      return response;
  };
};
