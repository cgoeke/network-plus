export const FETCH_CARDS_REQUEST = "FETCH_CARDS_REQUEST";
export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS";
export const FETCH_CARDS_ERROR = "FETCH_CARDS_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const fetchCards = () => dispatch => {
  dispatch({ type: FETCH_CARDS_REQUEST });
  
  fetch("/api/ports")
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_CARDS_SUCCESS,
      data
    }))
    .catch(error => dispatch({
      type: FETCH_CARDS_ERROR,
      error: {
        name: error.name,
        message: error.message
      }
    }));
};

export const clearError = () => ({
  type: CLEAR_ERROR
});
