import * as Actions from './actions';

const initialState = {
  results: [],
  isFetching: false,
  error: null,
  currentPage: 1
}

export function swapi(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_SWAPI_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case Actions.GET_SWAPI_SUCCESS:
      return {
        ...state,
        results: action.data,
        currentPage: 1,
        isFetching: false,
      }
    case Actions.GET_SWAPI_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case Actions.ON_PAGE_CLICK:
      return{
        ...state,
        currentPage: action.page
      }
    default: 
      return state
  }
}