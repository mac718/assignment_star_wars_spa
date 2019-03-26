export const GET_SWAPI_REQUEST = 'GET_SWAPI_REQUEST';
export const GET_SWAPI_SUCCESS = 'GET_SWAPI_SUCCESS';
export const GET_SWAPI_FAILURE = 'GET_SWAPI_FAILURE';

export function getSwapiRequest() {
  return {
    type: GET_SWAPI_REQUEST,
  }
}

export function getSwapiSuccess(data) {
  return {
    type: GET_SWAPI_SUCCESS,
    data,
  }
}

export function getSwapiFailure(error) {
  return {
    type: GET_SWAPI_FAILURE,
    error
  }
}


export function getInitialResults(url, results = []) {
  return dispatch => {
    dispatch(getSwapiRequest());

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }
        
        return response.json();
      })
      .then(json => {
        let allItems = results.concat(json.results)
      
        if (json.next != null) {
          url = json.next;
          dispatch(getInitialResults(url, allItems))
        }
        return allItems;
      })
      .then(data => {
        dispatch(getSwapiSuccess(data));
      })
      .catch(error => {
        dispatch(getSwapiFailure(error));
      })
  }
}