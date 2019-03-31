import React, {Component} from 'react';
import {connect} from 'react-redux';
import Search from '../components/elements/Search';
import {mapResultsToProps} from '../actions';
import serialize from 'form-serialize';


class SearchContainer extends Component {
  render() {
    const {results, onSubmit} = this.props;
    return (
      <Search results={results} onSubmit={onSubmit} />
    )
  }
}

const mapStateToProps = state => {
  return {
    results: state.results
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (e) => {
      e.preventDefault();
      let form = e.target
      let terms = serialize(form, {hash: true})
      let termsArr = [];
      if (terms.search) {
       termsArr = terms.search.split(' ')
      }

      dispatch(mapResultsToProps(termsArr));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer)

