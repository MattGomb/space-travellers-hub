import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import MissionDisplay from '../pages/MissionsPage';
import { render } from '@testing-library/react';

describe('the MissionCard snapshot and react testing library', () => {
    it('renders correctly', () => {
      const tree = render(<Provider store={store}>
        <Router>
          <MissionDisplay />
        </Router>
      </Provider>,);
      expect(tree).toMatchSnapshot();
    });
  });
  