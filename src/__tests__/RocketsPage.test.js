import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import Rockets from '../pages/RocketsPage';

describe('the RocketsPage snapshot and react testing library', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Rockets />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
