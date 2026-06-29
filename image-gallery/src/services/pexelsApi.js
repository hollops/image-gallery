const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export const fetchImages = async (query = "nature") => {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=60`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );
  console.log(response);

  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  const data = await response.json();

  return data.photos;
};


