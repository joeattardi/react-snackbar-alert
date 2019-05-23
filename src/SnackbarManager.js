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

  showNotification(notification) {
    notification.key = uuidv4();
    
    this.setState({
      notifications: [
        ...this.state.notifications,
        notification
      ]
    }, () => {
      setTimeout(() => this.clearNotification(notification), notification.timeout || this.props.timeout);
    });
  }

  clearNotification(notification) {
    this.setState({
      notifications: this.state.notifications.filter(n => n !== notification)
    });
  }

  getTopPosition() {
    return `calc(100% - ${4 * this.state.notifications.length}em)`;
  }

  render() {
    return (
      <div
        className="react-snackbar-alert__snackbar-manager"
        style={{
          top: this.getTopPosition()
      }}>
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
