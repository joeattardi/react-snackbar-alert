import React from 'react';
import { render } from 'enzyme';

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
  })
});