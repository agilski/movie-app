import axios from 'axios';

const apiKey = 'f3205625';

export default {
  getList: async function({ page, searchValue }) {
    try {
      let url;
      if (page != null & page > 1) {
        url = 'http://www.omdbapi.com/?s=' + searchValue + '&page=' + page + '&apikey=' + apiKey;
      } else {
        url = 'http://www.omdbapi.com/?s=' + searchValue + '&apikey=' + apiKey;
      }
      const response = await axios.get(url);
      return response.data;
    } catch(error) {
      throw error;
    }
  }
}