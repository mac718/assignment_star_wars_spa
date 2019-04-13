import React, {Component} from 'react';
import {connect} from 'react-redux';
import Resource from '../components/Resource';
import {getInitialResults, onPageClick} from '../actions';

class FilmsContainer extends Component {
  componentDidMount() {
    this.props.getInitialResults('https://swapi.co/api/films/')
  }

  render() {
    const {results, searchResults, isFetching, currentPage, onPageClick} = this.props

    const attributes = ['title', 'release_date', 'opening_crawl'];

    return <Resource
      results={results}
      searchResults={searchResults}
      isFetching={isFetching}
      currentPage={currentPage}
      onPageClick={onPageClick}
      children={attributes} 
      resourceType='films'/>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    results: state.results,
    searchResults: state.searchResults,
    isFetching: state.isFetching,
    currentPage: state.currentPage,
    children: ownProps.children
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInitialResults: (path) => {
      dispatch(getInitialResults(path))
    },

    onPageClick: (e) => {
      dispatch(onPageClick(e.target.innerText))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsContainer)
