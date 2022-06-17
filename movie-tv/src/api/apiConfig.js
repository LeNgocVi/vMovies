const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "1cd7d832933a3f8cb0c956ac70964e5f",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  w200Image: (imgPath) => `https://image.tmdb.org/t/p/w200/${imgPath}`,
};

export default apiConfig;
