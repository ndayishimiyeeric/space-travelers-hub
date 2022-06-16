import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Header from '../components/Header';

describe('Header render correctly', () => {
  test('test Rockets Link', () => {
    const tree = renderer
      .create(<Router><Link to="/rockets">Rockets</Link></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('test Missions Link', () => {
    const tree = renderer
      .create(<Router><Link to="/missions">Missions</Link></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('test My Profile Link', () => {
    const tree = renderer
      .create(<Router><Link to="/profile">My Profile</Link></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('test Header', () => {
    const tree = renderer
      .create(<Router><Header /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
