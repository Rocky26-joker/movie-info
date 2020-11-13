import {
  REQUEST_MOVIE_PENDING,
  REQUEST_MOVIE_SUCCESS,
  REQUEST_MOVIE_FAILED,
} from "./constants";

export const initialStateHero = {
  isPending: false,
  error: "",
  heroAssets: {
    baseUrl: "https://image.tmdb.org/t/p",
    posterSize: [
      "/w92",
      "/w154",
      "/w185",
      "/w342",
      "/w500",
      "/w780",
      "/original",
    ],
    backdropSize: ["/w300", "/w780", "/w1280", "/original"],
  },
  heroGallery: {},
};

export const movieHero = (state = initialStateHero, action = {}) => {
  switch (action.type) {
    case REQUEST_MOVIE_PENDING:
      return { ...state, isPending: true };
    case REQUEST_MOVIE_SUCCESS:
      return {
        ...state,
        isPending: false,
        heroGallery: action.payload.heroGallery,
      };
    case REQUEST_MOVIE_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
