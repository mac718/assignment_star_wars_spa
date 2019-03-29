import React, {Component} from 'react';
import {connect} from 'react-redux';
import Species from '../components/Species';
import {getInitialResults, onPageClick} from '../actions';

class SpeciesContainer extends Component {
  componentDidMount() {
    this.props.getInitialResults('https://swapi.co/api/species/')
  }

  render() {
    const {results, isFetching, currentPage, onPageClick} = this.props
  
    return <Species results={results} isFetching={isFetching} currentPage={currentPage} onPageClick={onPageClick}/>
  }
}

const mapStateToProps = state => {
  return {
    results: state.results,
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
