import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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

const ChildContainer = styled.div`
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

export default function SnackbarContainer({
  animationTimeout,
  component: Component,
  dismissable,
  notifications,
  onPause,
  onRemove,
  onResume,
  pauseOnHover,
  position,
  progressBar,
  sticky
}) {
  const orderedNotifications =
    position.indexOf('top') === 0
      ? [...notifications].reverse()
      : notifications;

  return (
    <Container position={position}>
      <TransitionGroup>
        {orderedNotifications.map(notification => (
          <CSSTransition
            key={notification.key}
            timeout={notification.animationTimeout || animationTimeout}
            classNames="react-snackbar-alert__snackbar-container"
          >
            <ChildContainer
              animationTimeout={
                notification.animationTimeout || animationTimeout
              }
            >
              <Component
                progressBar={
                  typeof notification.progressBar !== 'undefined'
                    ? notification.progressBar
                    : progressBar
                }
                sticky={
                  typeof notification.sticky !== 'undefined'
                    ? notification.sticky
                    : sticky
                }
                theme={notification.theme || 'default'}
                timeout={notification.timeout}
                dismissable={
                  typeof notification.dismissable !== 'undefined'
                    ? notification.dismissable
                    : dismissable
                }
                onDismiss={() => onRemove(notification)}
                onPause={() => onPause(notification)}
                onResume={() => onResume(notification)}
                pauseOnHover={
                  typeof notification.pauseOnHover !== 'undefined'
                    ? notification.pauseOnHover
                    : pauseOnHover
                }
                message={notification.message}
                data={notification.data}
                position={position}
              />
            </ChildContainer>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
}

SnackbarContainer.propTypes = {
  animationTimeout: PropTypes.number,
  component: PropTypes.elementType,
  dismissable: PropTypes.bool,
  notifications: PropTypes.array,
  onPause: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onResume: PropTypes.func.isRequired,
  pauseOnHover: PropTypes.bool,
  position: PropTypes.oneOf([
    'top',
    'top-left',
    'top-right',
    'bottom',
    'bottom-left',
    'bottom-right'
  ]),
  progressBar: PropTypes.bool,
  sticky: PropTypes.bool
};

SnackbarContainer.defaultProps = {
  animationTimeout: 250,
  component: Snackbar,
  dismissable: false,
  pauseOnHover: false,
  position: 'bottom',
  progressBar: true,
  sticky: false,
  timeout: 3000
};
