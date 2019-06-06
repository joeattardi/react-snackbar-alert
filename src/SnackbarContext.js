import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import uuidv4 from 'uuid/v4';

import Snackbar from './Snackbar';
import SnackbarContainer from './SnackbarContainer';

export const SnackbarContext = React.createContext();

export const SnackbarConsumer = SnackbarContext.Consumer;

export class SnackbarProvider extends React.Component {
  constructor(props) {
    super(props);

    this.timeouts = {};
    this.startTimes = {};
    this.paused = {};

    this.state = {
      notifications: []
    };

    this.create = this.create.bind(this);
    this.pause = this.pause.bind(this);
    this.remove = this.remove.bind(this);
    this.resume = this.resume.bind(this);
  }

  create(notification) {
    notification.key = uuidv4();

    if (typeof notification.timeout === 'undefined') {
      notification.timeout = this.props.timeout;
    }

    if (typeof notification.sticky === 'undefined') {
      notification.sticky = this.props.sticky;
    }

    this.setState(
      {
        notifications: [...this.state.notifications, notification]
      },
      () => {
        if (!notification.sticky) {
          this.startTimes[notification.key] = Date.now();
          const timeout = setTimeout(() => {
            this.remove(notification);
          }, notification.timeout);
          this.timeouts[notification.key] = timeout;
        }
      }
    );
  }

  remove(notification) {
    clearTimeout(this.timeouts[notification.key]);
    this.setState({
      notifications: this.state.notifications.filter(n => n !== notification)
    });

    delete this.timeouts[notification.key];
    delete this.paused[notification.key];
    delete this.startTimes[notification.key];
  }

  pause(notification) {
    if (!notification.sticky) {
      clearTimeout(this.timeouts[notification.key]);
      delete this.timeouts[notification.key];

      let timeout = this.paused[notification.key] || notification.timeout;

      const timeElapsed = Date.now() - this.startTimes[notification.key];
      const timeRemaining = timeout - timeElapsed;
      this.paused[notification.key] = timeRemaining;
    }
  }

  resume(notification) {
    if (!notification.sticky) {
      const timeRemaining = this.paused[notification.key];
      this.startTimes[notification.key] = Date.now();
      const timeout = setTimeout(() => {
        this.remove(notification);
      }, timeRemaining);
      this.timeouts[notification.key] = timeout;
    }
  }

  componentWillUnmount() {
    Object.keys(this.timeouts).forEach(key => {
      clearTimeout(this.timeouts[key]);
    });
  }

  render() {
    return (
      <SnackbarContext.Provider
        value={{
          createSnackbar: this.create
        }}
      >
        <SnackbarContainer
          animationTimeout={this.props.animationTimeout}
          component={this.props.component}
          dismissable={this.props.dismissable}
          notifications={this.state.notifications}
          onPause={this.pause}
          onRemove={this.remove}
          onResume={this.resume}
          pauseOnHover={this.props.pauseOnHover}
          position={this.props.position}
          progressBar={this.props.progressBar}
          sticky={this.props.sticky}
          timeout={this.props.timeout}
        />
        {this.props.children}
      </SnackbarContext.Provider>
    );
  }
}

SnackbarProvider.defaultProps = {
  animationTimeout: 250,
  component: Snackbar,
  dismissable: false,
  pauseOnHover: false,
  position: 'bottom',
  progressBar: true,
  sticky: false,
  timeout: 3000
};

SnackbarProvider.propTypes = {
  animationTimeout: PropTypes.number,
  children: PropTypes.node,
  component: PropTypes.elementType,
  dismissable: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  progressBar: PropTypes.bool,
  position: PropTypes.oneOf([
    'top',
    'top-left',
    'top-right',
    'bottom',
    'bottom-left',
    'bottom-right'
  ]),
  sticky: PropTypes.bool,
  timeout: PropTypes.number
};

export function wrapComponent(Comp) {
  return function WrappedComponent(props) {
    const { createSnackbar } = useContext(SnackbarContext);
    return <Comp createSnackbar={createSnackbar} {...props} />;
  };
}
