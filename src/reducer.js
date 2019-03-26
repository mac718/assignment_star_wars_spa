import * as Actions from './actions';

const initialState = {
  results: [],
  isFetching: false,
  error: null,
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
        isFetching: false,
      }
    case Actions.GET_SWAPI_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default: 
      return state
  }
}