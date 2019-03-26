import React, {Component} from 'react';
import {connect} from 'react-redux';
import People from '../components/People';
import {getInitialResults} from '../actions';

class PeopleContainer extends Component {
  componentDidMount() {
    this.props.getInitialResults('https://swapi.co/api/people/')
  }

  render() {
    const {results, isFetching} = this.props
  
    return <People results={results} isFetching={isFetching} />
  }
}

const mapStateToProps = state => {
  return {
    results: state.results,
    isFetching: state.isFetching,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInitialResults: (path) => {
      dispatch(getInitialResults(path))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleContainer)
