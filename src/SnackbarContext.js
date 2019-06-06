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
    this.remove = this.remove.bind(this);
  }

  create(notification) {
    notification.key = uuidv4();

    if (typeof notification.timeout === 'undefined') {
      notification.timeout = this.props.timeout;
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
          pauseOnHover={this.props.pauseOnHover}
          position={this.props.position}
          progressBar={this.props.progressBar}
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
  timeout: PropTypes.number
};

export function wrapComponent(Comp) {
  return function WrappedComponent(props) {
    const { createSnackbar } = useContext(SnackbarContext);
    return <Comp createSnackbar={createSnackbar} {...props} />;
  };
}
