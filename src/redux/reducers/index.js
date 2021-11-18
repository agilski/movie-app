import { GET_MOVIE_LIST } from "../action-types";

export default function(
  state = {
    isLoading: false,
    isEmpty: false,
    errorMsg: null, 
    data: []
  }, action) {
  const existingData = state.data
  switch (action.type) {
    case GET_MOVIE_LIST.pending:
      return { 
        isLoading: true,
        isEmpty: false,
        errorMsg: null,
        data: existingData,
      };
    case GET_MOVIE_LIST.rejected:
      return { 
        isLoading: false,
        isEmpty: action.error === 'Movie not found!' ? true : false,
        errorMsg: action.error,
        data: existingData,
      };
    case GET_MOVIE_LIST.fulfilled:
      return { 
        isLoading: false,
        isEmpty: false,
        errorMsg: null,
        data: existingData ? existingData.concat(action.payload) : action.payload,
      };
    case GET_MOVIE_LIST.reset:
      return { 
        isLoading: true,
        isEmpty: false,
        errorMsg: null,
        data: [],
      };
    default:
      return state;
  }
}