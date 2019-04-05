import React, {Component} from 'react';
import {connect} from 'react-redux';
import Starships from '../components/Starships';
import {getInitialResults, onPageClick} from '../actions';

class StarshipsContainer extends Component {
  componentDidMount() {
    this.props.getInitialResults('https://swapi.co/api/starships/')
  }

  render() {
    const {results, searchResults, isFetching, currentPage, onPageClick} = this.props
  
    return <Starships 
      results={results} 
      searchResults={searchResults}
      isFetching={isFetching} 
      currentPage={currentPage} 
      onPageClick={onPageClick}/>
  }
}

const mapStateToProps = state => {
  return {
    results: state.results,
    searchResults: state.searchResults,
    isFetching: state.isFetching,
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInitialResults: (path) => {
      dispatch(getInitialResults(path))
    },

    onPageClick: (e) => {
      dispatch(onPageClick(e.target.innerText))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarshipsContainer)
