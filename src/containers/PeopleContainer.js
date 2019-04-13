import React, {Component} from 'react';
import {connect} from 'react-redux';
import Resource from '../components/Resource';
import {getInitialResults, onPageClick} from '../actions';

class PeopleContainer extends Component {
  componentDidMount() {
    this.props.getInitialResults('https://swapi.co/api/people/')
  }

  render() {
    const {results, searchResults, isFetching, currentPage, onPageClick} = this.props
    
    const attributes = ['name', 'birth_year', 'films'];

    return <Resource
      results={results}
      searchResults={searchResults}
      isFetching={isFetching}
      currentPage={currentPage}
      onPageClick={onPageClick}
      children={attributes} 
      resourceType='people'/>
  }
}

const mapStateToProps = state => {
  return {
    results: state.results,
    searchResults: state.searchResults,
    isFetching: state.isFetching,
    currentPage: state.currentPage,
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
)(PeopleContainer)
