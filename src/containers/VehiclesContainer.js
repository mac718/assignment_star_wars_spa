import React, {Component} from 'react';
import {connect} from 'react-redux';
import Vehicles from '../components/Vehicles';
import {getInitialResults, onPageClick} from '../actions';

class VehiclesContainer extends Component {
  componentDidMount() {
    this.props.getInitialResults('https://swapi.co/api/vehicles/')
  }

  render() {
    const {results, searchResults, isFetching, currentPage, onPageClick} = this.props
  
    return <Vehicles 
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
)(VehiclesContainer)
