import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ProgressBar = styled.div`
  animation-duration: ${props => props.timeout}ms;
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
    const { timeout, children, dismissable, message, onDismiss, sticky, progressBar } = this.props;
    
    let containerClass = 'react-snackbar-alert__snackbar';
    if (dismissable) {
      containerClass += ' react-snackbar-alert__dismissable';
    }

    return (
      <div className={containerClass} onMouseEnter={this.pause} onMouseLeave={this.resume}>
        <div className="react-snackbar-alert__snackbar-main">
          <div className="react-snackbar-alert__snackbar-content">{children || message}</div>
          {dismissable ? <button onClick={onDismiss} className="react-snackbar-alert__snackbar-close">&times;</button> : null}
        </div>
        {!sticky && progressBar ?
          <ProgressBar
            timeout={timeout}
            className="react-snackbar-alert__snackbar-progress-bar"
            style={{animationPlayState: this.state.animationPaused ? 'paused' : 'running'}} /> : null}
      </div>
    );
  }
}

Snackbar.defaultProps = {
  progressBar: true
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
  progressBar: PropTypes.bool
};
