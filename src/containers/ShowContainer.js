import React, {Component} from 'react';
import {connect} from 'react-redux';
import Show from '../components/Show';
import {getResource, onPageClick} from '../actions';

class ShowContainer extends Component {
  componentDidMount() {
    this.props.getResource(`https://swapi.co/api${this.props.path}/`)
  }
  render() {
    const {resource} = this.props
    return (
      <Show resource={resource} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    resource: state.currentResource,
    path: ownProps.match.url,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getResource: (url) => {
      dispatch(getResource(url))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowContainer)