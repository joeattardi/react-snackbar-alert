import PropTypes from 'prop-types';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuidv4 from 'uuid/v4';

import Snackbar from './Snackbar';

export default class SnackbarManager extends React.Component {
  constructor(props) {
    super(props);

    this.timeouts = {};

    this.state = {
      notifications: []
    };

    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  create(notification) {
    notification.key = uuidv4();

    this.setState({
      notifications: [
        ...this.state.notifications,
        notification
      ]
    }, () => {
      const timeout = setTimeout(() => {
        this.remove(notification);
      }, notification.timeout || this.props.timeout);
      this.timeouts[notification.key] = timeout;
    });
  }

  remove(notification) {
    clearTimeout(this.timeouts[notification.key]);
    this.setState({
      notifications: this.state.notifications.filter(n => n !== notification)
    });
    delete this.timeouts[notification.key];
  }

  componentWillUnmount() {
    Object.keys(this.timeouts).forEach(key => {
      clearTimeout(this.timeouts[key])
    });
  }

  render() {
    const { component: Component } = this.props;
    return (
      <div className="react-snackbar-alert__snackbar-manager">
        <TransitionGroup>
          {this.state.notifications.map(notification => (
            <CSSTransition 
              key={notification.key}
              timeout={notification.animationTimeout || this.props.animationTimeout}
              classNames="react-snackbar-alert__snackbar">
              <Component
                animationTimeout={notification.animationTimeout || this.props.animationTimeout}
                dismissable={typeof notification.dismissable !== 'undefined' ? notification.dismissable : this.props.dismissable}
                onDismiss={() => this.remove(notification)}
                message={notification.message}
                data={notification.data} />
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
  component: Snackbar,
  dismissable: false
};

SnackbarManager.propTypes = {
  timeout: PropTypes.number,
  animationTimeout: PropTypes.number,
  component: PropTypes.elementType,
  dismissable: PropTypes.bool
};