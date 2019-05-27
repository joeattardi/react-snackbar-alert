import React from 'react';
import { mount } from 'enzyme';

import SnackbarManager from './SnackbarManager';
import Snackbar from './Snackbar';

jest.useFakeTimers();

describe('SnackbarManager', () => {
  it('should render a snackbar and remove it after 3 seconds (with a 250ms animation)', () => {
    const wrapper = mount(<SnackbarManager />);

    wrapper.instance().create({ message: 'Hello!' });
    wrapper.update();
    expect(wrapper.find(Snackbar)).toHaveLength(1);
    
    jest.advanceTimersByTime(3250);
    wrapper.update();
    expect(wrapper.find(Snackbar)).toHaveLength(0);

    wrapper.unmount();
  });

  it('should render a snackbar and remove it with a custom timeout on the SnackbarManager', () => {
    const wrapper = mount(<SnackbarManager timeout={1000} />);

    wrapper.instance().create({ message: 'Hello!' });
    wrapper.update();
    expect(wrapper.find(Snackbar)).toHaveLength(1);

    jest.advanceTimersByTime(1250);
    wrapper.update();
    expect(wrapper.find(Snackbar)).toHaveLength(0);

    wrapper.unmount();
  });

  it('should use the custom timeout on a specific snackbar', () => {
    const wrapper = mount(<SnackbarManager />);

    wrapper.instance().create({
      message: 'Hello!',
      timeout: 2000
    });

    jest.advanceTimersByTime(2250);
    wrapper.update();
    expect(wrapper.find(Snackbar)).toHaveLength(0);

    wrapper.unmount();
  });

  it('should use the custom animation timeout on the SnackbarManager', () => {
    const wrapper = mount(<SnackbarManager animationTimeout={100} />);
    
    wrapper.instance().create({
      message: 'Hello!'
    });

    jest.advanceTimersByTime(3100);
    wrapper.update();
    expect(wrapper.find(Snackbar)).toHaveLength(0);

    wrapper.unmount();
  });

  it('should use the custom animation timeout on a specific snackbar', () => {
    const wrapper = mount(<SnackbarManager />);

    wrapper.instance().create({
      message: 'Hello!',
      animationTimeout: 100
    });

    jest.advanceTimersByTime(3100);
    wrapper.update();
    expect(wrapper.find(Snackbar)).toHaveLength(0);

    wrapper.unmount();
  });

  it('should pass the animationTimeout, message, and data props to the Snackbar component', () => {
    const wrapper = mount(<SnackbarManager />);

    wrapper.instance().create({
      message: 'Hello!',
      animationTimeout: 100,
      data: 'foobar'
    });

    wrapper.update();
    const snackbar = wrapper.find(Snackbar).get(0);
    expect(snackbar.props.message).toBe('Hello!');
    expect(snackbar.props.animationTimeout).toBe(100);
    expect(snackbar.props.data).toBe('foobar');

    wrapper.unmount();
  });

  it('should render a custom component', () => {
    const CustomComponent = () => <div>Hello</div>;
    const wrapper = mount(<SnackbarManager component={CustomComponent} />);

    wrapper.instance().create({ message: 'Hello!' });
    wrapper.update();

    expect(wrapper.find(Snackbar)).toHaveLength(0);
    expect(wrapper.find(CustomComponent)).toHaveLength(1);

    wrapper.unmount();
  });

  it('should pass the props to the custom component', () => {
    const CustomComponent = () => <div>Hello</div>;
    const wrapper = mount(<SnackbarManager component={CustomComponent} />);

    wrapper.instance().create({
      animationTimeout: 100,
      data: 'foobar',
      message: 'Hello!'
    });
    wrapper.update();

    const component = wrapper.find(CustomComponent).get(0);
    expect(component.props).toEqual({
      animationTimeout: 100,
      data: 'foobar',
      message: 'Hello!'
    });

    wrapper.unmount();
  });

  it('should show then remove multiple snackbars', () => {
    const wrapper = mount(<SnackbarManager />);

    wrapper.instance().create({ message: 'Message 1' });
    wrapper.update();
    expect(wrapper.find(Snackbar)).toHaveLength(1);

    jest.advanceTimersByTime(1000);
    wrapper.instance().create({ message: 'Message 2' });
    wrapper.update();
    expect(wrapper.find(Snackbar)).toHaveLength(2);

    jest.advanceTimersByTime(2250);
    wrapper.update();
    expect(wrapper.find(Snackbar)).toHaveLength(1);

    jest.advanceTimersByTime(1000);
    wrapper.update();
    expect(wrapper.find(Snackbar)).toHaveLength(0);

    wrapper.unmount();
  });

  it('should render new snackbars at the bottom', () => {
    const wrapper = mount(<SnackbarManager />);
    
    wrapper.instance().create({ message: 'Message 1' });
    wrapper.instance().create({ message: 'Message 2' });
    wrapper.update();

    const snackbars = wrapper.find(Snackbar);
    expect(snackbars.get(0).props.message).toBe('Message 1');
    expect(snackbars.get(1).props.message).toBe('Message 2');    

    wrapper.unmount();
  });
});
