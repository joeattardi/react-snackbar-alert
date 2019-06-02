import PropTypes from 'prop-types';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const progress = keyframes`
  0% {
    width: 0;
    border-bottom-right-radius: 0;
  }

  99% {
    border-bottom-right-radius: 0;
  }

  100% {
    width: calc(100% + 0.5em);
    border-bottom-right-radius: 5px;
  }
`;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  color: #ffffff;
  min-height: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.25em;
  text-align: center;
  margin-bottom: ${props =>
    props.position.indexOf('bottom') === 0 ? '0.5em' : 0};
  margin-top: ${props => (props.position.indexOf('top') === 0 ? '0.5em' : 0)};
`;

const Main = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  flex-grow: 1;
  margin-left: ${props => (props.dismissable ? '1.5em' : '0')};
`;

const CloseButton = styled.button`
  background: transparent;
  padding: 0;
  font-size: 1.5em;
  margin-top: -0.25em;
  outline: none;
  width: 1em;
`;

const ProgressBar = styled.div`
  align-self: flex-start;
  width: calc(100% + 0.5em);
  height: 0.25em;
  background: rgba(255, 255, 255, 0.2);
  position: relative;
  top: 0.25em;
  left: -0.25em;
  border-bottom-left-radius: 5px;
  animation: ${progress} ${props => props.timeout}ms linear;
`;

export default class Snackbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animationPaused: false
    };

    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
  }

  pause() {
    if (this.props.pauseOnHover) {
      this.setState({
        animationPaused: true
      });
      this.props.onPause();
    }
  }

  resume() {
    if (this.props.pauseOnHover) {
      this.setState({
        animationPaused: false
      });
      this.props.onResume();
    }
  }

  render() {
    const {
      timeout,
      children,
      dismissable,
      message,
      onDismiss,
      sticky,
      progressBar,
      position
    } = this.props;

    return (
      <Container
        position={position}
        onMouseEnter={this.pause}
        onMouseLeave={this.resume}
      >
        <Main>
          <Content dismissable={dismissable}>{children || message}</Content>
          {dismissable ? (
            <CloseButton onClick={onDismiss}>&times;</CloseButton>
          ) : null}
        </Main>
        {!sticky && progressBar ? (
          <ProgressBar
            timeout={timeout}
            className="react-snackbar-alert__snackbar-progress-bar"
            style={{
              animationPlayState: this.state.animationPaused
                ? 'paused'
                : 'running'
            }}
          />
        ) : null}
      </Container>
    );
  }
}

Snackbar.defaultProps = {
  progressBar: true,
  position: 'bottom'
};

Snackbar.propTypes = {
  children: PropTypes.node,
  pauseOnHover: PropTypes.bool,
  onPause: PropTypes.func,
  onResume: PropTypes.func,
  timeout: PropTypes.number,
  dismissable: PropTypes.bool,
  message: PropTypes.string,
  onDismiss: PropTypes.func,
  sticky: PropTypes.bool,
  progressBar: PropTypes.bool,
  position: PropTypes.oneOf([
    'top',
    'top-left',
    'top-right',
    'bottom',
    'bottom-left',
    'bottom-right'
  ])
};
