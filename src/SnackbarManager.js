import PropTypes from 'prop-types';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
    notification.key = uuidv4();

    this.setState({
      notifications: [
        ...this.state.notifications,
        notification
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
        <TransitionGroup>
          {this.state.notifications.map(notification => (
            <CSSTransition key={notification.key} timeout={250} classNames="react-snackbar-alert__snackbar">
              <Snackbar message={notification.message} />
            </CSSTransition>
          ))}
        </TransitionGroup>
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
