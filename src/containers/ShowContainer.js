import React, {Component} from 'react';
import {connect} from 'react-redux';
import Show from '../components/Show';
import {getResource, onPageClick} from '../actions';

class ShowContainer extends Component {
  componentDidMount() {
    this.props.getResource(`https://swapi.co/api/planets/${this.props.id}`)
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
    id: ownProps.match.params.id
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