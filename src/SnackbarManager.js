import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuidv4 from 'uuid/v4';

import Snackbar from './Snackbar';

function getLeft(position) {
  switch (position) {
    case 'top':
    case 'bottom':
      return 'calc(50% - 10em)';
    case 'top-left':
    case 'bottom-left':
      return '0.5em';
    case 'top-right':
    case 'bottom-right':
      return 'calc(100vw - 20.5em)';
  }
}

const Container = styled.div`
  position: fixed;
  width: 20em;
  top: ${props => (props.position.indexOf('top') === 0 ? 0 : 'inherit')};
  bottom: ${props => (props.position.indexOf('bottom') === 0 ? 0 : 'inherit')};
  left: ${props => getLeft(props.position)};
  z-index: 10000;
`;

const SnackbarContainer = styled.div`
  &.react-snackbar-alert__snackbar-container-enter {
    opacity: 0;
    transform: scaleY(0.1);
  }

  &.react-snackbar-alert__snackbar-container-enter-active {
    opacity: 1;
    transform: scaleY(1);
    transition: all ${props => props.animationTimeout}ms;
  }

  &.react-snackbar-alert__snackbar-container-exit {
    opacity: 1;
    transform: scaleY(1);
  }

  &.react-snackbar-alert__snackbar-container-exit-active {
    opacity: 0;
    transform: scaleY(0.1);
    transition: all ${props => props.animationTimeout}ms;
  }
`;

export default class SnackbarManager extends React.Component {
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
    const { component: Component, position } = this.props;

    const orderedNotifications =
      position.indexOf('top') === 0
        ? [...this.state.notifications].reverse()
        : this.state.notifications;

    return (
      <Container position={position}>
        <TransitionGroup>
          {orderedNotifications.map(notification => (
            <CSSTransition
              key={notification.key}
              timeout={
                notification.animationTimeout || this.props.animationTimeout
              }
              classNames="react-snackbar-alert__snackbar-container"
            >
              <SnackbarContainer
                animationTimeout={
                  notification.animationTimeout || this.props.animationTimeout
                }
              >
                <Component
                  progressBar={
                    typeof notification.progressBar !== 'undefined'
                      ? notification.progressBar
                      : this.props.progressBar
                  }
                  sticky={notification.sticky}
                  timeout={notification.timeout}
                  dismissable={
                    typeof notification.dismissable !== 'undefined'
                      ? notification.dismissable
                      : this.props.dismissable
                  }
                  onDismiss={() => this.remove(notification)}
                  onPause={() => this.pause(notification)}
                  onResume={() => this.resume(notification)}
                  pauseOnHover={
                    typeof notification.pauseOnHover !== 'undefined'
                      ? notification.pauseOnHover
                      : this.props.pauseOnHover
                  }
                  message={notification.message}
                  data={notification.data}
                  position={position}
                />
              </SnackbarContainer>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Container>
    );
  }
}

SnackbarManager.defaultProps = {
  animationTimeout: 250,
  component: Snackbar,
  dismissable: false,
  pauseOnHover: false,
  position: 'bottom',
  progressBar: true,
  timeout: 3000
};

SnackbarManager.propTypes = {
  animationTimeout: PropTypes.number,
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
