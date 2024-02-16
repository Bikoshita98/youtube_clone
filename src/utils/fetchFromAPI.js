import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
    maxResults : '50'
    },
    headers: {
      'X-RapidAPI-Key': 'b1884b5f27msh5737b0f8e9df43ep1c3862jsn7f780790685c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);

    return data;
  }

