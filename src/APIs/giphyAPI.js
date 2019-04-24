import axios from "axios";

const giphyAPI = () => {
  const search = "cat space";
  const key = "P8jSOBEO7BzFdCudvpCKNzqqwIJXNsrY";
  const limit = 15;
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

  // promise オブジェクトが return されるようにする
  return axios.get(url);
};

export default giphyAPI;
