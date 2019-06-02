import Prism from 'prismjs';
import React from 'react';
import styled from 'styled-components';

import { SnackbarManager } from 'react-snackbar-alert';

const OptionsContainer = styled.div`
  display: flex;
`;

const OptionsSection = styled.div`
  margin: 0.5em;

  h3 {
    margin: 0;
  }
`;

export default class DemoExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progressBar: true,
      pauseOnHover: false,
      sticky: false,
      dismissable: false,
      timeout: 3000,
      position: 'bottom'
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
      dismissable: this.state.dismissable,
      timeout: this.state.timeout
    });
  }

  checkboxStateUpdater(property) {
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

  numberStateUpdater(property) {
    return event => {
      let value = parseInt(event.target.value, 10);
      this.setState(
        {
          [property]: value
        },
        () => {
          Prism.highlightAll();
        }
      );
    };
  }

  selectStateUpdater(property) {
    return event => {
      this.setState(
        {
          [property]: event.target.value
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
        <SnackbarManager
          ref={this.snackbarManager}
          position={this.state.position}
        />
        <main>
          <OptionsContainer>
            <OptionsSection>
              <h3>Snackbar Options</h3>
              <div>
                <label htmlFor="timeout">Timeout (ms):</label>
                <input
                  id="timeout"
                  type="number"
                  value={this.state.timeout}
                  onChange={this.numberStateUpdater('timeout')}
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  id="progress-bar"
                  checked={this.state.progressBar}
                  onChange={this.checkboxStateUpdater('progressBar')}
                />
                <label htmlFor="progress-bar">Progress Bar</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="pause-on-hover"
                  checked={this.state.pauseOnHover}
                  onChange={this.checkboxStateUpdater('pauseOnHover')}
                />
                <label htmlFor="pause-on-hover">Pause on Hover</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="sticky"
                  checked={this.state.sticky}
                  onChange={this.checkboxStateUpdater('sticky')}
                />
                <label htmlFor="sticky">Sticky</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="dismissable"
                  checked={this.state.dismissable}
                  onChange={this.checkboxStateUpdater('dismissable')}
                />
                <label htmlFor="dismissable">Dismissable</label>
              </div>
            </OptionsSection>
            <OptionsSection>
              <h3>Snackbar Manager Options</h3>
              <div>
                <label htmlFor="position">Position:</label>
                <select
                  id="position"
                  value={this.state.position}
                  onChange={this.selectStateUpdater('position')}
                >
                  <option value="top">Top</option>
                  <option value="top-left">Top Left</option>
                  <option value="top-right">Top Right</option>
                  <option value="bottom">Bottom</option>
                  <option value="bottom-left">Bottom Left</option>
                  <option value="bottom-right">Bottom Right</option>
                </select>
              </div>
            </OptionsSection>
          </OptionsContainer>
          <button onClick={this.showSnackbar}>Show Snackbar</button>

          <pre>
            <code className="language-jsx">{`
import React, { useRef } from 'react';

import { SnackbarManager } from 'react-snackbar-alert';

export default function DemoExample() {
  const snackbarManager = useRef();

  function showSnackbar() {
    this.snackbarManager.current.create({
      message: 'Hello Snackbar!',
      progressBar: ${this.state.progressBar},
      pauseOnHover: ${this.state.pauseOnHover},
      sticky: ${this.state.sticky},
      dismissable: ${this.state.dismissable},
      timeout: ${this.state.timeout}
    });
  }

  return (
    <div>
      <SnackbarManager
        ref={snackbarManager} 
        position="${this.state.position}" />
      <main>
        <button onClick={showSnackbar}>Show Snackbar</button>
      </main>
    </div>
  );
}
          `}</code>
          </pre>
        </main>
      </div>
    );
  }
}
