import React, {Component} from 'react';
import {connect} from 'react-redux';
import Planets from '../components/Planets';
import {getInitialResults, onPageClick} from '../actions';

class PlanetsContainer extends Component {
  componentDidMount() {
    this.props.getInitialResults('https://swapi.co/api/planets/')
  }

  render() {
    const {results, isFetching, currentPage, onPageClick} = this.props
  
    return <Planets results={results} isFetching={isFetching} currentPage={currentPage} onPageClick={onPageClick}/>
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
)(PlanetsContainer)
