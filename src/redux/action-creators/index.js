import MovieService from '../../services/MovieService'
import { GET_MOVIE_LIST } from "../action-types";

export function fetchMovieList(params) {
  return function(dispatch) {
    dispatch({ type: GET_MOVIE_LIST.pending });
    if (!params.nextPage) dispatch({ type: GET_MOVIE_LIST.reset })
    setTimeout(() => {
      return MovieService.getList(params)
      .then((res) => {
        if (res.Error) {
          dispatch({ type: GET_MOVIE_LIST.rejected, error: res.Error })
        } else {
          dispatch({ type: GET_MOVIE_LIST.fulfilled, payload: res.Search })
        }
      })
    }, 2000)
  };
}