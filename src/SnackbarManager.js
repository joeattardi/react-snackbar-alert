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
    const { component: Component } = this.props;

    return (
      <div className="react-snackbar-alert__snackbar-manager">
        <TransitionGroup>
          {this.state.notifications.map(({ animationTimeout, data, key, message }) => (
            <CSSTransition key={key} timeout={animationTimeout || this.props.animationTimeout} classNames="react-snackbar-alert__snackbar">
              <Component animationTimeout={animationTimeout || this.props.animationTimeout} message={message} data={data} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

SnackbarManager.defaultProps = {
  timeout: 3000,
  animationTimeout: 250,
  component: Snackbar
};

SnackbarManager.propTypes = {
  timeout: PropTypes.number,
  animationTimeout: PropTypes.number,
  component: PropTypes.elementType
};
