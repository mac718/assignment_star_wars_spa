export const GET_SWAPI_REQUEST = 'GET_SWAPI_REQUEST';
export const GET_SWAPI_SUCCESS = 'GET_SWAPI_SUCCESS';
export const GET_SWAPI_FAILURE = 'GET_SWAPI_FAILURE';
export const GET_SWAPI_RESOURCE_REQUEST = 'GET_SWAPI_RESOURCE_REQUEST';
export const GET_SWAPI_RESOURCE_SUCCESS = 'GET_SWAPI_RESOURCE_SUCCESS';
export const GET_SWAPI_RESOURCE_FAILURE = 'GET_SWAPI_RESOURCE_FAILURE'
export const ON_PAGE_CLICK = 'ON_PAGE_CLICK';
export const ON_SUBMIT = 'ON_SUBMIT';

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

export function getSwapiResourceRequest() {
  return {
    type: GET_SWAPI_RESOURCE_REQUEST
  }
}

export function getSwapiResourceSuccess(data) {
  return {
    type: GET_SWAPI_RESOURCE_SUCCESS,
    data,
  }
}

export function getSwapiResourceFailure(error) {
  return {
    type: GET_SWAPI_RESOURCE_FAILURE,
    error,
  }
}

export function onPageClick(page) {
  return {
    type: ON_PAGE_CLICK,
    page,
  }
}

export function onSubmit(searchResults) {
  return {
    type: ON_SUBMIT,
    searchResults,
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
        return allItems.sort((a, b) => {
          console.log(a.url)
          return a.url.split('/').reverse()[1] - a.url.split('/').reverse()[1]
        })
      })
      .then(data => {
        dispatch(getSwapiSuccess(data));
      })
      .catch(error => {
        dispatch(getSwapiFailure(error));
      })
  }
}

export function getResource(url) {
  return dispatch => {
    dispatch(getSwapiResourceRequest());

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }
        
        return response.json();
      })
      .then(json => {
        dispatch(getSwapiResourceSuccess(json));
      })
      .then(error => {
        dispatch(getSwapiResourceFailure(error));
      })
  }
}

export function mapResultsToProps(termsArr) {
  return (dispatch, getState) => {
    let state = getState();
    let searchResults = []
    if (termsArr.length == 0) {
      searchResults = state.results
    } else {
    
      state.results.forEach(result => { 
        for (let key in result ) {
          termsArr.forEach(term => {
            if (result[key].toString().includes(term)) {
              searchResults.push(result)
            }
          })
        }
      })
    }
    console.log(searchResults)
    dispatch(onSubmit(searchResults))
  }
}
