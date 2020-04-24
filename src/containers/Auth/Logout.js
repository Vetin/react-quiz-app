import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeToken } from '../../redux/actions/auth';

class Logout extends React.Component {
  componentDidMount() {
    this.props.removeToken();
  }

  render() {
    return <Redirect to={'/'} />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeToken: () => dispatch(removeToken()),
});

export default connect(null, mapDispatchToProps)(Logout);
