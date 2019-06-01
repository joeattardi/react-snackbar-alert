import Prism from 'prismjs';
import React from 'react';

import { SnackbarManager } from 'react-snackbar-alert';
import 'react-snackbar-alert/styles/react-snackbar-alert.css';

export default class DemoExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progressBar: true,
      pauseOnHover: false,
      sticky: false,
      dismissable: false
    };

    this.snackbarManager = React.createRef();

    this.showSnackbar = this.showSnackbar.bind(this);
  }

  showSnackbar() {
    this.snackbarManager.current.create({
      message: 'Hello Snackbar!',
      progressBar: this.state.progressBar,
      pauseOnHover: this.state.pauseOnHover,
      sticky: this.state.sticky,
      dismissable: this.state.dismissable
    });
  }

  stateUpdater(property) {
    return event => {
      this.setState(
        {
          [property]: event.target.checked
        },
        () => {
          Prism.highlightAll();
        }
      );
    };
  }

  render() {
    return (
      <div>
        <SnackbarManager ref={this.snackbarManager} />
        <main>
          <div>
            <input
              type="checkbox"
              id="progress-bar"
              checked={this.state.progressBar}
              onChange={this.stateUpdater('progressBar')}
            />
            <label htmlFor="progress-bar">Progress Bar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="pause-on-hover"
              checked={this.state.pauseOnHover}
              onChange={this.stateUpdater('pauseOnHover')}
            />
            <label htmlFor="pause-on-hover">Pause on Hover</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="sticky"
              checked={this.state.sticky}
              onChange={this.stateUpdater('sticky')}
            />
            <label htmlFor="sticky">Sticky</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dismissable"
              checked={this.state.dismissable}
              onChange={this.stateUpdater('dismissable')}
            />
            <label htmlFor="dismissable">Dismissable</label>
          </div>
          <button onClick={this.showSnackbar}>Show Snackbar</button>

          <pre>
            <code className="language-jsx">{`
this.snackbarManager.current.create({
  message: 'Hello Snackbar!',
  progressBar: ${this.state.progressBar},
  pauseOnHover: ${this.state.pauseOnHover},
  sticky: ${this.state.sticky},
  dismissable: ${this.state.dismissable}
});
          `}</code>
          </pre>
        </main>
      </div>
    );
  }
}
