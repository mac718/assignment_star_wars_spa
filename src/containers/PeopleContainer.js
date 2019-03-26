import React, {Component} from 'react';
import {connect} from 'react-redux';
import People from '../components/People';
import {getInitialResults, onPageClick} from '../actions';

class PeopleContainer extends Component {
  componentDidMount() {
    this.props.getInitialResults('https://swapi.co/api/people/')
  }

  render() {
    const {results, isFetching, currentPage, onPageClick} = this.props
  
    return <People results={results} isFetching={isFetching} currentPage={currentPage} onPageClick={onPageClick}/>
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
)(PeopleContainer)
