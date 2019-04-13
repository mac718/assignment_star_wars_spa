import React, {Component} from 'react';
import {connect} from 'react-redux';
import Resource from '../components/Resource';
import {getInitialResults, onPageClick} from '../actions';

class SpeciesContainer extends Component {
  componentDidMount() {
    this.props.getInitialResults('https://swapi.co/api/species/')
  }

  render() {
    const {results, searchResults, isFetching, currentPage, onPageClick} = this.props

    const attributes = ['name', 'classification', 'average_height', 'average_lifespan'];

    return <Resource
      results={results}
      searchResults={searchResults}
      isFetching={isFetching}
      currentPage={currentPage}
      onPageClick={onPageClick}
      children={attributes} 
      resourceType='planets'/>
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
)(SpeciesContainer)
