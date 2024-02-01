import axios from "axios"; // Note the corrected quotes around 'axios'

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID aW8B7ZOpSjDueo_BUnaEbMH28qXOwOGgR6kXwK499dQ",
    },
    params: {
      query: term,
    },
  });
  console.log(response);
  return response.data.results;
};

export default searchImages;

// if we dont wait for it by using async and await, it will not wait until the request is made
