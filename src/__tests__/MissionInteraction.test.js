import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import MissionCard from '../components/MissionsCard';
import store from '../redux/configureStore';

describe('mission page', () => {
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <Router>
          <MissionCard />
        </Router>
      </Provider>,
    );
  });

  it('should update mission member status', () => {
    const joinButton = screen.getByTestId('join');
    const status = screen.getByTestId('status');
    userEvent.click(joinButton);
    expect(status).toHaveTextContent('NOT A MEMBER');
  });
});
