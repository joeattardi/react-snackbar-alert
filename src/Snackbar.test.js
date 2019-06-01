import React from 'react';
import { render, mount } from 'enzyme';

import Snackbar from './Snackbar';

describe('Snackbar', () => {
  it('should render the message', () => {
    const wrapper = render(<Snackbar message="Hello!" />);
    expect(wrapper.text()).toBe('Hello!');
  });

  it('should render the children', () => {
    const wrapper = render(<Snackbar>Hello!</Snackbar>);
    expect(wrapper.text()).toBe('Hello!');
  });

  it('should render the children if both children and message are specified', () => {
    const wrapper = render(<Snackbar message="Foo">Bar</Snackbar>);
    expect(wrapper.text()).toBe('Bar');
  });

  describe('progress bar', () => {
    it('should render the progress bar if the progressBar prop is true', () => {
      const wrapper = render(<Snackbar message="Hello!" progressBar={true} />);
      expect(
        wrapper.find('.react-snackbar-alert__snackbar-progress-bar')
      ).toHaveLength(1);
    });

    it('should not render the progress bar if the progressBar prop is false', () => {
      const wrapper = render(<Snackbar message="Hello!" progressBar={false} />);
      expect(
        wrapper.find('.react-snackbar-alert__snackbar-progress-bar')
      ).toHaveLength(0);
    });

    it('should not render the progress bar, even if the progressBar prop is true, if the sticky prop is true', () => {
      const wrapper = render(
        <Snackbar message="Hello!" progressBar={true} sticky={true} />
      );
      expect(
        wrapper.find('.react-snackbar-alert__snackbar-progress-bar')
      ).toHaveLength(0);
    });
  });

  describe('close button', () => {
    it('should render the close button if the dismissable prop is true', () => {
      const wrapper = render(<Snackbar message="Hello!" dismissable={true} />);
      expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should not render the close button if the dismissable prop is false', () => {
      const wrapper = render(<Snackbar message="Hello!" dismissable={false} />);
      expect(wrapper.find('button')).toHaveLength(0);
    });

    it.only('should call the onDismiss callback when the close button is clicked', () => {
      const onDismiss = jest.fn();
      const wrapper = mount(
        <Snackbar message="Hello!" dismissable={true} onDismiss={onDismiss} />
      );

      wrapper.find('button').simulate('click');
      expect(onDismiss.mock.calls.length).toBe(1);

      wrapper.unmount();
    });
  });
});
