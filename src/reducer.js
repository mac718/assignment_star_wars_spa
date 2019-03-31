import * as Actions from './actions';

const initialState = {
  results: [],
  searchResults: [],
  currentResource: {},
  isFetching: false,
  isFetchingResource: false,
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
    case Actions.GET_SWAPI_RESOURCE_REQUEST:
      return {
        ...state,
        isFetchingResource: true,
      }
    case Actions.GET_SWAPI_SUCCESS:
      return {
        ...state,
        results: action.data,
        searchResults: action.data,
        currentPage: 1,
        isFetching: false,
      }
    case Actions.GET_SWAPI_RESOURCE_SUCCESS:
      return {
        ...state,
        currentResource: action.data,
        isFetchingResource: false,
      }
    case Actions.GET_SWAPI_FAILURE:
    case Actions.GET_SWAPI_RESOURCE_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case Actions.ON_PAGE_CLICK:
      return{
        ...state,
        currentPage: action.page
      }
    case Actions.ON_SUBMIT:
      return {
        ...state,
        searchResults: action.searchResults
      }
    default: 
      return state
  }
}