import { 
  FETCH_CARDS_REQUEST, 
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_ERROR,
  CLEAR_ERROR,
} from '../actions/fetchActions';
import {
  PREV_CARD,
  NEXT_CARD,
  SELECT_CARD,
  CLEAR_CARD 
} from '../actions/cardActions';

const initialState = {
  data: [],
  currentIndex: 0,
  isLoading: false,
  error: null
};

export const cardReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_CARDS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };
    case FETCH_CARDS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    case PREV_CARD:
      return {
        ...state,
        currentIndex: state.currentIndex > 0 ? state.currentIndex - 1 : 0
      };
    case NEXT_CARD:
      return {
        ...state,
        currentIndex: state.currentIndex < state.data.length - 1 ? state.currentIndex + 1 : 0
      };
    case SELECT_CARD:
      return {
        ...state,
        currentIndex: action.index
      };
    case CLEAR_CARD:
      return {
        ...state,
        currentIndex: 0
      };
    default:
      return state;
  }
};