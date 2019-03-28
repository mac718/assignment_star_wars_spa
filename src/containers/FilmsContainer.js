import React, {Component} from 'react';
import {connect} from 'react-redux';
import Films from '../components/Films';
import {getInitialResults, onPageClick} from '../actions';

class FilmsContainer extends Component {
  componentDidMount() {
    this.props.getInitialResults('https://swapi.co/api/films/')
  }

  render() {
    const {results, isFetching, currentPage, onPageClick} = this.props
  
    return <Films results={results} isFetching={isFetching} currentPage={currentPage} onPageClick={onPageClick}/>
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
)(FilmsContainer)