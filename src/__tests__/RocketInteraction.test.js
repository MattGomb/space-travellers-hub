import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Rocket from '../components/Rockets';

describe('mission page', () => {
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <Router>
          <Rocket />
        </Router>
      </Provider>,
    );
  });

  it('should update mission member status', () => {
    const button = screen.getByTestId('button');
    const status = screen.getByTestId('reserved');
    userEvent.click(button);
    expect(status).toHaveTextContent('reserved');
  });
});
