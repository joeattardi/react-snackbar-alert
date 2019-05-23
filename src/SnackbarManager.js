import PropTypes from 'prop-types';
import React from 'react';
import uuidv4 from 'uuid/v4';

import Snackbar from './Snackbar';

export default class SnackbarManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: []
    };
  }

  create(notification) {
    this.setState({
      notifications: [
        ...this.state.notifications,
        {...notification, key: uuidv4()}
      ]
    }, () => {
      setTimeout(() => {
        this.setState({
          notifications: this.state.notifications.filter(n => n !== notification)
        });
      }, notification.timeout || this.props.timeout);
    });
  }

  render() {
    return (
      <div className="react-snackbar-alert__snackbar-manager">
        {this.state.notifications.map(notification => <Snackbar key={notification.key} message={notification.message} />)}
      </div>
    );
  }
}

SnackbarManager.defaultProps = {
  timeout: 3000
};

SnackbarManager.propTypes = {
  timeout: PropTypes.number
};
