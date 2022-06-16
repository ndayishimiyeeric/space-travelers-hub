import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/Missions';
import Rockets from '../components/Rockets';
import Profile from '../components/Profile';

describe('Test Compontests', () => {
  test('test Rockets', () => {
    const tree = renderer
      .create(<Provider store={store}><Rockets /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('test My Profile Link', () => {
    const tree = renderer
      .create(<Provider store={store}><Missions /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('test My Profile', () => {
    const tree = renderer
      .create(<Provider store={store}><Profile /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
