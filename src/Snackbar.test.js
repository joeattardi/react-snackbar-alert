import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Snackbar from './Snackbar';

describe('Snackbar', () => {
  it('should render the message', () => {
    const { queryByText } = render(<Snackbar message="Hello" />);
    expect(queryByText('Hello')).toBeInTheDocument();
  });

  it('should render the children', () => {
    const { queryByText } = render(<Snackbar>Hello</Snackbar>);
    expect(queryByText('Hello')).toBeInTheDocument();
  });

  it('should render the children if both children and message are specified', () => {
    const { queryByText } = render(<Snackbar message="Foo">Bar</Snackbar>);
    expect(queryByText('Bar')).toBeInTheDocument();
    expect(queryByText('Foo')).not.toBeInTheDocument();
  });

  describe('progress bar', () => {
    it('should render the progress bar if the progressBar prop is true', () => {
      const { queryByRole } = render(
        <Snackbar message="Hello" progressBar={true} />
      );
      expect(queryByRole('progressbar')).toBeInTheDocument();
    });

    it('should not render the progress bar if the progressBar prop is false', () => {
      const { queryByRole } = render(
        <Snackbar message="Hello!" progressBar={false} />
      );
      expect(queryByRole('progressbar')).not.toBeInTheDocument();
    });

    it('should not render the progress bar, even if the progressBar prop is true, if the sticky prop is true', () => {
      const { queryByRole } = render(
        <Snackbar message="Hello!" progressBar={true} sticky={true} />
      );
      expect(queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });

  describe('close button', () => {
    it('should render the close button if the dismissable prop is true', () => {
      const { queryByTitle } = render(
        <Snackbar message="Hello!" dismissable={true} />
      );
      expect(queryByTitle('Close')).toBeInTheDocument();
    });

    it('should not render the close button if the dismissable prop is false', () => {
      const { queryByTitle } = render(
        <Snackbar message="Hello!" dismissable={false} />
      );
      expect(queryByTitle('Close')).not.toBeInTheDocument();
    });
  });
});
