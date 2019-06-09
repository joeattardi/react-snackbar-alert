import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import 'jest-dom/extend-expect';

import { SnackbarProvider, SnackbarConsumer } from './SnackbarContext';
import { themes } from './themes';

function renderTestApp(providerProps = {}, snackbarOptions = {}) {
  return render(
    <SnackbarProvider {...providerProps}>
      <SnackbarConsumer>
        {({ createSnackbar }) => (
          <button onClick={() => createSnackbar({ ...snackbarOptions })}>
            Show Snackbar
          </button>
        )}
      </SnackbarConsumer>
    </SnackbarProvider>
  );
}

describe('SnackbarContext', () => {
  jest.useFakeTimers();

  it('should show a snackbar and remove it after 3 seconds', () => {
    const { queryByText } = renderTestApp({}, { message: 'Hello Snackbar' });

    fireEvent.click(queryByText('Show Snackbar'));
    expect(queryByText('Hello Snackbar')).toBeInTheDocument();

    jest.advanceTimersByTime(3250);
    expect(queryByText('Hello Snackbar')).not.toBeInTheDocument();
  });

  it('should use a custom timeout on the SnackbarContext', () => {
    const { queryByText } = renderTestApp(
      { timeout: 5000 },
      { message: 'Hello Snackbar' }
    );

    fireEvent.click(queryByText('Show Snackbar'));
    expect(queryByText('Hello Snackbar')).toBeInTheDocument();

    jest.advanceTimersByTime(3250);
    expect(queryByText('Hello Snackbar')).toBeInTheDocument();

    jest.advanceTimersByTime(2000);
    expect(queryByText('Hello Snackbar')).not.toBeInTheDocument();
  });

  it('should override the timeout for a specific snackbar', () => {
    const { queryByText } = renderTestApp(
      { timeout: 1000 },
      {
        message: 'Hello Snackbar',
        timeout: 5000
      }
    );

    fireEvent.click(queryByText('Show Snackbar'));
    expect(queryByText('Hello Snackbar')).toBeInTheDocument();

    jest.advanceTimersByTime(1250);
    expect(queryByText('Hello Snackbar')).toBeInTheDocument();

    jest.advanceTimersByTime(4000);
    expect(queryByText('Hello Snackbar')).not.toBeInTheDocument();
  });

  it('should use a custom animation timeout', () => {
    const { queryByText } = renderTestApp(
      { animationTimeout: 1000 },
      { message: 'Hello Snackbar' }
    );

    fireEvent.click(queryByText('Show Snackbar'));
    expect(queryByText('Hello Snackbar')).toBeInTheDocument();

    jest.advanceTimersByTime(3250);
    expect(queryByText('Hello Snackbar')).toBeInTheDocument();

    jest.advanceTimersByTime(750);
    expect(queryByText('Hello Snackbar')).not.toBeInTheDocument();
  });

  it('should override the custom animation timeout for a specific snackbar', () => {
    const { queryByText } = renderTestApp(
      { animationTimeout: 250 },
      { message: 'Hello Snackbar', animationTimeout: 1000 }
    );

    fireEvent.click(queryByText('Show Snackbar'));
    expect(queryByText('Hello Snackbar')).toBeInTheDocument();

    jest.advanceTimersByTime(3250);
    expect(queryByText('Hello Snackbar')).toBeInTheDocument();

    jest.advanceTimersByTime(750);
    expect(queryByText('Hello Snackbar')).not.toBeInTheDocument();
  });

  it('should use a custom snackbar component', () => {
    const CustomSnackbar = () => <div>Custom Snackbar</div>;

    const { queryByText } = renderTestApp(
      { component: CustomSnackbar },
      { message: 'Hello Snackbar' }
    );

    fireEvent.click(queryByText('Show Snackbar'));

    expect(queryByText('Hello Snackbar')).not.toBeInTheDocument();
    expect(queryByText('Custom Snackbar')).toBeInTheDocument();
  });

  it('should show dismissable snackbars', () => {
    const { queryByText, getByTitle } = renderTestApp(
      { dismissable: true },
      { message: 'Hello Snackbar' }
    );

    fireEvent.click(queryByText('Show Snackbar'));
    expect(queryByText('Hello Snackbar')).toBeInTheDocument();

    fireEvent.click(getByTitle('Close'));
    jest.advanceTimersByTime(250);
    expect(queryByText('Hello Snackbar')).not.toBeInTheDocument();
  });

  it('should override the dismissable property for a specific snackbar', () => {
    const { queryByText, getByTitle } = renderTestApp(
      { dismissable: false },
      { message: 'Hello Snackbar', dismissable: true }
    );

    fireEvent.click(queryByText('Show Snackbar'));
    expect(getByTitle('Close')).toBeInTheDocument();
  });

  it('should not show the close button for non-dismissable snackbars', () => {
    const { queryByText, queryByTitle } = renderTestApp(
      { dismissable: false },
      { message: 'Hello Snackbar' }
    );

    fireEvent.click(queryByText('Show Snackbar'));
    expect(queryByTitle('Close')).not.toBeInTheDocument();
  });

  it('should support pause on hover', () => {
    const { queryByText } = renderTestApp(
      { pauseOnHover: true },
      { message: 'Hello Snackbar' }
    );

    fireEvent.click(queryByText('Show Snackbar'));
    expect(queryByText('Hello Snackbar')).toBeInTheDocument();

    fireEvent.mouseEnter(queryByText('Hello Snackbar'));
    jest.advanceTimersByTime(10000);
    expect(queryByText('Hello Snackbar')).toBeInTheDocument();

    fireEvent.mouseLeave(queryByText('Hello Snackbar'));
    jest.advanceTimersByTime(3250);
    expect(queryByText('Hello Snackbar')).not.toBeInTheDocument();
  });

  it('should show sticky snackbars', () => {
    const { queryByText } = renderTestApp(
      { sticky: true },
      { message: 'Hello Snackbar' }
    );

    fireEvent.click(queryByText('Show Snackbar'));
    expect(queryByText('Hello Snackbar')).toBeInTheDocument();

    jest.advanceTimersByTime(10000);
    expect(queryByText('Hello Snackbar')).toBeInTheDocument();
  });

  it('should override the sticky property for a specific snackbar', () => {
    const { queryByText } = renderTestApp(
      { sticky: false },
      { message: 'Hello Snackbar', sticky: true }
    );

    fireEvent.click(queryByText('Show Snackbar'));
    jest.advanceTimersByTime(10000);
    expect(queryByText('Hello Snackbar')).toBeInTheDocument();
  });

  it('should show the progress bar by default', () => {
    const { queryByRole, queryByText } = renderTestApp(
      {},
      { message: 'Hello Snackbar' }
    );

    fireEvent.click(queryByText('Show Snackbar'));

    const progressBar = queryByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    const computedStyle = getComputedStyle(progressBar);
    expect(computedStyle.animationDuration).toBe('3000ms');
  });

  it('should set the animation duration to the timeout', () => {
    const { queryByRole, queryByText } = renderTestApp(
      { timeout: 5000 },
      { message: 'Hello Snackbar' }
    );

    fireEvent.click(queryByText('Show Snackbar'));

    const progressBar = queryByRole('progressbar');
    const computedStyle = getComputedStyle(progressBar);
    expect(computedStyle.animationDuration).toBe('5000ms');
  });

  it('should not show the progress bar if progressBar is false in the provider', () => {
    const { queryByRole, queryByText } = renderTestApp(
      { progressBar: false },
      { message: 'Hello Snackbar' }
    );

    fireEvent.click(queryByText('Show Snackbar'));

    const progressBar = queryByRole('progressbar');
    expect(progressBar).not.toBeInTheDocument();
  });

  it('should not show the progress bar if progressBar is false for a specific snackbar', () => {
    const { queryByRole, queryByText } = renderTestApp(
      { progressBar: true },
      { message: 'Hello Snackbar', progressBar: false }
    );

    fireEvent.click(queryByText('Show Snackbar'));

    const progressBar = queryByRole('progressbar');
    expect(progressBar).not.toBeInTheDocument();
  });

  describe('themes', () => {
    function testTheme(theme) {
      const { queryByText } = renderTestApp(
        {},
        { message: 'Hello Snackbar', theme }
      );

      fireEvent.click(queryByText('Show Snackbar'));

      const snackbar = queryByText('Hello Snackbar');
      expect(getComputedStyle(snackbar.parentNode.parentNode).background).toBe(
        themes[theme].color
      );
    }

    Object.keys(themes).forEach(theme => {
      it(`should create a snackbar with the "${theme}" theme`, () => {
        testTheme(theme);
      });
    });
  });
});
