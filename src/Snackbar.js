import React from 'react';
import styled from 'styled-components';

const AnimatedSnackbar = styled.div`
  &.react-snackbar-alert__snackbar-enter {
    opacity: 0;
    transform: scaleY(0.5);
  }

  &.react-snackbar-alert__snackbar-enter-active {
    opacity: 1;
    transform: scaleY(1);
    transition: all ${props => props.animationTimeout}ms;
  }

  &.react-snackbar-alert__snackbar-exit {
    opacity: 1;
    transform: scaleY(1);
  }

  &.react-snackbar-alert__snackbar-exit-active {
    opacity: 0;
    transform: scaleY(0.5);
    transition: all ${props => props.animationTimeout}ms;
  }
`;

export default function Snackbar({ animationTimeout, message }) {
  return (
    <AnimatedSnackbar animationTimeout={animationTimeout} className="react-snackbar-alert__snackbar">{message}</AnimatedSnackbar>
  );
}
